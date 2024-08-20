import { IGroup } from "../interfaces/IGroup";

export const formatGroupUserLabel = (group: IGroup): string => {
    if (group) {
        return group.users.length <= 1 ? `${group.users.length} Person` : `${group.users.length} People`;
    } 
    return `0 Person`;
}

export const getFormattedTodayDate = (): string => {
    const date = new Date();

    const dayOptions: Intl.DateTimeFormatOptions = { weekday: 'short', day: 'numeric', month: 'long', year: 'numeric' };
    const dayFormatter = new Intl.DateTimeFormat('en-US', dayOptions);

    const formattedDate = dayFormatter.format(date);

    return `Today, ${formattedDate}`;

}