import React,{useState,useEffect} from 'react';
import './App.css';
import Form from './Form';
import TodoList from './TodoList';

const App = () => {
    const [inputText, setInputText] = useState('');
    const [todos, setTodos]= useState([]);
    const [status, setStatus] =useState('all');
    const [filteredTodos, setFilteredTodos] =useState([]);

//USEEFFECT - Runs a function everytime a piece of state changes.
useEffect(()=>{
  filterHandler();
}, [todos, status])

    const filterHandler=()=>{
      switch(status){
        case "completed":
        setFilteredTodos(todos.filter(todo=>todo.Completed === true))
        break;
        case "uncompleted":
          setFilteredTodos(todos.filter(todo=>todo.Completed === false))
        break;
        default:
            setFilteredTodos(todos)
        break;
          
          }
    }

  return (
    <div className='App'>
    <header>
       <h1>My task manager</h1>
    </header>
    <Form  inputText={inputText} todos={todos} setTodos={setTodos} setInputText={setInputText} setStatus={setStatus}/>
    <TodoList todos={todos} setTodos={setTodos} filteredTodos={filteredTodos} />
    </div>
  )
}

export default App