
import './App.css'
import {useEffect, useState} from "react";
import axios from "axios";
import {ToDo} from "./ToDo.ts";
import {ToDoStatusList} from "./ToDoStatus.ts";
import ToDoColumn from "./component/ToDoColumn.tsx";



export default function App() {

  const [todos,setTodos] = useState<ToDo[]>([])

  function getTodos(){
    axios.get("api/todo")
        .then((response)=>{setTodos(response.data)})
        //.catch(error.)
  }

  useEffect(() => {
    getTodos();
  }, []);

  return (
      <>
        <div className="todo-columns">
          <h1>My ToDo App</h1>
          {
            ToDoStatusList.map((status, index) => {
              return <ToDoColumn status={status} todos={todos.filter(todo => todo.status === status)} key={index} updateToDoList={getTodos}/>;
            })}
        </div>
      </>

  )
}

