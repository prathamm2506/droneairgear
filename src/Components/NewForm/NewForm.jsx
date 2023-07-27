import React, { useState } from "react";
import "./NewForm.css";
import "../Forms/Forms.css"

import Select from "react-select";

import { useFirebase } from "../../context/firebase"
import { useNavigate } from "react-router-dom";


const NewForm = () => {
    const navigate = useNavigate();

  const firebase = useFirebase();

  
  
  const categorySelect = [
    { label: "Mapping", value: "Map" },
    { label: "Designing", value: "Design" },
    { label: "Pilot", value: "Pilot" },
    { label: "Engineering", value: "Engineering" },
    { label: "Others", value: "Others" },

  ];
  const levelSelect = [
    { label: "Beginner", value: "beginner" },
    { label: "Medium", value: "medium" },
    { label: "Advanced", value: "advanced" },

  ];

  const [name, setName] = useState('');
  const [duration, setDura] = useState('');
  const [description, setDescrip] = useState('');
  const [language, setLang] = useState('');
  const [level, setLevel] = useState('');
  const [in_name, setIn_name] = useState('');
  const [in_discrip, setIn_discrip] = useState('');
  const [thumbnail, setThunbnail] = useState('');

  const [ch1, setCh1] = useState('');
  const [ch1_video, setCh1_Video] = useState('');
  const [ch1_dis, setCh1_dis] = useState('');
  const [category, setCategory] = useState(null);



  const categoryHandler = (selectedOption) => {
    setCategory(selectedOption.value);
  };
  const levelHandler = (selectedOption) => {
    setLevel(selectedOption.value);
  };

  const [price, setPrice] = useState('');


  const [loading, setLoading] = useState(false);




  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    await firebase.handleCreateNewCourse(name, category,duration, description, language, level, in_name, in_discrip, thumbnail, price, ch1, ch1_video, ch1_dis);
    setLoading(false);
    
    navigate("/dashbaord");
  };


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
            <h1>Create New Course</h1>

            <div className="f-onerow">
              <input 
              onChange={(e) => setName(e.target.value)} 
              value={name}
              type="text" placeholder="Course Name" required />
              <input 
              onChange={(e) => setDura(e.target.value)} 
              value={duration}
              type="number" placeholder="Duration (in months)" required />
            </div>

            <Select
                options={categorySelect}
                defaultValue={category}
                placeholder="Course Category"
                onChange={categoryHandler}
                required
                isSearchable
              />

            <div className="f-testarea">
              <textarea
                onChange={(e) => setDescrip(e.target.value)} 
                value={description}
                name="prof-bg"
                cols="10"
                rows="10"
                placeholder="Course Description"
                required
              ></textarea>
            </div>
            <div className="f-onerow">
              <input 
              onChange={(e) => setLang(e.target.value)} 
              value={language}
              type="text" placeholder="Course Language" required />
                            <input 
              onChange={(e) => setPrice(e.target.value)} 
              value={price}
              type="number" placeholder="Price" required  />
     
            </div>

            <Select
                options={levelSelect}
                defaultValue={level}
                placeholder="Course level"
                onChange={levelHandler}
                required
                isSearchable
              />

            <div className="f-margintop">
        <label>Upload Cover Photo</label>
        <div className="f-radio">
            <input 
            onChange={(e) => setThunbnail(e.target.files[0])} 
            type="file"
            required />           
        </div>
        </div>

        <div className="f-onerow">
              <input 
              onChange={(e) => setIn_name(e.target.value)} 
              value={in_name}
              type="text" placeholder="Instructor Name" required className="input2" />
            </div>
 

          

        <div className="f-testarea">
            <textarea 
            onChange={(e) => setIn_discrip(e.target.value)} 
            value={in_discrip}
            name="prof-bg" cols="10" rows="10" placeholder="Instructor Description" required></textarea>
        </div>



        <label style={{textAlign:"center"}}>------------  Upload Chapters  ------------</label>




        <div className="f-margintop">
        <label>Chapter 1</label>
        <div className="f-onerow f-margintop">
        <input 
              onChange={(e) => setCh1(e.target.value)} 
              value={ch1}
              type="text" placeholder="Chapter Name" required className="input2" />
        </div>
              
            </div>

        <div className="f-margintop">
        <label>Upload Chapter Video</label>
        <div className="f-radio">
            <input 
            onChange={(e) => setCh1_Video(e.target.files[0])} 
            type="file"
            required />           
        </div>
        </div>

        <div className="f-testarea">
            <textarea 
            onChange={(e) => setCh1_dis(e.target.value)} 
            value={ch1_dis}
            required
            name="prof-bg" cols="10" rows="10" placeholder="Chapter Notes"></textarea>
        </div>






        


        <span style={{color:"#ff0000", fontWeight:"600"}}>Note: Upload may take a few moments.</span>

        <button className="submitForm" onClick={handleSubmit}>Create Course</button>

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

export default NewForm;
