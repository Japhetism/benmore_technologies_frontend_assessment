import { IGroup } from "../interfaces/IGroup";

export const formatGroupUserLabel = (group: IGroup): string => {
    return group.users.length <= 1 ? `${group.users.length} Person` : `${group.users.length} People`; 
}