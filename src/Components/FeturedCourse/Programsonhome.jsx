import React, { useEffect, useState } from "react";
import { useFirebase } from "../../context/firebase";
import Programs from "../Programs/Programs";
import Select from "react-select";

import "./Featurecourse.css";

const Programsonhome = () => {
  const firebase = useFirebase();

  const scrollToBottom = () =>{ 
    window.scrollTo({ 
      top:300, 
      behavior: 'smooth'
    }); 
  };
  // useEffect(() => {
  //   firebase.listAllCourses().then((courses) => setCourses(courses.docs));
  // });

  const [courses, setCourses] = useState([]);
  const [category, setCategory] = useState([]);

  const changeHandler = (selectedOption) => {
    setCategory(selectedOption.value);
  };

  const categorySelect = [
    { label: "All", value: "all" },
    { label: "Mapping", value: "Map" },
    { label: "Pilot", value: "Pilot" },
    { label: "Designing", value: "Design" },
    { label: "Engineering", value: "Engineering" },
    { label: "Others", value: "Others" },
  ];
  const levelSelect = [
    { label: "All", value: "all" },
    { label: "Beginner", value: "beginner" },
    { label: "Medium", value: "medium" },
    { label: "Advanced", value: "advanced" },
  ];
  useEffect(() => {
    switch (category) {
      case "all":
        firebase.listAllCourses().then((courses) => setCourses(courses.docs));
        break;
      case "Map":
        firebase.MapCourses().then((courses) => setCourses(courses.docs));
        break;
      case "Design":
        firebase.DesignCourses().then((courses) => setCourses(courses.docs));
        break;
      case "Pilot":
        firebase.PilotCourses().then((courses) => setCourses(courses.docs));
        break;

      case "Engineering":
        firebase.EngineeringCourses().then((courses) => setCourses(courses.docs));
        break;
      case "Others":
        firebase.OtherCourses().then((courses) => setCourses(courses.docs));
        break;
        case "beginner":
          firebase.MapCourses().then((courses) => setCourses(courses.docs));
          break;
      case "medium":
        firebase.DesignCourses().then((courses) => setCourses(courses.docs));
        break;
      case "advanced":
        firebase.PilotCourses().then((courses) => setCourses(courses.docs));
        break;

      default:
        firebase.listAllCourses().then((courses) => setCourses(courses.docs));
    }
  });

  return (
    <div className="programs">
      {/* <div className="pr-header">
      <h2 className="pr-heading">Featured Courses</h2>

      <p>Learn from global experts and get certified</p>
      </div> */}

      <div className="mainfilters">
        <div className="mainfilter" >
          <Select
            options={categorySelect}
            defaultValue={category}
            placeholder="Area(s) of Interest"
            onChange={changeHandler}
            isSearchable
          />
        </div>
        <div className="mainfilter" >
          <Select
            options={levelSelect}
            defaultValue={category}
            placeholder="Level of Course"
            onChange={changeHandler}
            isSearchable
          />
        </div>
        {/* <div className="mainfilter" >
          <Select
            options={levelSelect}
            defaultValue={category}
            placeholder="Level of Course"
            onChange={changeHandler}
            isSearchable
          />
        </div> */}
        <button onClick={scrollToBottom}  className="exp-btn">Explore</button>
      </div>

      <div className="pr-row">
        {courses.map((course) => (
          <Programs
            link={`/students/${course.id}`}
            key={course.id}
            id={course.id}
            {...course.data()}
          />
        ))}
      </div>
    </div>
  );
};

export default Programsonhome;
