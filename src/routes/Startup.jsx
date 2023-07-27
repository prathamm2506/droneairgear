import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import Startup1 from '../Components/Startup1/Startup1'
import Startup2 from '../Components/Startup2/Startup2'
import Startup3 from '../Components/Startup3/Startup3'
import SCon from '../Components/SCon/SCon'
import Raising from '../Components/Raising/Raising'
import ProjectSale from '../Components/ProjectsSale/ProjectSale'
import VcHeader from '../Components/VcHeader/VcHeader'
import Blackhole from '../Components/blackhole/blackhole'

const Startup = () => {
  return (
    <div>
      <VcHeader />
        <Startup1 />
        <Raising />
        {/* <SCon /> */}
        <Startup3 />
    </div>
  )
}

export default Startup
