import express from "express";
import addPendingRegistration from "../controllers/pendingRegistration/addPendingRegistration";
const router = express.Router();

router.post('/pendingRegistration', addPendingRegistration);

export { router as pendingRegistrationRouter };