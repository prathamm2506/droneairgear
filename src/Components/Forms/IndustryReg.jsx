import React, { useState } from "react";
import "./Forms.css";
import axios, { Axios } from "axios";

const Student = () => {


  const [name,setName] = useState('');
  const [company,setCompany] = useState('');

  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(name,company);
    const data ={
      Name:name,
      Company:company
    }
    axios.post('https://sheet.best/api/sheets/8e74528e-3615-424d-868e-7f53821d5463',data).then((response)=>{
      console.log(response);
      // clearing form fields
      setName('');
      setCompany('');
    })
  }

  return (
    <div>
      <div className="f-box">
        <h1>Industry Registration</h1>

        <form onSubmit={handleSubmit}>
          <div className="f-onerow">
            <input type="text" placeholder="Name" required value={name} name="Name" onChange={(e)=>setName(e.target.value)} />
            <input type="text" placeholder="Company" value={company} required name="Company" onChange={(e)=>setCompany(e.target.value)} />
          </div>

          <button type="submit" className="indbutton infoButton">
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default Student;
