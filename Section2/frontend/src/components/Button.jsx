import React from 'react'

const Button = ({disabled=false, children}) => {
  return (
    <button disabled={disabled} className='bg-blue-500 disabled:opacity-50 text-white px-3 py-1 rounded-md' >{children}</button>
  )
}

export default Button;