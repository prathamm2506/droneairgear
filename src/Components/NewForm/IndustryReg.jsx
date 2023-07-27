import React, { useState } from "react";
import "./NewForm.css";
import { useFirebase } from "../../context/firebase";
import { useNavigate } from "react-router-dom";

const IndustryReg = () => {

  const firebase = useFirebase();

  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [com_id, setCom_id] = useState('');
  const [logo, setLogo] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    await firebase.handleJoinIndustry(name, email, number, com_id, logo, city, state);
    navigate('/dashbaord');
  }

  return (
    <div className="formContainer">
      <div className="newForm">
        <div className="newLeft">

          <form className="newWrapper" onSubmit={handleSubmit}>
            <h1>Industry Registration</h1>

            <div className="f-onerow">
              <input
              onChange={(e) => setName(e.target.value)} 
              value={name} 
              type="text" placeholder="Name of Organization" required />
              <input
              onChange={(e) => setEmail(e.target.value)} 
              value={email} 
              type="email" placeholder="Organization Email" required />
            </div>

            {/* <div className="f-testarea">
              <textarea
                name="prof-bg"
                cols="10"
                rows="10"
                placeholder="Course Description"
              ></textarea>
            </div> */}
            <div className="f-onerow">
              <input 
              onChange={(e) => setNumber(e.target.value)} 
              value={number}
              type="number" placeholder="Mobile Number" maxLength={10} minLength={10} required />
              <input 
              onChange={(e) => setCom_id(e.target.value)} 
              value={com_id}
              type="text" placeholder="Company ID" required />
            </div>

            <div className="f-margintop">
        <label>Upload Company Logo</label>
        <div className="f-radio">
            <input 
            type="file" 
            onChange={(e) => setLogo(e.target.files[0])} />           
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
 

           
        <button className="submitForm" type="submit">Register</button>

          </form>
        </div>

        <div className="newRight">
          {/* <img src="https://www.medianama.com/wp-content/uploads/2022/09/UAVs-help2.jpeg" alt="" /> */}
        </div>
      </div>
    </div>
  );
};

export default IndustryReg;
