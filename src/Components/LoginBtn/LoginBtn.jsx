import React, { useEffect } from 'react'
import {FiLogIn} from 'react-icons/fi'
import './LoginBtn.css'
import { Link } from 'react-router-dom'
import { useFirebase } from '../../context/firebase'
const LoginBtn = () => {

  const firebase = useFirebase();

  // useEffect(()=>{
  //   if
  // })

  if(!firebase.isLogedIn)

  return (
    <Link to='/login' className='loginBtn'>
 
       <p>Login</p> 
        <FiLogIn className='login-icon'/>

    </Link>
  )

  else(firebase.isLogedIn)
  return(
    <Link to='/dashbaord' className='loginBtn'>
 
       <p>Dashboard</p> 
        <FiLogIn className='login-icon'/>

    </Link>
  )
}

export default LoginBtn
