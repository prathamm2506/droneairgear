import React from 'react'
import './Faq.css'

const Faq = () => {

    let toggles = document.getElementsByClassName('toggle');
let contentDiv = document.getElementsByClassName('content');
let icons = document.getElementsByClassName('icon');
let about = document.getElementsByClassName('about-col-1');

const btn = () =>{
for(let i=0; i<toggles.length; i++){
    toggles[i].addEventListener('click', ()=>{
        if( parseInt(contentDiv[i].style.height) != contentDiv[i].scrollHeight){
            contentDiv[i].style.height = contentDiv[i].scrollHeight + "px";
            toggles[i].style.color = "#151515";
            icons[i].classList.remove('fa-plus');
            icons[i].classList.add('fa-minus');
        }
        else{
            contentDiv[i].style.height = "0px";
            toggles[i].style.color = "#7E8285";
            icons[i].classList.remove('fa-minus');
            icons[i].classList.add('fa-plus');
            
        }

        for(let j=0; j<contentDiv.length; j++){
            if(j!==i){
                contentDiv[j].style.height = "0px";
                toggles[j].style.color = "#7E8285";
                icons[j].classList.remove('fa-minus');
                icons[j].classList.add('fa-plus');
            }
        }
    });
}
}

  return (
    
        <div id="about-department">

  
<div className="about-department">
  <div className="about-col-1">
    <div className="container">
      <div className="wrapper">
          <button className="toggle" onClick={btn}>
            Concepts and Regulations
              <i className="fas fa-plus icon"></i>
          </button>
          <div className="content">
            <ul>
              <li>History of UAVs</li>
              <li>Stakeholders & Their Laws</li>
              <li>Drone Rules 21 & amendments</li>
              <li>Component Regulations</li>
              <li>Data Regulations</li>
              
          </ul>
          </div>
      </div>
      <div className="wrapper">
          <button className="toggle" onClick={btn}>
            Anatomy, Manufacturing / Assembly of a Drone
              <i className="fas fa-plus icon"></i>
          </button>
          <div className="content">
              <ul>
                <li>Introduction to principles of flight</li>
                <li>Propulsion & Vertical motions</li>
                <li>Basics of UAVs and its Design &Components in Drones</li>
                <li>UAV Assembly, Testing and Tuning</li>
                <li>How to scale UAV Manufacturing</li>
                
            </ul>
          </div>
      </div>
      <div className="wrapper">
          <button className="toggle" onClick={btn}>
            Remotely Piloted Aircraft (RPA) / Drone Operator
              <i className="fas fa-plus icon"></i>
          </button>
          <div className="content">
              <ul>
                <li>Introduction to UTM & Digitalsky</li>
                <li>Pilot Training and Simulations</li>
                <li>Risks and Mitigations for Flight Operations</li>
                <li>Flight Logs and Reporting of Incidents</li>
              </ul>
          </div>
      </div>
      
  </div>
  </div>
  <div className="about-col-2">
    <div className="container">
      <div className="wrapper">
        <button className="toggle" onClick={btn}>
          Troubleshooting and maintenance
            <i className="fas fa-plus icon"></i>
        </button>
        <div className="content">
          <ul>
            <li>General Issues in UAVs</li>
            <li>Maintenance Schedule</li>
            <li>Troubleshooting during operations</li>
            <li>Battery Management System</li> 
        </ul>
        </div>
    </div>
    <div className="wrapper">
        <button className="toggle" onClick={btn}>
          Applications of UAV and Drones
            <i className="fas fa-plus icon"></i>
        </button>
        <div className="content">
            <ul>
              <li>Various applications of Drones</li>
              <li>Popular Use cases of UAVs</li>
              <li>		Novel UAVs and their use cases</li>
              <li>Business Case Study 1 - Specialisation Swamitva Scheme</li>
              <li>Business Case Study 1 - Specialisation Swamitva Scheme 	5</li>
              
          </ul>
        </div>
    </div>
    <div className="wrapper">
        <button className="toggle" onClick={btn}>
          Health and Safety practices in UAVs
            <i className="fas fa-plus icon"></i>
        </button>
        <div className="content">
            <ul>
              <li>Safety Equipments and How to use them in UAV Industry</li>
              <li>Health Practices to Follow in UAV Industry</li>
              <li>Best Practices in UAV Operations</li>
            </ul>
        </div>
    </div>
  </div>
</div>
</div>
</div>
    
  )
}

export default Faq