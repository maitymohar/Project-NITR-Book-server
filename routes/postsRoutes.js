import express from "express";
import {
  createPost,
  getPosts,
  getPostById,
  updatePost,
  deletePost,
  getPostsByTags,
} from "../controllers/postResolver.js";

const router = express.Router();

router.post("/posts/create", createPost);
router.get("/posts", getPosts);
router.get("/posts/:id", getPostById);
router.put("/posts/:id", updatePost);
router.delete("/posts/:id", deletePost);
router.get("/posts", getPostsByTags);

export default router;
