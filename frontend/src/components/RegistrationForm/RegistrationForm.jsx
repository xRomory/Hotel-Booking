import React, { useState, useEffect } from 'react'
import './RegistrationForm.scss'
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';
import { FaHotel } from "react-icons/fa6";

const bgImages = [
  assets.food,
  assets.hotelBg1,
  assets.hotelBg,
  assets.beachTopView,
  assets.hallway
];

const RegistrationForm = () => {

  const [currentBg, setCurrentBg] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prevBg) => (prevBg + 1) % bgImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div 
      className="registration-container"
      style={{
        background: `linear-gradient(rgba(33, 33, 33, 0.522), rgba(33, 33, 33, 0.522)), url(${bgImages[currentBg]}) no-repeat center`,
        backgroundSize: "cover",
        transition: "background-image 1s ease-in-out"
      }}
    >
      <div className="logo-div">
        <Link to="/" className="logo">
          <h1 className='flex'>
            <FaHotel className='icon' />
            <span className='brand-name'>Pseubomotel</span>
          </h1>
        </Link>
      </div>

      <div className="wrapper">
        <form action="">
          <h1>Registration</h1>
          <div className="input-box">
            <input type="text" placeholder='First Name' required />
          </div>

          <div className="input-box">
            <input type="text" placeholder='Last Name' required />
          </div>

          <div className="input-box">
            <input type="text" placeholder='Username' required />
          </div>

          <div className="input-box">
            <input type="text" placeholder='Email' required />
          </div>

          <div className="input-box">
            <input type="password" placeholder='Password' required />
          </div>

          <button type='submit'>Register</button>

          <div className="login-link">
            <p>Have an account? </p>
            <Link to='/Login'>
              Login
            </Link>
          </div>

        </form>
      </div>
    </div>
  )
}

export default RegistrationForm