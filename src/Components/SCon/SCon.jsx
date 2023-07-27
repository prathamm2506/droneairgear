import React from 'react'
import './SCon.css'
import Viv from '../../assets/startupsbg.mp4'
import CountUp from 'react-countup';

const SCon = () => {
  return (
    <div className='scon'>
         
      <div className="sc-video">
        <video src={Viv} autoPlay muted loop ></video>
      </div>

        <div className="bg-back"/>

        <div className="sc-heading">Over a decade of Fundraising Success</div>

        <div className="sc-row">
            
            <div className="sc-tab">
                <div className="sc-txt">
                <CountUp
          start={0}
          end={257443}
          duration={3}
        />+
                </div>
                <p>Funded Startups</p>
            </div>


            <div className="sc-tab">
                <div className="sc-txt">
                <CountUp
          start={0}
          end={455452}
          duration={3}
        />+
                </div>
                <p>Partners</p>
            </div>

            </div>      
    </div>
  )
}

export default SCon
