import React from 'react'

const Loading = () => {
  return (
    <div className='flex justify-center items-center flex-col h-[80vh]'>
        <div className="animate-spin h-14 w-14 rounded-full border-2 border-t-primary"></div>
        <p className='mt-5'>Loading . . .</p>
    </div>
  )
}

export default Loading