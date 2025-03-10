import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import './Navbar.scss'
import { FaHotel } from "react-icons/fa6";
import { AiFillCloseCircle } from "react-icons/ai";
import { IoIosMenu } from "react-icons/io";

function navbar() {
  const [active, setActive] = useState('navbar')
  const showNav = () => {
    setActive('navbar active-navbar');
  }

  const removeNav = () => {
    setActive('navbar');
  }

  const [transparent, setTransparent] = useState('header')
  const addBg = () => {
    if(window.scrollY >= 10) {
      setTransparent('header active-header')
    } else {
      setTransparent('header')
    }
  }

  window.addEventListener('scroll', addBg)

  return (
    <section className='navbar-section'>
      <div className={transparent}>
        <div className="logo-div">
          <Link to="/" className="logo">
            <h1 className='flex'>
              <FaHotel className='icon'/>
              <span className='brand-name'>PSEUBOMOTEL</span>
            </h1>
          </Link>
        </div>

        <div className={active}>
          <ul className="nav-lists flex">
            <li className="nav-item">
              <Link to="/Rooms" className='nav-link'>
                Hotel Rooms
              </Link>
              
            </li>
            <li className="nav-item">
              <Link to="/Foods" className="nav-link">
                Food
              </Link>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                Pricing
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                Hotel Amenities
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                About Us
              </a>
            </li>

            <div className="header-btn flex">
              <button className="btn login-btn">
                <Link to="/Login" className="nav-link">
                  Login
                </Link>
              </button>
              <button className="btn reg-btn">
                <Link to="/Registration" className="nav-link">
                  Sign Up
                </Link>
              </button>
            </div>
          </ul>
          <div onClick={removeNav} className="close-navbar">
            <AiFillCloseCircle className='icon'/>
          </div>
        </div>

        <div onClick={showNav} className="toggle-navbar-menu">
          <IoIosMenu className='icon'/>
        </div>
      </div>
    </section>
  )
}

export default navbar