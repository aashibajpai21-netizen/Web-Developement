import express from "express";
import {
    LoginUser,
    LogoutUser,
    RegisterUser,
} from"../controllers/auth.controllers.js";

import {
     sampleMiddleWare,
    sampleMiddleWare2,
} from "../middlewares/auth.middleware.js";


const router = express.Router();
router.post("/login",sampleMiddleWare2,LoginUser);
router.get("/logout",sampleMiddleWare,LogoutUser);
router.post("/register",sampleMiddleWare,sampleMiddleWare2,RegisterUser);


export default router;
