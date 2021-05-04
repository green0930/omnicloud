import axios from "axios";
import {
  GET_FOLLOWERS,
  GET_FOLLOWING,
  GET_USER,
  GET_ALL_USERS,
  UPDATE_FOLLOWERS,
  UPDATE_FOLLOWING,
} from "./actionTypes";

const baseUrl = process.env.NODE_ENV === "development" ? "http://localhost:9000" : "";

export const followUser = (signedInUserId, idToFollow) => async (dispatch) => {
  const followResult = await axios.patch(`${baseUrl}/users/following/${signedInUserId}`, {
    idToFollow,
  });
  const addFollowerResult = await axios.patch(`${baseUrl}/users/followers/${idToFollow}`, {
    followerId: signedInUserId,
  });
  dispatch({
    type: UPDATE_FOLLOWERS,
    payload: addFollowerResult.data,
  });
  return dispatch({
    type: UPDATE_FOLLOWING,
    payload: followResult.data,
  });
};

export const unfollowUser = (signedInUserId, idToUnfollow) => async (dispatch) => {
  const unfollowResult = await axios.patch(`${baseUrl}/users/unfollowing/${signedInUserId}`, {
    idToUnfollow,
  });
  const removeFollowerResult = await axios.patch(`${baseUrl}/users/unfollowers/${idToUnfollow}`, {
    unfollowerId: signedInUserId,
  });
  dispatch({
    type: UPDATE_FOLLOWERS,
    payload: removeFollowerResult.data,
  });
  return dispatch({
    type: UPDATE_FOLLOWING,
    payload: unfollowResult.data,
  });
};

export const getFollowers = (userId) => async (dispatch) => {
  const result = await axios.get(`${baseUrl}/users/${userId}`);
  return dispatch({
    type: GET_FOLLOWERS,
    payload: result.data,
  });
};

export const getFollowing = (userId) => async (dispatch) => {
  const result = await axios.get(`${baseUrl}/users/${userId}`);
  return dispatch({
    type: GET_FOLLOWING,
    payload: result.data,
  });
};

export const getUser = (userId) => async (dispatch) => {
  const result = await axios.get(`${baseUrl}/api/users/${userId}`);
  return dispatch({
    type: GET_USER,
    payload: result.data,
  });
};

export const getAllUsers = () => async (dispatch) => {
  const result = await axios.get(`${baseUrl}/api/users`);
  return dispatch({
    type: GET_ALL_USERS,
    payload: result.data,
  });
};
