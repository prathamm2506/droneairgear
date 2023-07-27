import React, { useContext, useState, useEffect } from "react";
import { FiSearch } from "react-icons/fi";
import "./AdminLeft.css";
import Chart from "react-apexcharts";

import Cover from '../../../assets/indusPics/probg.jpg'
import Profile from '../../../assets/indusPics/img3.png'
import { BsPencilSquare } from 'react-icons/bs';

import { AuthContext, useFirebase } from '../../../context/firebase'
import Log from "../Auth/Log";
import { useFavicon } from "@mantine/hooks";

const ProfileSide = () => {

  const firebase = useFirebase();

  const [registerd_mentor, setMentor] = useState([]);

  
  // const [url, setURL] = useState(null);

  const [state, setState] = useState({
    options: {
      colors: ["#E91E63", "#FF9800"],
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
      },
    },
    series: [
      {
        name: "People Born",
        data: [30, 40, 45, 50, 49, 60, 70, 91],
      },
      {
        name: "People Died",
        data: [3, 60, 35, 80, 49, 70, 20, 81],
      },
    ],
  });

  const {currentUser} = useContext(AuthContext);

//   useEffect(() => {
//     if(firebase.isLogedIn)
//     firebase.fecthMentorData(firebase.user.uid)?.then((registerd_mentor) => setMentor(registerd_mentor.docs));

    
// }, [firebase]);


if(!firebase.isLogedIn) return <Log/>;

  return (
    <div>
    
        
     
          <div className="ProfileSide">
      {/* <div className="LogoSearch">
        <div className="Search">
          <input type="text " placeholder="Search something..." />
          <div className="s-icon">
            <FiSearch style={{ width: "24px", height: "24px" }} />
          </div>
        </div>
      </div> */}

      <div className="ProfileCard">
        <div className="ProfileImages">
          <img src={Cover} alt="" />

          <img src={"https://thumbs.dreamstime.com/b/businessman-icon-image-male-avatar-profile-vector-glasses-beard-hairstyle-179728610.jpg" }
          alt="" />

<img src={currentUser.photoURL}alt="" />


        </div>

        <div className="ProfileName">
          <span><p>{currentUser.displayName}</p>
          <p>{currentUser.email}</p></span>
          {/* <span style={{marginBottom:"2rem"}}>Senior UI/UX Designer</span> */}
        </div>

        {/* <div className="infos">
          <div className="info">
            <span>
              <b>Company : </b>
            </span>
            <span> in XYZ</span>
          </div>

          <div className="info">
            <span>
              <b>ID : </b>
            </span>
            <span>asfgdsdhi48564</span>
          </div>
          <div className="info">
            <span>
              <b>Works at : </b>
            </span>
            <span> LifeTech.in</span>
          </div>
          <div className="rewrite">
            <BsPencilSquare
              style={{
                width: "24px",
                height: "24px",
                color: "var(--indblack)",
              }}
             
            />
            
          </div>
        </div> */}
      </div>

      {/* <div className="lineChart">
        <div className="substitute">Where do the lines go?</div>

        <Chart
          options={state.options}
          series={state.series}
          type="heatmap"
          width="270"
          height="300"
        />
      </div> */}
    </div>
        
    
  
  


</div>
  )}

export default ProfileSide;
