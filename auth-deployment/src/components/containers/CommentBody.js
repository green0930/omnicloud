import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import * as moment from "moment";

import { withStyles } from "@material-ui/core/styles";
import CardHeader from "@material-ui/core/CardHeader";
import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import EditModal from "../EditModal";
import Avatar from "@material-ui/core/Avatar";

const options = ["Edit", "Delete"];
const ITEM_HEIGHT = 48;

const styles = (theme) => ({
  cardHeader: {
    paddingTop: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
  },
  commentContent: {
    backgroundColor: "#CFD8DC",
    borderRadius: "10px",
    padding: theme.spacing.unit,
  },
  commentText: {
    fontWeight: "400",
  },
  commenter: {
    fontWeight: "800",
  },
  link: {
    color: "#000",
    textDecoration: "none",
  },
  timestamp: {
    fontWeight: "300",
  },
});

const CommentBody = (props) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [avatar, setAvatar] = useState(18);
  const [modalOpen, setModalOpen] = useState(false);
  const [name, setName] = useState("");

  useEffect(() => {
    const { commenterId, getUser } = props;
    getUser(commenterId).then((res) => {
      setAvatar(res.payload.user.avatar);
      setName(res.payload.user.name);
    });
  });
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const {
    classes,
    commentId,
    commenterId,
    deleteComment,
    editComment,
    getUser,
    postId,
    signedInUserId,
    timestamp,
    text,
  } = props;
  const open = Boolean(anchorEl);

  return (
    <CardHeader
      avatar={<Avatar author={name} authorId={commenterId} avatar={avatar} getUser={getUser} />}
      title={
        <div className={classes.commentContent}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ flexDirection: "column" }}>
              <div className={classes.commenter}>
                <Link className={classes.link} to={`/profile/${commenterId}`}>
                  {name}
                </Link>
              </div>
              <div className={classes.timestamp}>{moment(timestamp).fromNow()}</div>
            </div>
            <div>
              {commenterId !== signedInUserId ? null : (
                <div>
                  <IconButton
                    aria-label="More"
                    aria-owns={open ? "long-menu" : null}
                    aria-haspopup="true"
                    onClick={handleClick}
                  >
                    <MoreVertIcon />
                  </IconButton>
                  <Menu
                    id="long-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    PaperProps={{
                      style: {
                        maxHeight: ITEM_HEIGHT * 4.5,
                        width: 200,
                      },
                    }}
                  >
                    {options.map((option) => (
                      <MenuItem
                        key={option}
                        onClick={() =>
                          handleClose() ||
                          (option === "Delete" ? deleteComment("deleteComment", commentId, postId) : null) ||
                          (option === "Edit" ? handleModalOpen() : null)
                        }
                      >
                        {option}
                      </MenuItem>
                    ))}
                  </Menu>
                </div>
              )}
            </div>
          </div>

          <div className={classes.commentText}>{text}</div>

          <EditModal
            _id={commentId}
            isEditingComment
            commentPostId={postId}
            editPost={editComment}
            handleModalClose={handleModalClose}
            modalOpen={modalOpen}
            text={text}
          />
        </div>
      }
      className={classes.cardHeader}
    />
  );
};

CommentBody.propTypes = {
  classes: PropTypes.object.isRequired,
  commentId: PropTypes.string.isRequired,
  commenterId: PropTypes.string.isRequired,
  deleteComment: PropTypes.func.isRequired,
  editComment: PropTypes.func.isRequired,
  getUser: PropTypes.func.isRequired,
  postId: PropTypes.string.isRequired,
  signedInUserId: PropTypes.string.isRequired,
  timestamp: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
};

export default withStyles(styles)(CommentBody);
