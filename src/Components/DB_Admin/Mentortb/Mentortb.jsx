import React, { useEffect, useState } from 'react'
import './Mentortb.css'

import Person1 from '../../../assets/indusPics/Lee.jpg'
import { useFirebase } from '../../../context/firebase'
import Mentorrow from './Mentorrow'
import { Link } from 'react-router-dom'

const Mentortb = () => {

    const firebase = useFirebase();

    const [mentors, setMentors] = useState([]);

    useEffect(() => {
        firebase.listAllMentors().then((mentors) => setMentors(mentors.docs));
    },);

   

    
  return (
    <div>
        <main className="table">
        <section className="table__header">
            <h1>Mentor's List</h1>
            <span><Link to="/admin_dashbaord" >Back to Dashboard</Link></span>
        </section>
        <section className="table__body">
            <table>
                <thead>
                    <tr>
                        {/* <th> Id</th> */}
                        <th> Mentor Name</th>
                        <th> Email</th>
                        <th> Expertise</th>
                        <th> City</th>
                        <th> State</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        mentors.map((mentor) => (<Mentorrow key={mentor.id} id={mentor.id} {...mentor.data()}/>))
                    }
                </tbody>
            </table>
        </section>
    </main>
    </div>
  )
}

export default Mentortb