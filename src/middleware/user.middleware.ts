import type { Request, Response, NextFunction } from "express";
import responseFormat from "../lib/responseFormat";

export async function validateNewUser(
    req: Request,
    res: Response,
    next: NextFunction
) {
    try {

        if (!req.body.username) throw new Error("username are required");
        if (!req.body.email) throw new Error("email are required");
        if (!req.body.password) throw new Error("password are required");
        if (!req.body.first_name) throw new Error("first_name are required");
        if (!req.body.last_name) throw new Error("last_name are required");

        next();

    } catch (error) {
        console.log("error");

        if (error instanceof Error) {
            res.status(400).json(responseFormat(false, error.message, null));
        }
    }
}
