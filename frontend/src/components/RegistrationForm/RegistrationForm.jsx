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
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    username: "",
    email: "",
    password: "",
  });

  const [message, setMessage] = useState(""); 

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      first_name: formData.first_name.trim(),
      last_name: formData.last_name.trim(),
      username: formData.username.trim(),
      email: formData.email.trim(),
      password: formData.password,
    };

    try {
      const response = await fetch("http://127.0.0.1:8000/api/users/register/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
  
      const data = await response.json();
      if (response.status === 201) {
        setMessage("Registration Successful!");
        setFormData({  first_name: "", last_name: "", username: "", email: "", password: ""  })
      } else {
        setMessage(data.detail || "Registration Failed");
        console.error("Error:", data);
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("An error occurred. Please try again.");
    }
  };

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
        <form onSubmit={handleSubmit}>
          <h1>Registration</h1>
          {message && <p>{message}</p>}

          <div className="input-box">
            <input type="text" name='first_name' placeholder='First Name' required value={formData.first_name} onChange={handleChange}/>
          </div>

          <div className="input-box">
            <input type="text" name='last_name' placeholder='Last Name' required value={formData.last_name} onChange={handleChange}/>
          </div>

          <div className="input-box">
            <input type="text" name='username' placeholder='Username' required value={formData.username} onChange={handleChange}/>
          </div>

          <div className="input-box">
            <input type="text" name='email' placeholder='Email' required value={formData.email} onChange={handleChange}/>
          </div>

          <div className="input-box">
            <input type="password" name='password' placeholder='Password' required value={formData.password} onChange={handleChange}/>
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