import React from "react";
import "./Contact.css";
import {AiOutlineMail} from 'react-icons/ai'
import {BiPhoneCall} from 'react-icons/bi'
import contact from './contact.png'






const Contact = () => {
  return (
    <>
      <div className="c-maindiv">
        <div className="c-mainimg">
          {/* <img src={contact} alt="" /> */}
        </div>

        <div className="c-maininfo">
          <h1>Reach Out to Us for Prompt and Reliable Support</h1>
          <p>Feel free to reach out to us with any inquiries, feedback, or assistance you may need. Our dedicated team is here to provide prompt and helpful support. Contact us today!</p>

          <span> - Droneairgear</span>

          <div className="c-btndiv">
            <a href="mailto:subhashkasture@gmail.com"><button><AiOutlineMail className="c-iconsize"/> Mail us Directly</button></a>
            <a href="https://wa.me/9987759285" target="_blank"><button><BiPhoneCall className="c-iconsize"/> Call Our Team</button></a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
