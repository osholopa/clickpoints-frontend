import React, { useState, useEffect } from "react"
import Button from "./Button"
import "./App.css"
import Message from "./Message"

const App = () => {
  const [points, setPoints] = useState(20)
  const [showWinMsg, setShowWinMsg] = useState(false)
  const [showNextWin, setShowNextWin] = useState(false)
  const [winPoints, setWinPoints] = useState(0)
  const [nextWin, setNextWin] = useState(0)

  const transparent = {
    opacity: 0
  }

  const opaque = {
    opacity: 100
  }

  useEffect(() => {
    setPoints(parseInt(localStorage.getItem("points")))
  }, [])

  useEffect(() => {
    localStorage.setItem("points", points)
  }, [points])

  return (
    <div className="App">
      <header className="App-header">
        <div>
          {showWinMsg ? (
            <Message
              style={opaque}
              content={`You won ${winPoints} points!`}
            ></Message>
          ) : (
            <Message
              style={transparent}
              content={`You won ${winPoints} points!`}
            ></Message>
          )}
        </div>
        <p>Press the button !</p>
        <p>Your points: {points}</p>
        {showNextWin ? (
          <p style={opaque}>Next win: {nextWin} clicks</p>
        ) : (
          <p style={transparent}>Next win: {nextWin} clicks</p>
        )}
        <Button
          points={points}
          setPoints={setPoints}
          setWinPoints={setWinPoints}
          setShowWinMsg={setShowWinMsg}
          setShowNextWin={setShowNextWin}
          setNextWin={setNextWin}
        ></Button>
      </header>
    </div>
  )
}

export default App
