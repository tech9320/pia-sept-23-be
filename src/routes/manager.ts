import express from "express";
const router = express.Router();

import getManager from "../controllers/manager/getManager";
import addManager from "../controllers/manager/addManager";

router.get("/manager/:id", getManager);
router.post("/manager", addManager);

export { router as managerRouter };
