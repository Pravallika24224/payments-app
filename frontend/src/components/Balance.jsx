import React from 'react'

const Balance = ({ amount }) => {
  return (
    <div className='flex'>
      <div className='font-bold text-lg'>Your balance</div>
      <div className='font-semibold text-lg ml-4'>Rs {amount}</div>
    </div>
  )
}

export default Balance