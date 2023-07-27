import React from 'react'
import './Blog.css'
import { Link } from 'react-router-dom'
import picture1 from './Picture1.jpg'
import picture2 from '../../assets/MIND.png'

const Blog = () => {
  return (
        <div className=" bp-maindiv">
            <div className="bp-contentdiv">
                <div className="bp-imgdiv">
                    <img src={picture1} alt="" />
                </div>
                <div className="bp-textdiv">
                    <div className='small'>Payment</div>
                    <h3>NFC Payment Gateway</h3>
                    <p>Near Field Communication (NFC) is a wireless communication technology that enables the exchange of data between two devices within a short range of up to 10 cm
.</p>
                    <Link to='/blog' className='bp-btn'>Read Full Article</Link>
                </div>
            </div>


            <div className="bp-contentdiv">
                <div className="bp-imgdiv">
                    <img src={picture2} alt="" style={{objectPosition:"left"}} />
                </div>
                <div className="bp-textdiv">
                    <div className='small'>Brain</div>
                    <h3>Mind Controlling Unit </h3>
                    <p>EEG sensors, also known as EEG electrodes or EEG caps, are devices used to detect and measure the electrical activity of the brain through electroencephalography (EEG). </p>
                    <Link to='/blog1' className='bp-btn'>Read Full Article</Link>
                </div>
            </div>


        </div>
    
  )
}

export default Blog
