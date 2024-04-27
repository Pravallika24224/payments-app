import React from 'react'

const InputBox = ({label, placeholder, onChange}) => {
  return (
    <div>
      <div className='text-sm text-left font-medium py-2'>
        {label}
      </div>
      <input className='w-full rounded border border-slate-200 h-10 px-2 my-1' placeholder={placeholder} onChange={onChange}/>
    </div>
  )
}

export default InputBox