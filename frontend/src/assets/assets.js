// Foods
import food from './hotel_dinner2.jpg';
import food1 from './hotel_dinner3.jpg';
import food2 from './hotel_dinner4.jpg';
import food3 from './hotel_food.jpg';
import food4 from './hotel_food1.jpg';
import food5 from './hotel_food2.jpg';
import food6 from './hotel_food3.jpg';
import food7 from './hotel_food4.jpg';
import food8 from './hotel_food5.jpg';
import food9 from './hotel_food6.jpg';
import diningRoom from './hotel_dining.jpg';

//Amenities
import beachTopView from './hotel_beach_topview.jpg';
import garden from './hotel_garden.jpg';
import hallway from './hotel_hallway.jpg';
import lobby from './hotel_lobby.jpg';
import lobby1 from './hotel_lobby2.jpg';
import pool from './hotel_pool.jpg';
import poolside from './hotel_poolside.jpg';
import poolside1 from './hotel_poolside2.jpg';
import poolside2 from './hotel_poolside3.jpg';
import poolDrone from './hotel_pool_drone.jpg';
import room from './hotel_room.jpg';
import room1 from './hotel_room2.jpg';

//Landscape
import hotelBg from './hotel-mainBg.jpg';
import hotelBg1 from './hotel_bg1.jpg'
import hotelBg2 from './hotel_bg2.jpg'
import hotelBg3 from './hotel_bg3.jpg'
import hotelBg4 from './hotel_bg4.jpg'
import hotelBg5 from './hotel_bg5.jpg'
import hotelBg6 from './hotel_bg6.jpg'
import hotelBg7 from './hotel_bg7.jpg'
import landscape from './hotel_landscape.jpg';

//Beach Amenities
import beach from './hotel_beach.jpg'
import beach1 from './hotel_beach1.jpg'
import beach2 from './hotel_beach2.jpg'
import beach3 from './hotel_beach3.jpg'
import beach4 from './hotel_beach4.jpg'

//Rooms
import deluxeKing from './deluxe_king_bed.jpg';
import deluxeKing1 from './deluxe_king_bed1.jpg';
import deluxeKing2 from './deluxe_king_bed2.jpg';
import deluxeKing3 from './deluxe_king_bed3.jpg';

import deluxeSuite from './deluxe_bed.jpg';
import deluxeSuite1 from './deluxe_bed1.jpg';
import deluxeSuite2 from './deluxe_bed2.jpg';
import deluxeSuite3 from './deluxe_bed3.jpg';

import deluxevicHar from './deluxe_victoria_harbour_bed.jpg';
import deluxeVicHar1 from './deluxe_victoria_harbour_bed1.jpg';
import deluxeVicHar3 from './deluxe_victoria_harbour_bed3.jpg';

import clubdelVic1 from './club_deluxe_victoria_bed1.jpeg';
import clubdelVic2 from './club_deluxe_victoria_bed2.jpeg';
import clubdelVic3 from './club_deluxe_victoria_bed3.jpeg';

import grandSeaview from './grand_seaview_bed.jpg';
import grandSeaview2 from './grand_seaview_bed2.jpg';
import grandSeaview3 from './grand_seaview_bed3.jpg';

import deluxevicharKing from './deluxe_victoria_harbour_king_bed.jpg';
import deluxevicharKing1 from './deluxe_victoria_harbour_king_bed1.jpg';
import deluxevicharKing2 from './deluxe_victoria_harbour_king_bed2.jpg';

import deluxeseaKing from './deluxe_seaview_king_bed.jpg';
import deluxeseaKing1 from './deluxe_seaview_king_bed1.jpg';
import deluxeseaKing2 from './deluxe_seaview_king_bed2.jpg';

import premierexeVic from './premier_executive_victoria_harbour_bed.jpg';
import premierexeVic1 from './premier-executive3.jpg';

import clubdelKing from './club_deluxe_king_bed.jpg';
import clubdelKing2 from './club_deluxe_king_bed2.jpg';

