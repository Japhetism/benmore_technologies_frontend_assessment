import { groupFixtures } from "../fixtures/group";
import { listFixtures } from "../fixtures/list";
import { taskFixtures } from "../fixtures/task";
import { userFixtures } from "../fixtures/user";

export const mockServer = (endpoint: string): any =>  {
    const obj = {
        "lists": listFixtures,
        "groups": groupFixtures,
        "users": userFixtures,
        "tasks": taskFixtures,
    }

    return {
        data: obj[endpoint as keyof typeof obj]
    }
}