import "./ProjectSale.css";

import React, { useRef, useState } from "react";
// Import Swiper React components



import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css";

// import required modules
import {  Autoplay,Navigation } from "swiper";
import { Link } from "react-router-dom";


const ProjectSale = () => {
  return (
    <div className="mainclassabove">
      <h1>Featured Courses</h1>
    <div className="projSale">


        <Swiper

slidesPerView={4}
breakpoints={{

  0: {
    slidesPerView: 1
  },
  710:{
    slidesPerView:2
  },
  1000:{
    slidesPerView:2
  },
  1200:{
    slidesPerView:3
  },
  1560:{
    slidesPerView:4
  },


}}
autoplay={{
  delay: 2500,
  disableOnInteraction: false,
}}

loop={true}
spaceBetween={60}
navigation={true}
modules={[Autoplay, Navigation]}
className="mySwiper ps-slider "
>


        <SwiperSlide className="sp-ssl">
          <Link to={"/lecture1"}  className="ps-dabba">
            <div className="ps-author">
              <p>By Droneairgear</p>
              <p>June 26,2023</p>
            </div>
            <img
              src="https://www.businessinsider.in/photo/91885202/heres-all-you-need-to-know-about-drone-pilot-training-courses-in-india.jpg?imgsize=25292"
              alt=""
            />
            <div className="ps-course">Drone Pilot Certification Course</div>

            <div className="ps-desc">
            A drone pilot certification course provides the necessary training and knowledge to operate drones safely and legally, leading to official certification as a drone pilot.
            </div>
            <div className="ps-btm">
              <button className="ps-btn">Enroll Now</button>
              {/* <div className="ps-enrolled">4543534+</div> */}
            </div>
          </Link>
        </SwiperSlide>
      
        <SwiperSlide className="sp-ssl">
          <Link to={"/lecture2"}  className="ps-dabba">
            <div className="ps-author">
              <p>By Droneairgear</p>
              <p>June 26,2023</p>
            </div>
            <img
              src="https://i.ytimg.com/vi/0xPQ__RNwNs/maxresdefault.jpg"
              alt=""
            />
            <div className="ps-course">Raspberry Pi Zero Drone Build</div>

            <div className="ps-desc">
            Building a Pi Zero drone involves using a Raspberry Pi Zero microcomputer to create a custom drone, utilizing its computing power for flight control and integration.
            </div>
            <div className="ps-btm">
              <button className="ps-btn">Enroll Now</button>
              {/* <div className="ps-enrolled">4543534+</div> */}
            </div>
          </Link>
        </SwiperSlide>
      
        <SwiperSlide className="sp-ssl">
          <Link to={"/lecture3"}  className="ps-dabba">
            <div className="ps-author">
              <p>By Droneairgear</p>
              <p>June 26,2023</p>
            </div>
            <img
              src="https://i.ytimg.com/vi/nn87IyFPEy4/sddefault.jpg"
              alt=""
            />
            <div className="ps-course">How to build an Autonomous UAV </div>

            <div className="ps-desc">
            Building an autonomous UAV for long-range FPV and autonomous missions involves integrating a reliable flight controller, long-range communication systems.
            </div>
            <div className="ps-btm">
              <button className="ps-btn">Enroll Now</button>
              {/* <div className="ps-enrolled">4543534+</div> */}
            </div>
          </Link>
        </SwiperSlide>
      
        <SwiperSlide className="sp-ssl">
          <Link to={"/lecture4"}  className="ps-dabba">
            <div className="ps-author">
              <p>By Droneairgear</p>
              <p>June 26,2023</p>
            </div>
            <img
              src="https://i.ytimg.com/vi/mMxk11qQqdU/maxresdefault.jpg"
              alt=""
            />
            <div className="ps-course">Teaching my custom AI drone to track humans</div>

            <div className="ps-desc">
            To teach a custom AI drone to track humans, you would need to develop computer vision algorithms to detect human subjects and integrate them into the drone's control system.
            </div>
            <div className="ps-btm">
              <button className="ps-btn">Enroll Now</button>
              {/* <div className="ps-enrolled">4543534+</div> */}
            </div>
          </Link>
        </SwiperSlide>
      
        <SwiperSlide className="sp-ssl">
          <Link to={"/lecture5"}  className="ps-dabba">
            <div className="ps-author">
              <p>By Droneairgear</p>
              <p>Sept 26,2023</p>
            </div>
            <img
              src="https://i.ytimg.com/vi/ixYnzcZZu9g/maxresdefault.jpg"
              alt=""
            />
            <div className="ps-course">Use These 15 Drone Training Exercises to Learn How to Fly a Drone</div>

            <div className="ps-desc">
            Practice altitude control to master flying at different heights.Practice precision landing by accurately landing the drone on specific spots.
            </div>
            <div className="ps-btm">
              <button className="ps-btn">Enroll Now</button>
              {/* <div className="ps-enrolled">4543534+</div> */}
            </div>
          </Link>
        </SwiperSlide>
      
        <SwiperSlide className="sp-ssl">
          <Link to={"/lecture6"}  className="ps-dabba">
            <div className="ps-author">
              <p>By Droneairgear</p>
              <p>June 26,2023</p>
            </div>
            <img
              src="https://dojofordrones.com/wp-content/uploads/2019/03/build-a-diy-drone.png"
              alt=""
            />
            <div className="ps-course">How to build your own drone</div>

            <div className="ps-desc">
            To build your own drone, start by selecting components like a frame, motors, ESCs, flight controller, battery, and propellers. Then assemble and configure them.
            </div>
            <div className="ps-btm">
              <button className="ps-btn">Enroll Now</button>
              {/* <div className="ps-enrolled">4543534+</div> */}
            </div>
          </Link>
        </SwiperSlide>
      
        <SwiperSlide className="sp-ssl">
          <Link to={"/lecture7"}  className="ps-dabba">
            <div className="ps-author">
              <p>By Droneairgear</p>
              <p>June 26,2023</p>
            </div>
            <img
              src="https://i.ytimg.com/vi/4kjA473swIo/maxresdefault.jpg"
              alt=""
            />
            <div className="ps-course">Drones _ How do they work</div>

            <div className="ps-desc">
            Drones work by combining various components such as motors, propellers, flight controllers, sensors, and batteries to generate lift, stability, and control for aerial maneuvering.
            </div>
            <div className="ps-btm">
              <button className="ps-btn">Enroll Now</button>
              {/* <div className="ps-enrolled">4543534+</div> */}
            </div>
          </Link>
        </SwiperSlide>
      
        <SwiperSlide className="sp-ssl">
          <Link to={"/lecture8"}  className="ps-dabba">
            <div className="ps-author">
              <p>By Droneairgear</p>
              <p>June 26,2023</p>
            </div>
            <img
              src="https://i.ytimg.com/vi/LmEcyQnfpDA/maxresdefault.jpg"
              alt=""
            />
            <div className="ps-course">Drone Programming With Python Course</div>

            <div className="ps-desc">
            A drone programming course with Python teaches you how to use Python programming language to control and automate drones, enabling advanced functionalities.
            </div>
            <div className="ps-btm">
              <button className="ps-btn">Enroll Now</button>
              {/* <div className="ps-enrolled">4543534+</div> */}
            </div>
          </Link>
        </SwiperSlide>
      </Swiper>


    </div>
    </div>
  );
};

export default ProjectSale;
