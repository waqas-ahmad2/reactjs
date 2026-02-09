import React, { useEffect, useRef, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

function Section() {
  
  
  const [task,setTask] = useState('')
  const [showfinish, setShowfinish] = useState(true)

  const [list,setList] = useState(()=>{
    const savedlist = window.localStorage.getItem("list")
    return savedlist?JSON.parse(savedlist):[]
  })
   
  const [editID,setEditID] = useState(null)

  // for focus on the task input field
  const refinput = useRef('')

  useEffect(() => {
       window.localStorage.setItem("list",JSON.stringify(list))
  },[list])
  

  useEffect(() => {
        refinput.current.focus(),[task]
  })
  
  // for adding functionality
  const handleAdd = ()=>{
    if(editID){
      let newlist = list.map((item)=>{
        if(item.id === editID){
          return {...item, task:task}
        }
        return item
      })
      
      setList(newlist)
      setEditID(null)
      setTask('')

    }
    else{
  
      if(task.trim()!==""){
        setList([...list,{id:uuidv4() ,task, isCompleted:false}])
        setTask('')
      }
    }
    setEditID(null)
  }

  // for checkbox functionality
  const handleCheckbox = (id)=>{
    const newlist = list.map((item)=>{
      if(item.id === id) {
        return {...item, isCompleted:!item.isCompleted}
      }
      return item
    })
    setList(newlist)
  }

  // for delete functionality
  const handleDelete = (id)=>{
    const newlist = list.filter((item)=>{
        return item.id !== id
      })
      setList(newlist)
  }

  // for edit functionality
  const handleEdit = (id)=>{
    let text = list.filter((item)=>{
      return item.id === id
    })
    
    
    setTask(text[0].task)
    setEditID(id)
  }

  // for task input field
  const handleChange = (e)=>{
    setTask(e.target.value)
  }

  // handle filters
  const filterShow = ()=>{
    setShowfinish(!showfinish)
  } 

  return (
    <>
        <div className='flex flex-col w-full grow p-6 bg-indigo-100 items-center'>

          <div className='border-2 border-b-cyan-800 w-full flex gap-2 px-2 py-4 items-center'>
            <label className='p-2 font-bold text-center' htmlFor='task'>Task: </label>
            <div className='border-2 px-3 py-1 rounded-md shadow-slate-800 shadow-md grow'>
              <textarea id='task'
                className="w-full border-none outline-none wrap-break-word"
                type='text'
                value={task}
                ref={refinput}
                onChange={handleChange}/>
            </div>
            <button className='bg-teal-300 p-2 rounded-lg hover:bg-teal-600 active:bg-teal-700
              active:scale-90' onClick={handleAdd}>{editID?"Update Task":"Add Task"}</button>
          </div>

          <div className='p-2 my-4 flex gap-2 border-2 rounded-2xl w-full'>
            <input type='checkbox'
            id='filter'
            onChange={filterShow}
            checked={!showfinish}
            />
            <label htmlFor="filter">Hide finished Tasks</label>
          </div>


          <div className=' px-3 py-2 flex flex-col mt-5 w-full'>
            {
            list.length===0 ? <div>Nothing to display</div> : (
            list.map((item)=> (
              (showfinish || !item.isCompleted) &&
              <div key={item.id} className='flex items-center grow gap-2 mt-2 mb-2'>

                {/* checkbox */}
                <div className='content-center'>
                  <input type="checkbox"
                  onChange={()=>handleCheckbox(item.id)}
                  checked={item.isCompleted}
                  />
                </div>
               
               {/* input display */}
                <div className={`border-2 rounded-md p-2 wrap-break-word min-w-0 flex-1 ${item.isCompleted?'line-through':''}`}>
                  {item.task}
                </div>

                {/* buttons */}
                <button className='bg-amber-200 p-2 rounded-lg hover:bg-amber-300 active:bg-amber-400
                  active:scale-90' onClick={()=>handleEdit(item.id)}>Edit</button>
                <button className='bg-red-400 p-2 rounded-lg hover:bg-red-500 active:bg-red-600
                  active:scale-90' onClick={()=>handleDelete(item.id)}>Delete</button>
               
              </div>
            )))
            }
          </div>
          
        </div>
    </>
  )
}
 
export default Section