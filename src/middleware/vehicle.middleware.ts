import type { Request, Response, NextFunction } from "express";
import responseFormat from "../lib/responseFormat";

export async function validateNewVehicle(
    req: Request,
    res: Response,
    next: NextFunction
) {
    try {

        if (!req.body.brand) throw new Error("brand are required");
        if (!req.body.model) throw new Error("model are required");
        if (!req.body.registration_date) throw new Error("registration_date are required");
        if (!req.body.vehicle_plate) throw new Error("vehicle_plate are required");
        if (!req.body.vehicle_province) throw new Error("vehicle_province are required");
        if (!req.body.type) throw new Error("type are required");
        if (!req.body.miles) throw new Error("miles are required");

        next();

    } catch (error) {

        if (error instanceof Error) {
            res.status(400).json(responseFormat(false, error.message, null));
        }
    }
}
