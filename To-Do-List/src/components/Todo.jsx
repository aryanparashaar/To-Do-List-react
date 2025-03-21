import React, { useEffect, useRef, useState } from 'react'
import todo_icon from '../assets/todo_icon.png'
import Todoitems from './Todoitems'

const Todo = () => {
  const [todoList, setTodoList] = useState(localStorage.getItem("todos")?
JSON.parse(localStorage.getItem("todos")) : [])             //by`[]`usestate is initialised with an empty array bcs we have to add multiple no. of arrays in the list
  const inputRef = useRef()                                 // `useref` is functional Hook i.e. use reference   //parse is cor converting JSON string back to array or object
  const add = () => {
    const inputText = inputRef.current.value.trim();       // trim will remove extra space from starting and ending of the input array or task we entered
    
    if (inputText ==="") {
      return null;
    }

      const newTodo = {
        id : Date.now(),
        Text : inputText,
        isComplete : false, 
      }
      setTodoList((prev) => [...prev , newTodo]);
      inputRef.current.value = "";
    
  }
  const deleteTodo = (id) => {
    setTodoList((prevTodos)=>{
      return prevTodos.filter((todo) => todo.id !== id)
    })
  }
  const toggle = (id) => {
    setTodoList((prevTodos)=>{
      return prevTodos.map((todo)=>{
        if (todo.id === id) {
          return {...todo, isComplete: !todo.isComplete}
        }
        return todo;
      })
    })
  }

  useEffect(()=>{
    localStorage.setItem("todos", JSON.stringify(todoList));             //stringify is for converting array or any string to JSON file or string
  }, [todoList])

  return (
    <div>
      <div className='bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl'>
      
      
     { /*-----------------------Title-----------------*/}

      <div className='flex items-center mt-7 gap-2'>
        <img className='w-8' src={todo_icon} alt='' />
        <h1 className='text-3xl font-semibold'>i Task</h1>
      </div>


      {/*-----------------------input box-----------------------*/}

      <div className='flex items-center my-7 bg-gray-200 rounded-full'>
        <input ref={inputRef} className='bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600' type="text" placeholder='Add Your Task'/>
        <button onClick={add} className='border-none rounded-full bg-slate-500 w-32 h-14 text-white text-lg font-medium cursor-pointer'>ADD +</button>
      </div>


      {/*-----------------------Todo List-----------------------*/}

      <div>
        {todoList.map((item, index) => {
          return <Todoitems key={index} Text={item.Text} id={item.id} isComplete={item.isComplete} deleteTodo={deleteTodo} toggle={toggle}/>
        })}
       
      </div>

      </div>
    </div>
  )
}

export default Todo
