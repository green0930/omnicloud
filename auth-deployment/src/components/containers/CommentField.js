import React, { useEffect } from "react";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import CardHeader from "@material-ui/core/CardHeader";
import SendIcon from "@material-ui/icons/Send";
import TextField from "@material-ui/core/TextField";

import Avatar from "@material-ui/core/Avatar";
import { useState } from "react";

const styles = (theme) => ({
  button: {
    marginBottom: theme.spacing.unit,
    marginLeft: theme.spacing.unit,
  },
  cardHeader: {
    paddingTop: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
  },
  cardHeaderTitle: {
    display: "flex",
  },
  commentField: {
    width: "90%",
    marginLeft: theme.spacing.unit,
    marginTop: theme.spacing.unit,
  },
});

const CommentField = (props) => {
  const [avatar, setAvatar] = useState(18);
  const [name, setName] = useState("");
  const [text, setText] = useState("");

  useEffect(() => {
    const { commenterId, getUser } = props;
    getUser(commenterId).then((res) => {
      setAvatar(res.payload.user.avatar);
      setName(res.payload.user.name);
    });
  });

  const handleChange = (e) => {
    const { value } = e.target;
    setText(value);
  };

  const postComment = (e) => {
    e.preventDefault();
    const { addComment, commenterId, postId } = props;
    const timestamp = new Date().getTime();
    if (text.trim() === "") return;

    addComment("addComment", commenterId, postId, text, timestamp);
    setText("");
  };

  const { classes, commenterId, getUser } = props;

  return (
    <CardHeader
      className={classes.cardHeader}
      title={
        <div className={classes.cardHeaderTitle}>
          <Avatar author={name} authorId={commenterId} avatar={avatar} getUser={getUser} />
          <TextField
            multiline
            placeholder="Write a comment"
            className={classes.commentField}
            onChange={handleChange}
            value={text}
          />
          <Button variant="contained" color="primary" className={classes.button} onClick={postComment}>
            <SendIcon />
          </Button>
        </div>
      }
    />
  );
};

CommentField.propTypes = {
  addComment: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
  commenterId: PropTypes.string.isRequired,
  getUser: PropTypes.func.isRequired,
  postId: PropTypes.string.isRequired,
};

export default withStyles(styles)(CommentField);
