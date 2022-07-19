import { useState, createContext, useContext } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

const UserContext = createContext();

function App() {
  const [user, setUser] = useState("Wisit");
  return (
    <UserContext.Provider value={user}>
      <h1>Parent Component</h1>
      <ChildComponent1></ChildComponent1>
    </UserContext.Provider>
  )
}

function ChildComponent1() {
  return (
    <>
      <h3>Child Component 1</h3>
      <ChildComponent2/>
    </>
  )
}
function ChildComponent2() {
  return (
    <>
      <h3>Child Component 2</h3>
      <ChildComponent3/>
    </>
  )
}
function ChildComponent3() {
  return (
    <>
      <h3>Child Component 3</h3>
      <ChildComponent4/>
    </>
  )
}
function ChildComponent4() {
  return (
    <>
      <h3>Child Component 4</h3>
      <ChildComponent5/>
    </>
  )
}
function ChildComponent5() {

  const user = useContext(UserContext);

  return (
    <>
      <h3>Child Component 5</h3>
      <p>Hello {user}</p>
    </>
  )
}

export default App
