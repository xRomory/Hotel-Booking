import React from 'react'
import './About.scss'
import { assets } from '../../assets/assets'

const About = () => {
  return (
    <section className="about section">
      <div className="sec-container">
        <div className="title">
          The Pseubomotel Experience
        </div>

        <div className="main-content container grid">
          <div className="single-item">
            <img src={assets.garden} alt="Image Name" />
            <h3>About Pseubomotel</h3>

            <p>
              Welcome to Pseubomotel, where every stay is a story waiting to be told. Designed for travelers who seek more than just a place to rest, we blend comfort, elegance, and a touch of magic to create unforgettable experiences. Whether you're escaping for a weekend getaway or embarking on a grand adventure, our world-class hospitality, modern amenities, and seamless booking system ensure a stay that feels effortless and extraordinary. From the moment you arrive, let the charm of Pseubomotel transport you to a realm of relaxation, adventure, and pure indulgence. Feel the magic—only at Pseubomotel.
            </p>
          </div>

          <div className="single-item">
            <img src={assets.food1} alt="Image Name" />
            <h3>Why Choose Pseubomotel</h3>

            <p>
              In a world of ordinary stays, Pseubomotel redefines hospitality with a seamless, tech-driven booking experience, ensuring effortless reservations and personalized service from start to finish. Unlike other hotels, we don’t just offer rooms—we create immersive escapes, blending luxury, comfort, and innovation to craft a stay that’s as memorable as your destination. Our top-tier amenities, from gourmet dining to serene spa retreats, cater to every traveler’s need, while our commitment to exceptional guest experiences ensures you feel valued, relaxed, and enchanted. At Pseubomotel, it’s not just a stay—it’s magic you can feel.
            </p>

          </div>
        </div>
      </div>
    </section>
  )
}

export default About