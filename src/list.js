import './App.css';
import React , {useEffect } from "react";
const LSKEY = "MyTodoApp";

const List = ({todos,setTodos}) => {
  useEffect(() => {
    window.localStorage.setItem(LSKEY + ".todos", JSON.stringify(todos));
  }, [todos]);
  console.log(todos)
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