import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('Phai');
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${count}`)
      .then(res => res.json())
      .then(data => setData(data));
  }, [count]);

  console.log(data);

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
