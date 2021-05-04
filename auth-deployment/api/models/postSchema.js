import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
  text: String,
  author: String,
  authorId: String,
  avatar: String,
  postId: String,
  timestamp: String,
  comments: Array,
});

const PostModel = mongoose.model("Post", PostSchema);
export default PostModel;
