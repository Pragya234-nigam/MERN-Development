'use client';
import { IconPencil, IconTrash } from '@tabler/icons-react';
import React, { useState } from 'react'

const TodoList = () => {
    
    // let count=1;

    // const [count, setCount] = useState(1); //read,update
        //Hooks react Life cycle mannagment
      
        const [taskList, setTaskList] = useState([]);

    const addNewTask=(e)=>{
    if(e.code==='Enter'){ //e.value
        console.log(e.target.value);
            const newTask={text:e.target.value,completed:false};
            setTaskList([newTask,...taskList]);// ... taking elements 
        e.target.value=''; 
    
        // clear input content
    }
    }

    const deleteTask=(index)=>{
        console.log(index);

        const temp=taskList;
        temp.splice(index,1);
        setTaskList([...temp]);
    }
    const toogleTask= (index)=>{
        const temp=taskList;
        temp[index].completed= !temp[index].completed;
        setTaskList([...temp]);

    }

    
  return (
  
  <div>
        <div className='container mx-auto py-10'>
            <h1 className='text-center text-3xl font-bold'>TO DO LIST</h1>

            <div className='mt-5 border shadow-lg p-8 rounded-lg'>
                <div className='p-5 border-b'>
                    <input className='border-2 border-blue-300 px-4 py-2 w-full rounded' type="text"
                      onKeyDown={addNewTask} />
                </div>
                       <div className='p-5 h-[60vh overflow-y-auto'>
                        {/* <h1 className='text-2xl'>{count}</h1>  */}
                           {/* <button onClick={ ()=>{ setCount(count+1); console.log(count);}}>add Count</button> */}

                           {
                            taskList.map(  (task,index)=>{
                                return(
                                    <div key={index} className='flex justify-between items-center mb-3 rounded shadow p-4  text-white bg-blue-500'>
                                     <div>

                                        {
                                            task.completed ? (
                                                 <p className='w-fit bg-green-500 text-white rounded-full px-2'>Done</p>

                                            ) :(
                                            <p className='w-fit bg-green-500 text-white rounded-full px-2'>Not done</p>)
                                        

                                            // 'done.😂':'not done😐'//window . 
                                        }
                                        <p className='font-bold'>{task.text}</p>
                                        </div>

                                        <div className='flex gap-2'>
                                            <button onClick={()=>{deleteTask(index)}}className='bg-white text-red-500 p-2 rounded'>
                                                <IconTrash/>
                                            </button>
                                            <button onClick={()=>{toogleTask(index)}}className='bg-white text-blue-500 p-2 rounded'>
                                                <IconPencil/>
                                            </button>
                                        </div>
                                    </div>
                                )

                            })
                           }
                                </div>
                                </div>

                                <p className='text-lg font-bold my-6 text-center'>
                                     {taskList.filter(t => !t.completed).length} tasks pending</p>
                                     </div>
                                      </div>
  )
}

export default TodoList;