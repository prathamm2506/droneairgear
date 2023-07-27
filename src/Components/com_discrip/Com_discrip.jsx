import React, { useEffect, useState } from 'react'
import './Com_discrip.css'


import { Link, useParams } from 'react-router-dom'
import { useFirebase } from '../../context/firebase'

const Com_discrip = () => {


  const params = useParams();
    const firebase = useFirebase();

    const [data, setData] = useState('');
    const [url, setURL] = useState(null);
    useEffect(() => {
        firebase.getOrderById(params.componentId).then((value) => setData(value.data()));
    },[data]);

    useEffect(() => {
      if(data){
          const imageURL = data.thumbnailURL;
          firebase.getImageURL(imageURL).then((url) => setURL(url));
      }
  }, [data]);


  return (
    <div id="intern_pro">
        <div className="intern_pro gap">
            <div className="intern_pro_img">
                <img src={url} alt="" className='image'/>
            </div>
            <div className="intern_pro_info">
                <span>Electronic Component</span>
                <h1>{data.name}</h1>
                <h2>{data.price}.Rs</h2>
             
                <h2>Product Description</h2>
                <p>{data.description}</p>

                <h2>Address</h2>
                <p>{data.location}</p>

               
                
                {/* <div className="uni_btn">
                  <Link to='/store'  className='uni_button'>Locate Store</Link>
                </div> */}
            </div>
        </div>
    </div>
  )
}

export default Com_discrip