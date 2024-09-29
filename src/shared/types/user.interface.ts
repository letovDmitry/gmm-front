import { ICommon } from "./common.interface";

export interface IUser extends ICommon {
    email?: string;
    name?: string;
    password: string;
    avatar?: string;
    lastName?: string;
    tgLink?: string
    vkLink?: string;
}
