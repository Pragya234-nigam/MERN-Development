import React from 'react'

const Card = ({title,description,primaryText,secondaryText }) => {
  return (
    <div className='bg-white rounded-md shadow-md p-6'>
        <h1 className='text-xl font-bold mb-3'>{title}</h1>
        <p>{description}</p>
       <button className='bg-blue-500 rounded text-white px-3 py-1'>{primaryText}</button>
       <button className='border border-blue-500 rounded text-blue-500 px-3 py-1'>{secondaryText}</button>
      </div>
  )
}

export default Card;