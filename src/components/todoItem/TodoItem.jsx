import React from 'react'
import './TodoItem.css'

const TodoItem = ({ todo }) => {
  return <div className='todo-item'>{todo.title}</div>
}

export default TodoItem
