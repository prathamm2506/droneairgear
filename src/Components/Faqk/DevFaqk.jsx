import React, { useState } from "react";
import "./Faqk.css";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

const DevFaqk = ({ id, question, answer }) => {
  const [show, setShow] = useState(false);

  return (
    <div className="faques">
      <h1 onClick={() => setShow(!show)} className="faqks">

        <p className="fq-num">{id}</p> 
        <p className="quye">{question}</p>
        <span className="right">{show? <IoIosArrowUp/>:<IoIosArrowDown/>}</span>
      </h1>

      {show && <p className="ans">{answer}</p>}
    </div>
  );
};

export default DevFaqk;
