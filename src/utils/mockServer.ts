import { groupFixtures } from "../fixtures/group";
import { listFixtures } from "../fixtures/list";
import { userFixtures } from "../fixtures/user";

export const mockServer = (endpoint: string): any =>  {
    const obj = {
        "lists": listFixtures,
        "groups": groupFixtures,
        "users": userFixtures
    }

    return {
        data: obj[endpoint as keyof typeof obj]
    }
}