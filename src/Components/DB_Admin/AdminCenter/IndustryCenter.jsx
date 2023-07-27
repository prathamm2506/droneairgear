import React, { useContext, useEffect, useState } from 'react'
import './AdminCenter.css'
import Blok from '../../Internship/Blok'
import { Link, useNavigate } from 'react-router-dom';
import MainChart from '../GraphsCharts/MainChart/MainChart'
import Coco from './Coco/Coco'
import Heatmap from '../GraphsCharts/Heatmap/Heatmap'
import Job from '../Job/Job'
import { AuthContext, useFirebase } from '../../../context/firebase';
import Log from '../Auth/Log';
import Mentors from '../../../routes/Mentors';

// import { collection, query, where } from "firebase/firestore";
// import { db } from '../../../context/firebase';


import { RiHome3Line } from "react-icons/ri";
import { FiLogOut } from "react-icons/fi";
import { BsPencilSquare } from "react-icons/bs";
import { AiOutlineMessage } from "react-icons/ai";


import bg from '../../../assets/welcome.svg'

// --------Tabs MUI
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import BlockForIndus from '../../Internship/BlockForIndus';
// import Product from '../../Ecomm/Products/Product';
import ProductForDash from '../../Ecomm/Products/ProductForDash';






function TabPanel(props) {

// Create a query against the collection.

  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}




TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}


const IndustryCenter = () => {

  const firebase = useFirebase();

  const [courses, setCourses] = useState([]);
  const [internships, setInternships] = useState([]);
  const [mentor, setMentor] = useState([]);

  const [product, setProduct] = useState([]);

  // const [enroll, setEnrolled] = useState([]);
  

  useEffect(() => {
    if (firebase.isLogedIn)
      firebase.fecthMyCourses(firebase.user.uid)?.then((courses) => setCourses(courses.docs));
    firebase.fecthMyInternships(firebase.user.uid)?.then((internships) => setInternships(internships.docs));
    firebase.fecthMyProducts(firebase.user.uid)?.then((produc) => setProduct(produc.docs));
    // firebase.fecthMyEnrolls(firebase.user.uid)?.then((enrol) => setEnrolled(enrol.docs));



    


  }, []);



  // const toMentor = () => {
  //   console.log(!firebase.fecthMentorData(firebase.user.uid))
  // }

  if(!firebase.isLogedIn) return <Log/>;
  // if (!firebase.isLogedIn) return <Mentors />

  // ---------------------Tabs
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  // const checkMentor = async() => {
  //   // const collectionRef = collection(db, 'registerd_mentor');
  //   const navigate = useNavigate();
  //   // const q = query(collectionRef, where("userID", "!=", userID));

  //   // if(q == true)
  //   // {
  //   //   navigate('/');
  //   // }
  //   navigate('/');
  // }


  return (
    <div style={{zIndex:"20" , maxWidth:"950px", width:"100%", margin:"0 auto"}}>
    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Welcome" {...a11yProps(0)} />
          <Tab label="Post Internship" {...a11yProps(1)} />

          <Tab label="Post Courses" {...a11yProps(2)} />
          <Tab label="Post Products" {...a11yProps(3)} />
          {/* <Tab label="My Enrolled" {...a11yProps(4)} /> */}


          {/* <Tab label="Student" {...a11yProps(2)} />
          <Tab label="Shop" {...a11yProps(3)} /> */}

        </Tabs>
      </Box>

      <TabPanel value={value} index={0}>
        <img src={bg} alt="" />
      </TabPanel>

      <TabPanel value={value} index={1} className="internshipTab">

      {
        <div className='Posts'>
          <Link to='/create_internship' className='indbutton r-button' >Post a new Job/Internship</Link>
          {/* <ShareModal modalOpened={modalOpened} setModalOpened={setModalOpened} /> */}
          <div className="scrutiny">
            {
              internships.map((internship) => (<BlockForIndus link={`/dashboard/internship/${internship.id}`}
                key={internship.id} id={internship.id} {...internship.data()} />))
            }
          </div>
        </div>
      }
      </TabPanel>

      <TabPanel value={value} index={2} className="courseTabs">

      {
        <div className='Posts'>

          <Link to="/create_course" className='indbutton r-button' >Post a new Course</Link>
          <div className="scrutiny">
          {
            courses.map((course) => (<Job link={`/dashboard/course/${course.id}`} key={course.id} id={course.id}{...course.data()} />))
          }
          </div>
        </div>
      }
      </TabPanel>

      <TabPanel value={value} index={3} className="productTab">

      {
        <div className='Posts'>

          <Link to="/addproduct" className='indbutton r-button' >Post a new Component</Link>
          <div className="scrutiny" style={{flexDirection:"row", flexWrap:"wrap",justifyContent:'center'}}>
          {
            product.map((component) => (<ProductForDash key={component.id} id={component.id}{...component.data()} />))
          }
          </div>
        </div>
      }
      </TabPanel>

      {/* <TabPanel value={value} index={4} className="courseTabs">

      {
        <div className='Posts'>

         
          <div className="scrutiny">
          {
            enroll.map((course) => (<Job link={`/dashboard/course/${course.id}`} key={course.id} id={course.id}{...course.data()} />))
          }
          </div>
          <p>hi</p>
        </div>
      }
      </TabPanel> */}

    </div>
  )
}

export default IndustryCenter