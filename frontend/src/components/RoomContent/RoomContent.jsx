import React from 'react';
import './RoomContent.scss';
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import { BsArrowRightShort } from "react-icons/bs";
import { Link, useNavigate } from 'react-router-dom';
import { assets } from '../../assets/assets';

// Boilerplates for Data
 export const Data = [
  {
    id: 1,
    imgSrc: assets.deluxeKing,
    extraImages: [
      assets.deluxeKing1,
      assets.deluxeKing2,
      assets.deluxeKing3,
    ],
    descripFull: "These elegantly designed rooms offer a luxurious stay with a spacious layout, modern furnishings, and a plush king-size bed. With stylish interiors and premium amenities, the Deluxe King Room is perfect for both business and leisure travelers.",
    price: "5000/night",
    checkIn: "2:00 pm", 
    checkOut: "12:00 noon",
    specialCheckIn: "Guests will receive an email with check-in instructions on the day their booking is confirmed. Front desk staff will greet guests upon arrival.",
    petsAllowed: true,
    maxOccupancy: 2,
    amenities: [
      "2 Adults & 2 Kids",
      "King-size bed with premium bedding",
      "Free Wi-Fi",
      "Smart TV with international channels",
      "Work desk with ergonomic chair",
      "Coffee and tea-making facilities",
      "Spacious bathroom with walk-in shower",
      "Complimentary toiletries",
      "In-room safe"
    ],
    roomsTitle: 'Deluxe King Room',
    description: 'Indulge in Space, Comfort, and Style'
  },
  {
    id: 2,
    imgSrc: assets.deluxeSuite,
    extraImages: [
      assets.deluxeSuite1,
      assets.deluxeSuite2,
      assets.deluxeSuite3,
      ],
      descripFull: "Our Deluxe Suite offers an elevated experience for guests seeking more space and comfort. Featuring a separate living area, elegant bedroom, and chic modern design, this suite is perfect for both business and leisure travelers. Floor-to-ceiling windows showcase stunning city views, while luxurious amenities promise relaxation and convenience. Whether you're unwinding after a day of exploring or preparing for an important meeting, the Deluxe Suite provides the perfect balance of elegance and practicality.",
      price: "7000/night",
      checkIn: "2:00 pm", 
      checkOut: "12:00 noon",
      specialCheckIn: "Guests will receive an email with check-in instructions on the day their booking is confirmed. Front desk staff will greet guests upon arrival.",
      petsAllowed: true,
      maxOccupancy: 3,
      amenities: [
        "3 Adults & 2 Kids",
        "King-size bed with plush linens",
        "High-speed Wi-Fi",
        "Smart TV with premium channels",
        "Work desk with ergonomic chair",
        "Coffee and tea-making facilities",
        "Spacious bathroom with walk-in shower and soaking tub",
        "Luxury bath amenities and bathrobes",
        "In-room safe and personal minibar"
      ],
    roomsTitle: 'Deluxe Suite Room',
    description: 'Sophistication Meets Serenity'
  },
  {
    id: 3,
    imgSrc: assets.deluxevicHar,
    extraImages: [
      assets.deluxeVicHar1,
      assets.deluxeVicHar3,
      ],
      descripFull: "Indulge in unparalleled luxury with our Deluxe Victoria Harbour Suite. This spacious suite offers breathtaking, panoramic views of Victoria Harbour, creating a serene retreat above the city. The beautifully furnished living and bedroom areas blend timeless elegance with modern sophistication. Designed for discerning travelers, this suite promises an unforgettable stay with exclusive amenities and personalized service.",
      price: "7500/night",
      checkIn: "2:00 pm", 
      checkOut: "12:00 noon",
      specialCheckIn: "Guests will receive an email with check-in instructions on the day their booking is confirmed. Front desk staff will greet guests upon arrival.",
      petsAllowed: true,
      maxOccupancy: 4,
      amenities: [
        "4 Adults & 2 Kids",
        "King-size bed with premium bedding",
        "Complimentary high-speed Wi-Fi",
        "Smart TV with international channels",
        "Separate living area with plush seating",
        "Nespresso coffee machine and premimum teas",
        "Spacious bathroom with walk-in shower and soaking tub",
        "Luxury bath amenities and bathrobes",
        "In-room safe and 24-hour-in-room dining service"
      ],
    roomsTitle: 'Deluxe Victoria Harbour Suite',
    description: 'Wake Up To Stunning Harbour Views'
  },
  {
    id: 4,
    imgSrc: assets.clubdelKing,
    extraImages: [
      assets.clubdelKing2,
      ],
      descripFull: "Enjoy an exclusive and elevated stay in our Club Deluxe King Room. Located on higher floors, these rooms offer spectacular city views, elegant design, and the added privilege of Club Lounge access. Perfect for both business and leisure travelers, the room combines superior comfort with a range of personalized services to enhance your stay.",
      price: "10000/night",
      checkIn: "2:00 pm", 
      checkOut: "12:00 noon",
      specialCheckIn: "Guests will receive an email with check-in instructions on the day their booking is confirmed. Front desk staff will greet guests upon arrival.",
      petsAllowed: true,
      maxOccupancy: 4,
      amenities: [
        "4 Adults & 2 Kids",
        "King-size bed with luxurious linens",
        "High-speed Wi-Fi", 
        "Smart TV with international channels",
        "Exclusive access to the Club Lounge (including complimentary breakfast and evening cocktails)",
        "Nespresso machine and minibar",
        "Spacious bathroom with a rain shower and deluxe toiletries",
        "Complimentary pressing service (1 garment per stay)",
        "In-room safe"
      ],
    roomsTitle: 'Club Deluxe King Room',
    description: 'Where Luxury and Privacy'
  },
  {
    id: 5,
    imgSrc: assets.clubdelVic1,
    extraImages: [
      assets.clubdelVic2,
      assets.clubdelVic3,
      ],
      descripFull: "The Club Deluxe Victoria Room offers the best of both worlds—exquisite views of Victoria Harbour and exclusive access to our prestigious Club Lounge. Designed for travelers who value comfort and service, this room provides a relaxing retreat with elegant furnishings, personalized amenities, and complimentary refreshments throughout the day.",
      price: "11000/night",
      checkIn: "2:00 pm", 
      checkOut: "12:00 noon",
      specialCheckIn: "Guests will receive an email with check-in instructions on the day their booking is confirmed. Front desk staff will greet guests upon arrival.",
      petsAllowed: true,
      maxOccupancy: 5,
      amenities: [
        "5 Adults & 2 Kids",
        "King-size bed with high-thread-count linens",
        "High-speed Wi-Fi", 
        "Smart TV with on-demand entertainment",
        "Complimentary Club Lounge access (with breakfast, afternoon tea, and evening cocktails)",
        "Nespresso machine and minibar",
        "Marble bathroom with luxury toiletries and walk-in shower",
        "Complimentary daily newspaper and pressing service",
        "In-room safe"
      ],
    roomsTitle: 'Club Deluxe Victoria Room',
    description: 'A Stay Above All, With Iconic Victoria Views'
  },
  {
    id: 6,
    imgSrc: assets.grandSeaview,
    extraImages: [
      assets.grandSeaview2,
      assets.grandSeaview3,
      ],
      descripFull: "Relax and unwind in our Grand Seaview Room, where sweeping views of the open sea create a calming atmosphere. Designed for ultimate comfort, these spacious rooms feature contemporary décor, a luxurious king-size bed, and modern amenities for a rejuvenating stay. It’s the perfect choice for travelers seeking a tranquil escape with all the conveniences of a luxury hotel.",
      price: "13000/night",
      checkIn: "2:00 pm", 
      checkOut: "12:00 noon",
      specialCheckIn: "Guests will receive an email with check-in instructions on the day their booking is confirmed. Front desk staff will greet guests upon arrival.",
      petsAllowed: true,
      maxOccupancy: 6,
      amenities: [
        "6 Adults & 2 Kids",
        "King-size bed with ocean-facing views",
        "High-speed Wi-Fi", 
        "Large flat-screen smart TV with on-demand entertainment",
        "Complimentary bottled water and coffee-making facilities",
        "Nespresso machine and minibar",
        "Modern bathroom with rain shower and bathtub",
        "Complimentary daily newspaper and pressing service",
        "In-room safe and minibar"
      ],
    roomsTitle: 'Grand Seaview Room',
    description: 'Embrace the Horizon in the Comfort of Luxury'
  },
  {
    id: 7,
    imgSrc: assets.deluxevicharKing,
    extraImages: [
      assets.deluxevicharKing1,
      assets.deluxevicharKing2,
    ],
      descripFull: "Experience a stay to remember in our Deluxe Victoria Harbour King Room. This stylish room offers expansive views of the iconic Victoria Harbour, complemented by contemporary design and thoughtful amenities. Ideal for both business and leisure travelers, the room blends luxurious comfort with the energy of the city skyline.",
      price: "15000/night",
      checkIn: "2:00 pm", 
      checkOut: "12:00 noon",
      specialCheckIn: "Guests will receive an email with check-in instructions on the day their booking is confirmed. Front desk staff will greet guests upon arrival.",
      petsAllowed: true,
      maxOccupancy: 6,
      amenities: [
        "6 Adults & 2 Kids",
        "King-size bed with plush bedding",
        "High-speed Wi-Fi", 
        "Smart TV with entertainment system",
        "Complimentary toiletries and bathrobes",
        "Nespresso machine and minibar",
        "Spacious bathroom with a soaking tub and rain shower",
        "Complimentary toiletries and bathrobes",
        "In-room safe"
      ],
    roomsTitle: 'Deluxe Victoria Harbour King Room',
    description: 'The Ultimate Victoria Harbour Experience'
  },
  {
    id: 8,
    imgSrc: assets.deluxeseaKing,
    extraImages: [
      assets.deluxeseaKing1,
      assets.deluxeseaKing2,
      ],
      descripFull: "Savor the beauty of the sea from the comfort of your Deluxe Seaview King Room. Featuring modern design and luxurious furnishings, this room is the perfect sanctuary for guests who love to relax while gazing at the ocean. With a king-sized bed and premium amenities, every detail is crafted to offer a refreshing escape.",
      price: "18000/night",
      checkIn: "2:00 pm", 
      checkOut: "12:00 noon",
      specialCheckIn: "Guests will receive an email with check-in instructions on the day their booking is confirmed. Front desk staff will greet guests upon arrival.",
      petsAllowed: true,
      maxOccupancy: 8,
      amenities: [
        "8 Adults & 2 Kids",
        "King-size bed with sea-facing views",
        "High-speed Wi-Fi", 
        "Smart TV with on-demand entertainment",
        "24-hour in-room dining service",
        "Nespresso machine and minibar",
        "Luxurious bathroom with rain shower and deep soaking tub",
        "Luxury bath amenities and plush robes",
        "In-room safe"
      ],
    roomsTitle: 'Deluxe Seaview King Room',
    description: 'Your Own Seaview Paradise'
  },
  {
    id: 9,
    imgSrc: assets.premierexeVic,
    extraImages: [
      assets.premierexeVic1,
      ],
      descripFull: "The Premier Executive Victoria Harbour Suite is the pinnacle of luxury and exclusivity. With panoramic views of Victoria Harbour and an expansive layout, this suite is perfect for business leaders, VIPs, and those seeking the ultimate indulgence. Enjoy a private living space, executive amenities, and personalized service throughout your stay.",
      price: "20000/night",
      checkIn: "Check-in from 2:00 pm", 
      checkOut: "Check-out before 12:00 noon",
      specialCheckIn: "Guests will receive an email with check-in instructions on the day their booking is confirmed. Front desk staff will greet guests upon arrival.",
      petsAllowed: true,
      maxOccupancy: 10,
      amenities: [
        "10 Adults & 2 Kids",
        "Spacious master bedroom with a king-size bed",
        "High-speed Wi-Fi", 
        "Smart TV with on-demand entertainment",
        "Access to the exclusive Club Lounge (including breakfast and private check-in)",
        "In-room Nespresso machine and complimentary minibar",
        "Marble bathroom with a soaking tub and rain shower",
        "Complimentary pressing and shoeshine services",
        "Personalized concierge service"
      ],
    roomsTitle: 'Premier Executive Harbour Suite',
    description: 'An Elevated Suite for the Discerning Traveler'
  },
];

const RoomContent = () => {
  const navigate = useNavigate()
  const handleViewDetails =(id) => {
    navigate(`/rooms/${id}`);
  }

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
