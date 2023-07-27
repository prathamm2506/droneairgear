import React, { useState, useEffect } from "react";
import "./Auth.css";

import Logo from "../../../assets/droneair.png";
import { Link } from "react-router-dom";

import { useNavigate } from 'react-router-dom'

import { useFirebase } from "../../../context/firebase"

const Auth = () => {

    

  return (
    <div className="Auth">
      <div className="a-left">
        <img src={Logo} alt="" />
        {/* <div className="Webname">
          <h1>Droneairgear</h1>
          <h6>Explore the ideas throughout the world</h6>
        </div> */}
      </div>

      <SignUp />
    </div>
  );
};

function SignUp() {
    const firebase = useFirebase();

    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        if(firebase.isLogedIn){
            navigate("/login")
        }
    }, [firebase, navigate]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        await firebase.signupUserWithEmailAndPassword(email, password);
        await firebase.handleCreateUser(email, password);


        navigate('/login')
    }

  return (
    <div className="a-right">
      <div className="infoForm authForm">
        <h3>Sign up</h3>
        <form onSubmit={handleSubmit}>

          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)} 
            value={email}
            placeholder="Email Address"
            className="input"
            required
          />
        

        
          <input
            onChange={(e) => setPassword(e.target.value)} 
            value={password}
            type="password"
            placeholder="Password"
            name="password"
            className="input"
            required
          />
        

        
            <button className="sign_up" type="submit">
              Sign Up
            </button>

            </form>
        

        <div>
            <div className="or">
                <div className="line"></div>
                OR
                <div className="line"></div>
            </div>

        </div>

        <div>
          <div onClick={firebase.signinWithGoogle} type="text" className="cursor">
            <img src="https://blog.hubspot.com/hubfs/image8-2.jpg" alt="" />
            Continue With Google
          </div>
        </div>

        <div>
          <span className="lastLine" state={{textDecoration: 'none', color:'#000'}}>
          <Link to="/login" state={{textDecoration: 'none', color:'#000'}}>
            Already have an account? Login
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Auth;
