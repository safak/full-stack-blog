import express from "express";

const router = express.Router();

router.get("/user", (res, req) => {
  res.status(200).send("User Route");
});

export default router;
