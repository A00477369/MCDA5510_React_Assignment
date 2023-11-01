import React from 'react'
import '../style/Navbar.css';
import {Link} from 'react-router-dom';
import logo from '../images/smu_logo.png';
function Navbar() {
    return (
      <div className="Navbar">
       <nav>
       <div className="logo">
          <img src = {logo} alt="Logo" /> {/* Adjust the path to your logo file */}
        </div>
          <ul>
            <li>
              <Link to="/about-me">About Me</Link>
            </li>
            <li>
              <Link to="/my-town">My Town</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
  
  export default Navbar;