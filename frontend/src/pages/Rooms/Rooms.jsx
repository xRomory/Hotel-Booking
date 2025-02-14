import React from 'react';
import '../../App.css';
import RoomHeader from '../../components/RoomHeader/RoomHeader';
//*import RoomContent from '../../components/RoomContent/RoomContent';*//
import Navbar from '../../components/Navbar/Navbar';

function Rooms() {
  return <div>
    <Navbar />
    <RoomHeader />
    <div className="room-content"></div>
    </div>
}

export default Rooms;