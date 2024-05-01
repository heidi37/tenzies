import { useState, useEffect } from "react"
import { nanoid } from "nanoid"
import Confetti from "react-confetti"
import "./App.css"
import Die from "./Die"

function App() {
  const [dice, setDice] = useState(getDice())
  const [tenzies, setTenzies] = useState(false)
  const [rolls, setRolls] = useState(0)
  const [lowScore, setLowScore] = useState(parseInt(localStorage.getItem('lowScore'), 10) || 1001);


  useEffect(
    function () {
      const firstValue = dice[0].value
      const allSameValue = dice.every((die) => die.value === firstValue)
      const allIsHeld = dice.every((die) => die.isHeld)
      if (allSameValue && allIsHeld) {
        setTenzies(true)
      }
    },
    [dice]
  )

  function generateNewDie() {
    return {
      value: Math.floor(Math.random() * 6) + 1,
      isHeld: false,
      id: nanoid(),
    }
  }

  function getDice() {
    let newDice = []
    for (let i = 0; i < 10; i++) {
      newDice.push(generateNewDie())
    }
    return newDice
  }

  function rollDice() {
    if (!tenzies) {
      setDice((prevDice) =>
        prevDice.map((die) => {
          return die.isHeld ? die : generateNewDie()
        })
      )
      setRolls(prevRolls => prevRolls + 1)
    } else {
      if (rolls < lowScore){
        localStorage.setItem('lowScore', rolls)
        setLowScore(rolls)
      }
      setDice(getDice())
      setTenzies(false)
      setRolls(0)
    }
  }

  function holdDice(id) {
    setDice((prevDice) =>
      prevDice.map((die) => {
        return die.id === id ? { ...die, isHeld: !die.isHeld } : die
      })
    )
  }

  const diceElements = dice.map((element) => {
    return (
      <Die
        key={element.id}
        value={element.value}
        isHeld={element.isHeld}
        holdDice={() => holdDice(element.id)}
      />
    )
  })

  return (
    <>
      <main>

        {tenzies && <Confetti />}
        <div className="inner-main">
          <h1>Tenzies</h1>
          <p>
            Roll until all dice are the same. Click each die to freeze it at its
            current value between rolls.
          </p>
          <h3>Rolls: {rolls}</h3>
          <div className="dice-container">{diceElements}</div>
          <button onClick={rollDice}>{tenzies ? "New Game" : "Roll"}</button>
          <p><strong>Score to Beat:</strong> <span className="low-score">{lowScore}</span> (lower is better)</p>
        </div>
      </main>

    </>
  )
}

export default App
