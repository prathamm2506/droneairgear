import React, { useState } from 'react'
import './IndMain.css'

import ShareModal from '../ShareModal/ShareModal';
import Blok from '../../Internship/Blok'
import { Link } from 'react-router-dom';

const IndMain = () => {

  // const [modalOpened, setModalOpened] = useState(false);
  return (
    <div className='Posts'>
    
    <Link to='/newinternship' className='indbutton r-button' >Post a new Job/Internship</Link>
    {/* <ShareModal modalOpened={modalOpened} setModalOpened={setModalOpened} /> */}
    <div className="scrutiny">
    <Blok/>
      <Blok/>
      <Blok/>
      <Blok/>

    </div>

    </div>
  )
}

export default IndMain
