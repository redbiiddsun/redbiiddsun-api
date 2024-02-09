import type { Request, Response, NextFunction } from "express"

export async function validateNewUser(
    req: Request,
    res: Response,
    next: NextFunction
) {
    try {
        



    } catch (error) {
        // res.status(400).send(error.message);
        //err.message contains a proper error message
        // or you can do whatever you want
    }
}
