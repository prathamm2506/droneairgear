import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import ConMenStu from '../Components/Forms/ConMenStu'
import IndustryReg from '../Components/Forms/IndustryReg'
import Institutereg from '../Components/Forms/Institutereg'
import Mentors from '../Components/Forms/Mentors'
import Student from '../Components/Forms/Student'
import StartupReg from '../Components/Forms/StartupReg'
import Createcourse from '../Components/Forms/Createcourse'
import Newinternship from '../Components/Forms/Newinternship'
import Insuaranceform from '../Components/Forms/ConMenStu'

const Form = () => {
  return (
    <div >

      <ConMenStu/>
      <IndustryReg/>
      <Institutereg/>
      <Mentors/>
      <StartupReg/>
      <Createcourse/>
      <Newinternship/>
      <Student/>
      <Insuaranceform/> 

    </div>
  )
}

export default Form
