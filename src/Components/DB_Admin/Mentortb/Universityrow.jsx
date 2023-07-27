import React, { useEffect, useState } from 'react'
import { useFirebase } from '../../../context/firebase'

const Universityrow = (props) => {
    const firebase = useFirebase();

     const [url, setUrl] = useState();

     useEffect(() => {
        const logo = props.logoURL;
        firebase.getImageURL(logo).then((url) => setUrl(url));

     })
  return (
     <tr>
            <td> <img src={url} alt=""/>{props.name}</td>
            <td> {props.ins_email} </td>
            <td> {props.ins_contact}</td>
            <td>
                {props.ins_city}
            </td>
            <td><a href={props.ins_web} target="_blank">Website</a></td>
        </tr>
  )
}

export default Universityrow