import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('Phai');
  const [data, setData] = useState([]);

  fetch("https://jsonplaceholder.typicode.com/users")
  .then(res => res.json())
  .then(data => setData(data));

  console.log(data); //useState จะ log เรื่อย ๆ จน catch

  return (
    <div className="App">
      <h1>Hello {name}</h1>
      <button onClick={() => setName('Wisit')}> Update Name </button>
      <h3>{count}</h3>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Increase
        </button>
        <button onClick={() => setCount((count) => count - 1)}>
          Decrease
        </button>
      </div>
    </div>
  )
}

export default App
