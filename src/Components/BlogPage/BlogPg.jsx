import React from "react";
import "./BlogPg.css";
import picture1 from './Picture1.jpg'
import picture2 from './Picture2.jpg'
import picture3 from './Picture3.jpg'
import picture4 from './Picture4.jpg'

const BlogPg = () => {
  return (
    <div className="blogPg">

      <div className="bg-container">
        <div className="bg-header">
          <div className="bg-para">
            <h4>Payment</h4>
            <h1>NFC Payment Gateway</h1>
            <p>
            Near Field Communication (NFC) is a wireless communication technology that enables the exchange of data between two devices within a short range of up to 10 cm

            </p>
          </div>
        </div>
      </div>

      <div
        style={{ background: "#fff", padding: "130px 2rem" }}
        className="bg-container"
      >
        <div className="bg-middle">
          <div className="bgm-left">
            <img className="bg-full"
              src={picture2}
              alt=""
            />
            <img className="bg-media" src="https://dji-official-fe.djicdn.com/cms/uploads/a9b0636a0208b6467b18abcf6f8bb06d.jpg" alt="" />
          </div>
          <div className="bgm-right">
            <h1>We are creating a safer, efficient and timesaving method of payment using NFC tags
</h1>
            {/* <h4>Lorem, ipsum dolor.</h4> */}
            <p>
            NFC technology operates on the principles of RFID (Radio Frequency Identification) and allows for communication between two devices through electromagnetic induction.Instead of opening an application, then waiting it to respond, opening the scanner, then at last adding the amount takes up time whereas the NFC tag will be tapped and we will be directed to the adding the amount section which will save a lot of time.


            </p>
          </div>
        </div>
      </div>

      <div className="bg-container" style={{ padding: "100px 2rem" }}>
        <div className="bg-lower">
      <h1>Its very easy to use
</h1>
          <p>
          NFC is far More better than any other method because it doesn’t require More efforts like scanning or entering pin you just need to tap your mobile at Pos and your payment is done

          </p>
        </div>
      </div>

      <div
        style={{ background: "#fff", padding: "130px 2rem" }}
        className="bg-container"
        >
        <div className="bg-last">
          <div className="bgl-left">
          <h1>NFC can be used to read any card by just tapping them
 </h1>
            
            <p>
              It can be used as secure transaction purpose also on any POS

            </p>
          </div>
          <div className="bgl-right">
            <img
              src={picture4}
              alt=""
            />
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default BlogPg;
