import { useState,useEffect } from 'react'
import './App.css'
import Todo from '../components/Todo'

function App() {
  

  const [list, setList] = useState([])
  useEffect(()=>{fetch("https://jsonplaceholder.typicode.com/posts")
            .then((res)=>res.json())
            .then(data =>{setList(data)})
            .catch((e)=>console.log(e))}
,[])


  return (
    <>
      <div className="min-h-screen w-full bg-fuchsia-50 flex flex-col items-center py-12 px-4 gap-8">

        <header className="text-center mb-4">
          <h1 className="text-4xl font-black text-emerald-900 tracking-tight">
            Task Dashboard
          </h1>
          <p className="text-emerald-700 font-medium">
            You have {list.length} items
          </p>
        </header>

        <div className="w-full flex flex-col items-center gap-6">
          {list.map((item) => (
            <Todo key={item.id} todo={item} />
          ))}
        </div>
      </div>
    </>
  )
}

export default App
