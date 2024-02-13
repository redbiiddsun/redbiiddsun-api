import type { Request, Response, NextFunction } from "express";

export async function apiStatus(
    req: Request,
    res: Response,
    next: NextFunction
) {
    res.status(200).send([
        {
            name: "Non-secure endpoints",
            status: "ok",
            message: "",
        },
        {
            name: "Secure endpoints",
            status: "ok",
            message: "",
        },
    ]);
}
