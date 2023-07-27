// import React from 'react'
import "./Lecture.css";
import VideoBCS from "../../assets/1.mp4";

import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Pagination } from "swiper";
import { useParams } from "react-router-dom";
import { useFirebase } from "../../context/firebase";
import Slide from "./Slide";

const Lecture = () => {

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  const params = useParams();
  const firebase = useFirebase();

  const [data, setData] = useState('');
  // const [url, setURL] = useState(null);
  const [ch1, setCh1_URL] = useState(null);
  
  useEffect(() => {
      firebase.getCourseById(params.courseId).then((value) => setData(value.data()));
  },[data]);

  useEffect(() => {
    if(data){
        // const imageURL = data.thumbnailURL;
        // firebase.getImageURL(imageURL).then((url) => setCh1_URL(url));

        const ch1_URL = data.ch1URL;
        firebase.getImageURL(ch1_URL).then((url) => setCh1_URL(url));

    }
}, [data]);

  return (
    <div style={{marginTop:"5rem"}}>
      <Swiper
        pagination={pagination}
        modules={[Pagination]}
        allowTouchMove={false}
        scrollbar={{ draggable: false }}
        className="mySwiper"
      >
     
              <SwiperSlide>
          <div className="l-maindiv">
            <div className="l-notes">
              <div className="l-header">
                <h2>Notes</h2>
              </div>
              <div className="l-content">
                <h1>{data.ch1}</h1>
                <p>{data.ch1_dis}</p>
              </div>
            </div>

            <div className="l-media">
              <video controls src={ch1} controlsList="nodownload" />
            </div>
          </div>
        </SwiperSlide>

        
          
        {/* {orders.map((orders) => (<Slide key={orders.id} id={orders.id} {...orders.data()} />))} */}
      </Swiper>
    </div>
  );
};

export default Lecture;
