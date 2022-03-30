import { useState } from 'react'

import './App.css'

function App() {
  const [todo, setTodo] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(todo)
    setTodo('')
  }

  return (
    <div className='App'>
      <div className='form-container'>
        <form className='todo-form' onSubmit={handleSubmit}>
          <div className='form-control'>
            <input
              type='text'
              placeholder='Enter a new todo'
              onChange={(e) => setTodo(e.target.value)}
              value={todo}
            />
          </div>
          <button type='submit'>Add</button>
        </form>
      </div>
    </div>
  )
}

export default App
