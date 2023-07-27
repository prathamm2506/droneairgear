import React, { useState } from "react";
import "./NewForm.css";
import { useNavigate } from "react-router-dom";
import Select from "react-select";

import { useFirebase } from "../../context/firebase";

const MentorReg = () => {

  const firebase = useFirebase();

  const navigate = useNavigate();

  
  
  const aoi = [
    { label: "Drone Engineer", value: "engineer" },
    { label: "Drone Pilot", value: "pilot" },
    { label: "Drone Software Developer", value: "developer" },

  ];

  const [f_name, setFname] = useState('');
  const [email, setEmail] = useState('');

  const [mobile, setMobile] = useState('');

  const [state, setState] = useState('');
  const [city, setCity] = useState('');


  const [com_name, setCom] = useState('');
  const [com_pos, setPos] = useState('');
  const [skill, setSkill] = useState('');


  const [expertise, setExpertise] = useState('');
 
  const [photo, setPhoto] = useState('');

  const [loading, setLoading] = useState(false);

 

  const changeHandler = (selectedOption) => {
    setSkill(selectedOption.value);
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    await firebase.handleJoinMentor(f_name,skill, email, mobile, state, city, com_name, com_pos,  expertise, photo);
    setLoading(false);
    
    navigate(`/dashbaord`);
    
  }

  return (
    <div className="formContainer">
     {loading ? (
        <div className="loader-container">
          <div className="spinner"></div>
        </div>
      ) : (
      <div className="newForm">
        <div className="newLeft">

          <form className="newWrapper">
            <h1>Register to be a Mentor</h1>

            <div className="f-onerow">
              <input 
              onChange={(e) => setFname(e.target.value)} 
              value={f_name}
              type="text" placeholder="Full Name" required className="input2"/>
              
            </div>

            <div className="f-onerow">
              <input 
                onChange={(e) => setEmail(e.target.value)} 
                value={email}
                type="email" placeholder="Email" required />
              <input 
              onChange={(e) => setMobile(e.target.value)} 
              value={mobile}
              type="number" placeholder="Mobile Number" maxLength={10} minLength={10} required />
            </div>

            <div className="f-onerow">
              
              <input 
              onChange={(e) => setCom(e.target.value)} 
              value={com_name}  
              type="text" placeholder="Current Working Company Name" required />

              <input 
              onChange={(e) => setPos(e.target.value)} 
              value={com_pos}  
              type="text" placeholder="Position in Company" required />

            </div>

              <Select
                options={aoi}
                defaultValue={skill}
                placeholder="Course Category"
                onChange={changeHandler}
                required

                isSearchable
              />


            <div className="f-margintop">
        <label>Upload Profile Photo</label>
        <div className="f-radio">
            <input 
            type="file"
            onChange={(e) => setPhoto(e.target.files[0])} />           
        </div>
        </div>
        <div className="f-onerow">
              <input
              onChange={(e) => setCity(e.target.value)} 
              value={city} 
              type="text" placeholder="Enter City" required />
              <input
              onChange={(e) => setState(e.target.value)} 
              value={state} 
              type="text" placeholder="Enter State" required />
            </div>
 

       
        

        <div className="f-testarea">
            <textarea 
            onChange={(e) => setExpertise(e.target.value)} 
              value={expertise} 
            name="prof-bg" cols="10" rows="10" placeholder="Describe your professional background"></textarea>
        </div>

        <button className="submitForm" onClick={handleSubmit}>Register</button>

          </form>
        </div>

        <div className="newRight">
          {/* <img src="https://www.medianama.com/wp-content/uploads/2022/09/UAVs-help2.jpeg" alt="" /> */}
        </div>
      </div>
      )}
    </div>
  );
};

export default MentorReg;