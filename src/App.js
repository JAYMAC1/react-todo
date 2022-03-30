import { useState } from 'react'

import TodoForm from './components/todoForm/TodoForm'
import TodoList from './components/todoList.jsx/TodoList'

import './App.css'
function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (newTodo) => {
    setTodos((prevState) => [...todos, newTodo])
  }
  return (
    <div className='App'>
      <TodoForm addTodo={addTodo} />
      {todos.length === 0 ? (
        <p className='todo-message'>
          Looks like there's nothng todo at the moment...
        </p>
      ) : (
        <TodoList todos={todos} />
      )}
    </div>
  )
}

export default App
