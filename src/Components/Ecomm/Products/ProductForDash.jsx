import React, { useState, useEffect } from 'react'

import { Link, useNavigate } from 'react-router-dom'
import './Products.css'



import { useFirebase } from '../../../context/firebase'

const ProductForDash = (props) => {

    const firebase = useFirebase();
    const navigate = useNavigate();
    const [url, setURL] = useState(null);

    useEffect(() => {
        firebase.getImageURL(props.thumbnailURL).then(url => setURL(url));
    }, []);


    const remove = async() => {
		await firebase.deleteProduct(props.id);
		// return result;
		navigate('/');
	}



  return (
    
    <div className="pro">
        <Link to={(`/ecomm/${props.id}`)}>
            <div className="proImg">
            <img src={url} alt=""/>
            </div>
            </Link>
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
            <div onClick={remove}><i class="fa-solid fa-trash cart delete"></i></div>
        
            {/* <div className='button delete'>Delete</div> */}
        </div>
    
  )
}

export default ProductForDash