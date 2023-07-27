import React from 'react'
import './AboutDrone.css'
import {GiPhotoCamera} from 'react-icons/gi'
import {GrResources} from 'react-icons/gr'
import {BsBatteryCharging} from 'react-icons/bs'
import {GiBoatPropeller} from 'react-icons/gi'
import {GiWifiRouter} from 'react-icons/gi'
import {GiStickFrame} from 'react-icons/gi'
import {SiSpinrilla} from 'react-icons/si'
import {MdWifiTethering} from 'react-icons/md'
import {RiSensorFill} from 'react-icons/ri'
import {GiMovementSensor} from 'react-icons/gi'
import {MdGpsFixed} from 'react-icons/md'
import {TbTruckDelivery} from 'react-icons/tb'
import {GiVirtualMarker} from 'react-icons/gi'
import {RiPlantFill} from 'react-icons/ri'

import Security from '../../assets/security.jpg'
import Deliver from '../../assets/delivery.jpeg'
import Agri from '../../assets/agricultural.jpg'
import SkyV from '../../assets/skyview.jpg'
import Race from '../../assets/racing.jpeg'

 
const AboutDrone = () => {
  return (
    <div className='ad-mega stratum'>
    <div className='container aboutdrone'>
        <div className="mainone">
        <div className="ad-firstdiv">
            <h1>Introduction to  Drones</h1>
            <p>Drones, also known as unmanned aerial vehicles (UAVs), are aircraft that are remotely or autonomously operated without a human pilot onboard. Drones are typically controlled by a human operator on the ground, who uses a remote control or a computer to guide the vehicle's movements. Drones can also be programmed to operate autonomously, using pre-programmed instructions to navigate their environment.</p>
        </div>

        <div className="ad-secondiv">
            <div className="ad-leftdiv">
                <div className="ad-insidediv">
                <h4>Delivery and Logistics <TbTruckDelivery className='icon'/></h4>
                <p> Drones are revolutionizing the delivery and logistics industry, offering faster and more efficient delivery services. They can be used to transport small packages or medical supplies to remote areas.</p>
                </div>

                <div className="ad-insidediv">
                <h4>Virtual Tours<GiVirtualMarker className='icon'/></h4>
                <p>Drones can be used to create virtual tours & demonstrations of products or services, allowing potential customers to experience them in more immersive way. This can be particularly useful for real estate agencies, which can use drones to create virtual tours of properties.</p>
                </div>
            </div>



            <div className="ad-centerdiv">

            </div>


            <div className="ad-rightdiv">
            <div className="ad-insidediv1">
                <h4><GiPhotoCamera className='icon'/>Aerial Photography</h4>
                <p>Drones are capable of capturing high-quality aerial photographs and videos, which can be used to create compelling marketing materials for products and services. </p>
                </div>

                

                <div className="ad-insidediv1">
                <h4><RiPlantFill className='icon'/>Agriculture </h4>
                <p>Drones can be used to monitor crops and collect data on plant health, moisture levels, and soil quality. This data can be used to optimize crop yields and reduce the need for pesticides and herbicides, resulting in more sustainable and eco-friendly farming.</p>
                </div>
            </div>
        </div>
    </div>


    <div className="ad-tact">
        <div className="ad-textdiv">
            {/* <h1>Talv-tact</h1> */}
            <p>Drones, also known as unmanned aerial vehicles (UAVs), are aircraft that are remotely or autonomously operated without a human pilot onboard. Drones are typically controlled by a human operator on the ground, who uses a remote control or a computer to guide the vehicle's movements. Drones can also be programmed to operate autonomously, using pre-programmed instructions to navigate their environment.</p>
            <p>Drones have become increasingly popular in recent years due to their versatility and the wide range of applications they can be used for. They come in various sizes, from small hobbyist drones to large industrial drones used for commercial purposes. They can be equipped with cameras, sensors, and other equipment to perform tasks such as aerial photography and surveying, search and rescue operations, agricultural monitoring, and delivery services.</p>
        </div>

        <div className="ad-components">
            <h3>Components</h3>

            <div className="ad-imagebox">
                <div className="ad-imgsection">
                    <img src="https://throttle.aero/wp-content/uploads/2022/06/Dopo_hp-768x719.png" alt="Drone" />
                </div>

                <div className="ad-mainconfig">
                    <div className="ad-sideone">
                        <div className="ad-entity">
                            <div className="ad-icon1">
                                <BsBatteryCharging/>
                            </div>
                            <div className="ad-icontext">
                                <h5>Battery</h5>
                                <p>Lorem, ipsum dolor.</p>
                            </div>
                        </div>

                        <div className="ad-entity">
                            <div className="ad-icon1">
                                <GiBoatPropeller/>
                            </div>
                            <div className="ad-icontext">
                                <h5>Propellers</h5>
                                <p>Lorem, ipsum dolor.</p>
                            </div>
                        </div>

                        <div className="ad-entity">
                            <div className="ad-icon1">
                                <GiWifiRouter/>
                            </div>
                            <div className="ad-icontext">
                                <h5>Transmitter</h5>
                                <p>Lorem, ipsum dolor.</p>
                            </div>
                        </div>

                        <div className="ad-entity">
                            <div className="ad-icon1">
                                <SiSpinrilla/>
                            </div>
                            <div className="ad-icontext">
                                <h5>Sensors</h5>
                                <p>Lorem, ipsum dolor.</p>
                            </div>
                        </div>

                        <div className="ad-entity">
                            <div className="ad-icon1">
                                <RiSensorFill/>
                            </div>
                            <div className="ad-icontext">
                                <h5>Transmitter</h5>
                                <p>Lorem, ipsum dolor.</p>
                            </div>
                        </div>
                    </div>

                    <div className="ad-sideone">
                    <div className="ad-entity">
                            <div className="ad-icon1">
                                <MdWifiTethering/>
                            </div>
                            <div className="ad-icontext">
                                <h5>Reveiver</h5>
                                <p>Lorem, ipsum dolor.</p>
                            </div>
                        </div>

                        <div className="ad-entity">
                            <div className="ad-icon1">
                                <GiMovementSensor/>
                            </div>
                            <div className="ad-icontext">
                                <h5>Gyroscope</h5>
                                <p>Lorem, ipsum dolor.</p>
                            </div>
                        </div>

                        <div className="ad-entity">
                            <div className="ad-icon1">
                                <MdGpsFixed/>
                            </div>
                            <div className="ad-icontext">
                                <h5>GPS</h5>
                                <p>Lorem, ipsum dolor.</p>
                            </div>
                        </div>

                        <div className="ad-entity">
                            <div className="ad-icon1">
                                <GiStickFrame/>
                            </div>
                            <div className="ad-icontext">
                                <h5>Frame</h5>
                                <p>Lorem, ipsum dolor.</p>
                            </div>
                        </div>

                        <div className="ad-entity">
                            <div className="ad-icon1">
                                <GiPhotoCamera/>
                            </div>
                            <div className="ad-icontext">
                                <h5>Camera</h5>
                                <p>Lorem, ipsum dolor.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    </div>

    <div className="ad-applications">
        <div className="container2">
            <h3>Applications</h3>

            <div className="ad-appgol">
                <div className="ad-perfect">
                    <img src={Security} alt="Drone" />
                    <p>Security </p>
                </div>
                <div className="ad-perfect">
                    <img src={Race} alt="Drone" />
                    <p>Racing</p>
                </div>
                <div className="ad-perfect">
                    <img src={Deliver} alt="Drone" />
                    <p>Delivery</p>
                </div>
                <div className="ad-perfect">
                    <img src={Agri} alt="Drone" />
                    <p>Agriculture</p>
                </div>
                <div className="ad-perfect">
                    <img src={SkyV} alt="Drone" />
                    <p>Photography</p>
                </div>
            </div>
        </div>
    </div>
    </div>
    
  )
}

export default AboutDrone