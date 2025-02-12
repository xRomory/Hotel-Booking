import React, { useContext } from 'react'
import './FoodContent.scss'
// import { FoodContext } from '../../context/FoodContext';
// import FoodItems from '../FoodItems/FoodItems.jsx';
import { FoodData } from "../../assets/assets";
import { BsArrowRightShort } from "react-icons/bs";

const FoodContent = () => {
  // const {FoodData} = useContext(FoodContext)

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
          {FoodData.map(({id, image, name, description}) => {
              return (
                <div className="food-items">
                  <div className="food-image">
                    <img src={image} alt='Food Image' />
                    <div className="food-info">
                      <h4>{name}</h4>
                      <p>
                        {description}
                      </p>
                      <BsArrowRightShort className='icon'/>
                    </div>
                  </div>

                  {/* <div className="food-footer">
                    <div className="food-text flex">
                      <h6>

                      </h6>
                    </div>
                  </div> */}
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