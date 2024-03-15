import express from "express";

const app = express();

// middelware
app.use(express.json()) 

export default app
