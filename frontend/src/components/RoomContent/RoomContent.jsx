import React from 'react'
import './RoomContent.scss'
import { FaLongArrowAltLeft } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";
import { BsArrowRightShort } from "react-icons/bs";
import { BsDot } from "react-icons/bs";
import { assets } from '../../assets/assets';

// Boilerplates for Data
const Data = [
  {
    id: 1,
    imgSrc: assets.deluxeKing,
    roomsTitle: 'Deluxe King Room',
    price: '5,000/night',
    description: 'Indulge in Space, Comfort, and Style'
  },

  {
    id: 2,
    imgSrc: assets.deluxeSuite,
    roomsTitle: 'Deluxe Suite Room',
    price: '7,000/night',
    description: 'Sophistication meets Serenity'
  },

  {
    id: 3,
    imgSrc: assets.deluxevicHar,
    roomsTitle: 'Deluxe Victoria Harbour Suite',
    price: '7,500/night',
    description: 'Wake up to stunning Harbour Views'
  },

  {
    id: 4,
    imgSrc: assets.clubdelKing,
    roomsTitle: 'Club Deluxe King Room',
    price: '10,000/night',
    description: 'Lorem Ipsum'
  },

  {
    id: 5,
    imgSrc: assets.clubdelVic,
    roomsTitle: 'Club Deluxe Victoria Room',
    price: '11,000/night',
    description: 'Lorem Ipsum'
  },

  {
    id: 6,
    imgSrc: assets.grandSeaview,
    roomsTitle: 'Grand Seaview Room',
    price: '13,000/night',
    description: 'Lorem Ipsum'
  },
  
  {
    id: 7,
    imgSrc: assets.deluxevicHar,
    roomsTitle: 'Deluxe Victoria Harbour King Room',
    price: '15,000/night',
    description: 'Lorem Ipsum'
  },
  
  {
    id: 8,
    imgSrc: assets.deluxeseaKing,
    roomsTitle: 'Deluxe Seaview King Room',
    price: '18,000/night',
    description: 'Lorem Ipsum'
  },

  {
    id: 9,
    imgSrc: assets.premierexeVic,
    roomsTitle: 'Premier Executive Harbour Suite',
    price: '20,000/night',
    description: 'Lorem Ipsum'
  },

];

const RoomContent = () => {
  return (
    <section className="rooms section container">
      <div className="sec-container">
        <div className="sec-header flex">
          <div className="text-div">
            <h2 className="sec-title">
              Hotel Rooms
            </h2>
          </div>

          <div className="icons-div flex">
            <FaLongArrowAltLeft className='icon left-icon'/>
            <FaLongArrowAltRight className='icon'/>
          </div>
        </div>

        <div className="main-content grid">
          {
            Data.map(({id, imgSrc, roomsTitle, price, description}) => {
              return (
                <div className="single-rooms">
                  <div className="rooms-image">
                    <img src={imgSrc} alt="Image Title" />
                    <div className="overlay-info">
                      <h3>{roomsTitle}</h3>
                
                      <p>
                        {description}
                      </p>

                      <BsArrowRightShort className='icon'/>
                    </div>
                  </div>

                  <div className="rooms-footer">
                    <div className="number">
                      0{id}
                    </div>

                    <div className="rooms-text flex">
                      <h6>
                        {price}
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

export default RoomContent