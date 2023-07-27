import React, { useEffect, useState } from 'react'
import { useFirebase } from '../../../context/firebase'
import { Link } from 'react-router-dom';

const Entry_Intenship = (props) => {

    const firebase = useFirebase();

    // const [url, setUrl] = useState();

    // useEffect(() => {
    //     const photo = props.resumeURL;
    //     firebase.getImageURL(photo).then((url) => setUrl(url));
    // })
  return (
    <tr>
            <td>{props.name}</td>
            <td>{props.email} </td>
            <td>{props.contact}</td>
            <td>
                {props.why}
            </td>
            {/* <td><a href={url} download>Resume</a></td> */}
        </tr>
  )
}

export default Entry_Intenship