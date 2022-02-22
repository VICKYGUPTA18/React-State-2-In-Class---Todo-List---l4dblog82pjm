import React, { useState } from "react";
import "./../styles/App.css";

function App() {
  const [name, setName] = useState("");
  const [todos, setTodos] = useState([]);
  const onChangeHandler = (e) => {
    setName(e.target.value);
  };
  const onAdd = () => {
    setTodos([...todos, { id: Math.random() * 100, name: name }]);
    setName("");
  };
  const onDelete = (e) => {
    setTodos(todos.filter((el) => el.id !== e.target.id));
  };
  return (
    <div id="main">
      <div>
        <input onChange={onChangeHandler} value={name} />
        <button id="btn" className="btn-click" onClick={onAdd}>
          add
        </button>
      </div>
      {todos.map((todo) => {
        return (
          <>
            <textarea id="task" key={todo.id}>
              {todo.name}
            </textarea>
            <button type="button" onClick={(e) => onDelete(e)} id={todo.id}>
              Delete
            </button>
          </>
        );
      })}
    </div>
  );
}

export default App;
