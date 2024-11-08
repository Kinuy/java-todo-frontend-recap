import "./ToDoCard.css"
import {ToDo} from "../ToDo.ts";
import axios from "axios";


type Props = {
    todo:ToDo
    updateToDoList: ()=>void
}

export default function ToDoCard(props: Props) {

    function deleteToDo(){
        axios.delete("api/todo/"+props.todo.id)
            .then(props.updateToDoList)
    }
    function updateToDo(){

    }
    function moveToDoLeft(){

    }
    function moveToDoRight(){

    }

    return (
        <div className="todo-card">
            <p>{props.todo.description}</p>
            <button onClick={moveToDoLeft}>move left</button>
            <button onClick={updateToDo}>update</button>
            <button onClick={deleteToDo}>delete</button>
            <button onClick={moveToDoRight}>move right</button>
        </div>
    );
};