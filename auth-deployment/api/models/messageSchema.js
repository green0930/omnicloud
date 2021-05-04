import mongoose from "mongoose";

const MessageSchema = new mongoose.Schema({
  sender: String,
  content: String,
});

const MessageModel = mongoose.model("Message", MessageSchema);
export default MessageModel;
