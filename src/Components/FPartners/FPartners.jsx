import React from 'react'
import './FPartners.css'

import Fresh from '../../assets/CompLogos/freshworks.png'

const FPartners = () => {
    return (
        <div className='fpartners'>

            <h2 className="fp-heading">
            Funded companies
            </h2>
            <div className="fp-row">
                <div className="fp-inner">
                    <div className="fp-icon">
                        <img src={Fresh} className="fp-iconn" />
                    </div>
                    <div className="fp-text">
                        <h2>Freshworks</h2>
                        <p>
                            Our intense programs are taught by industry experts & candidates are job ready as they work on relevant projects.
                        </p>


                    </div>
                    </div>
                <div className="fp-inner">
                    <div className="fp-icon">
                        <img src="https://uploads-ssl.webflow.com/60ca40d76afa5d2df28ce747/60ca40d76afa5d4c208ce7dc_Omni%20by%20Virtuix.png" className="fp-iconn" />
                    </div>
                    <div className="fp-text">
                        <h2>Virtuix Omni</h2>
                        <p>
                            Our intense programs are taught by industry experts & candidates are job ready as they work on relevant projects.
                        </p>


                    </div>
                    </div>
                <div className="fp-inner">
                    <div className="fp-icon">
                        <img src="https://qtxasset.com/cdn-cgi/image/w=384,h=216,f=auto,fit=crop,g=0.5x0.5/https://qtxasset.com/quartz/qcloud1/media/image/nightclub/1549592539/Death%26CoBookLogoTiny.png?VersionId=RrDo.MwCEF3fAIdXCjEK8ysYN58pVmvs" className="fp-iconn" />
                    </div>
                    <div className="fp-text">
                        <h2>Death & Co</h2>
                        <p>
                            Our intense programs are taught by industry experts & candidates are job ready as they work on relevant projects.
                        </p>


                    </div>
                    </div>
                <div className="fp-inner">
                    <div className="fp-icon">
                        <img src="https://20623557.fs1.hubspotusercontent-na1.net/hubfs/20623557/Icons/inside%20logo.png" className="fp-iconn" />
                    </div>
                    <div className="fp-text">
                        <h2>Inside</h2>
                        <p>
                            Our intense programs are taught by industry experts & candidates are job ready as they work on relevant projects.
                        </p>


                    </div>
                    </div>
            </div>

        </div>
    )
}

export default FPartners
