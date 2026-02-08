import { useState } from 'react'
import './App.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Section from '../components/Section'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='flex flex-col min-h-screen'>
      <Navbar/>
      <Section/>
      <Footer/>
    </div>
    </>
  )
}

export default App
