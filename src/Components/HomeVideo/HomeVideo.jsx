import React from "react";
import "./HomeVideo.css";
import onevid from "./onevid.mp4";
import twovid from "./twovid.mp4";


const HomeVideo = () => {
  return (
    <div>
        <div className="hv-maindiv">
      <h1>Aerial Photography</h1>
      <h1 className="hv-fc">Done Right</h1>
      <p>
        Take your content to the next level with stunning 4K HDR video [3] and
        48MP RAW photos. Marvel at the rich clarity of every image, even as you
        zoom in. Or slow things down as the world gets hectic with dramatic
        1080p/120fps slow-motion video.
      </p>

      <div className="hv-onevid">
        <video src={onevid} autoPlay loop muted></video>
      </div>

      <div className="hv-grpvid">
        <div className="hv-inside1">
        <video src={onevid} autoPlay loop muted></video>

        <div className="refined">
        <video src={twovid} autoPlay loop muted></video>
        </div>
        </div>

        <div className="hv-inside2">
        <video src={twovid} autoPlay loop muted></video>
        </div>
      </div>
      </div>
    </div>
  );
};

export default HomeVideo;
