'use client';
import axios from 'axios'
import React, { useEffect } from 'react'

 const ManageUser = ()=>{
    const fetchUserData = async ()=>{
    const res= await axios.get('http://localhost:5000/user/getall');
    console.table(res.data);
    }
   
    useEffect(() => {
     fetchUserData();
    }, []);
    
  return (
    <div>Manage</div>
  )
}

export default ManageUser;