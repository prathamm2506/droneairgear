import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import Coursedesc from '../Components/CourseDesc/Coursedesc'
import '../Components/CourseDesc/Coursedesc.css'

import Keyfeat from '../Components/Keyfeat/Keyfeat'
import '../Components/Keyfeat/Keyfeat.css'

import Tutor from '../Components/Tutor/Tutor'
import '../Components/Tutor/Tutor.css'




import { Link, useParams } from 'react-router-dom'
import { useFirebase } from '../context/firebase'


import { SiAltiumdesigner } from "react-icons/si";
import { BiSupport } from "react-icons/bi";
import { SiImmer } from "react-icons/si";
import { CgMediaLive } from "react-icons/cg";
import { BsPeopleFill } from "react-icons/bs";
import { FaGraduationCap } from "react-icons/fa";
import { SlOptionsVertical } from "react-icons/sl";
import { BiNetworkChart } from "react-icons/bi";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { SiGooglescholar } from "react-icons/si";
import { BsGlobeAmericas } from "react-icons/bs";
import { SiCodereview } from "react-icons/si";
import Log from '../Components/DB_Admin/Auth/Log'



const Cd = () => {
  const params = useParams();
  const firebase = useFirebase();

  if(!firebase.isLogedIn) return <Log/>


  const [data, setData] = useState('');
  const [url, setURL] = useState(null);
  useEffect(() => {
      firebase.getCourseById(params.courseId).then((value) => setData(value.data()));
  },[data]);

  useEffect(() => {
      if(data){
          const imageURL = data.thumbnailURL;
          firebase.getImageURL(imageURL).then((url) => setURL(url));
      }
  }, [data]);

  const placeToCourse = async () => {

      const result = await firebase.placeToCourse(params.courseId);
    console.log('student registerd', result);
 
  
    
  }




  return (
    <div>
      <div>
        <div className="cd-firstdiv">
            <div className="cd-firstone">
                <h1>{data.name}</h1>
                <p>{data.description}</p>
            
            <Link to={`/course/lecture/${params.courseId}`}  onClick={placeToCourse} className="cd-btn">Enroll Now</Link>
            
            </div>

            <div className="cd-firsttwo">
                <img src={url} alt="" />
            </div>
        </div>

        <div className="cd-fivesec">
            <div className="cd-rate">
                <h3>4.8/5</h3>
                <p>60k+ Ratings</p>
            </div>

            <div className="cd-rate">
                <h3>{data.duration} Months</h3>
                <p>Under 10 hours of study a week</p>
            </div>

            <div className="cd-rate bnone">
                <h3>{data.language}</h3>
                <p>Subtitles: English</p>
            </div>

            <div className="cd-rate">
                <h3>{data.level} Level</h3>
                <p>No prior experience required.</p>
            </div>

            <div className="cd-rate1">
                <h3>{data.price}.Rs</h3>
                <p>Part of Bachelor of Applied Arts</p>
            </div>
        </div>
    </div>


    <div>
      <div className="kf-topdiv">
        <h1>Program Overview</h1>
        <div className="kf-maindiv">

          <div className="kf-onediv">
            <div className="kf-flexdiv">
              <div>
                <SiAltiumdesigner className="iconmega" />
              </div>
              <div>
                <p>Designed for working professionals</p>
              </div>
            </div>
            <div className="kf-flexdiv">
              <div>
                <BiSupport className="iconmega" />
              </div>
              <div>
                <p>
                Designed for students
                </p>
              </div>
            </div>
            <div className="kf-flexdiv">
              <div>
                <SiImmer className="iconmega" />
              </div>
              <div>
                <p>Research Alliance with industries</p>
              </div>
            </div>
            <div className="kf-flexdiv">
              <div>
                <CgMediaLive className="iconmega" />
              </div>
              <div>
                <p>
                  Live & interactive
                </p>
              </div>
            </div>
          </div>

          <div className="kf-onediv">
            <div className="kf-flexdiv">
              <div>
                <BsPeopleFill className="iconmega" />
              </div>
              <div>
                <p>Simulations from Harvard Business Publishing Education</p>
              </div>
            </div>
            <div className="kf-flexdiv">
              <div>
                <FaGraduationCap className="iconmega" />
              </div>
              <div>
                <p>Earn the same U.S. Degree as awarded On-Campus</p>
              </div>
            </div>
            <div className="kf-flexdiv">
              <div>
                <SlOptionsVertical className="iconmega" />
              </div>
              <div>
                <p>Choose a concentration from among five options</p>
              </div>
            </div>
            <div className="kf-flexdiv">
              <div>
                <BiNetworkChart className="iconmega" />
              </div>
              <div>
                <p>Join GGU’s 70,000+ alumni network</p>
              </div>
            </div>
          </div>

          <div className="kf-onediv">
            <div className="kf-flexdiv">
              <div>
                <AiOutlineCheckCircle className="iconmega" />
              </div>
              <div>
                <p>WES recognized</p>
              </div>
            </div>
            <div className="kf-flexdiv">
              <div>
                <SiGooglescholar className="iconmega" />
              </div>
              <div>
                <p>70% scholarship available for 5,000 students with EMI</p>
              </div>
            </div>
            <div className="kf-flexdiv">
              <div>
                <BsGlobeAmericas className="iconmega" />
              </div>
              <div>
                <p>Designed for working professionals</p>
              </div>
            </div>
            <div className="kf-flexdiv">
              <div>
                <SiCodereview className="iconmega" />
              </div>
              <div>
                <p>Global case study discussions</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>


    <div>
        <div className="t-maindic">
            <div className="t-insidediv">
            <h2>Instructor</h2>
            <div className="t-profile">
              <div className="t-image">
                <img src="https://thumbs.dreamstime.com/b/businessman-icon-image-male-avatar-profile-vector-glasses-beard-hairstyle-179728610.jpg" alt="" />

                <img src={data.photoURL} alt="" />
                </div>
                
                
                <h3>{data.in_name}</h3>
                </div>
                <p>{data.in_discrip}</p>
            
            </div>
            
        </div>
    </div>

        {/* <Coursedesc/>
        <Keyfeat/>
        <Tutor/>
       */}
    </div>
  )
}

export default Cd
