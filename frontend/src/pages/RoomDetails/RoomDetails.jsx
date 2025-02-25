import BookNowButton from "../../pages/BookNowButton/BookNowButton";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./RoomDetails.scss";

// Import icons
import { MdOutlinePets } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";

// Import AOS and its styles
import AOS from "aos";
import "aos/dist/aos.css";

const RoomDetails = () => {
  const { id } = useParams();
  const [room, setRoom] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Initialize AOS
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    const fetchRoomDetails = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:8000/api/rooms/${id}/`);
        if (!response.ok) {
          throw new Error("Room not found");
        }
        const data = await response.json();
        setRoom(data);

      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRoomDetails();
  }, [id]);

  if (loading) return <h2>Loading...</h2>
  if (error) return <h2>{error}</h2>;
  if (!room) return <h2>Room not found</h2>;

  const images = room.imgSrc ? [room.imgSrc, ...(room.extraImages || [])] : [];

  return (
    <div className="room-details-container" data-aos="fade-up">
      {/* Image Slider */}
      <Swiper
        modules={[Pagination, Navigation]}
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation
        className="room-swiper"
        data-aos="fade-in"
      >
        {images.map((imgSrc, index) => (
          <SwiperSlide key={index}>
            <img src={imgSrc} alt={`Room ${index}`} className="room-slide" />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Room Information */}
      <div className="room-info" data-aos="fade-up">
        <h1>{room.roomsTitle}</h1>
        <p className="room-descripFull">{room.descripFull}</p>

        <div className="room-details">
          <h2>Price</h2>
          <p>Price starts at <strong>{room.price}</strong></p>
          <h2>Check-in</h2>
          <p>Check-in from <strong>{room.checkIn}</strong> – anytime</p>
          <h2>Check-out</h2>
          <p>Check-out before <strong>{room.checkOut}</strong></p>
          <h2>Special Check-in Instructions</h2>
          <p>Guests will receive an email with check-in instructions on the day their booking is confirmed. Front desk staff will greet guests upon arrival.</p>
          <h2>Pets</h2>
          <p>{room.petsAllowed ? <><MdOutlinePets /> Pets are allowed.</> : "Pets are not allowed."}</p>
        </div>

        <div className="amenities-container" data-aos="fade-up">
          <h2>Amenities</h2>
          <ul className="amenities-list">
            {room.amenities?.map((amenity, index) => (
              <li key={index}>
                <FaCheckCircle /> {amenity}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Book Now Button */}
      <BookNowButton room={room} />
    </div>
  );
};

export default RoomDetails;