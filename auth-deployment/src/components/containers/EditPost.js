import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import compose from "recompose/compose";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";

const styles = (theme) => ({
  button: {
    margin: theme.spacing.unit,
  },
  container: {
    display: "flex",
    justifyContent: "center",
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 500,
  },
});

export const EditPost = (props) => {
  /* eslint-disable react/destructuring-assignment */
  const [postText, setPostText] = useState(props.text);

  /* eslint-enable react/destructuring-assignment */

  const handleChange = (e) => {
    const postText = e.target.value;
    setPostText({ postText });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { commentPostId, id, isEditingComment, author, editPost, handleModalClose } = props;
    if (!postText.trim()) return;

    if (isEditingComment) {
      editPost("editComment", id, commentPostId, postText);
    } else {
      editPost("editPost", id, postText, author);
    }

    handleModalClose();
  };

  const { classes } = this.props;
  return (
    <form className={classes.container} noValidate autoComplete="off" onSubmit={handleSubmit}>
      <TextField
        id="textarea"
        placeholder="What's on your mind?"
        multiline
        className={classes.textField}
        margin="normal"
        rowsMax="5"
        value={postText}
        onChange={handleChange}
      />
      <Button variant="contained" color="primary" className={classes.button} type="submit">
        Update
      </Button>
    </form>
  );
};

EditPost.propTypes = {
  classes: PropTypes.object.isRequired,
  commentPostId: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  isEditingComment: PropTypes.bool.isRequired,
  author: PropTypes.string.isRequired,
  editPost: PropTypes.func.isRequired,
  handleModalClose: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

export default compose(withStyles(styles), connect())(EditPost);
