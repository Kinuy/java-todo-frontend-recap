import "./ToDoCard.css"
import {ToDo} from "../ToDo.ts";


type Props = {
    todo:ToDo
    updateToDoList: ()=>void
}

export default function ToDoCard(props: Props) {
    return (
        <div className="todo-card">
            <p>{props.todo.description}</p>
        </div>
    );
};