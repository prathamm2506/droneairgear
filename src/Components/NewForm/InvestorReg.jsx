import React, { useEffect, useState } from "react";
import "./NewForm.css";
import { useFirebase } from "../../context/firebase";
import { useNavigate } from "react-router-dom";

const InvestorReg = () => {

  const firebase = useFirebase();

  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [email, setEmail] = useState('');

  const [loading, setLoading] = useState(false);
  
  const handleSubmit = async(e) => {
    e.preventDefault();
    setLoading(true);

    firebase.handleJoinInvestor(name, contact, email);
    setLoading(false);
    navigate('/investor');
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
            <h1>Investor Registration</h1>

            <div className="f-onerow">
              <input 
              onChange={(e) => setName(e.target.value)} 
              value={name}
              type="text" placeholder="Full Name" required className="input2"/>
            </div>
            <div className="f-onerow">
              <input 
              onChange={(e) => setContact(e.target.value)} 
              value={contact}
              type="number" maxLength={10} minLength={10} placeholder="Contact" required />
              <input 
              onChange={(e) => setEmail(e.target.value)} 
              value={email}
              type="email" placeholder="Email" required />
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

export default InvestorReg;
