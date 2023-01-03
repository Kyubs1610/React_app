import './App.css';
const Input = () => {
    return( 
    <section> 
     <div className ="inputbtn">
        <input placeholder="Type a new todo"></input>
        <button className="submit"> Add Todo</button>
      </div>
      <hr className="line"></hr>
    </section>
    )
}
 
export default Input;     