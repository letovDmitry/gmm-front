import { instance } from "@/shared/config/axiosInstance";
import { AxiosResponse } from "axios";

export async function makePayment(amount: number
): Promise<AxiosResponse<string>> {
    return await instance.post("/payments/payment", { Amount: amount });
}
