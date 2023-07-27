import React, {useState, useEffect} from "react";
import "./Internship_details.css";


import { Link, useParams } from 'react-router-dom'
import { useFirebase } from '../../context/firebase'

const Internship_details = () => {

  const params = useParams();
    const firebase = useFirebase();

    const [data, setData] = useState('');
    const [url, setURL] = useState(null);
    useEffect(() => {
        firebase.getInternshipById(params.internshipId).then((value) => setData(value.data()));
    },[data]);

    

  return (
    <div className="int-details">
      <div className="heading">
        <h1>
          {data.post} Internship in {data.location} at {data.company}
          Limited
        </h1>
      </div>
      <div className="view_details">
        <div className="int-header">
          <div className="status">
            <i class="fa-solid fa-arrow-trend-up"></i>
            <span>Activily Hiring</span>
          </div>
          <div className="heading">
            <div className="post">
              <h2>{data.post}</h2>
            </div>
            <div className="company_name">
              <h3>{data.company}</h3>
            </div>
            <div className="location">
              <i class="fa-solid fa-location-dot"></i>
              <p>{data.location}</p>
            </div>
          </div>
          <div className="info">
            <div className="start_date">
              <div className="logo">
                <i class="fa-solid fa-circle-play"></i>
                <p>Start Date</p>
              </div>
              <div className="sub-info">
                <p>{data.date}</p>
              </div>
            </div>
            <div className="start_date">
              <div className="logo">
                <i class="fa-regular fa-calendar"></i>
                <p>Duration</p>
              </div>
              <div className="sub-info">
                <p>{data.duration} Month</p>
              </div>
            </div>
            <div className="start_date">
              <div className="logo">
                <i class="fa-regular fa-money-bill-1"></i>
                <p>Stipend</p>
              </div>
              <div className="sub-info">
                <p>₹ {data.stipend}/Month</p>
              </div>
            </div>
            <div className="start_date">
              <div className="logo">
                <i class="fa-solid fa-hourglass-end"></i>
                <p>Mode</p>
              </div>
              <div className="sub-info">
                <p>{data.mode}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="about_company">
          <div className="about_head">
            <h2>{data.company}</h2>
            <a href={data.com_link} target="_blank">
              Website <i class="fa-solid fa-arrow-up-right-from-square"></i>
            </a>
          </div>
          <div className="about_info">
            <p>
              {data.com_dis}
            </p>
          </div>
        </div>

        <div className="about_company">
          <div className="about_head">
            <h2>About the internship</h2>
          </div>
          <div class="text-container">
            {data.post_dis}
          </div>
        </div>

        <div className="about_company">
          <div className="about_head">
            <h2>Who can apply</h2>
          </div>
          <div class="text-container">
            {data.req_elg}
          </div>
        </div>

        <div className="btn_center">
          <Link to={(`/internship_registration/${params.internshipId}`)} className="btn">Apply Now</Link>
        </div>
      </div>
    </div>
  );
};

export default Internship_details;
