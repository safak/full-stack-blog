import express from "express";

const router = express.Router();

router.get("/post", (res, req) => {
  res.status(200).send("Post Route");
});

export default router;
