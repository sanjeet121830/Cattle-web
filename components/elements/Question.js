import React from 'react'

function Question({children}) {
    return (
<div className="h-20 bg-gray-800 max-w-4xl mx-auto flex flex-row items-center justify-between px-4">
          <div className="text-white text-3xl font-sans">{children}</div>
          <div className="text-white text-4xl font-sans">+</div>
        </div>
    )
}

export default Question
