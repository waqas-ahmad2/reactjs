import { useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from '../components/Home';
import User from '../components/User';
import About from '../components/About';
import Navbar from '../components/Navbar';

function App() {
 const router = createBrowserRouter([
  {
    path:"/",
    element: <><Navbar/><Home/></>
  },
  {
    path:"/about",
    element: <><Navbar/><About/></>
  },
  {
    path:"/User/:username",
    element: <><Navbar/><User/></>
  },
  {
  path: "*",
  element: <div>404 - Page Not Found</div>
}
]
 )


  return(
    <>
      <RouterProvider router={router} />
    </>
  )
}
export default App
