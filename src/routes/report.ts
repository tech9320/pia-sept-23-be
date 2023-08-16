import express from "express";
const router = express.Router();

import getReports from "../controllers/report/getReports";
import getReport from "../controllers/report/getReport";
import addReport from "../controllers/report/addReport";
import deleteReport from "../controllers/report/deleteReport";
import updateReport from "../controllers/report/updateReport";

router.get("/report", getReports);
router.get("/report/:id", getReport);
router.post("/report", addReport);
router.delete("/report/:id", deleteReport);
router.patch("/report/:id", updateReport);

export { router as reportRouter };
