import React, { useState } from "react"
import "./App.css"
import Square from './components/Square'

const App = () => {
  const [board, setBoard] = useState([
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?"
  ])
  const [treasureLocation, setTreasureLocation] = useState(Math.floor(Math.random() * board.length))
  const [bombLocation, setBombLocation] = useState(Math.floor(Math.random() * board.length))

  const [counter, setCounter] = useState(5)
    if(counter == 0) {
      alert("Try again" )
    }

  const handleGamePlay = (clickedSquare) => {
    // makes a copy of the board in state so  that we can modify it in this method
    if (bombLocation === treasureLocation) {
      setBombLocation(Math.floor(Math.random() * board.length));
    }
    
    let updateBoard = [...board]
    
    if(clickedSquare === treasureLocation) {
      updateBoard[clickedSquare] = "💎"
      setBoard(updateBoard)
      alert("You won!")
    } else if(clickedSquare === bombLocation) {
      updateBoard[clickedSquare] = "💣"
      setBoard(updateBoard)
    } else {
      updateBoard[clickedSquare] = "🌴"
    setBoard(updateBoard)
    setCounter(counter - 1);
    }
  }

  
  const handleReset = () => {
    setBoard([
      "?",
      "?",
      "?",
      "?",
      "?",
      "?",
      "?",
      "?",
      "?"
    ])
    setTreasureLocation(Math.floor(Math.random() * board.length))
    setBombLocation(Math.floor(Math.random() * board.length))
  }


  console.log("treasureLocation:", treasureLocation)
  console.log("bombLocation:", bombLocation)
  return (
    <>
      <h1>Treasure Hunt Game</h1>
      <div className="board-game">
        {board.map((square, index) => {
          return (
          <Square 
          square={square} 
          index={index} 
          key={index}
          handleGamePlay={handleGamePlay} />
        )
        })}
      </div>
      <button onClick={handleReset}>Restart Game</button>
      <p>Guesses Remaining: {counter}</p>
    </>
  )
}

export default App
