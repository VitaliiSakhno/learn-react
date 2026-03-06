import { useState } from 'react'

import '../App/App.css'
import Gallery from '../Gallery/Gallery'
import Clicker from '../Clicker/Clicker'

function App() {
  const [clicks, setClicks] = useState(0);

 const handleIncrement = () => {
  setClicks((previous) => previous + 1)
 } 

 const handleDecrement= () => {
  setClicks((previous) => previous - 1)
 } 

 const handleReset = () => {
  setClicks(0)
 }

  return (
    <>
      <Gallery/>
      <Clicker onIncrement={handleIncrement} onDecrement={handleDecrement} onReset={handleReset} clicks={clicks}/>
    </>
  )
}

export default App
