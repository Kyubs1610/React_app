import './App.css';
import React, {useRef} from "react";
import { v4 as uuidv4 } from "uuid";

const Input = ({ setTodos }) => {
    const inputRef = useRef();
    function clickHandler(){
      const inputElement = inputRef.current.value;
      if (inputElement === '') return;
        setTodos(prevTodos => {
        return[...prevTodos,{id:uuidv4(), inputElement:inputElement, complete:false}]
      // uuidv4 will generate a random id
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