import React from 'react'
import Products from '../Components/Ecomm/Products/Products'
import Features from '../Components/Ecomm/Features/Features'
import Ibutton from '../Components/Ibutton/Ibutton'
import Seller_pro from '../Components/Intern_pro/Seller_pro'
import Newarrivals from '../Components/Newarrivals/Newarrivals'
import Shoplanding from '../Components/Mentor_Landing/Mentor_Landing/Shoplanding'



const Ecommerce = () => {
  return (
    <div>
      
      {/* <Seller_pro/> */}

      <Shoplanding/>
      {/* <Features /> */}
      {/* <Newarrivals/> */}
      <Products />
      {/* <Ibutton /> */}
    </div>
  )
}

export default Ecommerce
