import React, { useState } from "react";
import "./Forms.css";
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';

import { useFirebase } from "../../context/firebase"

const Student = () => {
  const firebase = useFirebase();

  const [name, setName] = useState('');
  const [sup_Name, setSup_name] = useState('');
  const [description, setDescrip] = useState('');
  
  const [location, setLocation] = useState('');
  
  const [thumbnail, setThunbnail] = useState('');
  
  const [price, setPrice] = useState('');





  const handleSubmit = async (e) => {
    e.preventDefault();
    await firebase.handleAddComponents(name, sup_Name, description, location, thumbnail, price)
  };

  return (
    <div>
      <div className="f-box">
        <h1>Add Product</h1>
        <div className="f-onerow">
          <input
          onChange={(e) => setName(e.target.value)} 
          value={name}  
          type="text" placeholder="Component Name" maxLength={20} required />

          <input 
          onChange={(e) => setSup_name(e.target.value)} 
          value={sup_Name}
          type="text" placeholder="Suplier Name" required />
        </div>

        

        <div className="f-testarea">
            <textarea 
            onChange={(e) => setDescrip(e.target.value)} 
          value={description}
            name="prof-bg" cols="10" rows="10" placeholder="Component Description"></textarea>
        </div>

        
      
        <div className="f-testarea">
            <textarea 
            onChange={(e) => setLocation(e.target.value)} 
          value={location}
            name="prof-bg" cols="10" rows="5" placeholder="Store Address"></textarea>
        </div>

        

        <div className="mb-3" controlId="formBasicEmail">
        <label>Component Picture</label>
        <input
        className="input_to"
        onChange={(e) => setThunbnail(e.target.files[0])} 
        
        type="file" placeholder="Choose file" />
      
      </div>

      

      <div className="mb-3" controlId="formBasicEmail">
        
        <input 
        className="input_to"
        onChange={(e) => setPrice(e.target.value)} 
        value={price} 
        type="number" placeholder="Enter Price" />
      
      </div>

        <button className="btn" onClick={handleSubmit}>Submit</button>
       
      </div>
    </div>
  );
};

export default Student;
