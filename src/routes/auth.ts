import express from "express";
import login from "../controllers/auth/login";
import logout from "../controllers/auth/logout";

const router = express.Router();

router.post('/auth/login', login)
router.post('/auth/logout', logout)

export {router as authRouter};