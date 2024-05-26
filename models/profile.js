import mongoose from "mongoose";

const profileSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  roll: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  institute: {
    type: String,
    required: false,
  },
  clubs: {
    type: [String],
    required: true,
  },
  skills: {
    type: [String],
    required: false,
  },
});

const Profile = mongoose.model("Profile", profileSchema);

export default Profile;
