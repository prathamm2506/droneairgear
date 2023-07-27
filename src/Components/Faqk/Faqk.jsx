import React, { useState } from 'react'
import './Faqk.css'
import {MAPie} from './Mentor_data'
import DevFaqks from './DevFaqk'

const Faqk = () => {

    const[data,setData] = useState(MAPie);

  return (
    <div>
        {
            data.map((curElem) => {
                const{id} = curElem;
                return <DevFaqks key={id} {... curElem}/>;
            })
        }
      
    </div>
  )
}

export default Faqk
