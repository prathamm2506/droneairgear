import React from 'react'
import './Incubation.css'
import IBImg from '../../assets/ibimg.png'

import INBImg from '../../assets/inb.png'
import NearIncub from '../NearCEP/NearIncub'

const Incubation = () => {
  return (
    <div>
        <div className="ib-maindiv">
            <div className="ib-textdiv">
                <h1>Taking the Next Step in Your Entrepreneurial Journey</h1>
                <h4>Streamlining Operations and Amplifying Value for Your Startups</h4>
                <p>Experience the ease of running your incubator/accelerator with our comprehensive and automated systems. Take full logistical control of your operations, reclaim your valuable time from tedious administrative tasks, and enjoy peace-of-mind knowing that everything is running smoothly.</p>
            </div>

            <div className="ib-imgdiv">
                <img src={IBImg} alt="" />
            </div>
        </div>

        <div className="ib-hidediv">

        </div>

        <div className="inb-img">
            <img src={INBImg} alt="" />
        </div>

        {/* <div className="ib-infodiv">
            <h1>Customizable like no other!</h1>
            <h4>Our modules are customizable to fit your processes</h4>
            
            <div className="ib-infoinside">
                <div className="ib-logodiv">
                    <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjciIGhlaWdodD0iMjciIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48Y2lyY2xlIGZpbGw9IiM0RTkwRTIiIGN4PSIxMy41IiBjeT0iMTMuNSIgcj0iMTMuNSIvPjxwYXRoIGQ9Ik0xMy41IDZBMS41IDEuNSAwIDAxMTUgNy41VjEyaDQuNWExLjUgMS41IDAgMDEwIDNIMTV2NC41YTEuNSAxLjUgMCAwMS0zIDBWMTVINy41YTEuNSAxLjUgMCAwMTAtM0gxMlY3LjVBMS41IDEuNSAwIDAxMTMuNSA2eiIgZmlsbD0iI0ZGRiIvPjwvZz48L3N2Zz4=" alt="" />
                    <h3>Selection Process</h3>
                </div>
                <p>Support your application and selection process YOUR way. Number of rounds, assignment of responsibilities within rounds, and cascading automation can all be easily customized.</p>
            </div>

            <div className="ib-infoinside">
                <div className="ib-logodiv">
                    <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjciIGhlaWdodD0iMjciIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48Y2lyY2xlIGZpbGw9IiM0RTkwRTIiIGN4PSIxMy41IiBjeT0iMTMuNSIgcj0iMTMuNSIvPjxwYXRoIGQ9Ik0xMy41IDZBMS41IDEuNSAwIDAxMTUgNy41VjEyaDQuNWExLjUgMS41IDAgMDEwIDNIMTV2NC41YTEuNSAxLjUgMCAwMS0zIDBWMTVINy41YTEuNSAxLjUgMCAwMTAtM0gxMlY3LjVBMS41IDEuNSAwIDAxMTMuNSA2eiIgZmlsbD0iI0ZGRiIvPjwvZz48L3N2Zz4=" alt="" />
                    <h3>Selection Process</h3>
                </div>
                <p>Support your application and selection process YOUR way. Number of rounds, assignment of responsibilities within rounds, and cascading automation can all be easily customized.</p>
            </div>

            <div className="ib-infoinside">
                <div className="ib-logodiv">
                    <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjciIGhlaWdodD0iMjciIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48Y2lyY2xlIGZpbGw9IiM0RTkwRTIiIGN4PSIxMy41IiBjeT0iMTMuNSIgcj0iMTMuNSIvPjxwYXRoIGQ9Ik0xMy41IDZBMS41IDEuNSAwIDAxMTUgNy41VjEyaDQuNWExLjUgMS41IDAgMDEwIDNIMTV2NC41YTEuNSAxLjUgMCAwMS0zIDBWMTVINy41YTEuNSAxLjUgMCAwMTAtM0gxMlY3LjVBMS41IDEuNSAwIDAxMTMuNSA2eiIgZmlsbD0iI0ZGRiIvPjwvZz48L3N2Zz4=" alt="" />
                    <h3>Selection Process</h3>
                </div>
                <p>Support your application and selection process YOUR way. Number of rounds, assignment of responsibilities within rounds, and cascading automation can all be easily customized.</p>
            </div>

            <div className="ib-infoinside">
                <div className="ib-logodiv">
                    <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjciIGhlaWdodD0iMjciIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48Y2lyY2xlIGZpbGw9IiM0RTkwRTIiIGN4PSIxMy41IiBjeT0iMTMuNSIgcj0iMTMuNSIvPjxwYXRoIGQ9Ik0xMy41IDZBMS41IDEuNSAwIDAxMTUgNy41VjEyaDQuNWExLjUgMS41IDAgMDEwIDNIMTV2NC41YTEuNSAxLjUgMCAwMS0zIDBWMTVINy41YTEuNSAxLjUgMCAwMTAtM0gxMlY3LjVBMS41IDEuNSAwIDAxMTMuNSA2eiIgZmlsbD0iI0ZGRiIvPjwvZz48L3N2Zz4=" alt="" />
                    <h3>Selection Process</h3>
                </div>
                <p>Support your application and selection process YOUR way. Number of rounds, assignment of responsibilities within rounds, and cascading automation can all be easily customized.</p>
            </div>

            <div className="ib-infoinside">
                <div className="ib-logodiv">
                    <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjciIGhlaWdodD0iMjciIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48Y2lyY2xlIGZpbGw9IiM0RTkwRTIiIGN4PSIxMy41IiBjeT0iMTMuNSIgcj0iMTMuNSIvPjxwYXRoIGQ9Ik0xMy41IDZBMS41IDEuNSAwIDAxMTUgNy41VjEyaDQuNWExLjUgMS41IDAgMDEwIDNIMTV2NC41YTEuNSAxLjUgMCAwMS0zIDBWMTVINy41YTEuNSAxLjUgMCAwMTAtM0gxMlY3LjVBMS41IDEuNSAwIDAxMTMuNSA2eiIgZmlsbD0iI0ZGRiIvPjwvZz48L3N2Zz4=" alt="" />
                    <h3>Selection Process</h3>
                </div>
                <p>Support your application and selection process YOUR way. Number of rounds, assignment of responsibilities within rounds, and cascading automation can all be easily customized.</p>
            </div>

            <div className="ib-infoinside">
                <div className="ib-logodiv">
                    <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjciIGhlaWdodD0iMjciIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48Y2lyY2xlIGZpbGw9IiM0RTkwRTIiIGN4PSIxMy41IiBjeT0iMTMuNSIgcj0iMTMuNSIvPjxwYXRoIGQ9Ik0xMy41IDZBMS41IDEuNSAwIDAxMTUgNy41VjEyaDQuNWExLjUgMS41IDAgMDEwIDNIMTV2NC41YTEuNSAxLjUgMCAwMS0zIDBWMTVINy41YTEuNSAxLjUgMCAwMTAtM0gxMlY3LjVBMS41IDEuNSAwIDAxMTMuNSA2eiIgZmlsbD0iI0ZGRiIvPjwvZz48L3N2Zz4=" alt="" />
                    <h3>Selection Process</h3>
                </div>
                <p>Support your application and selection process YOUR way. Number of rounds, assignment of responsibilities within rounds, and cascading automation can all be easily customized.</p>
            </div>
        </div> */}


        <div className="ib-hidediv1">

        </div>

        <div className="ib-fourbox">
            <h1>AcceleratorApp Modules</h1>
            <div className="in-fourinside">
                <div className="ib-boxbox">
                    <h2>Access to Resources and Support</h2>
                    <img src="https://www.acceleratorapp.co/static/c4edb545edd02fb7fdadf59fb1382cf0/dd3c8/applicationProcessingModule.webp" alt="" />
                    <p>By registering with our incubation center, startups gain access to a wide range of valuable resources and support systems. </p>
                </div>

                <div className="ib-boxbox">
                    <h2>Tailored Guidance and Expert Mentorship</h2>
                    <img src="https://www.acceleratorapp.co/static/8501a0798728b3b480f9d966c55953ec/be84b/coachingMentoringModule.webp" alt="" />
                    <p>Our incubation center offers personalized guidance and mentorship from experienced industry experts.</p>
                </div>
            </div>

            <div className="in-fourinside">
                <div className="ib-boxbox">
                    <h2>Networking and Collaboration</h2>
                    <img src="https://www.acceleratorapp.co/static/c4edb545edd02fb7fdadf59fb1382cf0/dd3c8/applicationProcessingModule.webp" alt="" />
                    <p>Registering with our incubation center opens up a world of networking and collaboration opportunities.</p>
                </div>

                <div className="ib-boxbox">
                    <h2>Enhanced Credibility and Visibility</h2>
                    <img src="https://www.acceleratorapp.co/static/8501a0798728b3b480f9d966c55953ec/be84b/coachingMentoringModule.webp" alt="" />
                    <p>Being registered with our incubation center enhances a startup's credibility and visibility.</p>
                </div>
            </div>
        </div>
        <div style={{background:'#3d4853',padding:'3rem 0'}}>
            <NearIncub/>

        </div>
    </div>
  )
}

export default Incubation