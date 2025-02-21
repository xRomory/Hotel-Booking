import React from 'react';
import '../../App.css';
import RoomHeader from '../../components/RoomHeader/RoomHeader';
import RoomContent from '../../components/RoomContent/RoomContent';


function Rooms() {
  return (
    <div>
      <RoomHeader />
      <RoomContent />
    </div>
  )
}

export default Rooms;