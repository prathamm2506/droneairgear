import React, { useEffect } from 'react'

import Aos from 'aos'
import "aos/dist/aos.css"
import "./We.css";
import HomeLogo from './we.png'

const We = () => {
  
  useEffect(() => {
    Aos.init({
        duration:600,
        easing:"ease",
        once:true,
    });
});
  return (
    <div id="intern_pro">
      <div className="intern_pro">
        <div className="intern_pro_img" data-aos="fade-up-right" >
          <img style={{objectFit:"contain"}}
            src={HomeLogo}
            alt=""
          />
        </div>
        <div className="intern_pro_info margin-top"  data-aos="fade-up-right" >
          <h1>About Us </h1>
          <p>
          We are creating a ecosystem to foster collaboration, innovation, and industry-academia partnerships in the drone industry. It can create a supportive environment for students, researchers, entrepreneurs, and industry professionals to thrive and contribute to the growth and advancement of the drone sector.
          </p>

        </div>
      </div>
    </div>
  );
};

export default We;