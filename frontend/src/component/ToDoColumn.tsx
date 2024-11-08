import "./ToDoColumn.css"
import {ToDoStatus} from "../ToDoStatus.ts";
import {ToDo} from "../ToDo.ts";
import ToDoCard from "./ToDoCard.tsx";
import NewToDoCard from "./NewToDoCard.tsx";

type Props = {
    status: ToDoStatus,
    todos: ToDo[]
    updateToDoList: ()=>void
}

export default function ToDoColumn(props: Props) {



    function formatStatus(inStatus: string){
        switch (inStatus) {
            case "OPEN": {
                return "Open";
            }
            case "IN_PROGRESS": {
                return "In Progress";
            }
            case "DONE": {
                return "Done";
            }
        }
    }



    return (
        <div className="todo-column">
            <h2>{formatStatus(props.status)}</h2>
            {
                props.todos.map((todo)=>{
                    return <ToDoCard todo={todo} updateToDoList={props.updateToDoList} key={todo.id}/>
                })
            }
            <div>
                {
                    (props.status=="OPEN") && <NewToDoCard updateToDoList={props.updateToDoList}/>
                }
            </div>

        </div>
    );
};