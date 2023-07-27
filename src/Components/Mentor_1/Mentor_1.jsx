import React from 'react'
import './Mentor_1.css'

import Ill1 from '../../assets/ill/register.png'
import Ill2 from '../../assets/ill/find_mentor.png'
import Ill3 from '../../assets/ill/connect_mentor.png'
import Ill4 from '../../assets/ill/mentor4.jpg'

const Mentor_1 = () => {
  return (
    <div className="mentor">
    
    <h2 className="men-heading">
    How it Works
    </h2>

  <div className="men-row">

    <div className="men-box">
      <div className="men-inner">
        <div className="men-icon">
          <img src={Ill1} className="men-iconn" />
        </div>
        <div className="men-text">
          <h2>REGISTER</h2>
          <p>
          Register as a mentor, join a cohort, or host a cohort to start your mentorship journey.
          </p>

        </div>
      </div>
    </div>

    <div className="men-box">
      <div className="men-inner">
        <div className="men-icon">
          <img src={Ill2} className="men-iconn" />
        </div>
        <div className="men-text">
        <h2>FIND A MATCH</h2>
          <p>
          Get matched by our AI platform based on sector, stage, and functional skillset.
          </p>

        </div>
      </div>
    </div>

    <div className="men-box">
      <div className="men-inner">
        <div className="men-icon">
          <img src={Ill3} className="men-iconn" />
        </div>
        <div className="men-text">
          <h2>CONNECT TO HELP</h2>
          <p>
          Confirm to mentor startups matched by our portal or select your own startups.
          </p>

        </div>
      </div>
    </div>

    <div className="men-box">
      <div className="men-inner">
        <div className="men-icon">
          <img src={Ill4} className="men-iconn" />
        </div>
        <div className="men-text">


          <h2>MANAGE MENTORSHIP</h2>
          <p>
          Manage interactions and share your knowledge via our platform
          </p>

        </div>
      </div>
    </div>


    
  </div>
      
    </div>
  )
}

export default Mentor_1
