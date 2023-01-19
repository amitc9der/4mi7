import { useState } from 'react'
import './App.css'
import { Routes,Route } from 'react-router-dom'

import FibonacciPattern from './Pages/Fibonacci_Pattern'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<><h1>Main Page</h1></>}></Route>
        <Route
            path="fibonacci"
            element={<><h1>Fibonnacci Patterns</h1><FibonacciPattern/></>}
        />
      </Routes>
    </div>
  )
}

export default App