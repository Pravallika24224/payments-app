import React from 'react'
import { Link } from 'react-router-dom'

const BottomWarning = ({label, buttonText, to}) => {
  return (
    <div className='flex justify-center text-sm py-2 font-medium '>
      <div>{label}</div>
      <Link className='pl-1 underline' to={to}>{buttonText}</Link>
    </div>
  )
}

export default BottomWarning