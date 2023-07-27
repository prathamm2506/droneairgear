import React from 'react'
import { useFirebase } from '../../../context/firebase'


const Investorow = (props) => {

  return (
   
        <tr>
            <td> {props.name}</td>
            <td> {props.email} </td>
            <td> {props.contact}</td>
            
        </tr>

   
  )
}

export default Investorow