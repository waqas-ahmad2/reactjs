import { useState, useEffect, useCallback, useRef } from 'react'
import './App.css'

function App() {
  const [password, setPassword] = useState("")
  const [length, setLength] = useState(8)
  const [charAllowed, setCharAllowed] = useState(false)
  const [numberAllowed, setNumberAllowed] = useState(false)

  const passRef = useRef(null)

  const copyToClipboard = useCallback(() => {
    passRef.current?.select();
    passRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password)
  }, [password])

  const passwordGenerator = useCallback(()=>{
    const numbers = '1234567890'
    const chars  = '!@#$%^&*()'
    const alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    let str = alpha
    let pass = ''

    if(charAllowed){
      str += chars
    }

    if(numberAllowed){
      str += numbers
    }

    for (let index = 0; index < length; index++) {      
      pass += str[Math.floor(Math.random()*str.length)]
    }
    setPassword(pass)

  },[length,charAllowed,numberAllowed,setPassword])
  
  useEffect(()=>{
    passwordGenerator()},[length,charAllowed,numberAllowed,passwordGenerator]
  )
  

  return (
    <>
      <div className="w-full max-w-xl mx-auto shadow-md px-4 py-3 my-8 bg-gray-800 rounded-lg text-orange-400">

        <h1 className='text-white text-center my-5'>Password Generator</h1>

        <div className="flex outline-1 outline-fuchsia-500 shadow rounded-lg mb-4 overflow-hidden bg-white">

          <input 
            type='text'
            className="w-full outline-none py-1 px-3"
            placeholder='Password'
            value = {password}
            readOnly
            ref={passRef}
          />
          
          <button
          className="bg-blue-500 text-white px-3 py-1 cursor-pointer"
          onClick={copyToClipboard}
          >Copy</button>

        </div>
        
        <div className='flex justify-center gap-4'>
            
            <div className='flex items-center gap-x-2'>
              <input
              type='range'
              defaultValue={length}
              max={30}
              min={8}
              onChange={(e)=> setLength(e.target.value)}
              />
              <label htmlFor='charAllowed'>length: {length}</label>
            </div>

            <div className='flex items-center gap-x-1'>
              <input
              type='checkbox'
              id='charAllowed'
              defaultChecked={charAllowed}
              onChange={()=>{setCharAllowed((prev)=>!prev)}}
              />
              <label htmlFor='charAllowed'>Characters</label>
            </div>

            <div className='flex items-center gap-x-1'>
              <input
              type='checkbox'
              id='numberAllowed'
              defaultChecked={numberAllowed}
              onChange={()=>{setNumberAllowed((prev)=>!prev)}}
              />
              <label htmlFor='numberAllowed'>Numbers</label>
            </div>

        </div>

      </div>

      
    </>
  )
}

export default App
