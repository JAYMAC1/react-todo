import { useState } from 'react'

import TodoForm from './components/todoForm/TodoForm'
import TodoList from './components/todoList.jsx/TodoList'

import './App.css'
function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (newTodo) => {
    setTodos((prevState) => [...todos, newTodo])
  }

  const removeTodo = (id) => {
    const newTodos = todos.filter((todo) => {
      return todo.id !== id
    })
    setTodos(newTodos)
  }
  return (
    <div className='App'>
      <TodoForm addTodo={addTodo} />
      {todos.length === 0 ? (
        <p className='todo-message'>
          Wow, looks like you've cleared all your ToDo's. Nice work...
        </p>
      ) : (
        <TodoList todos={todos} removeTodo={removeTodo} />
      )}
    </div>
  )
}

export default App
