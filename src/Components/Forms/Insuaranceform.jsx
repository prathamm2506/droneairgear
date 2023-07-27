import React from "react";
import "./Forms.css";

const Student = () => {
  return (
    <div>
      <div className="f-box">
        <h1>Get Insuarance</h1>
        <div className="f-onerow">
          <input
            type="text"
            placeholder="Duration of Insuarance (in Months)"
            required
          />
          <input type="text" placeholder="Drone Registration ID" required />
        </div>

        <div className="f-margintop">
          <label htmlFor="gender">Recent Drone Image</label>
          <div className="f-radio">
            <input type="file" />
          </div>
        </div>

        <div className="f-onerow">
          <input type="text" placeholder="Drone Serial Number" required />
        </div>

        <div className="f-margintop">
          <label htmlFor="startdate">Purchase Date</label>
          <div className="f-onerow">
            <input type="date" placeholder="Start Date" required />
          </div>
        </div>

        <div className="f-margintop">
          <label htmlFor="gender">Drone Purchase Invoice</label>
          <div className="f-radio">
            <input type="file" />
          </div>
        </div>
        <button className="btn">
          Join Us
        </button>
        {/* <div className="f-margintop1">
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
      </div>
    </div>
  );
};

export default Student;
