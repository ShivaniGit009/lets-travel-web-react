import React from 'react'
import './Navbar.css'
// import logo from '../../assets/img/beach.png'
import logo from '../../img/beach.png'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='logo-div'>
          <Link to="/">
            <img src={logo} alt="logo" className='logo'/>
            <h2>Lets Travel</h2>
          </Link>
        </div>
        <div className='nav-links'>
          <ul>
            <li>
              <Link to="/about-us">About Us</Link>
            </li>
            <li>
              <Link to="tour-packages">Tour Packages</Link>
            </li>
            <li>
              <Link to="destination">Destination</Link>
            </li>
            <li>
              <Link to="gallery">Gallery</Link>
            </li>
            <li>
              <Link to="contact-us">Contact Us</Link>
            </li>                                       
          </ul>
        </div>
        <div className='info-btn-div'>
          {/* <div className='searchbox'>
            <input type="text" placeholder='Search'/>
            <img src="" alt="" />
          </div> */}
          <div className='nav-btn'>
            <button>Contact Us</button>
          </div>
        </div>
    </div>
  )
}

export default Navbar