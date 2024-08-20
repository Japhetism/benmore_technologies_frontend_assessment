import { ITask } from "../interfaces/ITask";
import { groupFixtures } from "./group";
import { listFixtures } from "./list";

export const taskFixtures: ITask[] = [
    {
        id: "38383jdjd",
        title: "Read a book",
        description: "Keep reaading your book",
        status: "active",
        priority: "high",
        list: listFixtures[0],
        group: groupFixtures[0],
        dateCreated: "",
        dateUpdated: ""
    },
    {
        id: "38383jdjdjfd",
        title: "Wireframing a new product",
        description: "",
        status: "active",
        priority: "high",
        list: listFixtures[2],
        group: groupFixtures[0],
        dateCreated: "",
        dateUpdated: ""
    },
    {
        id: "38383jdjd",
        title: "Moodboard Landing Page",
        description: "",
        status: "active",
        priority: "high",
        list: listFixtures[1],
        group: groupFixtures[4],
        dateCreated: "",
        dateUpdated: ""
    },
    {
        id: "38383jdjd",
        title: "Weekly Meeting",
        description: "",
        status: "active",
        priority: "high",
        list: listFixtures[0],
        group: groupFixtures[0],
        dateCreated: "",
        dateUpdated: ""
    },
    {
        id: "38383jdjd",
        title: "Design PPT for Sharing Session",
        description: "",
        status: "active",
        priority: "high",
        list: listFixtures[0],
        group: groupFixtures[0],
        dateCreated: "",
        dateUpdated: ""
    },
    {
        id: "38383jdjd",
        title: "Testing Frontend Component",
        description: "",
        status: "active",
        priority: "high",
        list: listFixtures[0],
        group: groupFixtures[3],
        dateCreated: "",
        dateUpdated: ""
    },
    {
        id: "38383jdjd",
        title: "Home Construction and Amendment",
        description: "",
        status: "active",
        priority: "high",
        list: listFixtures[0],
        group: groupFixtures[0],
        dateCreated: "",
        dateUpdated: ""
    },
]