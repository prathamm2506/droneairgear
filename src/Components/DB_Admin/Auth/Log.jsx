import "./Auth.css";
import Logo from "../../../assets/droneair.png";
import React, { useState , useEffect} from "react";
import { useNavigate, Link } from "react-router-dom";


import { useFirebase } from "../../../context/firebase"

const Log = () => {

  const firebase = useFirebase();

    const navigate = useNavigate();
    const [users, setUsers] = useState([]);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {

        if(firebase.isLogedIn){
            navigate(`/`)
        }
    }, [firebase, navigate]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        await firebase.signinUserWithEmailAndPassword(email, password);
    };
  

  return (
    <div>
      <div className="Auth">
        <div className="a-left">
                <img src={Logo} alt="" />
                {/* <div className="Webname">
                    <h1>Droneairgear</h1>
                    <h6>Explore the ideas throughout the world</h6>
                </div> */}
            </div>

        <div className="a-right">
          <form onSubmit={handleSubmit} className="infoForm authForm">
            <h3>Log In</h3>

            
              <input 
              onChange={(e) => setEmail(e.target.value)} 
              value={email}
              type="email" 
              placeholder="Username" 
              className="input"
              />
            

            
              <input
                onChange={(e) => setPassword(e.target.value)} 
                value={password}
                type="password"
                className="input"
                placeholder="Password"
              />
            
            <button className="sign_up" type="submit">Submit</button>

            <Link to="/signup" style={{textDecoration: 'none', color:'#000'}}>
              <span style={{ fontSize: "12px"}}>
                Don't have an account, Sign up!
              </span>
            </Link>
              
          </form>
        </div>
      </div>
    </div>
  );
};
export default Log;