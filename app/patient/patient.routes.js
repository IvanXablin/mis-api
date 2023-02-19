import express from "express";
import { register } from "./patient.controller.js";

const router = express.Router();

router.route('/register').post(register);

export default router;