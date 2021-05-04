import mongoose from "mongoose";

const ProfileSchema = new mongoose.Schema({
  email: String,
  fullname: String,
  title: String,
  location: String,
  about: String,
  experience: String,
  phone: Number,
  contents: Array,
  skills: Array,
  social: Array,
  interest: Array,
  theme: String,
});

const ProfileModel = mongoose.model("Profile", ProfileSchema);
export default ProfileModel;
