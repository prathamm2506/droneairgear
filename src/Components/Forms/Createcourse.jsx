import React, { useState } from "react";
import "./Forms.css";
// import Button from 'react-bootstrap/Button';


import { useFirebase } from "../../context/firebase"
import { useNavigate } from "react-router-dom";

const Student = () => {

  const navigate = useNavigate();

  const firebase = useFirebase();

  const [name, setName] = useState('');
  const [duration, setDura] = useState('');
  const [description, setDescrip] = useState('');
  const [language, setLang] = useState('');
  const [level, setLevel] = useState('');
  const [in_name, setIn_name] = useState('');
  const [in_discrip, setIn_discrip] = useState('');
  const [thumbnail, setThunbnail] = useState('');
  const [cover_pic, setCover_pic] = useState('');
  const [price, setPrice] = useState('');





  const handleSubmit = async (e) => {
    e.preventDefault();
    await firebase.handleCreateNewCourse(name, duration, description, language, level, in_name, in_discrip, thumbnail, cover_pic, price);
    navigate("/");
  };

  return (
    <div>
      <div className="f-box">
        <h1>Create New Course</h1>
        <div className="f-onerow">
          <input
          onChange={(e) => setName(e.target.value)} 
          value={name}  
          type="text" placeholder="Course Name" required />

          <input 
          onChange={(e) => setDura(e.target.value)} 
          value={duration}
          type="number" placeholder="Duration" required />
        </div>

        

        <div className="f-testarea">
            <textarea 
            onChange={(e) => setDescrip(e.target.value)} 
          value={description}
            name="prof-bg" cols="10" rows="10" placeholder="Course Description"></textarea>
        </div>

        <div className="f-onerow">
          <input
          onChange={(e) => setLang(e.target.value)} 
          value={language}
          type="text" placeholder="Course Language" required />
          <input
          onChange={(e) => setLevel(e.target.value)} 
          value={level}
           type="text" placeholder="Course Level" required />
        </div>
      
        <div className="f-onerow">
          <input 
          onChange={(e) => setIn_name(e.target.value)} 
          value={in_name}
          type="text" placeholder="Instructor Name" required />
        </div>

        <div className="f-testarea">
            <textarea 
            onChange={(e) => setIn_discrip(e.target.value)} 
          value={in_discrip}
            name="prof-bg" cols="10" rows="10" placeholder="Instructor Description"></textarea>
        </div>

        <div controlId="formBasicEmail">
        <div>Set Thumbnail</div>
        <input 
        className="input_to"
        onChange={(e) => setThunbnail(e.target.files[0])} 
        
        type="file" placeholder="Choose file" />
      
      </div>

      <div controlId="formBasicEmail">
        <div>Set Cover Pic</div>
        <input
        className="input_to"
        onChange={(e) => setCover_pic(e.target.files[0])} 
        
        type="file" placeholder="Choose file" />
      
      </div>

      <div controlId="formBasicEmail">
        <div>Set Price</div>
        <input className="input_to"
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
