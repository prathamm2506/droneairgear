import React from 'react'
import './Hire.css'

import logo2 from '../../assets/Logos/logo2.png'
import logo3 from '../../assets/Logos/logo3.png'
import logo4 from '../../assets/Logos/logo4.jpg'
import logo5 from '../../assets/Logos/logo5.png'
import logo7 from '../../assets/Logos/logo7.png'
import logo8 from '../../assets/Logos/logo8.png'
import logo9 from '../../assets/Logos/logo9.png'
import logo10 from '../../assets/Logos/logo10.png'
import logo11 from '../../assets/Logos/logo11.png'
import logo15 from '../../assets/Logos/logo15.png'
import logo16 from '../../assets/Logos/logo16.png'

const Hire = () => {
    return (
        <div className="hire">
            <div className="h-left">

                <h2 className='h-heading'>Companies Who Hire From Us</h2>
                <p>Some of the top companies place great value on our candidates</p>
                <a className="h-button">
                Start Hiring
            </a>
            </div>

            <div className="h-right">
                
                <div className="h-row">
                    <a className="h-box log1">
                        <img src={logo2} alt="" />
                    </a>

                    <a className="h-box log2">
                        <img src={logo3} alt="" />
                    </a>

                    <a className="h-box log3">
                        <img src={logo4} alt="" />
                    </a>

                    <a className="h-box log4">
                        <img src={logo5} alt="" />
                    </a>

                    <a className="h-box log5">
                        <img src={logo7} alt="" />
                    </a>

                    <a className="h-box log6">
                        <img src={logo8} alt="" />
                    </a>

                    <a className="h-box log1">
                        <img src={logo9} alt="" />
                    </a>

                    <a className="h-box log2">
                        <img src={logo10} alt="" />
                    </a>

                    <a className="h-box log3">
                        <img src={logo11} alt="" />
                    </a>

                    <a className="h-box log4">
                        <img src={logo15} alt="" />
                    </a>

                    <a className="h-box log5">
                        <img src={logo16} alt="" />
                    </a>

                    <a className="h-box log6">
                        <img src={logo3} alt="" />
                    </a>

                </div>

            </div>
        </div>
    )
}

export default Hire
