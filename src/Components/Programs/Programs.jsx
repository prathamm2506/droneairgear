import React, { useEffect, useState } from 'react'
import './Programs.css'
import Redtick from '../../assets/red-tick.png'
import Greentick from '../../assets/green-tick.png'
import {SlCalender} from 'react-icons/sl'
import {Link, useNavigate} from 'react-router-dom'

import {ImBooks} from 'react-icons/im'

import { useFirebase } from '../../context/firebase'

const Programs = (props) => {

    const firebase = useFirebase();
    const navigate = useNavigate();
    const [url, setURL] = useState(null);

    useEffect(() => {
        firebase.getImageURL(props.thumbnailURL).then(url => setURL(url));
    }, []);

    return (
       

            <div onClick={(e) => navigate(props.link)}>
                <div className="pr-box">
                    <div className="pr-top">
                        <img src={url} alt="" />
                    </div>

                    <div className="pr-text">
                        <h4>{props.name}</h4>
                        <div className="pr-two">
                            <span> <SlCalender className='img'/>{props.duration} Month</span>
                            <span> <ImBooks className='img'/>{props.price}  </span>
                        </div>
                        <div className="pr-tick">
                            <span> <img src={Redtick} /> Full Stack Career Bootcamp </span>
                            <span> <img src={Redtick} /> 7 toos & 4 Industry Projects</span>
                            <span> <img src={Redtick} /> Master's Certificate</span>
                        </div>
                    </div>

                </div>
                </div>

             

    )
}

export default Programs
