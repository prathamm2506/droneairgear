import React from 'react'
import './Banner1.css'
import Bansy from '../../assets/banner11.png'

const Banner1 = () => {
    return (
        <div className='banner1'>
            <div className="b1-con">

                <div className="b1-left">
                    <img src={Bansy} alt="" />
                </div>

                <div className="b1-right">
                <h2 className="b1-heading"> <span>Latest Course</span> <br /> Or latest Event</h2>
                        <ul>
                            <li>Elegant design</li>
                            <li>Perfect grip</li>
                            <li>Android 10</li>
                        </ul>

                        <div className="b1-btn">
                            Enroll Now
                        </div>

                </div>

            </div>
        </div>
    )
}

export default Banner1
