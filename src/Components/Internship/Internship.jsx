import React, { useState, useEffect } from "react";
import "./Internship.css";
import Blok from "./Blok";
import Select from "react-select";

import { useFirebase } from "../../context/firebase";


  const Internship = () => {

    const scrollToBottom = () =>{ 
      window.scrollTo({ 
        top:300, 
        behavior: 'smooth'
      }); 
    };


    const [career, setCareer] = useState("all");
    const firebase = useFirebase();
  
    const [internships, setInternships] = useState([]);

    const changeCareer = (selectedOption) => {
      setCareer(selectedOption.value);
    };
  
    const aoi = [
      { label: "All", value: "all " },
      { label: "Drone Flight", value: "flight" },
      { label: "Drone Manufracture", value: "manufracture" },
      { label: "Drone Design", value: "design" },
      { label: "Drone Survey", value: "survey" },
    ];
  
    const mode = [
      { label: "All", value: "all" },
      { label: "Online", value: "online" },
      { label: "Offline", value: "offline" },
    ];
  

  
    useEffect(() => {
      switch (career) {
        case "all":
          firebase
            .listAllInternship()
            .then((internships) => setInternships(internships.docs));
          break;
        case "flight":
          firebase
            .flight()
            .then((internships) => setInternships(internships.docs));
          break;
        case "manufracture":
          firebase
            .manufracture()
            .then((internships) => setInternships(internships.docs));
          break;
        case "design":
          firebase
            .design()
            .then((internships) => setInternships(internships.docs));
          break;
          case "survey":
            firebase
              .survey()
              .then((internships) => setInternships(internships.docs));
            break;
        case "online":
          firebase
            .onlineInternship()
            .then((internships) => setInternships(internships.docs));
          break;
        case "offline":
          firebase
            .offlineInternship()
            .then((internships) => setInternships(internships.docs));
          break;

  
        default:
          firebase
            .listAllInternship()
            .then((internships) => setInternships(internships.docs));
      }
    });

  return (
    <div className="internship_p">

      
      <div className="internHeader">
      <div className="internCont">

        <div className="internPara">
          <h1>Droning On!</h1>
          <p> Unlock the aerial revolution</p>
          <p> Careers advanced with drones live classes every month.</p>




      </div>
    </div>
      </div>

      <div className="mainfilters">
        <div className="mainfilter" >
          <Select
            options={aoi}
            defaultValue={career}
            placeholder="Career's of Interest"
            onChange={changeCareer}
            isSearchable
          />
        </div>

        <div className="mainfilter" >
          <Select
            options={mode}
            defaultValue={career}
            placeholder="Mode of Work"
            onChange={changeCareer}
            isSearchable
          />
        </div>

        <button onClick={scrollToBottom}  className="exp-btn" style={{background:'#525252'}} >Explore</button>


      </div>

      <div className="blogs example">
        {internships.map((internship) => (
          <Blok
            link={`/internshipPage/${internship.id}}`}
            key={internship.id}
            id={internship.id}
            {...internship.data()}
          />
        ))}
      </div>
    </div>
  );
};

export default Internship;
