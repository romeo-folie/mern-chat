import express, { Request, Response } from "express";
const router = express.Router();

router.post("/ping", (req: Request, res: Response) => {
  res.status(200).json("pong");
});

export default router;
