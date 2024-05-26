import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  author: {
    type: String,
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
  tags: [String],
});

const Post = mongoose.model("Post", postSchema);

export default Post;
