import React from "react";
import { useParams } from "react-router-dom";
import { Data } from "../../components/RoomContent/RoomContent";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./RoomDetails.scss";

const RoomDetails = () => {
  const { id } = useParams();
  const room = Data.find((r) => r.id === parseInt(id));

  if (!room) {
    return <h2>Room not found</h2>;
  }

  const images = [room.imgSrc, ...(room.extraImages || [])]; // Include main image + extraImages

  return (
    <div className="room-details-container">
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

      <div className="room-info">
        <h1>{room.roomsTitle}</h1>
        <p>{room.description}</p>
        <button className="back-button" onClick={() => window.history.back()}>
          Back to Rooms
        </button>
      </div>
    </div>
  );
};

export default RoomDetails;
