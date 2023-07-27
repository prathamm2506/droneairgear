import React from 'react'
import './MentorPro.css'

import {AiFillStar} from 'react-icons/ai'
import {BsFillChatTextFill} from 'react-icons/bs'
import {MdCall} from 'react-icons/md'
import {BiBadgeCheck} from 'react-icons/bi'

const MentorPro = () => {
  return (
    <div className='mpro'>
        <div className="mpro1">
            <div className="mpro1-img">
                <img src="https://www.betterup.com/hubfs/Portrait-of-young-woman-employee-getting-fired-from-work-signs-you-are-being-pushed-out-of-your-job.jpg" alt="" />
            </div>

            <div className="mpro1-txt">
                <span className='mpro1-fees'> $166</span> /Month
            </div>
        </div>


        <div className="mpro2">
            <div className="mpro2-name">Anna Kotliarevskaia</div>
            <div className="mpro2-job">Senior Software Engineer at <span>Square</span> 
</div>
            <div className="mpro2-exp">9+ years of experience in Front End Engineering</div>

            <div className="mpro2-rating">
            <AiFillStar className="mpro2-star"/>
            <AiFillStar className="mpro2-star"/>
            <AiFillStar className="mpro2-star"/>
            <AiFillStar className="mpro2-star"/>
            <AiFillStar className="mpro2-star monroe"/> 5.0 <span className='mpro2-rev' >(16 reviews)</span> </div>

            <div className="mpro2-services">
                <span className='mpro2-serv'>
                <BsFillChatTextFill/> Chat
                </span>
                <span className='mpro2-serv'>
                <MdCall/>Call
                </span>
                <span className='mpro2-serv'>
                <BiBadgeCheck/>Hands-on
                </span>
                <span className='mpro2-serv'>
                <BiBadgeCheck/>Tasks
                </span>
            </div>

            <div className="mpro2-para">I am a Front End Software Engineer with over 9 years of experience at various tech companies, currently based in Toronto, Canada. I am currently working at Square and was previously at Coinbase, Taplytics. I also mentor at Lighthouse Labs: Canada's Leading Coding Bootcamp on the side. I have professional, …</div>

            <div className="mpro2-speciality">
                <div className="mpro2-spec">
                Engineering & Data
                </div>
                <div className="mpro2-spec">
                Frontend
                </div>
                <div className="mpro2-spec">
                Javasript
                </div>
                <div className="mpro2-spec">
                React
                </div>
            </div>

            <div className="mpro2-btn">
                Arrange Session
            </div>


        </div>
      
    </div>
  )
}

export default MentorPro
