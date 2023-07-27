import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import ContactUs from './routes/ContactUs'
import Drone from './routes/Drone'
import Mentors from './routes/Mentors'
import Students from './routes/Students'
import Form from './routes/Form'
import FAQS from './routes/FAQS'
import ProductCart from './routes/ProductCart'
import {BrowserRouter, Routes ,Route} from 'react-router-dom';
import Startup from './routes/Startup'
import Investor from './routes/Investor'
import Founder from './routes/Founder'
import UniversityPage from './routes/UniversityPage'
import Cd from './routes/Cd'
import ResearchDev from './routes/ResearchDev'

// The links to Navbar and Footer Pages 



import Ecomm from './routes/Ecommerce'
import Cart from './Components/Ecomm/Cart/Cart'
import IndustryPage from './Components/Industry/Industry'
import MentorFilter from './Components/MentorFinal/Mentorfinal'
import InternshipPage from './Components/Internship/Internship'
import InternMain from './Components/Internship_Main/Internship_Main'
import InterDetails from './Components/Internship_details/Internship_details'
import StartProfile from './Components/StartupPro/StartupPro'
// import MenBoard from './Components/IndusDB/Profolio/NewInd'
// import StudBoard from './Components/IndusDB/IndustryDB'
import SignUpDash from './Components/DB_Admin/Auth/Log'
import LoginDash from './Components/DB_Admin/Auth/Auth'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import Store from './Components/Store/Main_Store'
import IncubationPage from './Components/Incubation/Incubation'
import InsurancePage from './Components/Insuarance/Insuarance'
// import IndBoard from './Components/IndusDB/IndustryDB'
// import IndProfolio from './Components/IndusDB/Profolio/Profolio'
import Lectures from './Components/Lecture/Lecture'
import LoginBtn from './Components/LoginBtn/LoginBtn'

// Forms
// import IndustryForm from './Components/Forms/IndustryReg'
// import InstituteForm from './Components/Forms/Institutereg'
// import InsuaranceForm from './Components/Forms/Insuaranceform'
// import MentorForm from './Components/Forms/Mentors'
// import StartupForm from './Components/Forms/StartupReg'
// import StudentForm from './Components/Forms/Student'
import Createcourse from './Components/Forms/Createcourse'
// import Addproduct from './Components/Forms/Addproduct'


//New Forms

import IndustryReg from './Components/NewForm/IndustryReg'
import Insuarance from './Components/NewForm/Insuarance'
import InternshipCreate from './Components/NewForm/InternshipCreate'
// import InternshipReg from './Components/NewForm/InternshipReg'
import InvestorReg from './Components/NewForm/InvestorReg'
import MentorCon from './Components/NewForm/MentorCon'
import MentorReg from './Components/NewForm/MentorReg'
import CreateCourse from './Components/NewForm/NewForm'
import SellerReg from './Components/NewForm/SellerReg'
import StartupReg from './Components/NewForm/StartupReg'
import UniversityReg from './Components/NewForm/UniversityReg'
import UploadComp from './Components/NewForm/UploadComp'



import DB_Admin from './Components/DB_Admin/AdminDashboard'
import DB_Industry from './Components/DB_Admin/IndustryDashboard'


import Rules from './Components/Rules/Rules'
import { AuthContextProvider, FirebaseProvider } from './context/firebase'
import Mentortb from './Components/DB_Admin/Mentortb/Mentortb'
import Industrytb from './Components/DB_Admin/Mentortb/Industb'
import AddLectures from './Components/NewForm/AddLectures'
import Main_Incub from './Components/Store/Main_Incub'
import Main_Industry from './Components/Store/Main_Industry'
import Startuptb from './Components/DB_Admin/Mentortb/Startuptb'
import BlogPg from './Components/BlogPage/BlogPg'
import Universitytb from './Components/DB_Admin/Mentortb/Universitytb'
import Dash_Internship_details from './Components/DB_Admin/Industry_Details/Dash_Internship_details'
import InternshipReg from './Components/NewForm/InternshipReg'
import Investortb from './Components/DB_Admin/Mentortb/Investortb'
import Sellertb from './Components/DB_Admin/Mentortb/Sellertb'
import Dash_Course_details from './Components/DB_Admin/Course_Details/Dash_Course_details'
import BLogPg1 from './Components/BlogPage/BLogPg1'

