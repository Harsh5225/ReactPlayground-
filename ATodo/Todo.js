import React, { useCallback, useState } from "react";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [idCounter, setidCounter] = useState(1);
  // const generateId=useCallback(()=>{
  //   const id=Math.floor(Math.random()*10);
  //   return id;
  // },[]);
  function handleClick() {
    if(input.trim()==="") return;
    setTodos((todos) => (
      [...todos, { text: input, id: idCounter }]
    ));
    setidCounter((prevId)=> prevId+1);
    setInput("");
  }

  const removeTodo = (id) =>
    setTodos((todos) => todos.filter((todo) => todo.id !== id));

  return (
    <div className="container">
      <input
        type="text"
        value={input}
        placeholder="New Todo"
        onChange={(e) => {
          setInput(e.target.value);
        }}
      ></input>

      <button onClick={handleClick}>Submit</button>
      <ul className="todos-list">
        {todos.map((todo) => (
          <li key={todo.id} className="todo">
            <span>{todo.text}</span>
            <button className="close" onClick={() => removeTodo(todo.id)}>
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
