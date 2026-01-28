import React from 'react'

function Todo({todo}) {
  return (
    <>
      <div className="flex flex-col gap-4 p-6 m-4 max-w-xl bg-white rounded-xl border-l-8 border-amber-400 shadow-xl shadow-blue-100/50 hover:shadow-blue-200 transition-shadow">
    
        {/* Header Section*/}
        {todo?.id && (
          <div className="flex items-start">
            <span className="bg-amber-100 text-amber-700 text-xs font-black px-2 py-1 rounded-md uppercase">
              Task #{todo.id}
            </span>
          </div>
        )}

        {/* Content Section */}
        <div className="space-y-2">
          {todo?.title && (
            <h2 className="text-xl font-extrabold text-gray-800 capitalize">
              {todo.title}
            </h2>
          )}
          
          <div className="flex flex-col gap-1">
            <span className="text-[10px] font-bold text-blue-500 uppercase">
              Description
            </span>
            {todo?.body && (
              <p className="text-gray-600 font-medium leading-relaxed">
                {todo.body}
              </p>
            )}
          </div>
        </div>
      </div>
    </>

  )
}

export default Todo