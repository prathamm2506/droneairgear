import React, { useEffect, useState } from "react";
import "./Mentorfinal.css";

import { FaMap } from "react-icons/fa";
import { BsFillBuildingsFill } from "react-icons/bs";
import { MdCall } from "react-icons/md";
import { BiBadgeCheck } from "react-icons/bi";
import Select from "react-select";
import { useFirebase } from "../../context/firebase";
// import MentorBlock from "./MentorBlock";

const MentorBlock = (props) => {

    const firebase = useFirebase();

    const[url, setURL] = useState();

   useEffect(() => {
    firebase.getImageURL(props.photURL).then(url => setURL(url));
   })

  return (
    <div className="mpro">
            <div className="mpro1">
              <div className="mpro1-img">
                <img
                  src={url}
                  alt=""
                />
              </div>

              {/* <div className="mpro1-txt">
                <span className="mpro1-fees"> $166</span> /Month
              </div> */}
            </div>

            <div className="mpro2">
              <div className="mpro2-name">{props.f_name}</div>
              <div className="mpro2-job">
                {props.com_pos} at <span>{props.com_name}</span>
              </div>
              {/* <div className="mpro2-exp">
                9+ years of experience in Front End Engineering
              </div> */}

              {/* <div className="mpro2-rating">
                <AiFillStar className="mpro2-star" />
                <AiFillStar className="mpro2-star" />
                <AiFillStar className="mpro2-star" />
                <AiFillStar className="mpro2-star" />
                <AiFillStar className="mpro2-star monroe" /> 5.0{" "}
                <span className="mpro2-rev">(16 reviews)</span>{" "}
              </div> */}

              <div className="mpro2-services">
                <span className="mpro2-serv">
                  <FaMap /> {props.state}
                </span>
                <span className="mpro2-serv">
                  <BsFillBuildingsFill />
                  {props.city}
                </span>
                {/* <span className="mpro2-serv">
                  <BiBadgeCheck />
                  Hands-on
                </span>
                <span className="mpro2-serv">
                  <BiBadgeCheck />
                  Tasks
                </span> */}
              </div>

              <div className="mpro2-para">
                {props.expertise}
              </div>

              <div className="mpro2-speciality">
                <div className="mpro2-spec">{props.exp_1}</div>
                {/* <div className="mpro2-spec">{props.exp_2}</div> */}
                {/* <div className="mpro2-spec">Javasript</div>
                <div className="mpro2-spec">React</div> */}
              </div>

              <div className="mpro2-btn">Mail on {props.email}</div>
            </div>
          </div>
  )
}

export default MentorBlock