import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <Todo></Todo>
    </div>
  );
}

const Todo=()=>{
  const [todos,setTodo]=useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res=>res.json())
    .then(data=>setTodo(data));
  },[]);
  return (
    <div>
    {
      todos.map(todo=><h1 style={{color:'blue',borderBottom:'1px solid red',paddingBottom:'5px'}} key={todo.id}>{todo.id}. {todo.title}</h1>)
    }
    </div>
    
  )
}

export default App;
