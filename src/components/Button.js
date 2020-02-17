import React from "react"
import button from "../img/button.png"
import socket from "../services/socket"
import win from "../audio/win.mp3"

const Button = props => {
 
  const playAudio = () => {
    const audioEl = document.getElementsByClassName("audio-element")[0]
    audioEl.play()
  }

  const handleButtonClick = () => {

    socket.click(props, playAudio)

    props.points > 0
      ? props.setPoints(props.points - 1)
      : alert("Cannot click, you are out of points.")

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
