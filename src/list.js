import './App.css';
import React , {useEffect } from "react";
const LSKEY = "MyTodoApp";

const List = ({todos,setTodos}) => {
  useEffect(() => {
    window.localStorage.setItem(LSKEY + ".todos", JSON.stringify(todos));
  }, [todos]);
  //Will store the task
  function removeTodo(id) {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
  }
    return(
    <section> 
    <h2 className='secondTitle'>Todos</h2>
    <ul>
    {todos.map((todo,index) => (
      <li key={index}> <input type="checkbox" /> &nbsp; {todo.inputElement}  &nbsp;
      <button className='delete' onClick={() => removeTodo(todo.id)}><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"></path></svg></button>
      </li>
    ))}
    </ul>
    </section>
    )
}
export default List