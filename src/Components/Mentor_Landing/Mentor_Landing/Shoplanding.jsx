import React from "react";
import "./Mentorlanding.css";

import Rightimg from '../../../assets/shop_land.png'
import Leftimg from '../../../assets/left2.png'
import { Link } from "react-router-dom";

const Mentonlanding = () => {
  return (
    <div className="mentor_land sw-1 sw-2 sw-3">
      <svg
        className="svg-CurvedHero svg-CurvedHero-dark"
        viewBox="0 0 1469 1213"
      >
        <path d="M1039.21 241.434c150.26 72.496 350.38 186.421 365.37 317.329 14.96 130.618-155.17 278.51-341.4 401.101-186.264 122.296-388.844 219.916-574.11 181.096-185.556-38.79-354.009-213.406-408.921-408.351-55.202-194.906 3.176-409.852 123.266-517.322 120.381-107.51 302.434-107.833 443.826-92.335 141.353 15.208 241.716 45.986 391.969 118.482z"></path>
      </svg>

      <div className="max-width_for_info">
        <div className="info_landing">
          <div className="mentor_info_land">
            <h1>Sell on Confly Designs, Boost's your sales<br/> With Us</h1>
            <p>
            Quality is our utmost priority. We source our electronics components from trusted manufacturers who adhere to stringent quality control standards.
            </p>
            <Link to='/seller_registration' className="btn">Join us</Link>
          </div>
          <div className="mentor_land_img">
            <div className="side_img">
              <img
                class="sw-HProlapse_Img sw-HProlapse_Img1"
                width="376"
                height="515"
                src={Rightimg}
                alt="nonprofit-hero"
              />
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mentonlanding;
