import os
import django

# Set up Django
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "backend.settings")
django.setup()

from hotel_rooms.models import HotelRoom

rooms = [
    {
        "roomsTitle": "Deluxe King Room",
        "description": "Indulge in Space, Comfort, and Style",
        "descripFull": "These elegantly designed rooms offer a luxurious stay with a spacious layout, modern furnishings, and a plush king-size bed. With stylish interiors and premium amenities, the Deluxe King Room is perfect for both business and leisure travelers.",
        "price": "5000/night",
        "checkIn": "2:00 PM",
        "checkOut": "12:00 PM",
        "specialCheckIn": "Guests will receive an email with check-in instructions...",
        "petsAllowed": True,
        "maxOccupancy": 3,
        "amenities": ["2 Adults & 2 Kids","King-size bed with premium bedding","Free Wi-Fi","Smart TV with international channels","Work desk with ergonomic chair","Coffee and tea-making facilities","Spacious bathroom with walk-in shower","Complimentary toiletries","In-room safe"
        ],
        "imgSrc": "http://127.0.0.1:8000/media/room_images/deluxe_king_bed.jpg",
        "extraImages": ["/media/room_images/deluxe_king_bed1.jpg", "/media/room_images/deluxe_king_bed2.jpg","/media/room_images/deluxe_king_bed3.jpg",
        ]
    },
    {
        "roomsTitle": "Deluxe Suite",
        "description": "Sophistication Meets Serenity",
        "descripFull": "Our Deluxe Suite offers an elevated experience for guests seeking more space and comfort. Featuring a separate living area, elegant bedroom, and chic modern design, this suite is perfect for both business and leisure travelers. Floor-to-ceiling windows showcase stunning city views, while luxurious amenities promise relaxation and convenience. Whether you're unwinding after a day of exploring or preparing for an important meeting, the Deluxe Suite provides the perfect balance of elegance and practicality.",
        "price": "7000/night",
        "checkIn": "2:00 PM",
        "checkOut": "12:00 PM",
        "specialCheckIn": "Guests will receive an email with check-in instructions...",
        "petsAllowed": True,
        "maxOccupancy": 2,
        "amenities": ["3 Adults & 2 Kids", "King-size bed with plush linens", "High-speed Wi-Fi", "Smart TV with premium channels", "Work desk with ergonomic chair", "Coffee and tea-making facilities", "Spacious bathroom with walk-in shower and soaking tub", "Luxury bath amenities and bathrobes", "In-room safe and personal minibar"],
        "imgSrc": "http://127.0.0.1:8000/media/room_images/deluxe_bed.jpg",
        "extraImages": ["/media/room_images/deluxe_bed1.jpg", "/media/room_images/deluxe_bed2.jpg","/media/room_images/deluxe_bed3.jpg",
        ]
    },
    {
        "roomsTitle": "Deluxe Victoria Harbour Suite",
        "description": "Wake Up To Stunning Harbour Views",
        "descripFull": "Our Deluxe Suite offers an elevated experience for guests seeking more space and comfort. Featuring a separate living area, elegant bedroom, and chic modern design, this suite is perfect for both business and leisure travelers. Floor-to-ceiling windows showcase stunning city views, while luxurious amenities promise relaxation and convenience. Whether you're unwinding after a day of exploring or preparing for an important meeting, the Deluxe Suite provides the perfect balance of elegance and practicality.",
        "price": "7500/night",
        "checkIn": "2:00 PM",
        "checkOut": "12:00 PM",
        "specialCheckIn": "Guests will receive an email with check-in instructions on the day their booking is confirmed. Front desk staff will greet guests upon arrival.",
        "petsAllowed": True,
        "maxOccupancy": 4,
        "amenities": ["4 Adults & 2 Kids", "King-size bed with premium bedding", "Complimentary high-speed Wi-Fi", "Smart TV with international channels", "Separate living area with plush seating", "Nespresso coffee machine and premimum teas", "Spacious bathroom with walk-in shower and soaking tub", "Luxury bath amenities and bathrobes", "In-room safe and 24-hour-in-room dining service"],
        "imgSrc": "http://127.0.0.1:8000/media/room_images/deluxe_king_bed.jpg",
        "extraImages": ["/media/room_images/deluxe_victoria_harbour_bed.jpg",  "/media/room_images/deluxe_victoria_harbour_bed1.jpg", "/media/room_images/deluxe_victoria_harbour_bed3.jpg"]
    },
    {
        "roomsTitle": "Club Deluxe King Room",
        "description": "Where Luxury and Privacy",
        "descripFull": "Enjoy an exclusive and elevated stay in our Club Deluxe King Room. Located on higher floors, these rooms offer spectacular city views, elegant design, and the added privilege of Club Lounge access. Perfect for both business and leisure travelers, the room combines superior comfort with a range of personalized services to enhance your stay.",
        "price": "10000/night",
        "checkIn": "2:00 PM",
        "checkOut": "12:00 PM",
        "specialCheckIn": "Guests will receive an email with check-in instructions...",
        "petsAllowed": True,
        "maxOccupancy": 4,
        "amenities": ["4 Adults & 2 Kids", "King-size bed with luxurious linens", "High-speed Wi-Fi", "Smart TV with international channels", "Exclusive access to the Club Lounge (including complimentary breakfast and evening cocktails)", "Nespresso machine and minibar", "Spacious bathroom with a rain shower and deluxe toiletries", "Complimentary pressing service (1 garment per stay)", "In-room safe"],
        "imgSrc": "http://127.0.0.1:8000/media/room_images/club_deluxe_king_bed.jpg",
        "extraImages": ["/media/room_images/club_deluxe_king_bed2.jpg"]
    },
    {
        "roomsTitle": "Club Deluxe Victoria Room",
        "description": "A Stay Above All, With Iconic Victoria Views",
        "descripFull": "The Club Deluxe Victoria Room offers the best of both worlds—exquisite views of Victoria Harbour and exclusive access to our prestigious Club Lounge. Designed for travelers who value comfort and service, this room provides a relaxing retreat with elegant furnishings, personalized amenities, and complimentary refreshments throughout the day.",
        "price": "11000/night",
        "checkIn": "2:00 PM",
        "checkOut": "12:00 PM",
        "specialCheckIn": "Guests will receive an email with check-in instructions...",
        "petsAllowed": True,
        "maxOccupancy": 5,
        "amenities": ["5 Adults & 2 Kids","King-size bed with high-thread-count linens","High-speed Wi-Fi","Smart TV with on-demand entertainment","Complimentary Club Lounge access (with breakfast, afternoon tea, and evening cocktails)","Nespresso machine and minibar","Marble bathroom with luxury toiletries and walk-in shower","Complimentary daily newspaper and pressing service","In-room safe"],
        "imgSrc": "http://127.0.0.1:8000/media/room_images/club_deluxe_victoria_bed1.jpg",
        "extraImages": ["/media/room_images/club_deluxe_victoria_bed2.jpg","/media/room_images/club_deluxe_victoria_bed3.jpg"]
    },
    {
        "roomsTitle": "Grand Seaview Room",
        "description": "Embrace the Horizon in the Comfort of Luxury",
        "descripFull": "Relax and unwind in our Grand Seaview Room, where sweeping views of the open sea create a calming atmosphere. Designed for ultimate comfort, these spacious rooms feature contemporary décor, a luxurious king-size bed, and modern amenities for a rejuvenating stay. It’s the perfect choice for travelers seeking a tranquil escape with all the conveniences of a luxury hotel.",
        "price": "13000/night",
        "checkIn": "2:00 PM",
        "checkOut": "12:00 PM",
        "specialCheckIn": "Guests will receive an email with check-in instructions...",
        "petsAllowed": True,
        "maxOccupancy": 6,
        "amenities": ["6 Adults & 2 Kids","King-size bed with ocean-facing views","High-speed Wi-Fi","Large flat-screen smart TV with on-demand entertainment","Complimentary bottled water and coffee-making facilities","Nespresso machine and minibar","Modern bathroom with rain shower and bathtub","Complimentary daily newspaper and pressing service","In-room safe and minibar"],
        "imgSrc": "http://127.0.0.1:8000/media/room_images/grand_seaview_bed.jpg",
        "extraImages": ["/media/room_images/deluxe_seaview_king_bed1.jpg", "/media/room_images/deluxe_seaview_king_bed2.jpg"]
    },
    {
        "roomsTitle": "Deluxe Victoria King Room",
        "description": "The Ultimate Victoria Harbour Experience",
        "descripFull": "Experience a stay to remember in our Deluxe Victoria Harbour King Room. This stylish room offers expansive views of the iconic Victoria Harbour, complemented by contemporary design and thoughtful amenities. Ideal for both business and leisure travelers, the room blends luxurious comfort with the energy of the city skyline.",
        "price": "15000/night",
        "checkIn": "2:00 PM",
        "checkOut": "12:00 PM",
        "specialCheckIn": "Guests will receive an email with check-in instructions...",
        "petsAllowed": True,
        "maxOccupancy": 6,
        "amenities": [
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
        "imgSrc": "http://127.0.0.1:8000/media/room_images/deluxe_victoria_harbour_king_bed.jpg",
        "extraImages": ["/media/room_images/deluxe_victoria_harbour_king_bed1.jpg", "/media/room_images/deluxe_victoria_harbour_king_bed2.jpg"]
    },
    {
        "roomsTitle": "Deluxe Seaview King Room",
        "description": "Your Own Seaview Paradise",
        "descripFull": "Savor the beauty of the sea from the comfort of your Deluxe Seaview King Room. Featuring modern design and luxurious furnishings, this room is the perfect sanctuary for guests who love to relax while gazing at the ocean. With a king-sized bed and premium amenities, every detail is crafted to offer a refreshing escape.",
        "price": "18000/night",
        "checkIn": "2:00 PM",
        "checkOut": "12:00 PM",
        "specialCheckIn": "Guests will receive an email with check-in instructions...",
        "petsAllowed": True,
        "maxOccupancy": 8,
        "amenities": ["8 Adults & 2 Kids","King-size bed with sea-facing views","High-speed Wi-Fi","Smart TV with on-demand entertainment","24-hour in-room dining service","Nespresso machine and minibar","Luxurious bathroom with rain shower and deep soaking tub","Luxury bath amenities and plush robes","In-room safe"],
        "imgSrc": "http://127.0.0.1:8000/media/room_images/deluxe_seaview_king_bed.jpg",
        "extraImages": ["/media/room_images/deluxe_seaview_king_bed1.jpg", "/media/room_images/deluxe_seaview_king_bed2.jpg"]
    },
    {
        "roomsTitle": "The Premier Executive Harbour Suite",
        "description": "An Elevated Suite for the Discerning Traveler",
        "descripFull": "The Premier Executive Victoria Harbour Suite is the pinnacle of luxury and exclusivity. With panoramic views of Victoria Harbour and an expansive layout, this suite is perfect for business leaders, VIPs, and those seeking the ultimate indulgence. Enjoy a private living space, executive amenities, and personalized service throughout your stay.",
        "price": "20000/night",
        "checkIn": "2:00 PM",
        "checkOut": "12:00 PM",
        "specialCheckIn": "Guests will receive an email with check-in instructions...",
        "petsAllowed": True,
        "maxOccupancy": 10,
        "amenities": ["10 Adults & 2 Kids","Spacious master bedroom with a king-size bed","High-speed Wi-Fi","Smart TV with on-demand entertainment","Access to the exclusive Club Lounge (including breakfast and private check-in)","In-room Nespresso machine and complimentary minibar","Marble bathroom with a soaking tub and rain shower","Complimentary pressing and shoeshine services","Personalized concierge service"],
        "imgSrc": "http://127.0.0.1:8000/media/room_images/premier_executive_victoria_harbour_bed.jpg",
        "extraImages": ["/media/room_images/premier-executive3.jpg"]
    },
]

# Insert into the database
for room in rooms:
    HotelRoom.objects.create(**room)

print("Rooms added successfully!")