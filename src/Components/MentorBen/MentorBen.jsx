import React from 'react'
import './MentorBen.css'

import Ill1 from '../../assets/ill/mentor1.jpg'
import menproc from '../../assets/mentorProcedure.png'
import menprocD from '../../assets/men-down.png'

import Ill2 from '../../assets/ill/mentor2.jpg'
import Ill5 from '../../assets/ill/ill-3.png'
import Ill6 from '../../assets/ill/ill-4.png'
import Ill3 from '../../assets/ill/mentor3.jpg'
import Ill4 from '../../assets/ill/mentor4.jpg'

const MentorBen = () => {
  return (
    <div className='ibenefits'>
    <h2 className="ib-heading">Benefits of Becoming a Mentor</h2>

<div className="ib-row">


    <div className="ib-inner">
        <div className="ib-icon">
            <img src={Ill5} className="ib-iconn" />
        </div>
        <div className="ib-text">
            <h2>Post Project</h2>
            <p>
                Our intense programs are taught by industry experts & candidates are job ready as they work on relevant projects.
            </p>


        </div>
    </div>

    <div className="ib-inner">
        <div className="ib-icon">
            <img src={Ill4 
            } className="ib-iconn" />
        </div>
        <div className="ib-text">
            <h2>Post Project</h2>
            <p>
                Our intense programs are taught by industry experts & candidates are job ready as they work on relevant projects.
            </p>


        </div>
    </div>

    <div className="ib-inner">
        <div className="ib-icon">
            <img src={Ill6} className="ib-iconn" />
        </div>
        <div className="ib-text">
            <h2>Post Project</h2>
            <p>
                Our intense programs are taught by industry experts & candidates are job ready as they work on relevant projects.
            </p>


        </div>
    </div>

    <div className="ib-inner">
        <div className="ib-icon">
            <img src={Ill3} className="ib-iconn" />
        </div>
        <div className="ib-text">
            <h2>Post Project</h2>
            <p>
                Our intense programs are taught by industry experts & candidates are job ready as they work on relevant projects.
            </p>


        </div>
    </div>


</div>

<div className="ib-timeline " style={{margin:'5rem auto 0'}}>
<img className='dis' src={menproc} alt="" />
<img className="appe" src={menprocD} alt="" />
</div>
  
</div>
  )
}

export default MentorBen
