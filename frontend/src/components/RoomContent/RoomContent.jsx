import React, { useEffect, useState } from 'react';
import './RoomContent.scss';
import axios from 'axios';
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import { BsArrowRightShort } from "react-icons/bs";
import { Link, useNavigate } from 'react-router-dom';
// import { RoomData } from '../../assets/assets';

const RoomContent = () => {

  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const token = localStorage.getItem("token"); // Get token if available
    
        const headers = token
          ? { "Authorization": `Token ${token}` }
          : {}; // Only add Authorization header if token exists
    
        const response = await axios.get('http://127.0.0.1:8000/api/rooms/room-details/', { headers });
    
        setRooms(response.data);
      } catch (error) {
        console.error("Error fetching data:", error.response?.data || error.message);
      }
    };
  
    fetchRooms();
  }, []);  

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
          {rooms.map(({ id, imgSrc, roomsTitle, description }) => (
            <div className="single-rooms" key={id}>
              <div className="rooms-image">
                <img src={imgSrc} alt={roomsTitle} />
                <div className="overlay-info">
                  <h3>{roomsTitle}</h3>
                  <p>{description}</p>
                </div>
              </div>

              <div className="rooms-footer flex">
                <Link to={`/rooms/${id}`} className="room-button-link">
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