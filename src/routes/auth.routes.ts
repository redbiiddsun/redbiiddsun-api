import { Router } from "express";
import { login } from "../controllers/auth.controllers";
import { validateLogin } from "../middleware/auth.middleware";

const routers = Router();

routers.post("/login", validateLogin, login);

export default routers;
