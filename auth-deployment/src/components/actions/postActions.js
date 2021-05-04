import axios from "axios";
import {
  ADD_COMMENT,
  DELETE_COMMENT,
  EDIT_COMMENT,
  GET_POSTS,
  CREATE_POST,
  EDIT_POST,
  DELETE_POST,
  UPDATE_POST_LIKES,
} from "./actionTypes";

const baseUrl = process.env.NODE_ENV === "development" ? "http://localhost:9000" : "";

export const addComment = (action, commenterId, postId, text, timestamp) => (dispatch) =>
  axios.patch(`${baseUrl}/posts/${postId}`, { action, commenterId, text, timestamp }).then((res) =>
    dispatch({
      type: ADD_COMMENT,
      payload: res.data,
      commenterId,
      text,
      timestamp,
    }),
  );

export const deleteComment = (action, commentId, postId) => (dispatch) =>
  axios.patch(`${baseUrl}/posts/${postId}`, { action, commentId }).then((res) =>
    dispatch({
      type: DELETE_COMMENT,
      payload: res.data,
    }),
  );

export const editComment = (action, commentId, postId, text) => (dispatch) =>
  axios.patch(`${baseUrl}/posts/${postId}`, { action, commentId, text }).then((res) =>
    dispatch({
      type: EDIT_COMMENT,
      payload: res.data,
    }),
  );

export const getPosts = () => (dispatch) =>
  axios.get(`${baseUrl}/api/posts`).then((res) =>
    dispatch({
      type: GET_POSTS,
      payload: res.data,
    }),
  );

export const createPost = (text, timestamp, user) => (dispatch) =>
  axios
    .post(`${baseUrl}/api/posts`, {
      text: text,
      author: user.name,
      authorId: user.userId,
      avatar: user.avatar,
      timestamp: timestamp,
    })
    .then((res) =>
      dispatch({
        type: CREATE_POST,
        payload: res.data,
      }),
    );

export const editPost = (action, id, text, author) => (dispatch) =>
  axios.patch(`${baseUrl}/posts/${id}`, { action, id, text, author }).then((res) =>
    dispatch({
      type: EDIT_POST,
      id,
      text,
      author,
    }),
  );

export const deletePost = (id) => (dispatch) =>
  axios.delete(`${baseUrl}/posts/${id}`).then((res) =>
    dispatch({
      type: DELETE_POST,
      id,
    }),
  );

export const updatePostLikes = (action, postId, likerId) => (dispatch) =>
  axios.patch(`${baseUrl}/posts/${postId}`, { action, id: likerId }).then((res) =>
    dispatch({
      type: UPDATE_POST_LIKES,
      payload: res.data,
    }),
  );
