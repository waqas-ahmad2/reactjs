import React from 'react'
import { NavLink } from 'react-router-dom'


function Navbar() {
  return (
    <>
        <div className='nav'>    
            <NavLink to={"/"} className={(e)=>e.isActive?"red":""}>Home</NavLink>
            <NavLink to={"/about"} className={(e)=>e.isActive?"red":""}>About</NavLink>
        </div>
    </>

  )
}

export default Navbar