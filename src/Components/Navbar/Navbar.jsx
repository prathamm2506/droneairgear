import React, { useEffect, useState } from "react";
import "./Navbar.css";

import { FaShoppingCart } from "react-icons/fa";
import LogoAir  from "../../assets/Droneair.png";

import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [show, setShow] = useState("top-wrapper");
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (window.scrollY > 200) {
      if (window.scrollY > lastScrollY) {
        setShow("hide-wrapper");
      } else {
        setShow("show-wrapper");
      }
    } else {
      setShow("top-wrapper");
    }
    setLastScrollY(window.scrollY);
  };
  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
  }, [lastScrollY]);

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const Investor = false;

  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 10) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <div class={`wrapper ${show}`}>
      <nav>
        {/* <input type="checkbox" id="show-search" /> */}

        <input type="checkbox" id="show-menu" />
        <label for="show-menu" class="menu-icon">
          <i class="fas fa-bars"></i>
        </label>

        <div class="content">
          <div class="logo">
            <Link className={Investor ? "logoA logoAa" : "logoA"} to="/">
              <img src={LogoAir} alt="" className="droneair" />
            </Link>
          </div>
          <ul class="links">
            <li>
              <a>
                <Link to="/students">Courses</Link>
              </a>
            </li>
            <li>
              <a>
                <Link 
                to="/industryPage"
                // to="/cd"
                >Industry</Link>
              </a>
            </li>
            <li>
              <a>
                <Link to="/internMain">Internship</Link>
              </a>
            </li>
            <li>
              <a>
                <Link to="/mentors">Mentor</Link>
              </a>
            </li>
            <li>
              <a>
                <Link to="/universityPage">University</Link>
              </a>
            </li>
            <li>
              <a>
                <Link to="/drone">Drone</Link>
              </a>
            </li>

            <li>
            <Link to="/startup" >VC Funding</Link>
            {/* <input type="checkbox" id="show-features" />
            <label for="show-features">Startup</label>
            <ul>
              <li><a href="/startup">Startup</a></li>
              <li><a href="/investor">Investor</a></li>
   
            </ul> */}
          </li>
          </ul>
        </div>

        <div className="nav-icons">
          <Link to='/ecomm'> <FaShoppingCart class="cart-icon" /></Link>
          {/* <label for="show-search" class="search-icon">
            <i class="fas fa-search"></i>
          </label> */}
        </div>


        {/* <form action="#" class="search-box">
          <input
            type="text"
            placeholder="Type Something to Search..."
            required
          />
          <button type="submit" class="go-icon">
            <i class="fas fa-long-arrow-alt-right"></i>
          </button>
        </form> */}
        
      </nav>
    </div>
  );
};

export default Navbar;
