import React from 'react'

const Todo = ({text,todo,todos,setTodos}) => {
  
  const deleteHandler=()=>{
      setTodos(todos.filter((res)=>res.id!==todo.id))
      
  }
  const completeHandler=()=>{
    setTodos(todos.map(item=>{
      if(item.id===todo.id){
        return {
          ...item,Completed: !item.Completed
        }
      }
      return item;
    }))

  }

  return (
    <div className='todo'>
        <li  className={`${todo.Completed ? 'completed':'todo-item'}`}>{text}</li>
        <button onClick={completeHandler} className='complete-btn'>
            <i className='fas fa-check'></i>
        </button>
        <button onClick={deleteHandler} className='trash-btn'>
            <i className='fas fa-trash'></i>
        </button>

    </div>
  )
}

export default Todo