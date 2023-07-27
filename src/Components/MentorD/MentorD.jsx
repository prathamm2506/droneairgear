import React from 'react'
import './MentorD.css'
import Faqk from '../Faqk/Faqk'
import DevFaqk from '../Faqk/DevFaqk'
import tab from './menInfo-Tab.png'
import mobile from './menInfo-Mobile.png'
import laptop from './menInfo-Lap.png'
import { APie } from '../Faqk/faqkapi'

const MentorD = () => {
  return (
    <div className="mentord">



        <h1>Teach. Create. Earn.</h1>
    <div className="men_per_bg">
    <div className="md-info">
    
        <div className="md-right">
            <img src="https://girlsintech.org/wp-content/uploads/2021/02/Blog.jpg" alt="" />
        </div>
        <div className="md-left">
            

            <Faqk/>


        </div>
        
    </div>
    </div>

    <div className="mentorInfoImg">
        <img src={laptop} className='lap' alt="" />
        <img src={tab} className='tab' alt="" />
        <img src={mobile} className='mob' alt="" />
    </div>
</div>
  )
}

export default MentorD
