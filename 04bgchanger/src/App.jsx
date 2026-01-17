import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("Azure")

  const changeColor = (e)=>
     setColor(e.target.style.backgroundColor)
  

  return (
    <>
    <div className='w-full h-screen duration-500' style={{backgroundColor:color}}>
      <div className='fixed flex flex-wrap inset-x-0 px-2 py-2 bottom-12 rounded-full justify-center'>
        <div className='flex flex-wrap justify-center rounded-full shadow-lg gap-3 bg-white py-2 px-3 text-white'>
          <button className='cursor-pointer rounded-full px-4 py-1 shadow-lg' style={{backgroundColor:'purple'}} onClick={changeColor}>White</button>
          <button className='cursor-pointer rounded-full px-4 py-1 shadow-lg' style={{backgroundColor:'green'}}onClick={changeColor}>Green</button>
          <button className='cursor-pointer rounded-full px-4 py-1 shadow-lg' style={{backgroundColor:"red"}} onClick={changeColor}>Red</button>
          <button className='cursor-pointer rounded-full px-4 py-1 shadow-lg' style={{backgroundColor:"blue"}} onClick={changeColor}>Blue</button>
        </div>
        
      </div>
    </div>
    </>
  )
}

export default App
