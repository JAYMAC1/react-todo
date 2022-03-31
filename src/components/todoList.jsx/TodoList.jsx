import React from 'react'
import TodoItem from '../todoItem/TodoItem'
import './TodoList.css'

const TodoList = ({ todos, removeTodo }) => {
  const deleteTodo = (id) => {
    removeTodo(id)
  }
  return (
    <div className='todo-container'>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} />
      ))}
    </div>
  )
}

export default TodoList
