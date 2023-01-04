import './App.css';
import React, { useRef} from "react";

const Input = ({ todos, setTodos }) => {
    const inputRef = useRef();
    
    function clickHandler(){
      const inputElement = inputRef.current.value;
      if (inputElement === '') return;
      setTodos(prevTodos => {
        return[...prevTodos,{id:1, inputElement:inputElement, complete:false}]
      });
  }
  
    return( 
    <section> 
     <div className ="inputbtn">
        <input ref={inputRef} type ='text' placeholder="Type a new todo"></input>
        <button className="submit" onClick={clickHandler}> Add Todo</button>
      </div>
      <hr className="line"></hr>
    </section>
    )
}
 
export default Input;     