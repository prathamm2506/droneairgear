import React, { useState } from "react";
import "./Forms.css";
import { useNavigate } from "react-router-dom";
import { useFirebase } from "../../context/firebase";

const Student = () => {

  const navigate = useNavigate();

  const firebase = useFirebase();

  const [f_name, setFname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mobile, setMobile] = useState('');

  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [expertise, setExpertise] = useState('');
  const [experience, setExperience] = useState('');
  const [dicr_pro, setDicr_pro] = useState('');
  const [photo, setPhoto] = useState('');



  const handleSubmit = async (e) => {
    e.preventDefault();
    await firebase.handleJoinMentor(f_name, email, mobile, state, city, expertise, experience, dicr_pro, photo);

    navigate('/dashboard')
    // await firebase.signupUserWithEmailAndPassword(email, password);

  }

  

  return (
    <div>
      <div className="f-box">
        <h1>Mentor Registration</h1>
        <div className="f-onerow">
          <input
          onChange={(e) => setFname(e.target.value)} 
          value={f_name}  
          className="input_to" type="text" placeholder="Full Name" required />
          
        </div>

        <div className="f-onerow">
          <input 
          onChange={(e) => setEmail(e.target.value)} 
          value={email}  
          type="email" placeholder="Email" required />
          <input 
          onChange={(e) => setMobile(e.target.value)} 
          value={mobile}  
          type="tel" placeholder="Mobile Number" required />
        </div>
      
        <div className="f-onerow">
          <input 
          onChange={(e) => setState(e.target.value)} 
          value={state}  
          type="text" placeholder="Enter State" required />
          <input 
          onChange={(e) => setCity(e.target.value)} 
          value={city}  
          type="text" placeholder="Enter City" required />
        </div>

        <div className="f-onerow">
          <input 
          onChange={(e) => setExpertise(e.target.value)} 
          value={expertise}  
          type="text" placeholder="Area of Expertise" required />
          <input 
          onChange={(e) => setExperience(e.target.value)} 
          value={experience} 
          type="number" placeholder="Years of Experience" required />
        </div>
        
        <div className="f-testarea">
            <textarea 
            onChange={(e) => setDicr_pro(e.target.value)} 
            value={dicr_pro}  
            name="prof-bg" cols="10" rows="10" placeholder="Describe your Professional background here"></textarea>
        </div>


        <div controlId="formBasicEmail">
        <div>Set Profile Photo</div>
        <input
        className="input_to"
        onChange={(e) => setPhoto(e.target.files[0])} 
        
        type="file" placeholder="Choose file" />
      
      </div>


        <div className="f-onerow">
          <input 
          onChange={(e) => setPassword(e.target.value)} 
          value={password}  
          type="password" placeholder="Enter Password" required />
        </div>

        <button className="btn" onClick={handleSubmit}>
          Join Us
        </button>
      </div>
    </div>
  );
};

export default Student;
