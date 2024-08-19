import { listFixtures } from "../fixtures/list";
import { IList } from "../interfaces/IList";

export const mockServer = (endpoint: string): any =>  {
    const obj = {
        "lists": listFixtures
    }

    return {
        data: obj[endpoint as keyof typeof obj]
    }
}