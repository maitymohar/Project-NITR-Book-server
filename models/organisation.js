import mongoose from "mongoose";

const organisationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  Society: {
    type: String,
    required: true,
  },
  President: {
    type: String,
    required: false,
  },
  EB: {
    type: [Object],
    required: true,
  },
  first_members: {
    type: [String],
    required: false,
  },
  second_members: {
    type: [String],
    required: false,
  },
  mentors: {
    type: [String],
    required: false,
  },
});

const Club = mongoose.model("Club", organisationSchema);

export default Club;
