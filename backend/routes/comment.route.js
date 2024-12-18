import express from "express";

const router = express.Router();

router.get("/comment", (res, req) => {
  res.status(200).send("Coment Route");
});

export default router;
