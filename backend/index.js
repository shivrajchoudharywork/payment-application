import express, { urlencoded } from "express";
const app = express();
import { rootRouter } from "./routes/index.js";

import cors from "cors";
import jwt from "jsonwebtoken";

app.use(cors());
app.use(express.json({ extended: true }));
app.use(express.urlencoded());

app.use("/api/v1", rootRouter);

app.listen(3000, () => {
  console.log("Application is runnning on PORT 3000");
});
