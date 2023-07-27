import React from "react";
import './Talent.css'

import {SlNote} from 'react-icons/sl';
import {BsFillPinAngleFill} from 'react-icons/bs';
import {AiOutlineFileProtect} from 'react-icons/ai';

import {RiDashboardLine} from 'react-icons/ri';
import {BsGlobeAmericas} from 'react-icons/bs';

// import {IoNewspaperSharp} from 'react-icons/io';
import {BsPencilSquare} from 'react-icons/bs';

const Talent = () => {
  return (
    <div className="talent">



      <div className="t-right">
      <h2 className="t-heading">Universites Benifits</h2>

        <div className="t-box">
          <div className="t-text">
          <h4> <BsPencilSquare /> Launch New Courses</h4> 
            <p>
            Universities can start Different types of courses 
            </p>
          </div>
        </div>

        <div className="t-box">

          <div className="t-text">
          <h4> <BsGlobeAmericas />  Get Students all over the world</h4>
            <p>
            get the dashbord of the course you will start with all the practical functionalities.
            </p>
          </div>
        </div>
        
        <div className="t-box">

          <div className="t-text">
          <h4> <RiDashboardLine />  Get well Maintained course dashbord</h4>
            <p>
            get the dashbord of the course you will start with all the practical functionalities.
            </p>
          </div>
        </div>


        {/* <div className="t-box">

          <div className="t-text">
            <h4>  <AiOutlineFileProtect /> 24/7 support</h4>
            <p>
            Questions? Our round-the-clock support team is available to help anytime, anywhere.
            </p>
          </div>
        </div> */}

      </div>

      <div className="t-left">
      <img src="https://i.redd.it/a3e5x519vco01.jpg" className="disappear"></img>
        <img src="https://images.unsplash.com/photo-1588495077262-e41593eb23c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGtlbnRpbmd8ZW58MHx8MHx8&w=1000&q=80" className="appear"></img>
      </div>

    </div>
  );
};

export default Talent;
