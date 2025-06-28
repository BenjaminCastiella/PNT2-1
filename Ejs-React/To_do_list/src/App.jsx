import React, { useState } from 'react'
import './App.css'


function App() {
  const [tasks, setTasks] = useState([]);
  const [written, setWritten] = useState('');

  function addTask(e){
    e.preventDefault();

    setTasks([...tasks, written]);
  }

  function trackWritten(e){
    setWritten(e);
  }

  return (
    <>
      <form onSubmit={(e) => addTask(e)}>
        <input placeholder='Ingresa tu tarea aquí' onChange={(e) => trackWritten(e.target.value)} />
        <button>Añadir</button>
      </form>
      
      <ol>
          {
              tasks.map((task, i) => {
                return <li key={i}>{task}</li>
              })
          }
      </ol>
    </>
  );

}

export default App;
