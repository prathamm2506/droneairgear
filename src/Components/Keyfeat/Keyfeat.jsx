import React from "react";
import "./Keyfeat.css";
import { SiAltiumdesigner } from "react-icons/si";
import { BiSupport } from "react-icons/bi";
import { SiImmer } from "react-icons/si";
import { CgMediaLive } from "react-icons/cg";
import { BsPeopleFill } from "react-icons/bs";
import { FaGraduationCap } from "react-icons/fa";
import { SlOptionsVertical } from "react-icons/sl";
import { BiNetworkChart } from "react-icons/bi";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { SiGooglescholar } from "react-icons/si";
import { BsGlobeAmericas } from "react-icons/bs";
import { SiCodereview } from "react-icons/si";

const Keyfeat = () => {
  return (
    <div>
      <div className="kf-topdiv">
        <h1>Program Overview</h1>
        <div className="kf-maindiv">

          <div className="kf-onediv">
            <div className="kf-flexdiv">
              <div>
                <SiAltiumdesigner className="iconmega" />
              </div>
              <div>
                <p>Designed for working professionals</p>
              </div>
            </div>
            <div className="kf-flexdiv">
              <div>
                <BiSupport className="iconmega" />
              </div>
              <div>
                <p>
                  Student Support is available 24*7  for non-academic
                  queries You can write to us.
                </p>
              </div>
            </div>
            <div className="kf-flexdiv">
              <div>
                <SiImmer className="iconmega" />
              </div>
              <div>
                <p>Optional on-campus immersion</p>
              </div>
            </div>
            <div className="kf-flexdiv">
              <div>
                <CgMediaLive className="iconmega" />
              </div>
              <div>
                <p>
                  Live & interactive faculty, alumni, and industry-specific
                  sessions
                </p>
              </div>
            </div>
          </div>

          <div className="kf-onediv">
            <div className="kf-flexdiv">
              <div>
                <BsPeopleFill className="iconmega" />
              </div>
              <div>
                <p>Simulations from Harvard Business Publishing Education</p>
              </div>
            </div>
            <div className="kf-flexdiv">
              <div>
                <FaGraduationCap className="iconmega" />
              </div>
              <div>
                <p>Earn the same U.S. Degree as awarded On-Campus</p>
              </div>
            </div>
            <div className="kf-flexdiv">
              <div>
                <SlOptionsVertical className="iconmega" />
              </div>
              <div>
                <p>Choose a concentration from among five options</p>
              </div>
            </div>
            <div className="kf-flexdiv">
              <div>
                <BiNetworkChart className="iconmega" />
              </div>
              <div>
                <p>Join GGU’s 70,000+ alumni network</p>
              </div>
            </div>
          </div>

          <div className="kf-onediv">
            <div className="kf-flexdiv">
              <div>
                <AiOutlineCheckCircle className="iconmega" />
              </div>
              <div>
                <p>WES recognized</p>
              </div>
            </div>
            <div className="kf-flexdiv">
              <div>
                <SiGooglescholar className="iconmega" />
              </div>
              <div>
                <p>70% scholarship available for 5,000 students with EMI</p>
              </div>
            </div>
            <div className="kf-flexdiv">
              <div>
                <BsGlobeAmericas className="iconmega" />
              </div>
              <div>
                <p>Designed for working professionals</p>
              </div>
            </div>
            <div className="kf-flexdiv">
              <div>
                <SiCodereview className="iconmega" />
              </div>
              <div>
                <p>Global case study discussions</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Keyfeat;
