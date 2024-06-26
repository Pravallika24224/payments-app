import React from 'react'

const Button = ({name, onClick}) => {
  return (
      <button className='w-full rounded-lg h-10 text-sm bg-slate-800 hover:bg-slate-900 text-white px-5 py-2.5 me-2 mb-2' onClick={onClick}>{name}</button>
  )
}

export default Button