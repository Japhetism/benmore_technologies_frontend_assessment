import { IApiStatus } from "./IApiStatus"
import { IStatus } from "./IStatus"

export interface IGroup {
    id: string
    name: string
    description: string,
    maxMember: number,
    status: IStatus
    dateCreated: string
    dateUpdated: string
}

export interface IGroupMutate {
    name: string
    description: string
    maxMember: number,
    status: IStatus
}

export interface IGroupState {
    groups: IGroup[],
    currentGroup: IGroup | null,
    status: IApiStatus
    error: string | null
}