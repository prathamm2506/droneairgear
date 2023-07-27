import React, { useEffect, useState } from 'react'
import './AdminCenter.css'
import Blok from '../../Internship/Blok'
import { Link } from 'react-router-dom';
import MainChart from '../GraphsCharts/MainChart/MainChart'
import Coco from './Coco/Coco'
import Heatmap from '../GraphsCharts/Heatmap/Heatmap'
import Job from '../Job/Job'
import { useFirebase } from '../../../context/firebase';
import Log from '../Auth/Log';

const PostSide = () => {

  // const firebase = useFirebase();

  // const [courses, setCourses] = useState([]);
  // const [internships, setInternships] = useState([]);

  // useEffect(() => {
  //   if(firebase.isLogedIn)
  //   firebase.fecthMyCourses(firebase.user.uid)?.then((courses)=> setCourses(courses.docs));
  //   firebase.fecthMyInternships(firebase.user.uid)?.then((internships) => setInternships(internships.docs));
    
  // },[]);

  

  // if(!firebase.isLogedIn) return <Log/>;

  return (
    <div className='PostSide'>


     
              <Coco />
            {/* <div className="scrutiny">
            <MainChart />
            <Heatmap />
            </div>
      */}
    

      
    </div>
  )
}

export default PostSide
