import React from 'react'
import tick from '../assets/tick.png'
import not_tick from '../assets/not_tick.png'
import delete_icon from '../assets/delete.png' 

const Todoitems = ({Text, id, isComplete, deleteTodo, toggle}) => {
  return (
    <div flex items-center my-3 gap-2>
      <div onClick={()=>{toggle(id)}} flex flex-1 items-center cursor-pointer>
        <img src={isComplete ? tick: not_tick} alt='' className='w-5'/>
        <p className={`text-slate-800 ml-4 text-[15px] decoration-slate-500
        ${isComplete ? "line-through" :""}`}>{Text}</p>
      </div>

      <img onClick={()=>{deleteTodo(id)}} src={delete_icon} alt='' className='w-3.5 cursor-pointer'/>
    </div>
  )
}

export default Todoitems
