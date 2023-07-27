import React, { useEffect, useState } from 'react'
import './Mentortb.css'
import { useFirebase } from '../../../context/firebase'

const Mentorrow = (props) => {

    const firebase = useFirebase();

    const [url, setUrl] = useState();

    useEffect(() => {
        const photo = props.photURL;
        firebase.getImageURL(photo).then((url) => setUrl(url));
    })
  return (
   
        <tr>
            <td> <img src={url} alt=""/>{props.f_name}</td>
            <td> {props.email} </td>
            <td> {props.expertise}</td>
            <td>
                {props.city}
            </td>
            <td> {props.state}</td>
        </tr>

   
  )
}

export default Mentorrow