import React, { useState } from "react";
import "./NewForm.css";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useFirebase } from "../../context/firebase";

const SellerReg = () => {
  const navigate = useNavigate();
  const firebase = useFirebase();

  const [shop, setShop] = useState();
  const [name, setName] = useState();
  const [contact, setContact] = useState();
  const [email, setEmail] = useState();
  const [city, setCity] = useState();
  const [state, setState] = useState();
  const [address, setAddress] = useState();

  const [loading, setLoading] = useState(false);


  const handleSubmit = async(e) => {
    e.preventDefault();
    setLoading(true);

    await firebase.handleJoinSeller(shop, name, contact, email, city, state, address);
    setLoading(false);
    
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
            <h1>Seller Registration</h1>

            <div className="f-onerow">
              <input
              onChange={(e) => setShop(e.target.value)} 
              value={shop} 
              type="text" placeholder="Shop Name" required/>
              <input
              onChange={(e) => setName(e.target.value)} 
              value={name} 
              type="text" placeholder="Supplier Name" required/>
            </div>
            <div className="f-onerow">
              <input
              onChange={(e) => setContact(e.target.value)} 
              value={contact} 
              type="number" placeholder="Contact" maxLength={10} minLength={10} required />
              <input
              onChange={(e) => setEmail(e.target.value)} 
              value={email} 
              type="email" placeholder="Email" required />
            </div>

            <div className="f-onerow">
              <input
              onChange={(e) => setCity(e.target.value)} 
              value={city} 
              type="text" placeholder="City" required />
              <input 
              onChange={(e) => setState(e.target.value)} 
              value={state} 
              type="text" placeholder="State" required />
            </div>
        

        <div className="f-testarea">
            <textarea 
            onChange={(e) => setAddress(e.target.value)} 
            value={address}
            name="prof-bg" cols="10" rows="10" placeholder="Enter shop address"></textarea>
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

export default SellerReg;
