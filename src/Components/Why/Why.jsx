import React from "react"
import "./Why.css"

import Ill1 from '../../assets/ill/ill-1.jpg'
import Ill2 from '../../assets/ill/ill-2.jpg'
import Ill3 from '../../assets/ill/ill-3.png'
import Ill4 from '../../assets/ill/ill-4.png'

const Why = () => {
  return (
    <div className="why">

        <h2 className="wh-heading">
        Why Hire from portalName?
        </h2>

      <div className="wh-row">

        <div className="wh-box">
          <div className="wh-inner">
            <div className="wh-icon">
              <img src={Ill1} className="wh-iconn" />
            </div>
            <div className="wh-text">
              <h2>Job Ready Candidates</h2>
              <p>
              Our intense programs are taught by industry experts & candidates are job ready as they work on relevant projects.
              </p>

            </div>
          </div>
        </div>

        <div className="wh-box">
          <div className="wh-inner">
            <div className="wh-icon">
              <img src={Ill2} className="wh-iconn" />
            </div>
            <div className="wh-text">
            <h2>Dedicated Support</h2>
              <p>
              Our relationship managers are trained to understand your
needs and will help you in
the hiring process
              </p>

            </div>
          </div>
        </div>

        <div className="wh-box">
          <div className="wh-inner">
            <div className="wh-icon">
              <img src={Ill3} className="wh-iconn" />
            </div>
            <div className="wh-text">
              <h2>Diverse Talent Pool</h2>
              <p>
                Pick the right talent based on skills and experience and
aligned to the projects you
are hiring for.
              </p>

            </div>
          </div>
        </div>

        <div className="wh-box">
          <div className="wh-inner">
            <div className="wh-icon">
              <img src={Ill4} className="wh-iconn" />
            </div>
            <div className="wh-text">


              <h2>Zero Hiring Cost</h2>
              <p>
              Hire the best job ready talent directly from SimpliRecruit
at zero cost to your
organization
              </p>

            </div>
          </div>
        </div>


        
      </div>
    </div>
  );
};

export default Why;
