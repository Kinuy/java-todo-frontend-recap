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

    function deleteToDo(){
        axios.delete("api/todo/"+props.todo.id)
            .then(props.updateToDoList)
    }
    function updateToDo(event: ChangeEvent<HTMLInputElement>){

        setDescription(event.target.value)
        console.log(event.target.value)
        axios.put("api/todo/"+props.todo.id,{
            ...props.todo,
            description:event.target.value
        })
            .then(props.updateToDoList)

    }
    function moveToDoLeft(){

    }
    function moveToDoRight(){

    }

    return (
        <div className="todo-card">
            <input value={description} onInput={updateToDo}/>
            <button onClick={moveToDoLeft}>move left</button>
            <button onClick={deleteToDo}>delete</button>
            <button onClick={moveToDoRight}>move right</button>
        </div>
    );
};