import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Slider from '../Components/Slider/Slider'
import Testimonials from '../Components/Testimonials/Testimonials'
import Footer from '../Components/Footer/Footer'
import FBenefits from '../Components/FounderBenefits/FBenefits'
import FPartners from '../Components/FPartners/FPartners'
import Startup2 from '../Components/Startup2/Startup2'
import Start_Header from '../Components/Start_Header/Start_Header'


const Founder = () => {
  return (
    <div>
    {/* <Slider /> */}
    {/* <Startup2 /> */}

    <Start_Header/>
    <FBenefits />
    <FPartners />
    <Testimonials />
    </div>
  )
}

export default Founder
