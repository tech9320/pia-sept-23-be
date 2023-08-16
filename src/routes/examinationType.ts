import express from "express";
const router = express.Router();

import getExaminationTypes from "../controllers/examinationType/getExaminationTypes";
import getExaminationType from "../controllers/examinationType/getExaminationType";
import addExaminationType from "../controllers/examinationType/addExaminationType";
import deleteExaminationType from "../controllers/examinationType/deleteExaminationType";
import updateExaminationType from "../controllers/examinationType/updateExaminationType";

router.get("/examinationType", getExaminationTypes);
router.get("/examinationType/:id", getExaminationType);
router.post("/examinationType", addExaminationType);
router.delete("/examinationType/:id", deleteExaminationType);
router.patch("/examinationType/:id", updateExaminationType);

export { router as examinationTypeRouter };
