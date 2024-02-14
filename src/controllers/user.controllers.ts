import type { Request, Response, NextFunction } from "express";
import { prisma } from "../lib/prisma";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import responseFormat from "../lib/responseFormat";

export async function createUser(
    req: Request,
    res: Response,
    next: NextFunction
) {
    const userData = req.body;

    try {
        const createdUser = await prisma.user.create({ data: { ...userData } });

        // return data Exclude password
        let {['password']: _, ...returnData} = createdUser;

        res.status(201).json(
            responseFormat(true, "create user successfully", returnData)
        );
    } catch (error) {
        if (
            error instanceof PrismaClientKnownRequestError &&
            error.code === "P2002"
        ) {
            res.status(400).json(
                responseFormat(false, "Email Already Exists", null)
            );
        }
        res.status(500).json(responseFormat(false, "Internal Error", null));
    }
}
