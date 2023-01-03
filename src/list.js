import './App.css';
import React, { useState } from "react";

const List = () => {
    const initialTodos =["Learn React","Take a coffee"];
    const [todos, setTodos] = useState(initialTodos);
    return(
    <section> 
    <h2 className='secondTitle'>Todos</h2>
    <ul>
    {todos.map((todo,index) => (
      <li key={index}> <input type="checkbox" /> {todo}</li>
    ))}
    </ul>
    </section>
    )
}
export default List