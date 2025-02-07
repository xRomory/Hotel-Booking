import React from 'react'
import './Footer.scss'
import { FaHotel } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="footer">
      <div className="sec-container container grid">
        <div className="logo-div">
          <div className="footer-logo">
            <a href="#" className="logo flex">
              <h1 className='flex'>
                <FaHotel className='icon'/>
                <span className='brand-name'>Pseubomotel</span>
              </h1>
            </a>
          </div>

          <div className="socials flex">
            <FaFacebookF className='icon'/>
            <FaXTwitter className='icon'/>
            <FaInstagram className='icon'/>
          </div>
        </div>

        <div className="footer-links">
          <span className="link-title">
            Information
          </span>

          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Hotel Amenities</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
        </div>
      </div>
    </div>
  )
}

export default Footer