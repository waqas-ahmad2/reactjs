import React from 'react'

function Navbar() {
  return (
    <div className="w-full flex justify-between items-center max-w-full bg-slate-700 text-blue-100 font-medium px-5 py-3 duration-200 ">
        <div className='hover:text-amber-100 cursor-pointer'>
            <span>TODO</span>
        </div>
        <div>
            <ul className='flex flex-wrap gap-4'>
                <li className='cursor-pointer hover:border-amber-400 active:text-amber-400 px-5 py-1 border-2 rounded-2xl border-slate-200'>Home</li>
                <li className='cursor-pointer hover:border-amber-400 active:text-amber-400 px-5 py-1 border-2 rounded-2xl border-slate-200'>Tasks</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar