import React, { useEffect, useState } from 'react'
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { useFirebase } from '../../context/firebase';

const Slide = (props) => {

    const firebase = useFirebase();

    const [url, setUrl] = useState();

    useEffect(() => {
        const photo = props.videoURL;
        firebase.getImageURL(photo).then((url) => setUrl(url));
    })

  return (
    <SwiperSlide>
          <div className="l-maindiv">
            <div className="l-notes">
              <div className="l-header">
                <h2>Notes</h2>
              </div>
              <div className="l-content">
                <h1>{props.title}</h1>
                <p>{props.description}</p>
              </div>
            </div>

            <div className="l-media">
              <video controls src={url} controlsList="nodownload" />
            </div>
          </div>
        </SwiperSlide>
  )
}

export default Slide