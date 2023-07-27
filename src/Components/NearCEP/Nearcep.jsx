import React from 'react'
import './Nearcep.css'
import { Link } from 'react-router-dom'

const Nearcep = () => {
  return (
    <div>
        <div className="nc-maindiv">
            <h1>Looking to upscale your skills? Find nearest center!</h1>
            <Link to="/training_centers"><button>Locate Center</button></Link>
        </div>
    </div>
  )
}

export default Nearcep