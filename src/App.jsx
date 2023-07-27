import React from 'react'
import Header from './Components/Header/Header'
import Testimonials from './Components/Testimonials/Testimonials'
import Navbar from './Components/Navbar/Navbar'
import Partners from './Components/Partners/Partners'
import Course from './Components/Courses/Course'
import Img from './Components/Img/Img'
import We from './Components/We/We'
import Footer from './Components/Footer/Footer'
import Programs from './Components/Programs/Programs'
import Game from './Components/Game/Game'
import Talent from './Components/Talent/Talent'
import Blog from './Components/Blog/Blog'
import Dgca from './Components/Dgca/Dgca'
import Hire from './Components/Hire/Hire'
import Why from './Components/Why/Why'
import Banner1 from './Components/Banner1/Banner1'
import Universitie from './Components/Universitie/Universitie'
import Startup1 from './Components/Startup1/Startup1'
import Startup2 from './Components/Startup2/Startup2'
import Slider from './Components/Slider/Slider'
import Newcpmo from './Components/Newcpmo/Newcompo'
import Faqk from './Components/Faqk/Faqk'
import DevFaqks from '../src/Components/Faqk/DevFaqk'
import {APie} from '../src/Components/Faqk/faqkapi'
import Feturecourse from './Components/FeturedCourse/Feturecourse'
import Programsonhome from './Components/FeturedCourse/programsonhome'
import Nearcep from './Components/NearCEP/Nearcep'
import HomeVideo from './Components/HomeVideo/HomeVideo'
import VideoCon from './Components/VideoCon/VideoCon'
import DGCA2 from './Components/DGCA2/DGCA2'
import ProjectSale from './Components/ProjectsSale/ProjectSale'


function App() {

  return (
    <div className="App">
    {/* <Header /> */}
    <Slider /> 
    <We />
    <Course /> 
    <DGCA2 />
    <Newcpmo/>    

    {/* <Programs />  */}
   
    {/* <Banner1 /> */}

    {/* <Feturecourse/> */}
    {/* <Programsonhome/> */}
        <ProjectSale />

    <Nearcep/>
    {/* <Game /> 
    <Talent />  */}
    {/* <Img /> 
    <Hire /> 
    <Universitie/>
        <Why /> 
      <Learning />*/}
      {/* <Faqk /> */}

      {/* <Blog /> */}
    {/* <HomeVideo/> */}

    <VideoCon/>

        <Testimonials />
        
        <Partners />
    </div>
  )
}

export default App
