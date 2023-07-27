import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Mentor_1 from '../Components/Mentor_1/Mentor_1'

import Footer from '../Components/Footer/Footer'
import MentorWho from '../Components/MentorWho/MentorWho'
import MentorRole from '../Components/MentorRole/MentorRole'
import MentorD from '../Components/MentorD/MentorD'
import MentorPro from '../Components/MentorPro/MentorPro'
import Mentor_Landing from '../Components/Mentor_Landing/Mentor_Landing/Mentonlanding'
import Nearmentor from '../Components/NearCEP/Nearmentor'


const Mentors = () => {
  return (
    <div>
      <Mentor_Landing />
      {/* <MentorWho /> */}
      <Nearmentor/>
      <MentorD />
      {/* <MentorBen /> */}
      {/* <Mentor_1 /> */}
    </div>
  )
}

export default Mentors
