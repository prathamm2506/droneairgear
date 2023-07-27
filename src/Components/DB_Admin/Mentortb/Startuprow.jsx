import React, { useEffect, useState } from 'react'
import './Mentortb.css'
import { useFirebase } from '../../../context/firebase'

const Strow = (props) => {

    const firebase = useFirebase();

    const [url, setUrl] = useState();

    useEffect(() => {
        const photo = props.logoURL;
        firebase.getImageURL(photo).then((url) => setUrl(url));
    })
  return (
   
        <tr>
            <td> <img src={url} alt=""/>{props.name}</td>
            <td> {props.org_email} </td>
            <td> {props.city}</td>
            <td>
                {props.revenue}
            </td>
            <td> {props.goal}</td>
            <td> {props.raised}</td>
            <td> {props.valuation}</td>

        </tr>

   
  )
}


export default Strow