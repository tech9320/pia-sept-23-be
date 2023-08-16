import express from "express";
const router = express.Router();

import addRejectedEmail from "../controllers/rejectedEmail/addRejectedEmail";

router.post("/rejectedEmail", addRejectedEmail);

export { router as rejectedEmailRouter };
