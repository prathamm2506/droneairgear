import React, { useEffect, useState } from 'react'
import './Cart.css'

import Product1 from '../../../assets/arduino.png'
import Com_discrip from '../../com_discrip/Com_discrip'


import { Link, useParams } from 'react-router-dom'
import { useFirebase } from '../../../context/firebase'

const Cart = () => {

    const params = useParams();
    const firebase = useFirebase();

    const [data, setData] = useState('');
    const [url, setURL] = useState(null);
    useEffect(() => {
        firebase.getOrderById(params.componentId).then((value) => setData(value.data()));
    },[data]);

    // useEffect(() => {
    //     if(data){
    //         const imageURL = data.cover_picURL;
    //         firebase.getImageURL(imageURL).then((url) => setURL(url));
    //     }
    // }, [data]);

  return (
    <div style={{margin:'70px 0 0'}}>
      
    <section id="page-header" class="about-header">       
        <h2>#{data.name}</h2>       
    </section>

    <Com_discrip />
    </div>
  )
}

export default Cart
