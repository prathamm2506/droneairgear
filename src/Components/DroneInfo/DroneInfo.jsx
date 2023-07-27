import React from 'react'
import './DroneInfo.css';
import dronegif from '../../assets/dronegif.mp4'
import Drone_Header from '../Drone_Header/Drone_Header'
import cost from '../../assets/cost.png'
import data from '../../assets/data.png'
import dronedrone from '../../assets/agroD.png'
import time from '../../assets/time.png'
import collageimg from '../../assets/collageimg.png'
import Drone_content from './Drone_content/Drone_content'
import { Link } from 'react-router-dom';


const DroneInfo = () => {
  return (
    <div>
        <Drone_Header/>
        <div className="di-infodiv">
            <h1> Exploring the World of Drones</h1>
            <p>Our commitment to innovation ensures that our drones are equipped with advanced features such as precise flight controls, obstacle avoidance systems, high-definition cameras, and long-lasting battery life. </p>
        </div>

        <div className="di-twodiv">
            <div className="di-imgdiv transform-perspective-left">
                <img src={collageimg} alt="" />
            </div>

            <div className="di-textdiv">
                <div className="di-textinside">
                <h1>Take Your Shots to New Heights</h1>
                <p>Drones provide the ability to capture stunning aerial views that were once only accessible through expensive helicopter or airplane rentals.</p>
                </div>

                <div className="di-textinside">
                <h1>Fly to a Bountiful Harvest</h1>
                <p>Drones offer farmers a cost-effective, efficient, and precise way to monitor crops, manage resources, and make data-driven decisions.</p>
                </div>

                <div className="di-textinside">
                <h1>From the Skies to Your Doorstep</h1>
                <p>Drones in delivery are transforming the way goods are transported, offering rapid, efficient, and environmentally friendly solutions.</p>
                </div>
            </div>
        </div>

        

<div className="di-justdiv">
        <div className="di-ultradiv">
            <div className="di-insideultra">
                <div className="di-ultraimg">
                    <img src={cost} alt="" />
                </div>
                <div className="di-ultratext">
                    <h1>Cost Savings</h1>
                    <p> Drones offer cost-effective solutions in many industries. </p>
                </div>
            </div>

            <div className="di-insideultra">
                <div className="di-ultraimg">
                <img src={data} alt="" />
                </div>
                <div className="di-ultratext">
                    <h1>Accurate Data Collection</h1>
                    <p>Drones equipped with advanced sensors and cameras provide accurate and high-quality data for various applications.</p>
                </div>
            </div>
        </div>

        <div className="di-ultradiv">
            <div className="di-insideultra">
                <div className="di-ultraimg">
                <img src={time} alt="" />
                </div>
                <div className="di-ultratext">
                    <h1>Time Efficiency</h1>
                    <p> They enable organizations to save valuable time, allocate resources effectively, and make faster and more informed decisions. </p>
                </div>
            </div>

            <div className="di-insideultra">
                <div className="di-ultraimg">
                <img src={dronedrone} alt="" />
                </div>
                <div className="di-ultratext">
                    <h1>Increased Efficiency</h1>
                    <p>Drones can cover larger areas, collect data quickly, and automate repetitive tasks, leading to increased productivity.</p>
                </div>
            </div>
        </div>
        </div>

        <Drone_content/>
        {/* <div className="di-sudodiv">
            <h3>Mapping the Future</h3>
            <h1>Streamlining Surveys with Drones</h1>
            <img src="https://assets-global.website-files.com/64139074cdb2ed5916fa9242/643da18b8766b85bd61f0eb0_home-hero-bg.webp" alt="" />
            <p>Drone mapping, also known as aerial mapping or photogrammetry, is the process of capturing aerial images or data using drones and converting them into detailed, accurate maps, 3D models, or digital surface models (DSMs). It has emerged as a powerful and efficient technique for surveying and mapping various terrains, landscapes, and structures.</p>
        </div> */}


        <div className="di-movingdiv" style={{padding:'5rem 0'}}>
        <div className="di-infodiv">
            <h1>Drone Insurance Made Easy</h1>
            <p>Your Reliable Partner for Drone Coverage and Peace of Mind </p>
        </div>

        <div className="di-megadiv">
            <div className="di-megatext">
                <p>We understand the importance of protecting your valuable drone investments and ensuring peace of mind during every flight. </p>
                <p> Get in touch with us today and discover how our comprehensive drone insurance solutions can protect your aerial assets and elevate your drone experience to new heights.</p>
                <Link to='/insurancePage' className="btn">Get Insurance</Link>
            </div>

            <div className="di-megaimg">
                <video src={dronegif} autoPlay muted loop></video>
            </div>
        </div>
        </div>
        
    </div>
  )
}

export default DroneInfo