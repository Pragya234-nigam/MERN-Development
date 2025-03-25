'use client';
import axios from 'axios';
import { useParams } from 'next/navigation';
import React, { useEffect } from 'react'

const UpdateUser = () => {
  const { id } = useParams();
  const [userData, setUserData] = useState({});
  const getUserData=async()=>{
    const res=await axios.get('http://localhost:5000/user/getbyid/'+id);
    console.log(res.data);
    setUserData(res.data);
  }
  useEffect(() => {
    getUserData();
  }, []);
  return (
    <div>Update User</div>
  )
}

export default UpdateUser;