import React from 'react'
import TodoItem from '../todoItem/TodoItem'
import './TodoList.css'

const TodoList = ({ todos }) => {
  return (
    <div className='todo-container'>
      <div className='todo-display'>
        <TodoItem />
      </div>
    </div>
  )
}

export default TodoList
