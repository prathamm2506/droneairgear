import React, { useEffect, useState } from 'react'


import { Link, useParams } from 'react-router-dom'
import { useFirebase } from '../../../context/firebase'

const Dash_Course_details = () => {
     const params = useParams();
  const firebase = useFirebase();

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

  const [student, setStudent] = useState([]);

  useEffect(() => {
    firebase.getToCourse(params.courseId).then((stu) => setStudent(stu.docs));
  }, []);


  return (
    <div>
    <div>
        <div className="cd-firstdiv">
            <div className="cd-firstone">
                <h1>{data.name}</h1>
                <p>{data.description}</p>
            
            <Link to={`/course/lecture/${params.courseId}`} className="cd-btn">Enroll Now</Link>
            
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
        <main className="table">
        <section className="table__header">
            <h1>Applicants List</h1>
            <span><Link to="/dashbaord" >Back to Dashboard</Link></span>
        </section>
        <section className="table__body">
            <table>
                <thead>
                    <tr>
                        {/* <th> Id</th> */}
                        <th> Student Name</th>
                        <th> Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        student.map((interns) => {
                        const data = interns.data();
                        return (
                          <tr>
                              <td> <img src={data.photoURL} alt=""/> {data.displayName}</td>
                              <td> {data.useEmail} </td>
                          </tr>
                        )
                      })
                    }
                </tbody>
            </table>
        </section>
    </main>
    </div>
    </div>
  )
}

export default Dash_Course_details