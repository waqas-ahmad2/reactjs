import { useState } from 'react'
import './App.css'

function App() {
  let [counter,setcounter] = useState(0);

  let addValue = ()=>{
    if (counter<20){
      setcounter(counter+1)
    }
  }

  let minusValue = ()=>{
    if (counter>0){
      setcounter(counter-1)
    }
  }
  return (
    <>
      <h1>counter {counter}</h1>

      <button onClick={addValue}>Add</button>
      <span> </span>
      <button onClick={minusValue}>Minus</button>
    </>
  )
}

export default App
