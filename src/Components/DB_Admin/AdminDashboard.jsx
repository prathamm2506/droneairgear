import React, { useEffect, useState } from 'react'
import AdminLeft from './AdminLeft/AdminLeft'
import RightSide from './AdminRight/RightSide'
import AdminCenter from './AdminCenter/AdminCenter'
import './AdminDashboard.css'
import { useFirebase } from '../../context/firebase'
import Log from './Auth/Log'
import { useParams } from 'react-router-dom'
import Mentortb from './Mentortb/Mentortb'
const AdminDashboard = () => {

  const firebase = useFirebase();

  // useEffect(() => {
  //   if(firebase.isLogedIn);
  // })
  if(!firebase.isLogedIn) return <Log/>
  
  

  

  return (
    <div className='indusDB'>
    <div className="blur" style={{ top: '-18px', right: '0' }}></div>
    <div className="blur" style={{ top: '36%', left: '-8rem' }}></div>
    <div className="topView">

  
    <AdminLeft />
    <AdminCenter />
    {/* <RightSide /> */}
    </div>
      {/* <div className="btmView">
        <Mentortb/>
      </div> */}
    </div>
  )
}

export default AdminDashboard
