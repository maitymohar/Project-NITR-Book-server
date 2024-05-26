import mongoose from "mongoose";

const { Schema, model } = mongoose;
const { ObjectId } = Schema.Types;

const ebMemberSchema = new Schema({
  member: { type: ObjectId, ref: "Profile" },
  position: String,
});

const organisationSchema = new Schema({
  name: { type: String, required: true },
  society: { type: String, required: true },
  president: { type: ObjectId, ref: "Profile" },
  eb: { type: [ebMemberSchema], required: true },
  firstMembers: { type: [ObjectId], ref: "Profile" },
  secondMembers: { type: [ObjectId], ref: "Profile" },
  mentors: { type: [ObjectId], ref: "Profile" },
});

const Club = model("Club", organisationSchema);

export default Club;
