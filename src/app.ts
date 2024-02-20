import express, { NextFunction } from "express";
import bodyParserErrorHandler from "express-body-parser-error-handler";
import "dotenv/config";

import apiStatus from "./routes/status.routes";
import userRoutes from "./routes/user.routes";

export const app = express();

// Config Middleware for parsing JSON request bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.raw())


// Error handling for invalid JSON body
app.use(
    bodyParserErrorHandler({
        errorMessage: () => {
            return `Invalid JSON body`;
        },
    })
);

app.use("/api/status", apiStatus);
app.use("/api/user", userRoutes);

app.get("/", (req, res) => {
    res.send("Welcome to Redbiiddsun API! 🚀");
});

export default app;
