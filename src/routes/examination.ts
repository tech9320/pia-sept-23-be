import express from "express";
const router = express.Router();

import getExaminations from "../controllers/examination/getExaminations";
import getExamination from "../controllers/examination/getExamination";
import getExaminationsByDoctor from "../controllers/examination/getExaminationsByDoctor";
import addExamination from "../controllers/examination/addExamination";
import deleteExamination from "../controllers/examination/deleteExamination";
import updateExamination from "../controllers/examination/updateExamination";

router.get("/examination", getExaminations);
router.get("/examination/:id", getExamination);
router.get("/examination/doctor/:id", getExaminationsByDoctor);
router.post("/examination", addExamination);
router.delete("/examination/:id", deleteExamination);
router.patch("/examination/:id", updateExamination);

export { router as examinationRouter };
