import React, { useEffect } from 'react'

import './Dgca.css'
import dgca from './dgca.png'
import { Link } from 'react-router-dom'
import Aos from 'aos'
import "aos/dist/aos.css"
const Dgca = () => {
  useEffect(() => {
    Aos.init({
        duration:600,
        easing:"ease",
        once:true,
    });
});
  return (
    <div className="ind_banner">
      <div className="banCon" data-aos="fade-up-left" data-aos-delay="130">
      <div className="logo">
                <img src={dgca} alt="" />
                <p>DGCA Regulations</p>
            </div>
            <div className="info">
            “The Directorate General of Civil Aviation (DGCA) plays a crucial role in establishing and enforcing comprehensive rules and regulations for civil aviation operations. These regulations encompass a wide range of aspects, including aircraft operations, pilot licensing, airworthiness standards, airport operations, and air traffic management.”
            </div>
            <a href='https://www.dgca.gov.in/digigov-portal/' target='_blank' className="write_by">
            — Know More 
            </a>
      </div>
            
    </div>
  )
}

export default Dgca