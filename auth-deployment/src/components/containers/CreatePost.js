import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import compose from "recompose/compose";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";
import { createPost } from "../src/components/actions/postsActions";

const styles = (theme) => ({
  button: {
    margin: theme.spacing.unit,
  },
  container: {
    display: "flex",
    justifyContent: "center",
    marginTop: "16px",
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 500,
  },
});

const CreatePost = (props) => {
  const [postText, setPostText] = useState("");

  const handleChange = (e) => {
    const input = e.target.value;
    setPostText(input);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { dispatch, user } = props;
    if (!postText.trim()) return;
    dispatch(createPost(postText, user));
    setPostText("");
  };

  const { classes } = props;
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
        Post
      </Button>
    </form>
  );
};

CreatePost.propTypes = {
  dispatch: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.authReducer.user,
});

export default compose(withStyles(styles), connect(mapStateToProps)(CreatePost));