export const assets = {
  food,
  food1,
  food2,
  food3,
  food4,
  food5,
  food6,
  food7,
  food8,
  food9,
  diningRoom,
  beachTopView,
  garden,
  hallway,
  lobby,
  lobby1,
  pool,
  poolside,
  poolside1,
  poolside2,
  poolDrone,
  room,
  room1,
  hotelBg,
  landscape,
  deluxeKing,
  deluxeKing1,
  deluxeKing2,
  deluxeKing3,
  deluxeSuite,
  deluxeSuite1,
  deluxeSuite2,
  deluxeSuite3,
  deluxevicHar,
  deluxeVicHar1,
  deluxeVicHar3,
  premierexeVic,
  premierexeVic1,
  grandSeaview,
  grandSeaview2,
  grandSeaview3,
  deluxevicharKing,
  deluxevicharKing1,
  deluxevicharKing2,
  deluxeseaKing,
  deluxeseaKing1,
  deluxeseaKing2,
  clubdelKing,
  clubdelKing2,
  clubdelVic1,
  clubdelVic2,
  clubdelVic3,
  hotelBg1,
  hotelBg2,
  hotelBg3,
  hotelBg4,
  hotelBg5,
  hotelBg6,
  hotelBg7,
  landscape,
  beach,
  beach1,
  beach2,
  beach3,
  beach4,
}

export const FoodData = [
  {
    id: 1,
    image: food3,
    name: 'Egg Salad',
    description: 'Lorem Ipsum',
  },

  {
    id: 2,
    image: food4,
    name: 'Vegetable Salad',
    description: 'Lorem Ipsum',
  },

  {
    id: 3,
    image: food5,
    name: 'Pancake',
    description: 'Lorem Ipsum',
  },

  {
    id: 4,
    image: food6,
    name: 'Burrito',
    description: 'Lorem Ipsum',
  },

  {
    id: 5,
    image: food7,
    name: 'Sushi',
    description: 'Lorem Ipsum',
  },

  {
    id: 6,
    image: food8,
    name: 'Burger Combo Meal',
    description: 'Lorem Ipsum',
  },
]

export const RoomData = [
  {
    id: 1,
    imgSrc: deluxeKing,
    extraImages: [
      deluxeKing1,
      deluxeKing2,
      deluxeKing3,
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
    imgSrc: deluxeSuite,
    extraImages: [
      deluxeSuite1,
      deluxeSuite2,
      deluxeSuite3,
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
    roomTitle: 'Deluxe Suite',
    description: 'Sophistication Meets Serenity'
  },
  {
    id: 3,
    imgSrc: deluxevicHar,
    extraImages: [
      deluxeVicHar1,
      deluxeVicHar3,
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
    imgSrc: clubdelKing,
    extraImages: [
      clubdelKing2,
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
    imgSrc: clubdelVic1,
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
    imgSrc: grandSeaview,
    extraImages: [
      grandSeaview2,
      grandSeaview3,
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
    imgSrc: deluxevicharKing,
    extraImages: [
      deluxevicharKing1,
      deluxevicharKing2,
    ],
    descripFull: "Experience a stay to remember in our Deluxe Victoria Harbour King Room. This stylish room offers expansive views of the iconic Victoria Harbour, complemented by contemporary design and thoughtful amenities. Ideal for both business and leisure travelers, the room blends luxurious comfort with the energy of the city skyline.",
    price: "15000/night",
    checkIn: "2:00 pm",
    checkOut: "12:00 noon",
    specialCheckIn: "Guests will receive an email with check-in instructions on the day their booking is confirmed. Front desk staff will greet guests upon arrival.",
    petsAllowed: true,
    maxOccupancy: 6,
    amenities: ["6 Adults & 2 Kids","King-size bed with plush bedding","High-speed Wi-Fi","Smart TV with entertainment system","Complimentary toiletries and bathrobes","Nespresso machine and minibar","Spacious bathroom with a soaking tub and rain shower","Complimentary toiletries and bathrobes","In-room safe"],
    roomsTitle: 'Deluxe Victoria Harbour King Room',
    description: 'The Ultimate Victoria Harbour Experience'
  },
  {
    id: 8,
    imgSrc: deluxeseaKing,
    extraImages: [
      deluxeseaKing1,
      deluxeseaKing2,
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
    imgSrc: premierexeVic,
    extraImages: [
      premierexeVic1,
    ],
    descripFull: "The Premier Executive Victoria Harbour Suite is the pinnacle of luxury and exclusivity. With panoramic views of Victoria Harbour and an expansive layout, this suite is perfect for business leaders, VIPs, and those seeking the ultimate indulgence. Enjoy a private living space, executive amenities, and personalized service throughout your stay.",
    price: "20000/night",
    checkIn: "2:00 pm",
    checkOut: "12:00 noon",
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