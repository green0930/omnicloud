import mongoose from "mongoose";
import UserModel from "./models/userSchema";
import PostModel from "./models/postSchema";
import ProfileModel from "./models/profileSchema";
import { v4 as uuid } from "uuid";

let isConnected = false;

export async function connectToMongoose() {
  try {
    if (isConnected) {
      return;
    }
    await mongoose.connect(
      `mongodb+srv://OmniAdmin:KenzieAcademy@omnicloud.bvcrh.mongodb.net/omnicloud?retryWrites=true&w=majority`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
      },
    );
    isConnected = true;
  } catch (err) {
    console.log(err);
    throw err;
  }
}

export const createUser = (data) => {
  const newId = `user-${uuid()}`;
  const user = new UserModel({ ...data, userId: newId, followers: {}, following: {} });
  user.save();
  return user;
};

export const findUsers = async (params) => {
  const foundUsers = await UserModel.find(params).exec();
  return foundUsers;
};

export const createPost = (data) => {
  const newId = `post-${uuid()}`;
  const newPost = new PostModel({ ...data, postId: newId, comments: [] });
  newPost.save();
  return newPost;
};

export const getPosts = async (params) => {
  return await PostModel.find(params).exec();
};

export const editPost = async (postId, newText, author) => {
  const updatePost = await PostModel.findOne({ postId: postId, author: author }).exec();
  updatePost.text = newText;
  updatePost.save();
  return updatePost;
};

export const deletePost = async (postId) => {
  await PostModel.deleteOne({ postId: postId });
};

export const addCommentToPost = async (commenterId, text, timestamp, postId) => {
  const newId = `comment-${uuid()}`;
  const comment = { commenterId: commenterId, text: text, timestamp: timestamp, commentId: newId };
  const updatePost = await PostModel.findOne({ postId: postId }, (err) => {
    console.error(err);
  }).exec();
  updatePost.comments.push(comment);
  updatePost.save();
  console.log(updatePost);
  return updatePost;
};

export const deleteCommentFromPost = async (commentId, postId) => {
  const updatePost = await PostModel.findOne({ postId: postId }).exec();
  updatePost.comments = updatePost.comments.filter((comment) => comment.commentId !== commentId);
  updatePost.save();
  return updatePost;
};

export const editComment = async (commentId, newText, postId) => {
  const updatePost = await PostModel.findOne({ postId: postId }).exec();
  const [commentToEdit] = updatePost.comments.filter((comment) => comment.commentId === commentId);
  const index = updatePost.comments.findIndex((comment) => comment.commentId === commentId);
  commentToEdit.text = newText;
  updatePost.comments.splice(index, 1, commentToEdit);
  updatePost.save();
  return updatePost;
};

export const findProfile = async (params) => {
  const foundProfile = await ProfileModel.find(params).exec();
  return foundProfile;
};
