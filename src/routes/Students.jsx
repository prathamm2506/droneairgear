import React, {useEffect, useState} from 'react'

import Navbar from '../Components/Navbar/Navbar'
import Programs from '../Components/Programs/Programs'

import Footer from '../Components/Footer/Footer'
import Learning from '../Components/Learning/Learning'
import { useFirebase } from "../context/firebase"

import Testimonials from '../Components/Testimonials/Testimonials'
import ProjectSale from '../Components/ProjectsSale/ProjectSale'
import Headerpage from '../Components/headerpage/headerpage'
import Feturecourse from '../Components/FeturedCourse/Feturecourse'
// import Programsoncourse from '../Components/FeturedCourse/Programsoncourse'
import Programsonhome from '../Components/FeturedCourse/programsonhome'

const Students = () => {

  const firebase = useFirebase();

    const [courses, setCourses] = useState([]);

    useEffect(() => {
        firebase.listAllCourses().then((courses) => setCourses(courses.docs));
    },);


  return (
    <div className='top100'>
      <Headerpage />
      {/* <Learning /> */}

        
        <Programsonhome/>
       
        {/* <ProjectSale /> */}
        <Testimonials />
    </div>
  )
}

export default Students
