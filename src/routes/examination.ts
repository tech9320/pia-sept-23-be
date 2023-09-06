import express from "express";
const router = express.Router();

import getExaminations from "../controllers/examination/getExaminations";
import getExamination from "../controllers/examination/getExamination";
import getExaminationsBySpecialization from "../controllers/examination/getExaminationsBySpecialization";
import addExamination from "../controllers/examination/addExamination";
import deleteExamination from "../controllers/examination/deleteExamination";
import updateExamination from "../controllers/examination/updateExamination";
import addExaminationToDoctor from "../controllers/examination/addExaminationToDoctor";
import getExaminationsByDoctor from "../controllers/examination/getExaminationsByDoctor";

router.get("/examination", getExaminations);
router.get("/examination/:id", getExamination);
router.get("/examination/specialization/:id", getExaminationsBySpecialization);
router.get("/examination/getExaminationsByDoctor/:id", getExaminationsByDoctor)
router.post("/examination", addExamination);
router.post('/examination/addToDoctor', addExaminationToDoctor);
router.delete("/examination/:id", deleteExamination);
router.patch("/examination/:id", updateExamination);

export { router as examinationRouter };
