import { IApiStatus } from "./IApiStatus"

export interface IUser {
    id: string
    firstName: string
    lastName: string
    dateCreated: string
    dateUpdated: string
}

export interface IUserState {
    users: IUser[],
    status: IApiStatus
    error: string | null
}