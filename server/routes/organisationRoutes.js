import express from "express";
import {
  createClub,
  getClubs,
  getClubById,
  updateClub,
  deleteClub,
} from "../controllers/clubResolver.js";

const router = express.Router();

router.post("/clubs", createClub);
router.get("/clubs", getClubs);
router.get("/clubs/:id", getClubById);
router.put("/clubs/:id", updateClub);
router.delete("/clubs/:id", deleteClub);

export default router;
