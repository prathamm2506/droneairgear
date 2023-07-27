import "./Raising.css";


import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css";


// import required modules
import {  Autoplay,Navigation } from "swiper";
import { Link } from "react-router-dom";
import { useFirebase } from "../../context/firebase";
import Swiping from "./Swiping";

const Raising = () => {

  const firebase = useFirebase();

  const [stratup, setStartup] = useState([]);

  useEffect(() => {
    firebase.listAllStartups().then((start) => setStartup(start.docs));
  },);

  return (
    <div className="raising">
      <div className="ra-heading">MOST MOMENTUM</div>
      <div className="ra-p">
        Offerings that have raised the most money in the last few days{" "}
      </div>
      <div className="ra-row">

      

          {
            stratup.map((start) => (<Swiping key={start.id} link={`/startup/${start.id}`} id={start.id} {...start.data()}/>))
          }

       
      </div>
    </div>
  );
};

export default Raising;
