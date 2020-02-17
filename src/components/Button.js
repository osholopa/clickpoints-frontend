import React from "react"
import button from "../img/button.png"
import socket from "../services/socket"
import win from "../audio/win.mp3"

const Button = props => {
  const playAudio = () => {
    const audioEl = document.getElementsByClassName("audio-element")[0]
    audioEl.play()
  }

  const restartGame = () => {
    if (window.confirm("Oops, you're out of points. Restart game?")) {
      props.setPoints(20)
      localStorage.setItem("points", props.points)
    }
  }

  const handleButtonClick = () => {
    socket.click(props, playAudio)

    props.points > 0 ? props.setPoints(props.points - 1) : restartGame()
  }

  return (
    <>
      <img
        src={button}
        className="App-button"
        alt="button"
        onClick={handleButtonClick}
      />
      <audio className={"audio-element"}>
        <source src={win}></source>
      </audio>
    </>
  )
}

export default Button
