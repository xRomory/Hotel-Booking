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
  const [referenceNumber, setReferenceNumber] = useState("");

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    cardNumber: "",
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

  const generateReferenceNumber = () => {
    return `HTL-${Math.floor(100000 + Math.random() * 900000)}`;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleConfirmBooking = (e) => {
    e.preventDefault();
    const refNum = generateReferenceNumber();
    setBookingDetails({
      referenceNumber: refNum,
      roomName: room?.roomsTitle || "Not specified",
      checkIn: selectedDates[0]?.toDateString() || "Not selected",
      checkOut: selectedDates[1]?.toDateString() || "Not selected",
      totalPayment: totalPayment > 0 ? `${totalPayment} PHP` : "N/A",
      customerName: `${formData.firstName} ${formData.lastName}`,
    });
    setReferenceNumber(refNum);
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
                </label>
                <button className="next-button" onClick={() => setStep(3)}>
                  Next
                </button>
              </div>
            )}

            {step === 3 && (
              <form className="step-3" onSubmit={handleConfirmBooking}>
                <h3>Step 3: Payment Details</h3>
                <label>
                  Card Number:
                  <input
                    type="text"
                    name="cardNumber"
                    value={formData.cardNumber}
                    onChange={handleChange}
                    required
                  />
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
                <strong>Reference Number:</strong> {referenceNumber}
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
            <button
              className="close-receipt"
              onClick={() => setShowConfirmation(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default BookNowButton;
