import React from 'react'
import Store from './Store'
import './Store.css'
import Iframe from 'react-iframe'
const Main_Industry = () => {
  return (
    <div style={{padding: '80px 0 0 ',background:'rgb(243, 243, 243)'}}>

    {/* <Store/> */}

    <div className="map">
    
  <Iframe className='infra' url="https://www.google.com/maps/d/u/2/embed?mid=1rwCZ1EqmxCp4U33nb2hPD1HSQzfpIfA&ehbc=2E312F" ></Iframe>
  </div>
</div>
  )
}

export default Main_Industry