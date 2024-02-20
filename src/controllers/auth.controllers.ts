import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { prisma } from "../lib/prisma";
import responseFormat from "../lib/responseFormat";
import { checkAuthentication } from "../lib/hash";

export async function login(req: Request, res: Response, next: NextFunction) {
    const { email, password } = req.body;
    const SECRET = process.env.SECRET || "forgotsecret";

    try {
        const queryResult = await prisma.user.findUniqueOrThrow({
            where: { email },
        });
        if (queryResult === null) throw new Error("Email is not register");

        const authResult = await checkAuthentication( password, queryResult.password);

        if (authResult == false)
            throw new Error("Email/Password are incorrect");

        const token = jwt.sign(
            { email: queryResult.email, role: queryResult.role },
            SECRET,
            { expiresIn: "1d" }
        );

        res.cookie("token", token, {
            maxAge: 300000,
            secure: true,
            httpOnly: true,
            sameSite: "none",
        });

        res.status(200).json(responseFormat(true, "Login successful", null));
    } catch (error) {
        if (error instanceof Error) {
            res.status(403).json(responseFormat(false, error.message, ""));
        }
    }
}
