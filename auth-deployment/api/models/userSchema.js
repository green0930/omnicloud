import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  email: String,
  name: String,
  userId: String,
  followers: Array,
  following: Array,
});

const UserModel = mongoose.model("User", UserSchema);
export default UserModel;
