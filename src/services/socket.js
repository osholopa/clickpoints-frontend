import socketIOClient from "socket.io-client"

const url = "/"

const socket = socketIOClient(url)

const click = (props, playAudio) => {
  const {
    setShowWinMsg,
    setWinPoints,
    points,
    setPoints,
    setNextWin,
    setShowNextWin
  } = props

  socket.emit("click")

  socket.on("nextWin", data => {
    setNextWin(data.nextWin)
    setShowNextWin(true)
    setTimeout(() => {
      setShowNextWin(false)
    }, 1000)
  })

  socket.on("win", data => {
    playAudio()
    console.log(`You won ${data.points} points!`)
    setPoints(points - 1 + data.points)
    setWinPoints(data.points)
    setShowWinMsg(true)
    setTimeout(() => {
      setShowWinMsg(false)
    }, 1000)
  })
}

export default { click }
