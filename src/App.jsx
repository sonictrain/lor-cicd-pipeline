import { useState } from 'react'
import CharacterGallery from './components/CharacterGallery'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CharacterGallery />
    </>
  )
}

export default App
