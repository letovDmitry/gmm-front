import { getCookie } from "@/lib/utils";
import { instance } from "@/shared/config/axiosInstance";
import { IUser } from "@/shared/types/user.interface";
import { AxiosResponse } from "axios";

interface ILoginResponse {
    accessToken: string
}

interface IRegisterRequest {
    name?: string,
    email?: string,
    password: string,
    vkLink?: string,
    tgLink?: string,
    avatar?: string,
}
interface ILoginRequest {
    name?: string,
    email?: string,
    password: string,
}



export async function setOffline() {
    const token = getCookie("accessToken")
    await instance.get('/auth/offline', { headers: { Authorization: `Bearer ${token}` } })
}

export async function forgotPassword(email: string): Promise<AxiosResponse<IUser>> {
    const user = await instance.post('/auth/forgotPassword', { email })
    return user
}

export async function getMe(): Promise<AxiosResponse<IUser>> {
    const token = getCookie("accessToken")
    const user = await instance.get('/auth/getMe', { headers: { Authorization: `Bearer ${token}` } })
    return user
}

export async function login(loginData: ILoginRequest
): Promise<AxiosResponse<ILoginResponse>> {
    const { password, name, email } = loginData
    return await instance.post("/auth/signIn", {
        email,
        name,
        password,
    });
}

export async function register(registerData: IRegisterRequest): Promise<AxiosResponse<IUser>> {
    const { email, password, avatar, vkLink, tgLink, name } = registerData
    return await instance.post("/auth/registration", {
        name,
        email,
        password,
        avatar,
        vkLink,
        tgLink
    });
}
