import { useState, createContext, useContext,useRef, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [inputValue, setInputValue] = useState("");
  const previousInputValue = useRef("");

  useEffect(()=>{
    previousInputValue.current = inputValue;
  },[inputValue]);

  return (
    <div className='App'>
     <input type="text" value={inputValue} onChange={(e)=> setInputValue(e.target.value)}></input>
     <h2>Current Value : {inputValue}</h2>
     <h2>Previous Value : {previousInputValue.current}</h2>
     
    </div>
  )
}

// function App() {
//   const inputElement = useRef();
//   const focusInput = () => {
//     inputElement.current.focus();
//   }

//   return (
//     <div className='App'>
//      <input type="text" ref={inputElement}></input>
//      <button onClick={focusInput}> Focus </button>
     
//     </div>
//   )
// }

export default App
