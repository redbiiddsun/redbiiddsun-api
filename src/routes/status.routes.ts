import { Router } from "express";
import { apiStatus } from "../controllers/status.controllers";

const routers = Router();

routers.get("/", apiStatus);

export default routers;
