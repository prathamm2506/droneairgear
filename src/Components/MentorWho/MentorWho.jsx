import React from "react";
import './MentorWho.css'

const MentorWho = () => {
  return (
    <div className="mentorwho">
      <div className="mw-left">
        <h1 className="mw-heading">Who Can Become a Mentor?</h1>
        <p>
        At [Website Name], we believe in the power of mentorship to inspire, guide, and empower individuals on their personal and professional journeys. Our mentorship program connects you with experienced mentors who are passionate about sharing their knowledge and expertise.
        </p>
        <div className="mw-buttons">
            <div className="btn">
                Mentor Application
            </div>
            <div className="btn">
                Am I ELigible?
            </div>
        </div>
      </div>
      <div className="mw-right">
        <img src="https://pilotinstitute.com/wp-content/uploads/2020/07/UDPG-960.jpg" />
      </div>
    </div>
  );
};

export default MentorWho;
