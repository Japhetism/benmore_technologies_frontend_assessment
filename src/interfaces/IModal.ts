export type IModalType =
    | "tasks"
    | "lists"
    | "groups"

export interface IModal {
    isVisible: boolean
    type: IModalType
}