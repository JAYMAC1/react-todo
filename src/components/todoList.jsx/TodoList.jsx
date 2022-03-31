import React from 'react'
import TodoItem from '../todoItem/TodoItem'
import './TodoList.css'

const TodoList = ({ todos }) => {
  return (
    <div className='todo-container'>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  )
}

export default TodoList
