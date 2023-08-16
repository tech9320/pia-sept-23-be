import express from "express";
const router = express.Router();

import addRejectedUserName from "src/controllers/rejectedUserName/addRejectedUserName";

router.post("/rejectedUserName", addRejectedUserName);

export { router as rejectedUserNameRouter };
