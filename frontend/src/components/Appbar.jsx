import React from 'react'

const Appbar = () => {
  return (
    <div className='flex justify-between h-14 shadow-lg'>
      <div className='flex flex-col justify-center ml-4 font-medium'>Payments App</div>
      <div className='flex'>
        <div className='flex flex-col justify-center mr-2 font-medium'>Hello</div>
        <div className='flex justify-center rounded-full h-11 w-11 bg-slate-200 mr-2 mt-1.5'>
          <div className='flex flex-col justify-center text-xl font-medium'>U</div>
        </div>
      </div>
    </div>
  )
}

export default Appbar