import React from 'react'
import './LoginForm.scss'
import { Link } from 'react-router-dom';
import { FaHotel } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";

const LoginForm = () => {
  return (
    <div className="login-container">
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
            <a href="#">Register</a>
          </div>
        </form>
      </div>
    </div>
  )
}

export default LoginForm