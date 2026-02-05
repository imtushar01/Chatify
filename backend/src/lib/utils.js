import jwt from "jsonwebtoken";
import {ENV} from "./env.js";

export const generateToken = (userId, res) => {
    const {JWT_SECRET} = ENV;
    if(!JWT_SECRET){
        throw new Error("JWT_Secret is not configured")
    }

    const token = jwt.sign({ userId }, JWT_SECRET, {
        expiresIn: "7d",
    });

    // Set cookie for cross-site usage. For cross-origin requests to include
    // cookies, SameSite must be 'none'. Browsers require 'secure' when
    // SameSite is 'none', so enable secure only in production.
    res.cookie("jwt", token, {
        maxAge: 7 * 24 * 60 * 60 * 1000,
        httpOnly: true,
        sameSite: "none",
        secure: ENV.NODE_ENV === "production",
        path: "/",
    })

    return token;
}