import type { Request, Response, NextFunction } from "express";
import { prisma } from "../lib/prisma";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import responseFormat from "../lib/responseFormat";
import { hashPassword } from "../lib/hash";


export async function createUser(
    req: Request,
    res: Response,
    next: NextFunction
) {
    const { email, password, first_name, last_name, role } = req.body;

    let securePassword = await hashPassword(password);

    try {
        const createdUser = await prisma.user.create({
            data: {
                email,
                password: securePassword,
                first_name,
                last_name,
                role,
            },
        });

        // return data Exclude password
        let { ["password"]: _, ...returnData } = createdUser;

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
        } else {
            res.status(500).json(responseFormat(false, "Internal Error", null));
        }
    }
}
