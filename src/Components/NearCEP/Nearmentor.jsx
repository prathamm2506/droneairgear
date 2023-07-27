import React from 'react'
import './Nearcep.css'
import { Link } from 'react-router-dom'

const Nearmentor = () => {
  return (
    <div>
        <div className="nc-maindiv">
            <h1>Looking for an assistance? Get in touch with our expert Mentors!</h1>
            <Link to="/mentorfilter"><button>Know More</button></Link>
        </div>
    </div>
  )
}

export default Nearmentor