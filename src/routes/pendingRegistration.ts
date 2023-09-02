import express from "express";
import addPendingRegistration from "../controllers/pendingRegistration/addPendingRegistration";
import getPendingRegistrations from "../controllers/pendingRegistration/getPendingRegistrations";
import acceptPendingRegistration from "../controllers/pendingRegistration/acceptPendingRegistration";
import declinePendingRegistration from "../controllers/pendingRegistration/declinePendingRegistration";
const router = express.Router();

router.post('/pendingRegistration', addPendingRegistration);
router.get('/pendingRegistrations', getPendingRegistrations);
router.post('/acceptPendingRegistration', acceptPendingRegistration);
router.post('/declinePendingRegistration', declinePendingRegistration);

export { router as pendingRegistrationRouter };