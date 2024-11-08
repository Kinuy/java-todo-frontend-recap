import "./ToDoCard.css"
import {ToDo} from "../ToDo.ts";
import axios from "axios";
import {ChangeEvent, useState} from "react";


type Props = {
    todo:ToDo
    updateToDoList: ()=>void
}

export default function ToDoCard(props: Props) {

    const [description,setDescription] = useState(props.todo.description)
    const [status,setToDoStatus] = useState(props.todo.status)

    function deleteToDo(){
        axios.delete("api/todo/"+props.todo.id)
            .then(props.updateToDoList)
    }
    function updateToDo(event: ChangeEvent<HTMLInputElement>){

        let newDescription = event.target.value

        setDescription(newDescription)

        console.log(event.target.value)



        axios.put("api/todo/"+props.todo.id,{
            ...props.todo,
            description: newDescription
        } as ToDo)
    }

    function moveToDoLeft(){

    }
    function moveToDoRight(){

    }
    function move(direction: string){
        let newStatus = direction

        setToDoStatus(newStatus)

        console.log(direction)



        axios.put("api/todo/"+props.todo.id,{
            ...props.todo,
            status: newStatus
        } as ToDo)
            .then(props.updateToDoList)
    }

    return (
        <div className="todo-card">
            <input  value={description} onInput={updateToDo}/>
            {props.todo.status === "OPEN" ? <div></div> : (
                props.todo.status === "IN_PROGRESS" ?
                    <button className="move-left-button" onClick={()=>move("OPEN")}>move left</button> :
                    <button className="move-left-button" onClick={()=>move("IN_PROGRESS")}>move left</button>
            )}

            <button className="delete-button" onClick={deleteToDo}>delete</button>
            {props.todo.status === "DONE" ? <div></div> : (
                props.todo.status === "IN_PROGRESS" ?
                    <button className="move-right-button" onClick={()=>move("DONE")}>move right</button> :
                    <button className="move-right-button" onClick={()=>move("IN_PROGRESS")}>move right</button>
            )}

        </div>
    );
};