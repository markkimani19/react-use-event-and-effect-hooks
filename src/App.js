import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Todolist from './components/Todolist';

let data = [
  {
    
    id: 1,
    title: "delectus aut autem",
    completed: false
  },
  {
    
    id: 2,
    title: "quis ut nam facilis et officia qui",
    completed: false
  },
  {
    
    id: 3,
    title: "fugiat veniam minus",
    completed: false
  },
  {
    
    id: 4,
    title: "et porro tempora",
    completed: true
  },
  {
   
    id: 5,
    title: "laboriosam mollitia et enim quasi adipisci quia provident illum",
    completed: false
  }
]
function App() {

  const [todos, setTodos] = useState([])
  // console.log(data)

  // use useEffect hook to send request to jsonplaceholder api todos and update the state
  // write your code here
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
    .then(res => res.json())
    .then(data => setTodos(data))
    .catch(e => console.log(e))
  }
  , [])


  return (
    <div className="App">
      <h1>Todo List</h1>
      <Todolist todos = {todos} title = "this is react"/>
    </div>
  );
}

export default App;
