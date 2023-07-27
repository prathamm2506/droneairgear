import React from 'react'
import './FBenefits.css'

import Ill1 from '../../assets/ill/mentor1.jpg'
import Ill2 from '../../assets/ill/mentor2.jpg'
import Ill5 from '../../assets/ill/ill-3.png'
import Ill6 from '../../assets/ill/ill-4.png'
import Ill3 from '../../assets/ill/mentor3.jpg'
import Ill4 from '../../assets/ill/mentor4.jpg'
import stPro from '../../assets/startupProcess.png'
import stProD from '../../assets/startupProcessMQ.png'


const FBenefits = () => {
    return (
        <div className='fbenefits'>
            <h2 className="fb-heading">BENEFITS FOR STARTUPS</h2>

            <div className="fb-row">

                <div className="fb-col">

                    <div className="fb-inner">
                        <div className="fb-icon">
                            <img src={Ill1} className="fb-iconn" />
                        </div>
                        <div className="fb-text">
                            <h2>Funding Opportunities</h2>
                            <p>
                            As a registered startup, you gain access to our network of investors who are actively seeking investment opportunities. 
                            </p>


                        </div>
                    </div>

                    <div className="fb-inner">
                        <div className="fb-icon">
                            <img src={Ill2} className="fb-iconn" />
                        </div>
                        <div className="fb-text">
                            <h2>Investor Connections</h2>
                            <p>
                            We facilitate introductions and connections with potential investors who are aligned with your industry and investment preferences.
                            </p>


                        </div>
                    </div>
                </div>                

                <div className="fb-col fb-down">

                    <div className="fb-inner">
                        <div className="fb-icon">
                            <img src={Ill3} className="fb-iconn" />
                        </div>
                        <div className="fb-text">
                            <h2>Enhanced Credibility</h2>
                            <p>
                            Being registered with us  demonstrates that your venture has undergone a screening process and has met certain criteria, which can instill confidence in potential investors and stakeholders.
                            </p>


                        </div>
                    </div>

                    <div className="fb-inner">
                        <div className="fb-icon">
                            <img src={Ill4} className="fb-iconn" />
                        </div>
                        <div className="fb-text">
                            <h2>Visibility and Exposure</h2>
                            <p>
                            Registering with us can increase your startup's visibility and exposure to a wider audience.
                            </p>


                        </div>
                    </div>
                </div>

                <div className="fb-col">

                    <div className="fb-inner">
                        <div className="fb-icon">
                            <img src={Ill5} className="fb-iconn" />
                        </div>
                        <div className="fb-text">
                            <h2>Networking Opportunities</h2>
                            <p>
                            We provide various networking events, industry conferences, and workshops where you can connect with other entrepreneurs, industry leaders, and potential collaborators.
                            </p>


                        </div>
                    </div>

                    <div className="fb-inner">
                        <div className="fb-icon">
                            <img src={Ill6} className="fb-iconn" />
                        </div>
                        <div className="fb-text">
                            <h2>Educational Resources</h2>
                            <p>
                            We offer access to educational resources, webinars, and workshops that can enhance your entrepreneurial skills and knowledge.
                            </p>


                        </div>
                    </div>
                </div>

            </div>

            <div className="ib-timeline">
<img className='dis' src={stPro} alt="" />
<img src={stProD} alt="" className="appe" />
</div>
        </div>
    )
}

export default FBenefits
