import React from "react";
import "./Drone_content.css";

const Drone_content = () => {
  return (
    <div className="dcm">
      {/* <div className="drone_content">
            <div className="drone">
                <div className="head">
                    <h1>Choreographed Skies</h1>
                    <p>A drone show is a breathtaking spectacle that combines cutting-edge technology, precision choreography, and artistic creativity to create stunning visual displays in the night sky. These performances feature a synchronized fleet of drones equipped with LED lights, which gracefully dance through the air, forming intricate patterns, shapes, and even 3D images.</p>
                </div>
                <div className="img">
                    <div className="img_1">
                        <div className="shadow"></div>
                        <img src="https://app.dronestories.com/storage/images/1672850223.jpg" alt="" />
                    </div>
                    <div className="img_1 img_2">
                        <div className="shadow"></div>
                        <img src="https://www.vifindia.org/sites/default/files/1458837420714192.jpg" alt="" />
                    </div>
                </div>
            </div>
            <div className="drone">
            <div className="img">
                    <div className="img_1">
                        <div className="shadow"></div>
                        <img src="https://imengine.editorial.prod.rgb.navigacloud.com/?uuid=b5900326-8a1c-5027-a866-d62bb57de628&type=primary&function=cover&source=false&width=800" alt="" />
                    </div>
                    <div className="img_1 img_2">
                        <div className="shadow"></div>
                        <img src="https://stpetecatalyst.com/wp-content/uploads/2021/07/drone-show.jpg" alt="" />
                    </div>
                </div>
                <div className="head">
                    <p>Drone shows have gained popularity due to their unique ability to create immersive and captivating experiences. The choreographed precision of these performances is achieved through sophisticated programming and advanced drone technologies. Each drone is equipped with GPS positioning, wireless communication, and autonomous flight control systems, enabling seamless coordination and synchronization during the show.One of the key advantages of drone shows is their scalability and adaptability.</p>
                </div>
                
            </div>
        </div> */}

      <div className="dcmContainer ">

        <div className="dcmLeft leftBorder">
          <div className="dcmText">
            <h1>Surveillance and Security</h1>
            <p>
            Surveillance drones or unmanned aerial systems (UASs) raise significant issues for privacy and civil liberties. Drones are capable highly advanced surveillance, and drones already in use by law enforcement can carry various types of equipment including live-feed video cameras, infrared cameras, heat sensors, and radar. They can also carry wifi crackers and fake cell phone towers that can determine your location or intercept your texts and phone calls. 
            </p>
          </div>
        </div>

        <div className="dcmRight">
            <img src="https://controldron.com/wp-content/uploads/2017/11/minidron-de-la-armada.jpg" alt="" />
        </div>
      </div>

      <div className="dcmContainer">

        <div className="dcmRight">
            <img src="https://emergencyservicestimes.com/wp-content/uploads/2018/07/iRedDrone03.jpg" alt="" />
        </div>

        <div className="dcmLeft rightBorder">
          <div className="dcmText">
            <h1>Search and Rescue</h1>
            <p>
            While drones are rapidly demonstrating its value across many industries, its application is particularly dramatic with drones in Search and Rescue operations where the extra range and reach of drones make it is presence felt like nowhere else. Unlike most other applications which are fairly routinized and predictable, SAR operations are very unpredictable and each operation unique in its execution.
            </p>
          </div>
        </div>

      </div>

    </div>
  );
};

export default Drone_content;
