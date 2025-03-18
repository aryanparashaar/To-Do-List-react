import { useState } from 'react'
import Navbar from './components/Navbar' 
import Todo from './components/Todo'
function App() {

  return (
    <>
    <Navbar/>
    <div className='bg-stone-900 gride py-4 min-h-screen'>
      <Todo/>
    </div>
     
    </>
  )
}

export default App
