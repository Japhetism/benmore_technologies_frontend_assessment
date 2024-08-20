import { IApiStatus } from "./IApiStatus"
import { IStatus } from "./IStatus"
import { IUser } from "./IUser"

export interface IGroup {
    id: string
    name: string
    description: string
    maxMember: number
    users: IUser[]
    status: IStatus
    dateCreated: string
    dateUpdated: string
}

export interface IGroupMutate {
    name: string
    description: string
    maxMember: number
    users: IUser[]
    status: IStatus
}

export interface IGroupState {
    groups: IGroup[]
    currentGroup: IGroup | null
    status: IApiStatus
    error: string | null
}