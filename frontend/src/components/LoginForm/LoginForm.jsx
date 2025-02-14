import React, { useState, useEffect } from 'react'
import './LoginForm.scss'
import { Link } from 'react-router-dom';
import { FaHotel } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { assets } from '../../assets/assets';

const bgImages = [
  assets.hotelBg1,
  assets.hotelBg2,
  assets.hotelBg3,
  assets.hotelBg4,
  assets.hotelBg5,
  assets.hotelBg6,
  assets.hotelBg7
];

const LoginForm = () => {

  const [currentBg, setCurrentBg] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prevBg) => (prevBg + 1) % bgImages.length);
    }, 5000); // Change background every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="login-container"
      style={{
        background: `linear-gradient(rgba(33, 33, 33, 0.6), rgba(33, 33, 33, 0.6)), url(${bgImages[currentBg]}) no-repeat center`,
        backgroundSize: "cover",
        transition: "background-image 1s ease-in-out"
      }}
    >

      <div className="wrapper flex">
        <div className="logo-div">
          <Link to="/" className="logo">
            <h1 className='flex'>
              <FaHotel className='icon'/>
              <span className='brand-name'>PSEUBOMOTEL</span>
            </h1>
          </Link>
        </div>

        <form action="">
          <h1>Login</h1>
          <div className="input-box">
            <input type="text" placeholder='Username' required/>
            <FaUser className='icon' />
          </div>

          <div className="input-box">
            <input type="password" placeholder='Password' required/>
            <FaLock className='icon' />
          </div>

          <div className="remember-forgot">
            <label>
              <input type="checkbox" /> Remember Me
              <a href="#">Forgot Password?</a>
            </label>
          </div>

          <button type='submit'>Login</button>

          <div className="register-link">
            <p>Don't have an account? </p>
            <Link to='/Registration'>
              Register
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default LoginForm