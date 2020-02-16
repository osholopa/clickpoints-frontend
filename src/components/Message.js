import React from "react"
import styled from "styled-components"

let BouncyMsg = styled.div`
  color: yellow;
  border: 1px solid yellow;
  padding: 15px;
  border-radius: 15px;
  margin: 0 auto;
`

const Message = props => {
  return (
    <>
      <BouncyMsg style={props.style}>
        <div>{props.content}</div>
      </BouncyMsg>
    </>
  )
}

export default Message
