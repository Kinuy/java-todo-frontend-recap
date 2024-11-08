
import "./ToDoCard.css"
import {ChangeEvent, useState} from "react";
import axios from "axios";

type Props = {
    updateToDoList: ()=>void
}

export default function NewToDoCard(props:Props) {

    const [inputText,setInputText] = useState("")

    function handleTextChange(event: ChangeEvent<HTMLInputElement>){
        setInputText(event.target.value);

    }

    function addToDo(){
        axios.post("api/todo",{
                description:inputText,
                status:"OPEN"
            })
            .then(props.updateToDoList);
        setInputText("");
    }

    return (
        <div>
            <form className="new-todo-card">
                <input className="new-todo-input" value={inputText} onChange={handleTextChange}/>
                <button onClick={addToDo}>save</button>
            </form>

        </div>
    );
};