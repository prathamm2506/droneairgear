import React from 'react'


import './IBenefits.css'

import stproc from '../../assets/startupProcedure.png'
import stprocD from '../../assets/inv-down.png'

import Ill2 from '../../assets/ill/mentor2.jpg'
import Ill5 from '../../assets/ill/ill-3.png'
import Ill6 from '../../assets/ill/ill-4.png'
import Ill3 from '../../assets/ill/mentor3.jpg'
import Ill4 from '../../assets/ill/mentor4.jpg'

const IBenefits = () => {
  return (
    <div className='ibenefits'>
        <h2 className="ib-heading">BENEFITS FOR INVESTORS</h2>

<div className="ib-row">


        <div className="ib-inner">
            <div className="ib-icon">
                <img src={Ill5} className="ib-iconn" />
            </div>
            <div className="ib-text">
                <h2>Access to Promising Startups and Deal Flow</h2>
                <p>
                Our platform provides investors with access to promising startups and deal flow that they may not have otherwise discovered
                </p>


            </div>
        </div>

        <div className="ib-inner">
            <div className="ib-icon">
                <img src={Ill3} className="ib-iconn" />
            </div>
            <div className="ib-text">
                <h2>Access to Promising Startups and Deal Flow</h2>
                <p>
                Our platform provides investors with access to promising startups and deal flow that they may not have otherwise discovered. 
                </p>


            </div>
        </div>

        <div className="ib-inner">
            <div className="ib-icon">
                <img src={Ill6} className="ib-iconn" />
            </div>
            <div className="ib-text">
                <h2>Expert Analysis and Due Diligence</h2>
                <p>
                We provide investors with expert analysis, insights, and due diligence on investment opportunities.
                </p>


            </div>
        </div>

        <div className="ib-inner">
            <div className="ib-icon">
                <img src={Ill4} className="ib-iconn" />
            </div>
            <div className="ib-text">
                <h2>Investor Support and Networking</h2>
                <p>
                Registered investors receive dedicated support from our team throughout the investment process. 
                </p>


            </div>
        </div>


</div>

<div className="ib-timeline">
<img className='dis' src={stproc} alt="" />
<img src={stprocD} alt="" className="appe" />
</div>
      
    </div>
  )
}

export default IBenefits
