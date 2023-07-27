import React, { useEffect } from 'react'
import './Course.css'
import Drone from '../../assets/drone.png'
import Pilot from '../../assets/pilot.png'
import {Link} from 'react-router-dom'
import Aos from 'aos'
import "aos/dist/aos.css"
import C from '../../assets/c-girl.png'
import Uni from '../../assets/c-uni.png'
import Ind from '../../assets/c-ind.png'
import Men from '../../assets/c-men.png'
import agil from '../../assets/agile.png'
import start from '../../assets/start-up.png'
import inter from '../../assets/internship.png'
import sNew from '../../assets/service_New.jpg'


const Course = () => {

    useEffect(() => {
        Aos.init({
            duration:600,
            easing:"ease",
            once:true,
        });
    });

  return (
    <div className="course">

        <div className="c-head">

            <div className="c-bar">
            <h2>Our Services</h2>
            <p>We provide countless solutions to meet the needs of businesses and individuals alike.We are the trustful answer for enterprises that are inclining towards digital era. <br /> Our services include:</p>
            
            </div>
           
        </div>
        
        <div className="c-row">

            <div className="c-img" data-aos="fade-up" data-aos-delay="100">
                <img src={sNew}  />

            </div>         

 
            <Link to='/students' className="c-box" data-aos="fade-right" data-aos-delay="100">
            <div className="c-inner">
                <div className="c-icon">
                <img src={C} alt="" className='c-iconn' />
                </div>
                <div className="c-text">
                <h2>Training Courses</h2>
                <p>Various Types of Courses which covers a wide range of the topics which will benifit a lot.</p>
                    <a className='c-span'>Know More</a>
                </div>
                </div>
            </Link>
 

            <Link to='/universityPage'className="c-box" data-aos="fade-right" data-aos-delay="200">
                <div className="c-inner">
                <div className="c-icon">

                <img src={Uni} alt="" className='c-iconn' />
                </div>
                <div className="c-text">
                <h2>University Support</h2>
                <p>Universities can launch a course as well as get the students for courses with support reqired to launch the program.</p>
                    <a className='c-span'>Know More</a>
                </div>
                </div>
            </Link>

            
            <Link to='/industrypage' className="c-box " data-aos="fade-right" data-aos-delay="300">
            <div className="c-inner">
            
                <div className="c-icon">
                <img src={Ind} className='c-iconn'/>
                </div>
                <div className="c-text">
                <h2>Industrial Support</h2>
                <p>Industries can hire the interns as well as the permenent staff both experts as well as less skilled workers, can also collorate for different other options.</p>
                    <a className='c-span'>Know More</a>
                </div>
                </div>
            </Link>

            <Link to='/mentors' className="c-box" data-aos="fade-right" data-aos-delay="400">
            <div className="c-inner">
                <div className="c-icon">
                <img src={Men} className='c-iconn'/>
                </div>
                <div className="c-text">
                <h2>Mentorship Support</h2>
                <p>Mentors can joint the company for the support of the company based on the different criteries.
Read more for the more information.</p>
                    <a className='c-span'>Know More</a>
                </div>
                </div>
            </Link>

            <Link to='/startup' className="c-box" data-aos="fade-right" data-aos-delay="200">
            <div className="c-inner">
                <div className="c-icon">
                <img src={start} className='c-iconn'/>
                </div>
                <div className="c-text">
                <h2>Startup fundings</h2>
                <p>Startup fundings are crucial financial investments that fuel the growth and success and drive market disruption.</p>
                    <a className='c-span'>Know More</a>
                </div>
                </div>
            </Link>

            <Link to='/internMain' className="c-box" data-aos="fade-right" data-aos-delay="300">
            <div className="c-inner">
                <div className="c-icon">
                <img src={inter} className='c-iconn'/>
                </div>
                <div className="c-text">
                <h2>Internship Programs</h2>
                <p>Our incubation center serves as a supportive ecosystem, providing resources, mentorship, and networking opportunities to startups.</p>
                    <a className='c-span'>Know More</a>
                </div>
                </div>
            </Link>

            <Link to='/incubationPage' className="c-box" data-aos="fade-right" data-aos-delay="400">
            <div className="c-inner">
                <div className="c-icon">
                <img src={agil} className='c-iconn'/>
                </div>
                <div className="c-text">
                <h2>Incubation Center</h2>
                <p>Our internship program offers valuable hands-on experience and professional development opportunities to students and young professionals.</p>
                    <a className='c-span'>Know More</a>
                </div>
                </div>
            </Link>


        </div>
    </div>
  )
}

export default Course
