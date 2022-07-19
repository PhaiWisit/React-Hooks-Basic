import { useState, createContext, useContext, useRef, useEffect, useReducer } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

const initialTodos = [
  { id: 1, title: "Todo 1", complete: false },
  { id: 2, title: "Todo 2", complete: false }
]

const reducer = (state,action) => {
  switch(action.type){
    case "COMPLETE":
      return state.map((todo)=>{
        if (todo.id === action.id) {
          return {...todo, complete: !todo.complete}
        }else{
          return todo;
        }
      })
      default:
        return state;
  }
}

function App() {
  
  const [todos, dispatch] = useReducer(reducer, initialTodos);

  const handleComplete = (todo) => {
    dispatch({type: "COMPLETE",id:todo.id});
  }

  return (
    <div className='App'>
      {todos.map((todo)=>(
        <div key={todo.id}>
          <input type = "checkbox" checked={todo.complete} onChange={()=>handleComplete(todo)}></input>
          {todo.title}
        </div>
      ))}
    </div>
  )
}


export default App
