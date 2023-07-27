import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Slider from '../Components/Slider/Slider'
import Footer from '../Components/Footer/Footer'
import IBenefits from '../Components/IBenefits/IBenefits'
import Ibutton from '../Components/Ibutton/Ibutton'
import IPeople from '../Components/IPeople/IPeople'
import Investor_Header from '../Components/Investor_Header/Investor_Header'



const Investor = () => {
  return (
    <div>
    {/* <Ibutton /> */}
    {/* <Slider /> */}
    {/* <Ibutton/> */}
    <Investor_Header/>
    <IBenefits />
    <IPeople />
    </div>
  )
}

export default Investor
