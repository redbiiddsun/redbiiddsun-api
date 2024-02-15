import bcrypt from "bcrypt";
import { promises } from "dns";

export async function hashPassword(password: string): Promise<string> {
    const saltRounds = bcrypt.genSaltSync(10);

    return bcrypt.hashSync(password, saltRounds);
}

export async function checkAuthentication(
    password: string,
    hash: string
): Promise<boolean> {
    const authenticationResult = bcrypt.compareSync(password, hash);

    return authenticationResult;
}
