import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>{import.meta.env.VITE_APPWRITE_URL}</h1>
    </>
  )
}

export default App
