import React, { useState, useEffect } from "react";
import "./BookNowButton.scss";
import HotelDatePicker from "../../components/HotelDatePicker/HotelDatePicker";
import AOS from "aos";
import "aos/dist/aos.css";

const BookNowButton = ({ room }) => {
  const [showModal, setShowModal] = useState(false);
  const [step, setStep] = useState(1);
  const [selectedDates, setSelectedDates] = useState([null, null]);
  const [totalPayment, setTotalPayment] = useState(0);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [bookingDetails, setBookingDetails] = useState({});
  const [errors, setErrors] = useState({});

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    cardNumber: "",
    cardholder_first_name: "",
    cardholder_last_name: ""
  });

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  
  useEffect(() => {
    if (selectedDates[0] && selectedDates[1] && room?.price) {
      const priceString = room.price.split("/")[0];
      const numericPrice = parseFloat(priceString);
      const checkInDate = new Date(selectedDates[0]);
      const checkOutDate = new Date(selectedDates[1]);
      const nights = Math.max(1, Math.ceil((checkOutDate - checkInDate) / (1000 * 60 * 60 * 24)));
      setTotalPayment(nights * numericPrice);
    }
  }, [selectedDates, room]);


 
  const validateStep2 = () => {
    let errs = {};
    if (!formData.firstName.trim()) {
      errs.firstName = "First name is required.";
    } else if (/\d/.test(formData.firstName)) {
      errs.firstName = "First name should not contain numbers.";
    }
    if (!formData.lastName.trim()) {
      errs.lastName = "Last name is required.";
    } else if (/\d/.test(formData.lastName)) {
      errs.lastName = "Last name should not contain numbers.";
    }
    if (!formData.email.trim()) {
      errs.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = "Email is invalid.";
    }
    if (!formData.contact.trim()) {
      errs.contact = "Contact number is required.";
    } else if (!/^\d+$/.test(formData.contact)) {
      errs.contact = "Contact must contain only digits.";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const validateStep3 = () => {
    let errs = {};
  
    // Validate Cardholder First Name
    if (!formData.cardholder_first_name.trim()) {
      errs.cardholder_first_name = "Cardholder first name is required.";
    } else if (!/^[A-Za-z\s]+$/.test(formData.cardholder_first_name)) {
      errs.cardholder_first_name = "First name should contain only letters.";
    }
  
    // Validate Cardholder Last Name
    if (!formData.cardholder_last_name.trim()) {
      errs.cardholder_last_name = "Cardholder last name is required.";
    } else if (!/^[A-Za-z\s]+$/.test(formData.cardholder_last_name)) {
      errs.cardholder_last_name = "Last name should contain only letters.";
    }
  
    // Validate Card Number
    if (!formData.cardNumber.trim()) {
      errs.cardNumber = "Card number is required.";
    } else if (!/^\d{12,16}$/.test(formData.cardNumber.trim())) {
      errs.cardNumber = "Card number must be 12 to 16 digits.";
    }
  
    setErrors(errs);
    console.log("Validation Errors:", errs);
    
    return Object.keys(errs).length === 0;
  };
  

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  

  const handleNextStep2 = () => {
    if (validateStep2()) {
      setErrors({});
      setStep(3);
    }
  };

  const handleConfirmBooking = (e) => {
    e.preventDefault();
    if (!validateStep3()) return;
    const bookingDate = new Date().toDateString();

    setBookingDetails({
      bookingDate: bookingDate,
      roomName: room?.roomsTitle || "Not specified",
      checkIn: selectedDates[0]?.toDateString() || "Not selected",
      checkOut: selectedDates[1]?.toDateString() || "Not selected",
      totalPayment: totalPayment > 0 ? `${totalPayment} PHP` : "N/A",
      customerName: `${formData.firstName} ${formData.lastName}`,
      cardholderName: `${formData.cardholder_first_name} ${formData.cardholder_last_name}`,
    });
    setShowModal(false);
    setShowConfirmation(true);
  };

  return (
    <>
      <button
        className="book-now-button"
        data-aos="zoom-in"
        onClick={() => {
          setShowModal(true);
          setStep(1);
          setErrors({});
        }}
      >
        Book Now
      </button>

      {showModal && (
        <div className="modal-container">
          <div className="modal-content" data-aos="fade-up">
            <h2>Book a Room</h2>

            {step === 1 && (
              <div className="step-1">
                <h3>Step 1: Check Room Details</h3>
                <p>
                  <strong>Room:</strong> {room?.roomsTitle}
                </p>
                <p>
                  <strong>Price per night:</strong> {room?.price}
                </p>
                <label>
                  Check-in / Check-out:
                  <HotelDatePicker onDateSelect={setSelectedDates} />
                </label>
                <p>
                  <strong>Total Payment:</strong>{" "}
                  {totalPayment ? `${totalPayment} PHP` : "0 PHP"}
                </p>
                <button className="next-button" onClick={() => setStep(2)}>
                  Next
                </button>
              </div>
            )}

            {step === 2 && (
              <div className="step-2">
                <h3>Step 2: Your Details</h3>
                <label>
                  First Name:
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                  {errors.firstName && <span className="error">{errors.firstName}</span>}
                </label>
                <label>
                  Last Name:
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                  {errors.lastName && <span className="error">{errors.lastName}</span>}
                </label>
                <label>
                  Email:
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  {errors.email && <span className="error">{errors.email}</span>}
                </label>
                <label>
                  Contact Number:
                  <input
                    type="text"
                    name="contact"
                    value={formData.contact}
                    onChange={handleChange}
                    required
                  />
                  {errors.contact && <span className="error">{errors.contact}</span>}
                </label>
                <button className="next-button" onClick={handleNextStep2}>
                  Next
                </button>
              </div>
            )}

            {step === 3 && (
              <form className="step-3" onSubmit={handleConfirmBooking}>
                <h3>Step 3: Payment Details</h3>
                <label>
                  Cardholder First Name:
                  <input
                    type="text"
                    name="cardholder_first_name"
                    value={formData.cardholder_first_name}
                    onChange={handleChange}
                    required
                  />
                  {errors.cardholder_first_name && <span className="error">{errors.cardholder_first_name}</span>}
                </label>
                <label>
                  Cardholder Last Name:
                  <input
                    type="text"
                    name="cardholder_last_name"
                    value={formData.cardholder_last_name}
                    onChange={handleChange}
                    required
                  />
                  {errors.cardholder_last_name && <span className="error">{errors.cardholder_last_name}</span>}
                </label>
                <label>
                  Card Number:
                  <input
                    type="text"
                    name="cardNumber"
                    value={formData.cardNumber}
                    onChange={handleChange}
                    required
                  />
                  {errors.cardNumber && <span className="error">{errors.cardNumber}</span>}
                </label>
                <button type="submit" className="confirm-button">
                  Confirm Booking
                </button>
              </form>
            )}
            <button className="close-button" onClick={() => setShowModal(false)}>
              Close
            </button>
          </div>
        </div>
      )}

      {showConfirmation && (
        <div className="receipt-popup" data-aos="zoom-in">
          <div className="receipt-content">
            <h2>Hotel Booking Receipt</h2>
            <div className="receipt-details">
              <p>
                <strong>Booking Date:</strong> {bookingDetails.bookingDate}
              </p>
              <p>
                <strong>Room:</strong> {bookingDetails.roomName}
              </p>
              <p>
                <strong>Check-in:</strong> {bookingDetails.checkIn}
              </p>
              <p>
                <strong>Check-out:</strong> {bookingDetails.checkOut}
              </p>
              <p>
                <strong>Total Payment:</strong> {bookingDetails.totalPayment}
              </p>
              <p>
                <strong>Booked by:</strong> {bookingDetails.customerName}
              </p>
            </div>
            <button className="close-receipt" onClick={() => setShowConfirmation(false)}>
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default BookNowButton;
