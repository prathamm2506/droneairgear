import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/effect-fade";
// Import Swiper styles
import "swiper/css";


import "./Slider.css";

// import required modules
import {EffectFade, Autoplay} from "swiper";
import sliderVideo from "../../assets/sliderVideo.mp4";

const Slider = () => {

  

  return (
    <Swiper
      spaceBetween={0}
      allowTouchMove={false}
      centeredSlides={true}
      effect={"fade"}
      autoplay={{
    
        disableOnInteraction: false,
      }}
      loop={true}


      modules={[EffectFade,Autoplay]}
      // modules={[EffectFade]}
      className="mySwiper slider"
    >

<SwiperSlide data-swiper-autoplay="7000">
        <div className="slide slide3">
        {/* <div className="layover-y"></div>
          <div className="layover-x"></div> */}
          <div className="sliderVideo">
            <video className="videoSlider" src={sliderVideo} autoPlay loop muted ></video>
          </div>
          <div className="content">
          <div className="sl-text">
          <h1>Placement in Top Companies</h1>
            <p>
            Doing the best at this moment puts you in the best place for the next moment.
            </p>
            <a className="btn" href="/internMain">Get Started</a>
          </div>
          </div>
        </div>
      </SwiperSlide>


      <SwiperSlide data-swiper-autoplay="4000">
        <div className="slide slide1">
          <div className="layover-y"></div>
          <div className="layover-x"></div>
          <div className="content">
          <div className="sl-text">
          <h1>Drone Training Program</h1>
          <p>
            Live as if you were to die tomorrow. Learn as if you were to live forever.
            </p>
            <a className="btn" href="/students">Get Started</a>
          </div>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide data-swiper-autoplay="5000">
          <div className="slide slide2">
          <div className="layover-y"></div>
          <div className="layover-x"></div>
          <div className="content">
          <div className="sl-text">
            <h1>Startup Fundraising Platform</h1>
            <p>
            As we work to create light for others, we naturally light our own way.
            </p>
            <a className="btn" href="/startup">Get Started</a>
          </div>
          </div>
        </div>
      </SwiperSlide>




      
    </Swiper>
  );
};

export default Slider;
