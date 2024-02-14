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
        const createUser = await prisma.user.create({ data: { ...userData } });

        res.status(201).json(
            responseFormat(true, "create user successfully", createUser)
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
