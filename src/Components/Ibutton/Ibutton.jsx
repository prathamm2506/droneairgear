import React from 'react'
import './ibutton.css'
import { Link } from 'react-router-dom'

const Ibutton = () => {
  return (
    <div className="ibtn">

    <Link to='/store' className='ibutton'>
      Locate Stores
    </Link>
    </div>
  )
}

export default Ibutton
