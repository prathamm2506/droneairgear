import React, {useState, useEffect} from "react";
import "./NewForm.css";


import { Link, useNavigate, useParams } from 'react-router-dom'
import { useFirebase } from '../../context/firebase'
import Log from "../DB_Admin/Auth/Log";

const InternshipReg = () => {

  
  const params = useParams();
    const firebase = useFirebase();
    const navigate = useNavigate();

    const [data, setData] = useState('');
    const [url, setURL] = useState(null);
    useEffect(() => {
        firebase.getInternshipById(params.internshipId).then((value) => setData(value.data()));
    },[data]);


    const [name, setName] = useState();
    const [contact, setContact] = useState();
    const [email, setEmail] = useState();
    const [resume, setResume] = useState();
    const [why, setWhy] = useState();

  const [loading, setLoading] = useState(false);


    const handleSubmit = async (e) =>{
      e.preventDefault();
      setLoading(true);

      await firebase.placeIntern(params.internshipId, name, contact, email, resume, why);
      setLoading(false);
      
      navigate('/internshipPage');
    }


    if(!firebase.isLogedIn) return <Log/>


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
            <h1>Apply For {data.post} Internship at {data.company}</h1>

            <div className="f-onerow">
              <input
              onChange={(e) => setName(e.target.value)}
              value={name} 
              type="text" placeholder="Full Name" className="input2" required/>
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

            <div className="f-margintop">
        <label>Upload Resume</label>
        <div className="f-radio">
            <input 
            onChange={(e) => setResume(e.target.files[0])} 
            type="file"
            required />           
        </div>
        </div>

        <div className="f-testarea">
            <textarea 
            onChange={(e) => setWhy(e.target.value)}
                value={why}
            name="prof-bg" cols="10" rows="10" placeholder="Why are you applying for this internship ?"></textarea>
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

export default InternshipReg;
