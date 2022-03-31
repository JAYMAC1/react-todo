import React from 'react'
import './TodoItem.css'

const TodoItem = ({ todo, deleteTodo }) => {
  return (
    <div className='todo-item' onClick={() => deleteTodo(todo.id)}>
      {todo.title}
    </div>
  )
}

export default TodoItem
