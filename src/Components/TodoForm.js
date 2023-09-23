import React from 'react'
import '../App.css'

export default function TodoForm({handle,task,setTask,editId}) {
  return (
    <>
      
        <h2>Todoe</h2>
        <form action="" className="Todoform" onSubmit={handle} >
          <input
            type="text"
            value={task}
            placeholder="Enter your task"
            className="input"
            onChange={(e) => setTask(e.target.value)}
          />
          <button type="submit">{editId!==0?"Edit":"Go"}</button>
        </form>
        
   </>
   
  )
}
