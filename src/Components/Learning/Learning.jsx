import React, { useEffect } from 'react'
import Aos from 'aos'
import "aos/dist/aos.css"
import './Learning.css'

import V1 from '../../assets/gif/v1.gif'
import V4 from '../../assets/gif/v4.gif'
import V3 from '../../assets/gif/v3.gif'
import V2 from '../../assets/gif/v2.gif'

const Learning = () => {

    useEffect(() => {
        Aos.init({
            duration:600,
            easing:"ease",
            once:true,
        });
    });

    return (
        <div className="learn">
        <div className="learning">

            <h1 className='l-heading'>An immersive learning experience</h1>

            <div className="l-row">

                <div className="l-box"  data-aos="fade-up" data-aos-delay="100" >
                    <div className="l-top">
                        <img src={V1} alt="Growth" />
                    </div>
                    <div className="l-text">
                        <h4>Develop skills for real career growth</h4>
                        <p>Cutting-edge curriculum designed in guidance with industry and academia to develop job-ready skills</p>
                    </div>
                </div>

                <div className="l-box"  data-aos="fade-up" data-aos-delay="250" >
                    <div className="l-top">
                    <img src={V2} alt="Experts" />

                    </div>
                    <div className="l-text">
                        <h4>Learn from experts active in their field, not out-of-touch trainers</h4>
                        <p>Leading practitioners who bring current best practices and case studies to sessions that fit into your work schedule.</p>
                    </div>
                </div>

                <div className="l-box"  data-aos="fade-up" data-aos-delay="500">
                    <div className="l-top">
                    <img src={V3} alt="Real World" />

                    </div>
                    <div className="l-text">
                        <h4>Learn by working on real-world problems</h4>
                        <p>Capstone projects involving real world data sets with virtual labs for hands-on learning</p>
                    </div>
                </div>

                <div className="l-box"  data-aos="fade-up" data-aos-delay="750">
                    <div className="l-top">
                    <img src={V4} alt="Structured guidance" />
                    </div>
                    <div className="l-text">
                        <h4>Structured guidance ensuring learning never stops</h4>
                        <p>24x7 Learning support from mentors and a community of like-minded peers to resolve any conceptual doubts</p>
                    </div>
                </div>

            </div>
        </div>
        </div>
    )
}

export default Learning
