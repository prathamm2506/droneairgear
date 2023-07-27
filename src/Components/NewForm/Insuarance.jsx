import React from "react";
import "./NewForm.css";

const Insuarance = () => {
  return (
    <div className="formContainer">
      <div className="newForm">
        <div className="newLeft">

          <form className="newWrapper">
            <h1>Get Insuarance</h1>

            <div className="f-onerow">
              <input type="text" placeholder="Drone Serial Number" required className="input2"/>
            </div>
            <div className="f-onerow">
              <input type="text" placeholder="Applicant Name" required className="input2" />
            </div>
            
            {/* <div className="f-margintop">
        <label>Start Date</label>
        <div className="f-onerow">
        <input type="date" placeholder="Start Date" required />           
        </div>
        </div>
        <div className="f-onerow">
              <input type="text" placeholder="Mode (eg. Offline)" required />
            </div> */}
            {/* <div className="f-testarea">
              <textarea
                name="prof-bg"
                cols="10"
                rows="10"
                placeholder="Course Description"
              ></textarea>
            </div> */}

            <div className="f-margintop">
        <label>Upload Drone Registration Certificate</label>
        <div className="f-radio">
            <input type="file" />           
        </div>
        </div>

        <div className="f-margintop">
        <label>Upload Invoice</label>
        <div className="f-radio">
            <input type="file" />           
        </div>
        </div>

        <div className="f-margintop">
        <label>Upload Recent Images of Drone</label>
        <div className="f-radio">
            <input type="file" multiple />           
        </div>
        </div>
        {/* <div className="f-onerow">
              <input type="text" placeholder="Enter City" required />
              <input type="text" placeholder="Enter State" required />
            </div>

            <div className="f-onerow">
              <input type="text" placeholder="Structure (PVT,LTD,LLP,etc)" required />
              <input type="text" placeholder="Organization Stage" required />
            </div>
 
            <div className="f-onerow">
              <input type="text" placeholder="Organization Size" required />
              <input type="text" placeholder="Annual Revenue (in Lakhs)" required />
            </div>

            <div className="f-onerow">
              <input type="text" placeholder="Organization Contact" required />
            </div> */}

           {/* <div className="f-margintop">
        <label htmlFor="gender">Select Gender</label>
        <div className="f-radio">
            
            <div className="f-rr">
            <input type="radio" id="male" name="gender" value="Male" className="custom-radio"/>
            <label for="Male">Male</label></div>
            <div className="f-rr">
            <input type="radio" id="female" name="gender" value="Female" className="custom-radio"/>
            <label for="Female">Female</label></div>
            <div className="f-rr">
            <input type="radio" id="other" name="gender" value="Other" className="custom-radio"/>
            <label for="Other">Other</label>  </div>  
        </div>
        </div> */}
{/* 
        <div className="f-margintop1">
        <div className="f-tworow">
          <label htmlFor="course">Last Passed Course</label>
          <select name="course" id="course" required>
            <option value="Default">Last Passed Course</option>
            <option value="SSC">SSC</option>
            <option value="HSC">HSC</option>
            <option value="Diploma">Diploma</option>
            <option value="Bachelor">Bachelor</option>
            <option value="Masters">Masters</option>
            <option value="Doctorate">Doctorate</option>
            <option value="Other">Other</option>
          </select>
        </div>
        </div> */}
        
        {/* <div className="f-testarea">
            <textarea name="prof-bg" cols="10" rows="10" placeholder="Enter component description and other specifications"></textarea>
        </div> */}
        {/* 

        <div className="f-testarea">
            <textarea name="prof-bg" cols="10" rows="10" placeholder="Enter details about the internship and key responsibilities"></textarea>
        </div>

        <div className="f-testarea">
            <textarea name="prof-bg" cols="10" rows="10" placeholder="Enter elegibility or people who can apply"></textarea>
        </div> */}

        <button className="submitForm">Register</button>

          </form>
        </div>

        <div className="newRight">
          {/* <img src="https://www.medianama.com/wp-content/uploads/2022/09/UAVs-help2.jpeg" alt="" /> */}
        </div>
      </div>
    </div>
  );
};

export default Insuarance;
