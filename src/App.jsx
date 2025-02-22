import { useState } from 'react'
import Chat from './Components/Chat'
import Email from './Components/Email'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Chat />
      <Email />
    </div>
  )
}

export default App
