import express from "express";
import morgan from "morgan"
import appRouter from "./routes/index.js";
import cookieParser from "cookie-parser";
import { config } from "dotenv"

config({ path: './.env'})

const app = express();

// middelware
app.use(express.json())
app.use(cookieParser(process.env.COOKIE_SECRET))

// removed it in prod
app.use(morgan("dev"))
app.use("/api/v1", appRouter)

export default app
