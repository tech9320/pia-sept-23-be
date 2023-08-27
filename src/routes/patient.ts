import express from "express";
const router = express.Router();

import getPatients from "../controllers/patient/getPatients";
import getPatientLogin from "../controllers/patient/getPatientLogin";

import getPatient from "../controllers/patient/getPatient";
import addPatient from "../controllers/patient/addPatient";
import deletePatient from "../controllers/patient/deletePatient";
import updatePatient from "../controllers/patient/updatePatient";

router.get("/patient", getPatients);
router.post("/patient/login", getPatientLogin);
router.get("/patient/:id", getPatient);
router.post("/patient", addPatient);
router.delete("/patient/:id", deletePatient);
router.patch("/patient/:id", updatePatient);

export { router as patientRouter };
