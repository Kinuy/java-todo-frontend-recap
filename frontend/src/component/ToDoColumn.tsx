import {ToDoStatus} from "../ToDoStatus.ts";
import {ToDo} from "../ToDo.ts";
import ToDoCard from "./ToDoCard.tsx";
import NewToDoCard from "./NewToDoCard.tsx";

type Props = {
    status: ToDoStatus,
    todos: ToDo[]
}

export default function ToDoColumn(props: Props) {
    return (
        <div className="todo-column">
            <h2>{props.status}</h2>
            {
                props.todos.map((todo,index)=>{
                    return <ToDoCard todo={todo} key={index}/>
                })
            }
            <div>
                {
                    (props.status=="OPEN") && <NewToDoCard/>
                }
            </div>

        </div>
    );
};