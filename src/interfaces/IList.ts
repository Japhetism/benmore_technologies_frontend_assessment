import { IApiStatus } from "./IApiStatus"
import { IStatus } from "./IStatus"

export interface IList {
    id: string
    name: string
    description: string
    status: IStatus
    dateCreated: string
    dateUpdated: string
}

export interface IListMutate {
    name: string
    description: string
    status: IStatus
}

export interface IListState {
    lists: IList[],
    currentList: IList | null,
    status: IApiStatus
    error: string | null
}