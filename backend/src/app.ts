import express from "express";
import morgan from "morgan"
import appRouter from "./routes/index.js";

const app = express();

// middelware
app.use(express.json())

// removed it in prod
app.use(morgan("dev"))
app.use("/api/v1", appRouter)

export default app
