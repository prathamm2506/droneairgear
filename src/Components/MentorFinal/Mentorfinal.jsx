import React, { useEffect, useState } from "react";
import "./Mentorfinal.css";

import { AiFillStar } from "react-icons/ai";
import { BsFillChatTextFill } from "react-icons/bs";
import { MdCall } from "react-icons/md";
import { BiBadgeCheck } from "react-icons/bi";
import Select from "react-select";
import MentorBlock from "./MentorBlock";
import { useFirebase } from "../../context/firebase";

const Mentorfinal = () => {
  const [expertise, setExpertise] = useState([]);

  const changeHandler = (selectedOption) => {
    setExpertise(selectedOption.value);
  };

  const mentorSelect = [
    { label: "All", value: "all" },
    { label: "Drone Engineer", value: "Designer" },
    { label: "Drone Pilot", value: "Pilot" },
    { label: "Drone Software Developer", value: "Developer" },
  ];

  const firebase = useFirebase();

  const [mentor, setMentors] = useState([]);

  useEffect(() => {
    switch (expertise) {
      case "all":
        firebase.listAllMentors().then((ment) => setMentors(ment.docs));
        break;
      case "Designer":
        firebase.DesignMentor().then((ment) => setMentors(ment.docs));
        break;
      case "Pilot":
        firebase.PilotMentor().then((ment) => setMentors(ment.docs));
        break;
      case "Developer":
        firebase.DeveloperMentor().then((ment) => setMentors(ment.docs));
        break;

      default:
        firebase.listAllMentors().then((ment) => setMentors(ment.docs));
    }
  });

  return (
    <div className="mf-maindiv">
      <div className="mentorHeader">
        <div className="menCont">
          <div className="menPara">
            <h1>Droning On!</h1>
            <p> Unlock the aerial revolution</p>
            <p> Careers advanced with drones live classes every month.</p>
          </div>
        </div>
      </div>

      <div className="mainfilters">
        <div className="mainfilter" >
          <Select
            options={mentorSelect}
            defaultValue={expertise}
            placeholder="Area(s) of Expertise"
            onChange={changeHandler}
            isSearchable
          />
        </div>
      </div>
      <div className="mentorCards">
        {mentor.map((mento) => (
          <MentorBlock key={mento.id} id={mento.id} {...mento.data()} />
        ))}
      </div>
    </div>
  );
};

export default Mentorfinal;
