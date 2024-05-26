import mongoose from "mongoose";

const { Schema, model } = mongoose;
const { ObjectId } = Schema.Types;

const tagsSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
});

const postSchema = new Schema({
  author: {
    type: ObjectId,
    ref: "Profile",
    required: true,
  },
  identity: {
    type: Boolean,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  tags: [tagsSchema],
});

const Post = model("Post", postSchema);

export default Post;
