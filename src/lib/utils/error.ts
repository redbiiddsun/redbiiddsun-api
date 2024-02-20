import { Request, Response, NextFunction } from "express";
import responseFormat from "../responseFormat";

export function handlerExpressParser(
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction
): any {
    if (err instanceof SyntaxError && "body" in err) {
        return res
            .status(400)
            .send(responseFormat(false, "Invalid JSON format", null)); // Bad request
    } else {
        next();
    }
}
