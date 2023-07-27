import React from 'react'
import './Coursedesc.css'

import { Link } from 'react-router-dom'

const Coursedesc = () => {
  return (
    <div>
        <div className="cd-firstdiv">
            <div className="cd-firstone">
                <h1>Google UX Design Professional Certificate</h1>
                <p>Get started in the in-demand field of user experience (UX) design with a Professional Certificate from Google. Learn UX foundations and gain experience with the design process, including how to build wireframes and prototypes and conduct user research to test your designs.</p>
            
            <Link to='/studentForm' className="cd-btn">Enroll Now</Link>
            
            </div>

            <div className="cd-firsttwo">
                <img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera_assets.s3.amazonaws.com/xdp/decisionCriteriaBannerLogos/google-ux-design.png?auto=format%2Ccompress&dpr=1&w=&h=260" alt="" />
            </div>
        </div>

        <div className="cd-fivesec">
            <div className="cd-rate">
                <h3>4.8/5</h3>
                <p>60k+ Ratings</p>
            </div>

            <div className="cd-rate">
                <h3>6 Months</h3>
                <p>Under 10 hours of study a week</p>
            </div>

            <div className="cd-rate bnone">
                <h3>English</h3>
                <p>Subtitles: English</p>
            </div>

            <div className="cd-rate">
                <h3>Beginner Level</h3>
                <p>No prior experience required.</p>
            </div>

            <div className="cd-rate1">
                <h3>Earn credits</h3>
                <p>Part of Bachelor of Applied Arts</p>
            </div>
        </div>
    </div>
  )
}

export default Coursedesc