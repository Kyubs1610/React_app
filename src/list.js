import './App.css';
import React from "react";

const List = ({todos}) => {
    return(
    <section> 
    <h2 className='secondTitle'>Todos</h2>
    <ul>
    {todos.map((todo,index) => (
      <li key={index}> <input type="checkbox" /> {todo.inputElement}</li>
    ))}
    </ul>
    </section>
    )
}
export default List