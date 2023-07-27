import React from "react";
import "./Forms.css";

const Student = () => {
  return (
    <div>
      <div className="f-box">
        <h1>Add New Opening</h1>
        <div className="f-onerow">
          <input type="text" placeholder="Post Name" required />
          <input type="text" placeholder="Company Name" required />
        </div>

        <div className="f-testarea">
            <textarea name="prof-bg" cols="10" rows="10" placeholder="Company Description"></textarea>
        </div>

        <div className="f-onerow">
          <input type="text" placeholder="Enter Mode" required />
          <input type="text" placeholder="Duration (in Days)" required />
        </div>
        
        <div className="f-onerow">
          <input type="number" placeholder="Enter Stipend (in Thousands)" required />
          <input type="number" placeholder="Number of Positions" required />
        </div>
        
        


        <div className="f-margintop">
        <label htmlFor="startdate">Start Date</label>
        <div className="f-onerow">
          <input type="date" placeholder="Start Date" required />
        </div>
        </div>

        <div className="f-testarea">
            <textarea name="prof-bg" cols="10" rows="10" placeholder="Post Description"></textarea>
        </div>
      </div>
    </div>
  );
};

export default Student;
