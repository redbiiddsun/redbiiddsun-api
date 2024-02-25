import express from "express";
import cookieParser from "cookie-parser";
import { handlerExpressParser } from "./lib/utils/error";

import { authMiddleware } from "./middleware/middleware";

// Route Import
import apiStatus from "./routes/status.routes";
import userRoutes from "./routes/user.routes";
import authRoutes from "./routes/auth.routes";

export const app = express();

// Config Middleware for parsing JSON request bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.raw());

app.use(cookieParser());

app.use(handlerExpressParser);

app.use("/api/status", apiStatus);
app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
    res.send("Welcome to Redbiiddsun API! 🚀");
});

export default app;
