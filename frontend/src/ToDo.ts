import {ToDoStatus} from "./ToDoStatus.ts";

export type ToDo = {
    id: string,
    description: string,
    status: ToDoStatus
}