import './App.css';
import React, { useRef } from "react";
// import uuidv4 from 'uuid/v4'

const Input = () => {
    const inputRef = useRef();
    function clickHandler(){
        const inputElement = inputRef.current;

        // Do something with inputElement...
        console.log(inputElement.value);
    
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