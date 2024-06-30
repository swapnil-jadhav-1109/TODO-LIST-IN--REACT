import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <>
      <h1 className='Heading'>TODO LIST</h1>

     <div className='main'>
     <input
      type="text"
      value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
       placeholder='Add New Items'
        />
     <button className="Btn" onClick={addTask}>Add</button>
     <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task} <button onClick={() => removeTask(index)}>Remove</button>
          </li>
        ))}
      </ul>
     </div>
    </>
  )
}

export default App
