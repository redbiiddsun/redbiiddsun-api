import { Response, Request, NextFunction } from "express";
import responseFormat from "../lib/responseFormat";

export async function validateLogin(
    req: Request,
    res: Response,
    next: NextFunction
) {
    const { email, password } = req.body;

    try {
        if (!email) throw new Error("email is required");
        if (!password) throw new Error("password is requied");

        next();
    } catch (error) {
        if (error instanceof Error) {
            res.status(400).json(responseFormat(false, error.message, null));
        }
    }
}
