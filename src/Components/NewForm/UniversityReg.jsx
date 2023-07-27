import React, { useState } from "react";
import "./NewForm.css";
import { useFirebase } from "../../context/firebase";
import { useNavigate } from "react-router-dom";

const UniversityReg = () => {

  const firebase = useFirebase();

  const navigate = useNavigate();

  const [institute_id, setInstitute_id] = useState('');
  const [name, setName] = useState('');
  const [ins_web, setIns_web] = useState('');
  const [ins_email, setIns_email] = useState('');
  const [ins_logo, setIns_logo] = useState('');
  const [ins_city, setIns_city] = useState('');
  const [ins_state, setIns_state] = useState('');
  const [aicte_app, setAicte_app] = useState('');
  const [ins_contact, setIns_contact] = useState('');


  const [loading, setLoading] = useState(false);



  const handleSubmit = async(e) => {
    e.preventDefault();
    setLoading(true);

    await firebase.handleJoinUniversity(institute_id, name, ins_web, ins_email, ins_logo, ins_city, ins_state, aicte_app, ins_contact);
    setLoading(true);
    
    navigate("/dashbaord");
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

          <form className="newWrapper" onSubmit={handleSubmit}>
            <h1>University Registration</h1>

            <div className="f-onerow">
              <input 
              onChange={(e) => setInstitute_id(e.target.value)} 
              value={institute_id}
              type="text" placeholder="Institute ID" required />
              <input 
              onChange={(e) => setName(e.target.value)} 
              value={name}
              type="name" placeholder="Institute Name" required />
            </div>

           
            <div className="f-onerow">
              <input 
              onChange={(e) => setIns_web(e.target.value)} 
              value={ins_web}
              type="url" placeholder="Institute Website Link" required />
              <input 
              onChange={(e) => setIns_email(e.target.value)} 
              value={ins_email}
              type="email" placeholder="Institute Email" required />
            </div>

            <div className="f-margintop">
        <label>Upload Institute Logo</label>
        <div className="f-radio">
            <input 
            onChange={(e) => setIns_logo(e.target.files[0])} 
            type="file" />           
        </div>
        </div>
        <div className="f-onerow">
              <input 
              onChange={(e) => setIns_city(e.target.value)} 
              value={ins_city}
              type="text" placeholder="Enter City" required />
              <input 
              onChange={(e) => setIns_state(e.target.value)} 
              value={ins_state}
              type="text" placeholder="Enter State" required />
            </div>

            <div className="f-onerow">
              <input 
              onChange={(e) => setAicte_app(e.target.value)} 
              value={aicte_app}
              type="text" placeholder="AICTE Approved? (Yes/No)" required />
              <input 
              onChange={(e) => setIns_contact(e.target.value)} 
              value={ins_contact}
              type="number" placeholder="Institute Contact" maxLength={10} minLength={10} required />
            </div>
 

        <button className="submitForm" type="submit">Register</button>

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

export default UniversityReg;
