import React, { useEffect, useState } from 'react'
import { useFirebase } from '../../../context/firebase'
import Universityrow from './Universityrow';
import { Link } from 'react-router-dom';

const Universitytb = () => {
    const firebase = useFirebase();

    const [university, setUniversity] = useState([]);

    useEffect(() => {
        firebase.listAllUniversity().then((univer) => setUniversity(univer.docs));

    },);
  return (
    <div>
        <main className="table">
        <section className="table__header">
            <h1>Universitie's List</h1>
            <span><Link to="/admin_dashbaord" >Back to Dashboard</Link></span>
        </section>
        <section className="table__body">
            <table>
                <thead>
                    <tr>
                        {/* <th> Id</th> */}
                        <th> University Name</th>
                        <th> Email</th>
                        <th> Contact</th>
                        <th> City</th>
                        <th> Website Link</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        university.map((univer) => (<Universityrow key={univer.id} id={univer.id} {...univer.data()}/>))
                    }
                </tbody>
            </table>
        </section>
    </main>
    </div>
  )
}

export default Universitytb