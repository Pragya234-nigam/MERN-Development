'use client';
import React from 'react'

const EventHandling = () => {
  return (
    <div className='max-w-[80%] mx-auto py-10'>
    <div ><h1 className='font-bold text-center text-3xl'>EventHandling</h1>
    <button onClick={()=>{alert('button was clicked');}} 
    className='border p-3 bg-gray-300'>Submit</button>

    <input 
    onChange={()=>{ console.log('value was changed');}}
    className='border p-3 w-full mt-5'
    type="text" />

<input 
    onChange={(e)=>{ console.log(e.target.value);}}
    className='border p-3 w-full mt-5'
    type="text" />
    
    <input className='mt-5' 
    onChange={(e)=>{ console.log(e.target.files);}}
    type="file" />
    </div></div>
  )
}

export default EventHandling;