import express from "express";
import { getPosts, getPost, createPost, deletePost, uploadAuth, featurePost} from "../controllers/post.controller.js";
import { increaseVisits } from "../middlewares/increaseVisits.js";

const router = express.Router();

router.get("/upload-auth", uploadAuth);
router.get("/", getPosts);
router.get("/:slug", increaseVisits, getPost);
router.post("/", createPost);
router.delete("/:id", deletePost);
router.patch("/feature", featurePost);

export default router;