import React, { useEffect, useState } from "react";
import "./StartupPro.css";
import VivS from "../../assets/cofee.mp4";
import VivH from "../../assets/hawaii.mp4";
import { useParams } from "react-router-dom";
import { useFirebase } from "../../context/firebase";

const StartupPro = () => {

  const params = useParams();
  const firebase = useFirebase();

  const [data, setData] = useState('');
  const [url, setURL] = useState(null);

  useEffect(() => {
    firebase.getStartupById(params.startupId).then((value) => setData(value.data()));
  },[data]);

  useEffect(() => {
    if(data){
        const imageURL = data.graphURL;
        firebase.getImageURL(imageURL).then((url) => setURL(url));
    }
}, [data]);

  return (
    <div className="startupro">
      <div className="stp-right">
        <div className="stp-tag">INVEST IN {data.name} TODAY!</div>
        <div className="stp-heading">{data.name}</div>

        {/* <div className="stp-video">
          <video src={VivH} autoPlay muted loop></video>
        </div> */}
        <img
          className="stp-img1"
          src={url}
          alt=""
        />

        <div className="stp-subheading">
          Overview <div className="stp-dash" />{" "}
        </div>

        <div className="stp-heading">
          {data.over_title}
        </div>

        <div className="stp-p">
          {data.over_dis}
        </div>



        {/* <div className="stp-p">
          Similar to wine, specialty coffee is an artisanal beverage that is
          enhanced with greater education and sensory exploration. With this in
          mind, we implemented farm tours, roasting classes, brew workshops,
          coffee tastings, live coffee roasting, live art demonstrations, and a
          farm-side, boutique coffee bar.
        </div> */}


      </div>

      <div className="stp-left">
        <div className="stp-blk">
          <div className="stp-invest">
          
            <a href="mailto:" className="stp-lbtn"  >Mail Now At {data.org_email}</a>
          </div>

          <div className="stp-goal">{data.revenue}</div>
          <div className="stp-goals">of a {data.goal} goal</div>

          <div className="stp-table">
            <div className="stp-lbox">
              <div className="stp-light">RAISED</div>
              <div className="stp-bold">{data.raised}</div>
            </div>
            <div className="stp-lbox">
              <div className="stp-light">INVESTORS</div>
              <div className="stp-bold">{data.no_investor}</div>
            </div>
            <div className="stp-lbox">
              <div className="stp-light">MIN INVEST</div>
              <div className="stp-bold">{data.valuation}</div>
            </div>
            <div className="stp-lbox">
              <div className="stp-light">VALUATION</div>
              <div className="stp-bold">{data.valuation}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartupPro;
