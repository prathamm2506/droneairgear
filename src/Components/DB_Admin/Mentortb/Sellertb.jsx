import React, { useEffect, useState } from 'react'
import './Mentortb.css'

import Person1 from '../../../assets/indusPics/Lee.jpg'
import { useFirebase } from '../../../context/firebase'
import Mentorrow from './Mentorrow'
import { Link } from 'react-router-dom'
import Sellerow from './Sellerow'

const Sellertb = () => {
    const firebase = useFirebase();

    const [mentors, setMentors] = useState([]);

    useEffect(() => {
        firebase.listAllSellers().then((mentors) => setMentors(mentors.docs));
    },);
  return (
    <div>
        <main className="table">
        <section className="table__header">
            <h1>Seller's List</h1>
            <span><Link to="/admin_dashbaord" >Back to Dashboard</Link></span>
        </section>
        <section className="table__body">
            <table>
                <thead>
                    <tr>
                        {/* <th> Id</th> */}
                        <th> Shop Name</th>
                        <th> Owner Name</th>
                        <th> Contact</th>
                        <th> Email</th>
                        <th> Address</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        mentors.map((mentor) => (<Sellerow key={mentor.id} id={mentor.id} {...mentor.data()}/>))
                    }
                </tbody>
            </table>
        </section>
    </main>
    </div>
  )
}

export default Sellertb