import React from 'react'
import './Start_Header.css'
import { Link } from 'react-router-dom'

const Start_Header = () => {
  return (
    <div className ='st_header'>
       
       <div class="vc-overlay"></div>
        <div className="start_content">
            <h1>Let's Fundraise Together!</h1>
            <p>Stories from nonprofits, tips for successful online fundraising, and inspiration from the team at Company name</p>
            <Link className ='backwhite' to='/startup_registration'>Join Us</Link>

        </div>
        <div className="str_mobile">
            <svg xmlns="http://www.w3.org/2000/svg" width="375" height="50" viewBox="0 0 375 50" preserveAspectRatio="none" aria-hidden="true">
                <path fill-rule="evenodd" d="M0,550 L375,550 L375,500 C312.5,516.666667 250,525 187.5,525 C125,525 62.5,516.666667 0,500 L0,550 Z" transform="translate(0 -500)" className="shape-fill"></path>
            </svg>
        </div>
    </div>
  )
}

export default Start_Header