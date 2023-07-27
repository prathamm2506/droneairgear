import React, { useEffect, useState } from 'react'
import './Mentortb.css'
import { useFirebase } from '../../../context/firebase'

const Indurow = (props) => {
    const firebase = useFirebase();
    const [url, setUrl] = useState();

    useEffect(() => {
        const photo = props.logoURL;
        firebase.getImageURL(photo).then((url) => setUrl(url));
    })
  return (
    <tr>
            <td> <img src={url} alt=""/>{props.name}</td>
            <td> {props.email} </td>
            <td> {props.com_id}</td>
            <td>
                {props.city}
            </td>
            <td> {props.state}</td>
        </tr>
  )
}

export default Indurow