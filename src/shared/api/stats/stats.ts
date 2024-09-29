import { instance } from "@/shared/config/axiosInstance";
import { AxiosResponse } from "axios";

export interface MainStats {
    replinish: number;
    users: number;
    online: number;
}


export async function getMainStats(): Promise<AxiosResponse<MainStats>> {
    const stats = await instance.get('/stats/getStats')
    return stats
}
