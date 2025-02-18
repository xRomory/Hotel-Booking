import React from "react";
import { useParams } from "react-router-dom";
import { Data } from "../../components/RoomContent/RoomContent";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./RoomDetails.scss";

// Import icons
import { BiUser, BiBed, BiWifi, BiCoffee, BiCar, BiSpa } from "react-icons/bi"; 
import { MdOutlinePets, MdChildCare, MdOutlineLocalParking } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";

const RoomDetails = () => {
  const { id } = useParams();
  const room = Data.find((r) => r.id === parseInt(id));

  if (!room) {
    return <h2>Room not found</h2>;
  }

  const images = [room.imgSrc, ...(room.extraImages || [])];

  return (
    <div className="room-details-container">
      {/* Image Slider */}
      <Swiper
        modules={[Pagination, Navigation]}
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation
        className="room-swiper"
      >
        {images.map((imgSrc, index) => (
          <SwiperSlide key={index}>
            <img src={imgSrc} alt={`Room ${index}`} className="room-slide" />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Room Information */}
      <div className="room-info">
        <h1>{room.roomsTitle}</h1>
        <p className="room-descripFull">{room.descripFull}</p>

        <div className="room-details">
          <h2>Price</h2>
            <p>Price starts from <strong>{room.price}</strong></p>
          <h2>Check-in</h2>
          <p>Check-in from <strong>{room.checkIn}</strong> – anytime</p>

          <h2>Check-out</h2>
          <p>Check-out before <strong>{room.checkOut}</strong></p>

          <h2>Special Check-in Instructions</h2>
          <p>Guests will receive an email with check-in instructions on the day their booking is confirmed. Front desk staff will greet guests upon arrival.</p>

          <h2>Pets</h2>
          <p>{room.petsAllowed ? <><MdOutlinePets /> Pets are allowed.</> : "Pets are not allowed."}</p>
  
        </div>

        <div className="amenities-container">
  <h2>Amenities</h2>
  <ul className="amenities-list">
    {room.amenities.map((amenity, index) => (
      <li key={index}>
        <FaCheckCircle /> {amenity}
      </li>
    ))}
  </ul>
</div>


        {/* Book Now Button */}
        <button className="book-now-button">Book Now</button>
      </div>
    </div>
  );
};

export default RoomDetails;
