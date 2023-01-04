import './App.css';
import Input from "./input.js"
import Header from './header.js';
import List from "./list.js"
import React, {useState} from 'react';
const LSKEY = "MyTodoApp";

function App ()  {
  const storedTodos = window.localStorage.getItem(LSKEY + ".todos");
  const [todos, setTodos] = useState(storedTodos ? JSON.parse(storedTodos) : []);

  //Will get the data store

  return (
    <div>
      <Header />
      <Input todos={todos} setTodos={setTodos}/>
      <List todos={todos} setTodos={setTodos}/>
    </div>
  );
};



export default App;
