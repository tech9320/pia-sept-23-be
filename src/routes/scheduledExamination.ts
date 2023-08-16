import express from "express";
const router = express.Router();

import getScheduledExaminations from "../controllers/scheduledExamination/getScheduledExaminations";
import getScheduledExamination from "../controllers/scheduledExamination/getScheduledExamination";
import addScheduledExamination from "src/controllers/scheduledExamination/addScheduledExamination";
import deleteScheduledExamination from "src/controllers/scheduledExamination/deleteScheduledExamination";
import updateScheduledExamination from "../controllers/scheduledExamination/updateScheduledExamination";

router.get("/scheduledExamination", getScheduledExaminations);
router.get("/scheduledExamination/:id", getScheduledExamination);
router.post("/scheduledExamination", addScheduledExamination);
router.delete("/scheduledExamination/:id", deleteScheduledExamination);
router.patch("/scheduledExamination/:id", updateScheduledExamination);

export { router as scheduledExaminationRouter };
