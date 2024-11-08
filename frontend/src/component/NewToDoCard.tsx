import {ChangeEvent, useState} from "react";
import axios from "axios";


export default function NewToDoCard() {

    const [inputText,setInputText] = useState("")

    function handleTextChange(event: ChangeEvent<HTMLInputElement>){
        setInputText(event.target.value);

    }

    function addToDo(){
        axios.post("api/todo",{
                description:inputText,
                status:"OPEN"
            })
        setInputText("");
    }

    return (
        <div className="new-todo-card">
            <input className="new-todo-input" value={inputText} onChange={handleTextChange}/>
            <button onClick={addToDo}>save</button>
        </div>
    );
};