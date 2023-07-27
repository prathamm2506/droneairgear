import React, { useEffect, useState } from "react";
import "./NewForm.css";
import { useFirebase } from "../../context/firebase";
import { useNavigate } from "react-router-dom";

const StartupReg = () => {

  const firebase = useFirebase();
  const navigate = useNavigate();

  const [org_id, setOrg_id] = useState('');
  const [name, setName] = useState('');
  const [fon_name, setFon_name] = useState('');
  const [org_email, setOrg_email] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [structure, setStructure] = useState('');
  const [stage, setStage] = useState('');
  const [size, setSize] = useState('');
  const [revenue, setRevenue] = useState('');
  const [contact, setContact] = useState('');
  const [goal, setGoal] = useState('');
  const [raised, setRaised] = useState('');
  const [no_investor, setNo_investor] = useState('');
  const [valuation, setValuation] = useState('');
  const [over_title, setOver_title] = useState('');
  const [over_dis, setOver_dis] = useState('');
  
  const [graph, setGraph] = useState('');
  const [certificate, setCertificate] = useState('');
  
  const [logo, setLogo] = useState('');

  const [loading, setLoading] = useState(false);





  const handleSubmit = async(e) => {
    e.preventDefault();
    setLoading(true);

    firebase.handleJoinStartup(org_id, name, fon_name, org_email, city, state, structure, stage, size, revenue, contact, goal, raised, no_investor, valuation,over_title, over_dis, graph, certificate, logo);
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
            <h1>Startup Registration</h1>

            <div className="f-onerow">
              <input 
              onChange={(e) => setOrg_id(e.target.value)} 
              value={org_id}
              type="text" placeholder="DPIIT ID" required />

              <input 
              onChange={(e) => setName(e.target.value)} 
              value={name}
              type="name" placeholder="Organization Name" required />
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
              onChange={(e) => setFon_name(e.target.value)} 
              value={fon_name}
              type="name" placeholder="Name of Founder" required />

              <input 
              onChange={(e) => setOrg_email(e.target.value)} 
              value={org_email}
              type="email" placeholder="Organization Email" required />
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

            <div className="f-onerow">
              <input 
              onChange={(e) => setStructure(e.target.value)} 
              value={structure}
              type="text" placeholder="Structure (PVT,LTD,LLP,etc)" required />
              <input 
              onChange={(e) => setStage(e.target.value)} 
              value={stage}
              type="text" placeholder="Organization Stage" required />
            </div>
 
            <div className="f-onerow">
              <input
              onChange={(e) => setSize(e.target.value)} 
              value={size}
               type="text" placeholder="Organization Size" required />
              <input 
              onChange={(e) => setRevenue(e.target.value)} 
              value={revenue}
              type="number" placeholder="Annual Revenue (in Lakhs)" required />
            </div>

            <div className="f-onerow">
              <input 
              onChange={(e) => setContact(e.target.value)} 
              value={contact}
              type="number" placeholder="Organization Contact" maxLength={10} minLength={10} required className="input2"/>
            </div>
            
            <div className="f-onerow">
              <input 
              onChange={(e) => setGoal(e.target.value)} 
              value={goal}
              type="number" placeholder="Goal Evaluation" required />
              <input 
              onChange={(e) => setRaised(e.target.value)} 
              value={raised}
              type="number" placeholder="Investment Raised" required />
            </div>

            <div className="f-onerow">
              <input 
              onChange={(e) => setNo_investor(e.target.value)} 
              value={no_investor}
              type="number" placeholder="Number of Investors" required />
              <input 
              onChange={(e) => setValuation(e.target.value)} 
              value={valuation}
              type="number" placeholder="Valuation" required />
            </div>


            <div className="f-margintop">
        <label>Upload Organization Registration Certificate</label>
        <div className="f-radio">
            <input 
            onChange={(e) => setCertificate(e.target.files[0])} 
            type="file" />           
        </div>
        </div>
        <div className="f-margintop">
        <label>Upload Organization Logo</label>
        <div className="f-radio">
            <input 
            onChange={(e) => setLogo(e.target.files[0])} 
            type="file" />           
        </div>
        </div>

        <div className="f-margintop">
        <label style={{fontWeight:800, fontSize:"20px"}}>Upload Organization Overview</label>

        <div className="f-margintop">
        <div className="f-onerow">
              <input 
              onChange={(e) => setOver_title(e.target.value)} 
              value={over_title}
              type="text" placeholder="Organization Overview Title" required className="input2" />
            </div>
 
            <div className="f-margintop">
        <label>Upload Organization Revenue Graph Image</label>
        <div className="f-radio">
            <input 
            onChange={(e) => setGraph(e.target.files[0])} 
            type="file" />           
        </div>
        </div>

          

        <div className="f-testarea">
            <textarea 
            onChange={(e) => setOver_dis(e.target.value)} 
            value={over_dis}
            name="prof-bg" cols="10" rows="10" placeholder="Organization Overview" required></textarea>
        </div>
        </div>

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

export default StartupReg;
