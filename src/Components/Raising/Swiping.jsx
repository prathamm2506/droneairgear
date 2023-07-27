import React, { useEffect, useState } from 'react'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css";


// import required modules
import {  Autoplay,Navigation } from "swiper";
import { Link, useNavigate } from "react-router-dom";
import { useFirebase } from '../../context/firebase';

const Swiping = (props) => {

    const firebase = useFirebase();
    const navigate = useNavigate();
    const [url, setURL] = useState(null);

    useEffect(() => {
        firebase.getImageURL(props.logoURL).then(url => setURL(url));
    }, []);

  return (
    
    <div onClick={(e) => navigate(props.link)} className="ra-box ">
      <div className="ra-img rim1" >
        <img
src={url}
alt=""
/>
      </div>
      <div className="ra-text">
        {/* <div className="ra-name">Pacha</div> */}
        <div className="ra-h2">
          {props.name}
        </div>
        <div className="ra-tag">
          Generated {props.revenue} in revenue since launching
        </div>
        <div className="ra-span"></div>
        <div className="ra-speciality">
          <div className="ra-spec">venture backed</div>
          <div className="ra-spec">B2C</div>
        </div>
        <div className="ra-info">
          <span className="ra-fees"> $8574508</span> from 231 investors
        </div>
        <div className="ra-info">
          <span className="ra-fees"> $166M</span> valuation cap
        </div>
      </div>
    </div>
  
  )
}

export default Swiping