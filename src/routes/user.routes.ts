import { Router } from "express";
import { validateNewUser } from "../middleware/user.middleware";
import { createUser } from "../controllers/user.controllers";

const routers = Router();

routers.post("/", validateNewUser, createUser);

export default routers;