import React, {useState, useEffect} from 'react';
import Header from "./component/Header";
import Form from './component/Form';
import TodoList from './component/Todo'; 
import './App.css';

const App = () => {

  const initialState =JSON.parse(localStorage.getItem("todos"))
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todos));

  }, [todos]);
  return (
    <div className='container'>
      <div className='app-wrapper'>
        <div>
          <Header/>
        </div>
        <div>
          <Form input = {input} setInput= {setInput} todos = {todos} setTodos = {setTodos} />
        </div>
        <div>
          <TodoList todos={todos} setTodos={setTodos} />
        </div>
      </div>
    </div>
  );
}

export default App;
