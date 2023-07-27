import React from 'react'
import CountUp from 'react-countup';
import mentor from '../../../../assets/admin_mentor.png'
import industry from '../../../../assets/admin_industry.png'
import startup from '../../../../assets/admin_start-up.png'
import investor from '../../../../assets/admin_invester.png'
import univercity from '../../../../assets/admin_universities.png'
import store from '../../../../assets/admin_store.png'

import './Coco.css'
import { Link } from 'react-router-dom';
const Coco = () => {
    return (
        <div className='coco'>

            <h4 className='substitute'>  </h4>
            <div className="cocoa">

                <Link to="/mentor_list" className="beans">

                    <img src={mentor} alt="" />
                    <p className='pack'>Mentor</p>
                </Link>

                <Link to="/industry_list" className="beans" >

                    <img src={industry} alt="" />
                    <p className='pack'>Industry</p>
                </Link>

                <Link to="/university_list" className="beans" >

                    <img src={univercity} alt="" />
                    <p className='pack'>Universities</p>
                </Link>

                <Link to="/sellers_list" className="beans" >

                    <img src={store} alt="" />
                    <p className='pack'>Stores</p>
                </Link>

                <Link to="/start_up_list" className="beans">

                    <img src={startup} alt="" />
                    <p className='pack'>Startups</p>
                </Link>

                <Link to="/investors_list" className="beans">

                    <img src={investor} alt="" />
                    <p className='pack'>Investors</p>
                </Link>



               
            </div>

        </div>
    )
}

export default Coco
