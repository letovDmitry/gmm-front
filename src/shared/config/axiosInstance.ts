import axios from "axios";

export const instance = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_BACKEND}/api`,
    headers: {
        "Access-Control-Allow-Origin": process.env.NEXT_PUBLIC_BACKEND,
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    },
});
