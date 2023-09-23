import React, { useState } from "react";
import "./App.css";
import Todo from "./Components/Todo";
import TodoForm from "./Components/TodoForm";

export default function App() {
  //states:
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);
  const [editId,setEditId]=useState(0);

  const handle = (e) => {
    e.preventDefault();

    if(editId!==0)
    {
      const editedList=todos.map((item)=> editId===item.id? 
      ({id:editId,name:task}):({id:item.id,name:item.name}))

      setTodos([...editedList])
      setTask("")
      setEditId(0)
      return
    }

    if (task !== "") {
      setTodos([{id: `${task}-${Date.now()}`, name: `${task}`}, ...todos]);
      setTask("")
      
    }
  };

  //Deletion handler:

  const deleteHandler=(id)=>{
    const newList=todos.filter((item)=>(
         item.id!==id
    ))
    setTodos([...newList])
  }

  //Edit handler:
  const editHandler=(id)=>{
       const targetTodo=todos.find((item)=>item.id===id)
       setTask(targetTodo.name)
       setEditId(id)

  }

  return (
      
      <div className="App">
      <div className="container">
          <TodoForm handle={handle} task={task} setTask={setTask} editId={editId}/>
          <Todo
          todos={todos}
          editHandler={editHandler}
          deleteHandler={deleteHandler}
        />
        </div>
      </div>
      
      
  );
}
