import React from 'react';
import './RoomContent.scss';
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import { BsArrowRightShort } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { assets } from '../../assets/assets';

// Boilerplates for Data
const Data = [
  {
    id: 1,
    imgSrc: assets.deluxeKing,
    roomsTitle: 'Deluxe King Room',
    description: 'Indulge in Space, Comfort, and Style'
  },
  {
    id: 2,
    imgSrc: assets.deluxeSuite,
    roomsTitle: 'Deluxe Suite Room',
    description: 'Sophistication Meets Serenity'
  },
  {
    id: 3,
    imgSrc: assets.deluxevicHar,
    roomsTitle: 'Deluxe Victoria Harbour Suite',
    description: 'Wake Up To Stunning Harbour Views'
  },
  {
    id: 4,
    imgSrc: assets.clubdelKing,
    roomsTitle: 'Club Deluxe King Room',
    description: 'Where Luxury and Privacy'
  },
  {
    id: 5,
    imgSrc: assets.clubdelVic,
    roomsTitle: 'Club Deluxe Victoria Room',
    description: 'A Stay Above All, With Iconic Victoria Views'
  },
  {
    id: 6,
    imgSrc: assets.grandSeaview,
    roomsTitle: 'Grand Seaview Room',
    description: 'Embrace the Horizon in the Comfort of Luxury'
  },
  {
    id: 7,
    imgSrc: assets.deluxevicHar,
    roomsTitle: 'Deluxe Victoria Harbour King Room',
    description: 'The Ultimate Victoria Harbour Experience'
  },
  {
    id: 8,
    imgSrc: assets.deluxeseaKing,
    roomsTitle: 'Deluxe Seaview King Room',
    description: 'Your Own Seaview Paradise'
  },
  {
    id: 9,
    imgSrc: assets.premierexeVic,
    roomsTitle: 'Premier Executive Harbour Suite',
    description: 'An Elevated Suite for the Discerning Traveler'
  },
];

const RoomContent = () => {
  return (
    <section className="rooms section container">
      <div className="sec-container">
        <div className="sec-header flex">
          <div className="text-div">
            <h2 className="sec-title">Hotel Rooms</h2>
          </div>

          <div className="icons-div flex">
            <FaLongArrowAltLeft className='icon left-icon' />
            <FaLongArrowAltRight className='icon' />
          </div>
        </div>

        <div className="main-content grid">
          {Data.map(({ id, imgSrc, roomsTitle, description }) => (
            <div className="single-rooms" key={id}>
              <div className="rooms-image">
                <img src={imgSrc} alt={roomsTitle} />
                <div className="overlay-info">
                  <h3>{roomsTitle}</h3>
                  <p>{description}</p>
                  <BsArrowRightShort className='icon' />
                </div>
              </div>

              <div className="rooms-footer flex">
                <Link to={`/room/${id}`} className="room-number-link">
                  <button className="btn flex">
                    View Details
                    <BsArrowRightShort className="icon" />
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div> 
      </div>
    </section>  
  );
};

export default RoomContent;
