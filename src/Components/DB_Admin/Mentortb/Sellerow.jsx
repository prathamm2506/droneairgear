import React, { useEffect, useState } from 'react'
import './Mentortb.css'

const Sellerow = (props) => {
  return (
    <tr>
            <td> {props.shop}</td>
            <td> {props.name} </td>
            <td> {props.contact}</td>
            <td>
                {props.email}
            </td>
            <td> {props.address}</td>
        </tr>
  )
}

export default Sellerow