import { useState } from 'react'
import './App.css'

function App() {
  let [count, setcount] = useState(0)
  let [msg, setmsg] = useState("")
  
  let increase_count = ()=>{
    if(count<20){
      setmsg('')
      setcount(count+1)
    }
    else{
      setmsg("cant go above 20")
    }
  }
  
  let decrease_count = ()=>{
    if(count>0){
      setmsg('')
      setcount(count-1)
    }
    else{
      setmsg("cant go below 0")
    }
  }

  return (
    <>
    <h2>{count}</h2>
    <br></br>
    <button onClick={increase_count}>Add</button>
    <span>  </span>
    <button onClick={decrease_count}>subtract</button>
    <br></br>
    <p>{msg}</p>
    </>
  )
}

export default App
