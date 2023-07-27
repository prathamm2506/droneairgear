import React, { useEffect, useState } from 'react'
import './Mentortb.css'
import { useFirebase } from '../../../context/firebase'


const Dash_Internship_table = (props) => {

    const firebase = useFirebase();

    const [url, setUrl] = useState();

    useEffect(() => {
        const photo = props.resumeURL;
        firebase.getImageURL(photo).then((url) => setUrl(url));
    })


  return (
    <tr>
        <td> {props.name}</td>
        <td> {props.email} </td>
        <td> {props.contact}</td>
        <td>
            {props.why}
        </td>
        <td><a href={url}>Resume</a></td>
    </tr>
  )
}

export default Dash_Internship_table
