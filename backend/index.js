import express from "express";
const app = express();
import { router } from "./routes/index.js"



app.use("/api/v1", router)