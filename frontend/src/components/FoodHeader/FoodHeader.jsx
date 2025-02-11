import React from 'react';
import './FoodHeader.scss';

const FoodHeader = () => {
  return (
    <section className="food-section">
      <div className="section-container container">
        <div className="header-text">
          <h2 className="tagline-text">
            A Feast of Magic, Crafted by World-Class Chefs
          </h2>
          <p className="subtitle-text">
            Served by world-class chefs, where every dish is a masterpiece of magic and flavor. 
          </p>
        </div>
      </div>
    </section>
  )
}

export default FoodHeader