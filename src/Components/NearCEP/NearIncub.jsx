import React from 'react'
import './Nearcep.css'
import { Link } from 'react-router-dom'

const NearIncub = () => {
  return (
    <div>
        <div className="nc-maindiv nc-greydiv">
            <h1>Find your nearest incubation center!</h1>
            <Link to="/incubation"><button>Locate Center</button></Link>
        </div>
    </div>
  )
}

export default NearIncub