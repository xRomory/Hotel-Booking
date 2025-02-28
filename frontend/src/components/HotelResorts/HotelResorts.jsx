import React from 'react'
import './HotelResort.scss'
import { FaLongArrowAltLeft } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";
import { BsArrowRightShort } from "react-icons/bs";
import { BsDot } from "react-icons/bs";
import { assets } from '../../assets/assets';

// Boilerplates for Data
const Data = [
  {
    id: 1,
    imgSrc: assets.poolside,
    amenitiesTitle: 'Pool Side',
    location: 'West Wing',
    description: 'Lorem Ipsum'
  },

  {
    id: 2,
    imgSrc: assets.food,
    amenitiesTitle: 'Pseubomotel Food Room',
    location: 'North Wing',
    description: 'Lorem Ipsum'
  },

  {
    id: 3,
    imgSrc: assets.poolside2,
    amenitiesTitle: 'Pool Side',
    cation: 'Center Wing',
    description: 'Lorem Ipsum'
  },

  {
    id: 4,
    imgSrc: assets.room,
    amenitiesTitle: 'Hotel Room',
    location: 'West Side',
    description: 'Lorem Ipsum'
  },

  {
    id: 5,
    imgSrc: assets.beachTopView,
    amenitiesTitle: 'Pseubomotel Beach',
    location: 'Grand Side',
    description: 'Lorem Ipsum'
  }

];

const HotelResorts = () => {
  return (
    <section className="amenities section container">
      <div className="sec-container">
        <div className="sec-header flex">
          <div className="text-div">
            <h2 className="sec-title">
              Hotel Amenities
            </h2>
            <p>
              Indulge in luxury with Pseubomotel’s top-tier amenities, from serene spa retreats and gourmet dining to high-speed Wi-Fi and cozy, elegantly designed rooms—every detail crafted for an enchanting stay.
            </p>
          </div>

          <div className="icons-div flex">
            <FaLongArrowAltLeft className='icon left-icon'/>
            <FaLongArrowAltRight className='icon'/>
          </div>
        </div>

        <div className="main-content grid">
          {
            Data.map(({id, imgSrc, amenitiesTitle, location, description}) => {
              return (
                <div className="single-amenities" key={id}>
                  <div className="amenities-image">
                    <img src={imgSrc} alt="Image Title" />
                    <div className="overlay-info">
                      <h3>{amenitiesTitle}</h3>
                      <p>
                        {description}
                      </p>
                      <BsArrowRightShort className='icon'/>
                    </div>
                  </div>

                  <div className="amenities-footer">
                    <div className="number">
                      0{id}
                    </div>

                    <div className="amenities-text flex">
                      <h6>
                        {location}
                      </h6>
                      <span className="flex">
                        <span className="dot">
                          <BsDot className='icon' />
                          <span className='brand-name'>Pseubomotel</span>
                        </span>
                      </span>
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

export default HotelResorts