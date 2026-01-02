import express from "express";
import cors from "cors";

const app = express();

// Global middlewares
app.use(cors());
app.use(express.json());

// Routes
import healthRouter from "./routes/health.route.js";
app.use("/api/health", healthRouter);

export default app;
