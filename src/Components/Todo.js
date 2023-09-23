import React from "react";
import '../App.css'

const TodoList = ({ todos,deleteHandler,editHandler}) => {
  return (
    <ul className="allTodos">
      {todos.map((t) => (
        <li className="singleTodo"  key={t.id}>
          <span className="todoText">
            {t.name}
          </span>
          <button onClick={() => editHandler(t.id)}>Edit</button>
          <button onClick={() => deleteHandler(t.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
