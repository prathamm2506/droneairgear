import React, { useEffect, useState } from 'react'
import './Mentortb.css'

import Person1 from '../../../assets/indusPics/Lee.jpg'
import { useFirebase } from '../../../context/firebase'
// import Mentorrow from './Mentorrow'
import { Link } from 'react-router-dom'
import Startuprow from './Startuprow'
import Mentorrow from './Mentorrow'
import Strow from './Startuprow'

const Startuptb = () => {
    const firebase = useFirebase();

    const [mentors, setMentors] = useState([]);

    useEffect(() => {
        firebase.listAllStartups().then((mentors) => setMentors(mentors.docs));
    },);


    
  return (
    <div>
    <main className="table">
    <section className="table__header">
        <h1>Startup's List</h1>
        <span><Link to="/admin_dashbaord" >Back to Dashboard</Link></span>
    </section>
    <section className="table__body">
        <table>
            <thead>
                <tr>
                    {/* <th> Id</th> */}
                    <th> Company Name</th>
                    <th> Email</th>
                    <th> City</th>
                    <th> Revenue</th>
                    <th> Goal</th>
                    <th> Raised</th>
                    <th> Valuation</th>
                </tr>
            </thead>
            <tbody>
                {
                    mentors.map((mentor) => (<Strow key={mentor.id} id={mentor.id} {...mentor.data()}/>))
                }
            </tbody>
        </table>
    </section>
</main>
</div>
  )
}

export default Startuptb