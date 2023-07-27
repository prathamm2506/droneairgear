import React, { useState } from 'react'
import './Posts.css'

import ProfileModal from '../../DB_Mentor/ProfileModal/ProfileModal';
import Job from '../Job/Job'

const Posts = () => {
  const [modalOpened, setModalOpened] = useState(false);

  return (
    <div className='Posts'>
    
    <button className='indbutton r-button' onClick={()=> setModalOpened(true)}>Post a new Job/Internship</button>
    <ProfileModal modalOpened={modalOpened} setModalOpened={setModalOpened} />

      <Job />
      <Job />
      <Job />
      <Job />
    </div>
  )
}

export default Posts
