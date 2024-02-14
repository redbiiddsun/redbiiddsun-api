import express from "express";
import bodyParser from "body-parser";
import "dotenv/config";

import apiStatus from "./routes/status.routes";

export const app = express();

// Config Middleware for parsing JSON request bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/status", apiStatus);

app.get("/", (req, res) => {
    res.send("Welcome to Redbiiddsun API! 🚀");
});

export default app;
