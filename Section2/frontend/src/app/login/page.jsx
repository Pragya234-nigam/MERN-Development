import React from 'react';
import classes from './login.module.css';

const Login = () => {
  return (
    <div>
        <h1 className='text-center font-bold text-3xl'>Login Page</h1>

        <button className='btn'>Login button</button>
        <button className={classes.loginBtn}>Submit Button</button>
    </div>
  )
}

export default Login;