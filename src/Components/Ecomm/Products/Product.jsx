import React, { useState, useEffect } from 'react'

import { Link, useNavigate } from 'react-router-dom'
import './Products.css'



import { useFirebase } from '../../../context/firebase'

const Product = (props) => {

    const firebase = useFirebase();
    const navigate = useNavigate();
    const [url, setURL] = useState(null);

    useEffect(() => {
        firebase.getImageURL(props.thumbnailURL).then(url => setURL(url));
    }, []);

  return (
    
        <Link to={(`${props.id}`)} className="pro" >
            <div className="proImg">
            <img src={url} alt=""/>
            </div>
            <div class="des">
                <span>{props.sup_Name}</span>
                <h5>{props.name}</h5>
                <div class="star">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                </div>
                <h4>{props.price}.Rs</h4>
            </div>
            <a href="#"><i class="fa-solid fa-cart-shopping cart"></i></a>
        </Link>
    
  )
}

export default Product