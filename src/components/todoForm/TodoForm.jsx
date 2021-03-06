import React, { useState } from 'react'
import './TodoForm.css'

const TodoForm = ({ addTodo }) => {
  const [newTodo, setNewTodo] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    const todo = {
      id: Math.random(),
      title: newTodo
    }
    addTodo(todo)
    setNewTodo('')
  }
  return (
    <>
      <div className='form-container'>
        <form className='todo-form' onSubmit={handleSubmit}>
          <div className='form-control'>
            <input
              type='text'
              placeholder='Enter a new todo'
              onChange={(e) => setNewTodo(e.target.value)}
              value={newTodo}
            />
          </div>
          <button type='submit' disabled={newTodo.length > 5 ? false : true}>
            Add
          </button>
        </form>
      </div>
    </>
  )
}

export default TodoForm
