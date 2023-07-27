import React from 'react'
import './Header.css'

import VideoBg from '../../assets/badal.mp4'

const Header = () => {
  return (
    <div className='header '>
            <video src={VideoBg} playsInline muted loop autoPlay /> 
            <img src="" alt="" />
            <div className="h-box">
                <h1 className='stratum'>Your Dream To Fly Begins Here</h1>
                    <div className="button">
                        Register Now
                    </div>
                </div>  
    </div>
  )
}

export default Header
