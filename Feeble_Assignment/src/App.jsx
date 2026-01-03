import React, { useEffect, useState } from 'react'
import './App.css'
import HomePage from './pages/home_page'

function App() {
  const [showHome, setShowHome] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowHome(true)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="main-container">
      {showHome && <HomePage />}
    </div>
  )
}

export default App
