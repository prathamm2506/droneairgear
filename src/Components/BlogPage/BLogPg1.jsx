import React from 'react'
import "./BlogPg.css";
import picture1 from './bp1.jpeg'
import picture2 from './bp1.jpeg'
import picture3 from './bp3.jpeg'
import picture4 from './bp3.jpeg'


const BLogPg1 = () => {

  return (
    <div className="blogPg">

      <div className="bg-container">
        <div className="bg-header bp2">
          <div className="bg-para">
            <h4>Mind Controlling</h4>
            <h1>About Our Project</h1>
            <p>
            Our innovation saves time and helps disabled people with their day to day activities also helping them to communicate as it uses EEG Sensor which detects the brain waves and displays them on the monitor.

            </p>
          </div>
        </div>
      </div>

      <div
        style={{ background: "#fff", padding: "130px 2rem" }}
        className="bg-container"
      >
        <div className="bg-middle">
          <div className="bgm-left">
            <img className="bg-full"
              src={picture2}
              alt=""
            />
            <img className="bg-media" src="https://dji-official-fe.djicdn.com/cms/uploads/a9b0636a0208b6467b18abcf6f8bb06d.jpg" alt="" />
          </div>
          <div className="bgm-right">
            <h1>EEG Signal Acquisition
</h1>
            {/* <h4>Lorem, ipsum dolor.</h4> */}
            <p>
            EEG sensors are placed on the scalp to detect and record the brain's electrical activity. The signals are then amplified and processed.

Feature Extraction: Signal processing algorithms analyze the EEG signals to extract relevant features or patterns that correspond to specific mental states or intentions. For instance, certain patterns in the EEG signals might indicate a state of focus or relaxation.


            </p>
          </div>
        </div>
      </div>

      <div className="bg-container" style={{ padding: "100px 2rem" }}>
        <div className="bg-lower">
      <h1>Command Decoding
</h1>
          <p>
          Machine learning or pattern recognition algorithms are trained to classify these extracted features and interpret them as commands. For example, a specific pattern in the EEG signals might be associated with the "on" command, while another pattern might correspond to the "off" command.
          </p>
        </div>
      </div>

      <div
        style={{ background: "#fff", padding: "130px 2rem" }}
        className="bg-container"
        >
        <div className="bg-last">
          <div className="bgl-left">
          <h1>Lobes of the Brain
 </h1>
            
            <p>
            Frontal lobe- The largest lobe of the brain, located in the front of the head, the frontal lobe is involved in personality characteristics, decision-making and movement

Parietal lobe- The middle part of the brain, the parietal lobe helps a person identify objects and understand spatial relationships (where one’s body is compared with objects around the person). 

Occipital lobe- The occipital lobe is the back part of the brain that is involved with vision.

Temporal lobe- The sides of the brain, temporal lobes are involved in short-term memory, speech, musical rhythm and some degree of smell recognition.

            </p>
          </div>
          <div className="bgl-right">
            <img
              src={picture4}
              alt=""
            />
          </div>
        </div>
      </div>
      
    </div>

  )
}

export default BLogPg1