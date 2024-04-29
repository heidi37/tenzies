import { useState } from 'react'
import './App.css'
import Die from './Die'

function App() {
  const [count, setCount] = useState(0)


  return (
    <>
      <main>
        <div className="inner-main">
        <h1>Tenzies</h1>
        <p>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
        <div className="dice-container">
          <Die/>
          <Die/>
          <Die/>
          <Die/>
          <Die/>
          <Die/>
          <Die/>
          <Die/>
          <Die/>
          <Die/>
        </div>
        <button>Roll</button>
        </div>
      </main>
    </>
  )
}

export default App
