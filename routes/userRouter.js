import express from "express";
import { login, register, logout, getUser } from "../controllers/userController.js";
import { isAuthorized } from '../middlewares/auth.js';

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/logout", isAuthorized, logout);
router.get("/getUser", isAuthorized, getUser);

export default router;
