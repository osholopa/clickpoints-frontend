import React, { useState, useEffect } from "react"
import Button from "./Button"
import "./App.css"
import Message from "./Message"
import socket from "../services/socket"

const App = () => {
  const [points, setPoints] = useState(20)
  const [showWinMsg, setShowWinMsg] = useState(false)
  const [winPoints, setWinPoints] = useState(0)
  const [nextWin, setNextWin] = useState(0)

  const transparent = {
    opacity: 0
  }

  const opaque = {
    opacity: 100
  }

  useEffect(() => {
    if (!isNaN(parseInt(localStorage.getItem("points")))) {
      setPoints(parseInt(localStorage.getItem("points")))
    }
    socket.getNextWin(setNextWin)
  }, [])

  useEffect(() => {
    localStorage.setItem("points", points)
  }, [points])

  return (
    <div className="App">
      <header className="App-header">
        <h1>Clickpoints!</h1>
      </header>
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
      <p>Multiplayer button click game</p>
      <p>Press the button !</p>
      <p>Your points: {points}</p>
      <p>Next win: {nextWin} clicks</p>
      <Button
        points={points}
        setPoints={setPoints}
        setWinPoints={setWinPoints}
        setShowWinMsg={setShowWinMsg}
        setNextWin={setNextWin}
      ></Button>
      <p>10 clicks: 5 points</p>
      <p>100 clicks: 40 points</p>
      <p>500 clicks: 250 points</p>
    </div>
  )
}

export default App
