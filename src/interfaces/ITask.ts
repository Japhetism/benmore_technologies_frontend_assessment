import { IGroup } from "./IGroup"
import { IList } from "./IList"
import { IPriority } from "./IPriority";
import { IApiStatus } from "./IApiStatus";
import { IUser } from "./IUser"
import { IStatus } from "./IStatus";

export interface ITask {
    id: string
    title: string
    description: string
    status: IStatus
    priority: IPriority
    list: IList,
    group: IGroup,
    assignedUsers: IUser[]
    dateCreated: string
    dateUpdated: string
}

export interface ITaskMutate {
    title: string
    description: string
    status: IStatus
    priority: IPriority
    assignedUsers: IUser[],
    listId: string,
    groupId: string,
}

export interface ITaskState {
    tasks: ITask[],
    currentTask: ITask | null,
    status: IApiStatus
    error: string | null
}