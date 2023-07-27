import React from 'react'
import {BsDownload} from 'react-icons/bs'

import './Rules.css'

const Rules = () => {
  return (
    <div className='rules'>
        <h3>DGCA Regulations</h3>
        <p>DGCA has laid out certain guidelines for operation of Drones aka Remotely Piloted Aircraft Systems (RPAS) in India.</p>
        <p>Indian Academy of drones ensures that that ass its training modules are as per the guidelines given by DGCA. Please refer to the DGCA regulations and documents given below.</p>
        
        <a href='../../assets/TermsPdf/List-of-DGCA-Approved-Trainers-on-RPAs.pdf' download className="rul-tab">
            <div className="rul-dw">
                <BsDownload  />
            </div>
            <div className="rul-name">
                <p>CAR Section 3 Series X Part I - Requirements for Operation of Civil Remotely Piloted Aircraft System (RPAS)</p>
            </div>
        </a>

        <a href='../../assets/TermsPdf/DGCA-RPAS-Guidance-Manual-revised.pdf' download className="rul-tab">
            <div className="rul-dw">
                <BsDownload  />
            </div>
            <div className="rul-name">
                <p>DGCA RPAS Guidance Manual revised</p>
            </div>
        </a>

        <a href='../../assets/TermsPdf/FTIC-1-of-2019-Training-And-Procedures-Manual-For-Remote-Pilot-Training-.pdf' download className="rul-tab">
            <div className="rul-dw">
                <BsDownload  />
            </div>
            <div className="rul-name">
                <p>FTIC 1 of 2019 - Training And Procedures Manual For Remote Pilot Training</p>
            </div>
        </a>

        <a href='../../assets/TermsPdf/RPAS-Dos-and-Dont.pdf'download className="rul-tab">
            <div className="rul-dw">
                <BsDownload  />
            </div>
            <div className="rul-name">
                <p>RPAS - Do's and Don't</p>
            </div>
        </a>

        <a href='../../assets/TermsPdf/RPS-FAQs-REVISED.pdf' download className="rul-tab">
            <div className="rul-dw">
                <BsDownload  />
            </div>
            <div className="rul-name">
                <p>RPAS - FAQs</p>
            </div>
        </a>

        <a href='https://digitalsky.dgca.gov.in/home' className="rul-tab">
            <div className="rul-dw">
                <BsDownload  />
            </div>
            <div className="rul-name">
                <p>Digital Sky - Get your Import Clearance/ UIN/ UAOP</p>
            </div>
        </a>

    </div>
  )
}

export default Rules
