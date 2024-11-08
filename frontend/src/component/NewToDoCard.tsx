
import "./ToDoCard.css"
import {ChangeEvent, useState} from "react";
import axios from "axios";
import {ToDo} from "../ToDo.ts";

type Props = {
    updateToDoList: ()=>void
}

export default function NewToDoCard(props:Props) {

    const [inputText,setInputText] = useState("")

    function handleTextChange(event: ChangeEvent<HTMLInputElement>){

        setInputText(event.target.value);

    }

    function addToDo(){
        setInputText("");
        axios.post("api/todo",{
                description:inputText,
                status:"OPEN"
            } as ToDo)
            .then(props.updateToDoList);
    }


    return (
        <div className="todo-card">
            <input type="text" className="new-todo-input" value={inputText} onInput={handleTextChange}/>
            <button className="add-button" onClick={addToDo}>save</button>
        </div>

);
};