import Lecture1 from './Components/Lecture/Lecture1'
import Lecture2 from './Components/Lecture/Lecture2'
import Lecture3 from './Components/Lecture/Lecture3'
import Lecture4 from './Components/Lecture/Lecture4'
import Lecture5 from './Components/Lecture/Lecture5'
import Lecture6 from './Components/Lecture/Lecture6'
import Lecture7 from './Components/Lecture/Lecture7'
import Lecture8 from './Components/Lecture/Lecture8'
import BackToTop from './Components/BackToTop/BackToTop'


ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
    <FirebaseProvider>
    <AuthContextProvider>
    <Navbar />
    <Routes>

     {/* <Route path='/storey' element={<Storey/>} /> */}

     <Route path='/' element={<App/>} />
     <Route path='/students' element={<Students/>} />
     <Route path='/industrypage' element={<IndustryPage/>} />
     <Route path='/mentors' element={<Mentors/>} />
     <Route path='/ecomm/:componentId' element={<Cart/>} />
     <Route path='/drone' element={<Drone/>} />
     <Route path='/faqs' element={<FAQS/>} />
     <Route path='/mentorfilter' element={<MentorFilter/>} />
     <Route path='/internshipPage' element={<InternshipPage/>} />
     <Route path='/internMain' element={<InternMain/>} />
     <Route path='/internshipPage/:internshipId' element={<InterDetails/>} />
     <Route path='/universityPage' element={<UniversityPage/>} />
     <Route path='/startup' element={<Startup/>} />
     <Route path='/startup/:startupId' element={<StartProfile/>} />
     {/* <Route path='/menBoard' element={<MenBoard/>} /> */}
     {/* <Route path='/studBoard' element={<StudBoard/>} /> */}
     <Route path='/login' element={<SignUpDash/>} />
     <Route path='/signup' element={<LoginDash/>} />
     <Route path='/insurancePage' element={<InsurancePage/>} />
     <Route path='/researchDev' element={<ResearchDev/>} />
     <Route path='/incubationPage' element={<IncubationPage/>} />
     <Route path='/students/:courseId' element={<Cd/>} />
     {/* <Route path='/indBoard' element={<IndBoard/>} /> */}
     {/* <Route path='/indProfolio' element={<IndProfolio/>} /> */}
     <Route path='/course/lecture/:courseId' element={<Lectures/>} />
     <Route path='/investor' element={<Investor/>} />
     <Route path='/founder' element={<Founder/>} />
     <Route path='/productcart' element={<ProductCart/>} />
     <Route path='/form' element={<Form/>} />
     <Route path='/contactus' element={<ContactUs/>} />
     {/* <Route path='/rules' element={<Terms/>} /> */}
     <Route path='/ecomm' element={<Ecomm/>} />
     <Route path='/rulee' element={<Rules/>} />
     <Route path='/dashbaord/:courseId' element={<AddLectures/>} />
     <Route path='/dashboard/internship/:internshipId' element={<Dash_Internship_details/>}/>
     <Route path='/dashboard/course/:courseId' element={<Dash_Course_details/>}/>

     {/* <Route path='/industryForm' element={<IndustryForm/>} />
     <Route path='/studentForm' element={<StudentForm/>} />
     <Route path='/instituteForm' element={<InstituteForm/>} />
     <Route path='/insuaranceForm' element={<InsuaranceForm/>} />
     <Route path='/mentorForm' element={<MentorForm/>} />
     <Route path='/startupForm' element={<StartupForm/>} />
     <Route path='/createcourse' element={<Createcourse/>} />
     <Route path='/addproduct' element={<Addproduct/>} /> */}

     <Route path='/createcourse' element={<Createcourse/>} />
     <Route path='/dashbaord' element={<DB_Industry/>} />
     
     <Route path='/admin_dashbaord' element={<DB_Admin/>} />
     



     {/* NEW FORMS */}


     <Route path='/industry_registration' element={<IndustryReg/>} />
     <Route path='/insuarance_registration' element={<Insuarance/>} />
     <Route path='/create_internship' element={<InternshipCreate/>} />
     <Route path='/internship_registration/:internshipId' element={<InternshipReg/>} />
     <Route path='/investor_registraion' element={<InvestorReg/>} />
     <Route path='/conect_mentor' element={<MentorCon/>} />
     <Route path='/mentor_registraion' element={<MentorReg/>} />
     <Route path='/create_course' element={<CreateCourse/>} />
     <Route path='/seller_registration' element={<SellerReg/>} />
     <Route path='/startup_registration' element={<StartupReg/>} />
     <Route path='/university_registration' element={<UniversityReg/>} />
     <Route path='/addproduct' element={<UploadComp/>} />





     <Route path='/mentor_list' element={<Mentortb/>} />
     <Route path='/industry_list' element={<Industrytb/>} />
     <Route path='/start_up_list' element={<Startuptb/>} />
     <Route path='/university_list' element={<Universitytb/>} />
     <Route path='/investors_list' element={<Investortb/>} />
     <Route path='/sellers_list' element={<Sellertb/>} />






     <Route path='/incubation' element={<Main_Incub/>}/>
     <Route path='/industry_listdown' element={<Main_Industry/>}/>
     <Route path='/training_centers' element={<Store/>} />

     

     <Route path='/blog' element={<BlogPg/>}/>
     <Route path='/blog1' element={<BLogPg1/>}/>


     <Route path='/lecture1' element={<Lecture1/>}/>
     <Route path='/lecture2' element={<Lecture2/>}/>
     <Route path='/lecture3' element={<Lecture3/>}/>
     <Route path='/lecture4' element={<Lecture4/>}/>
     <Route path='/lecture5' element={<Lecture5/>}/>
     <Route path='/lecture6' element={<Lecture6/>}/>
     <Route path='/lecture7' element={<Lecture7/>}/>
     <Route path='/lecture8' element={<Lecture8/>}/>





    </Routes>
    <BackToTop/>
    <LoginBtn />

    <Footer />
    </AuthContextProvider>
    </FirebaseProvider>
   </BrowserRouter>

)
