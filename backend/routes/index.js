import { Router } from "express";
import {userRouter } from "./user.js"

const router = Router();

router.use("/user", userRouter)

module.exports = router 