import './App.css';
import Input from "./input.js"
import Header from './header.js';
import List from "./list.js"
import React, {useState } from 'react';

function App ()  {
  const [todos, setTodos] = useState([]);

    return (
    <div>
      <Header />
      <Input todos={todos} setTodos={setTodos}/>
      <List todos={todos} />
    </div>
  );
};



export default App;
