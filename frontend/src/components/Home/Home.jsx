import React, { useState } from 'react'
import './Home.scss'
import HotelDatePicker from '../HotelDatePicker/HotelDatePicker'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <section className="home">
      <div className="section-container container">
        <div className="home-text">
          <h1 className="tagline-title">
            Feel The Magic With <span className='brand-name'>Pseubomotel</span>
          </h1>

          <p className="hotel-description">
            Effortlessly book your perfect stay with <span className='brand-name'>Pseubomotel</span>, where seamless technology meets unforgettable hospitality.
          </p>

          <button className="btn">
            <Link to="/Rooms">
              Explore
            </Link>
          </button>
        </div>

        <div className="home-card grid">
          <div className="location-div">
            <label htmlFor="location">Location</label>
            <input type="text" placeholder='Choose your Magical Place' />
          </div>

          <div className="schedule-div">
            <label htmlFor="schedule">Schedule</label>
            <HotelDatePicker />
          </div>

          {/* <div className="price-div">
            <label htmlFor="price">Amount</label>
            <input type="text" placeholder='Hotel Price'/>
          </div> */}

          <button className="btn">
            Reserve Now
          </button>
        </div>
      </div>
    </section>
  )
}

export default Home