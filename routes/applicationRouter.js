import express from "express";
import { employeeGetAllApplications, jobseekerGetAllApplications, jobseekerDeleteApplication, postApplication } from '../controllers/applicationController.js';
import { isAuthorized } from "../middlewares/auth.js";

const router = express.Router();

router.get("/jobseeker/getall", isAuthorized, jobseekerGetAllApplications);
router.get("/employee/getall", isAuthorized, employeeGetAllApplications);
router.delete("/delete/:id", isAuthorized, jobseekerDeleteApplication);
router.post("/post", isAuthorized, postApplication);

export default router;
