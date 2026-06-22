import express from "express";
import {contactUs } from"../controllers/public.controllers.js";
const router= express.Router();
router.post("/contact-us", contactUs);
export default router;