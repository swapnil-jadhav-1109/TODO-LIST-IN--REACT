import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  

  return (
    <>
      <h1 className='Heading'>TODO LIST</h1>

     <div className='main'>
     <input type="text" placeholder='Add New Items' />
     <button>Add</button>
     </div>
    </>
  )
}

export default App
