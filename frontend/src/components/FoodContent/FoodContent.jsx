import React from 'react'
import './FoodContent.scss'
import { assets } from '../../assets/assets'
import food from '../../assets/hotel_food3.jpg'

const FoodData = [
  {
    imgSrc: assets.food3,
    foodTitle: 'Egg Salad',
  },
  {
    imgSrc: assets.food4,
    foodTitle: 'Vegetable Salad',
  },
  {
    imgSrc: assets.food5,
    foodTitle: 'Pancake',
  },
  {
    imgSrc: assets.food6,
    foodTitle: 'Food',
  },
  {
    imgSrc: assets.food7,
    foodTitle: 'Fruit Salad',
  },
  {
    imgSrc: assets.food8,
    foodTitle: 'Burger Combo Meal',
  },
]

const FoodContent = () => {
  return (
    <section className="food-menu section container">
      <div className="section-container">
        <div className="section-header flex">
          <div className="text-div">
            <h2 className="menu-title">
              Pseubomotel Menu
            </h2>
          </div>
        </div>
        
        <div className="main-content grid">
          {
            FoodData.map(({imgSrc, foodTitle}) => {
              return (
                <div className="food-items">
                  <div className="food-image">
                    <img src={imgSrc} alt='Food Image' />
                    <div className="food-info">
                      <h4>{foodTitle}</h4>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </section>
    
  )
}

export default FoodContent