import React from 'react'
import './DGCA2.css'
import url1 from './1.png'
import { Link } from 'react-router-dom'

const DGCA2 = () => {
  return (
    <div>
        <div className="dgca-maindiv">
            <div className="dgca-onediv">
                <h2>DGCA</h2>
                <h1>Explore the World of Drone</h1>
                <p >Immerse into movies, live TV content, apps, and games.</p>
                <a href='https://www.dgca.gov.in/digigov-portal/' target='_blank' className='btn' >Know More</a>
            </div>

            <div className="dgca-twodiv">
                <img src={url1} alt="" />
            </div>
        </div>
    </div>
  )
}

export default DGCA2