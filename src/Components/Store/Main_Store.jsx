
import React from 'react'
import Store from './Store'
import './Store.css'
import Iframe from 'react-iframe'
const Main_Store = () => {
  return (
    <div style={{padding: '80px 0 0 ',background:'rgb(243, 243, 243)'}}>

        {/* <Store/> */}

        <div className="map">
      <Iframe className='infra' url="https://www.google.com/maps/d/u/2/embed?mid=1hTtLcx2LlnR1GKKu379rsZaCRgVmmlA&ehbc=2E312F"  allow="geolocation 'self' https://my.atlist.com" width="100%"  frameborder="0" scrolling="no" allowfullscreen></Iframe>
      </div>
    </div>
  )
}

export default Main_Store
