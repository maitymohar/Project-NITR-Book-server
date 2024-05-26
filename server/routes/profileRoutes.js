import express from "express";
import {
  createProfile,
  getProfiles,
  getProfileById,
  updateProfile,
  deleteProfile,
} from "../controllers/profileResolver.js";

const router = express.Router();

router.post("/profiles", createProfile);
router.get("/profiles", getProfiles);
router.get("/profiles/:id", getProfileById);
router.put("/profiles/:id", updateProfile);
router.delete("/profiles/:id", deleteProfile);

export default router;
