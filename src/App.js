import React from 'react'
import io from 'socket.io-client'
const url = 'http://localhost:1717/'

const App = () => {
  const socket = io(url)
  const data = {
    name: "mukesh"
  }
  socket.on('connect', () => {
    socket.emit('join', data)
    socket.on('joined', (data) => {
      console.log(data)
    })
  })
  return (
    <div>

    </div>
  )
}

export default App
