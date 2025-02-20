import React, { useState } from "react";
import "./BookNowButton.scss"; 
import HotelDatePicker from "../../components/HotelDatePicker/HotelDatePicker"; 
import AOS from "aos";
import "aos/dist/aos.css";

const BookNowButton = ({ room }) => {
  const [showModal, setShowModal] = useState(false);
  const [step, setStep] = useState(1);
  const [selectedDates, setSelectedDates] = useState([null, null]);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [bookingDetails, setBookingDetails] = useState({});
  
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    cardFirstName: "",
    cardLastName: "",
    cardNumber: "",
  });

  React.useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleConfirmBooking = (e) => {
    e.preventDefault();

    // Save booking details
    setBookingDetails({
      roomName: room?.roomsTitle,
      checkIn: selectedDates[0]?.toDateString() || "Not selected",
      checkOut: selectedDates[1]?.toDateString() || "Not selected",
      totalPayment: room?.price || "N/A",
      customerName: `${formData.firstName} ${formData.lastName}`,
    });

    setShowModal(false);
    setShowConfirmation(true); // Show confirmation popup
  };

  return (
    <>
      <button className="book-now-button" data-aos="zoom-in" onClick={() => setShowModal(true)}>
        Book Now
      </button>

      {/* Booking Modal */}
      {showModal && (
        <div className="modal-container">
          <div className="modal-content" data-aos="fade-up">
            <h2>Book a Room</h2>

            {step === 1 && (
              <div className="step-1">
                <h3>Step 1: Check Room Details</h3>
                <p><strong>Room:</strong> {room?.roomsTitle}</p>
                <p><strong>Price:</strong> {room?.price} per night</p>

                <label>
                  Check-in / Check-out:
                  <HotelDatePicker onDateSelect={setSelectedDates} />
                </label>

                <button className="next-button" onClick={() => setStep(2)}>
                  Next
                </button>
              </div>
            )}

            {step === 2 && (
              <form className="step-2" onSubmit={handleConfirmBooking}>
                <h3>Step 2: Your Details</h3>

                <label>First Name:
                  <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
                </label>

                <label>Last Name:
                  <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
                </label>

                <label>Email:
                  <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                </label>

                <label>Contact Number:
                  <input type="text" name="contact" value={formData.contact} onChange={handleChange} required />
                </label>

                {/* Card Payment Section */}
                <h3>Payment Details</h3>

                <label>Cardholder First Name:
                  <input type="text" name="cardFirstName" value={formData.cardFirstName} onChange={handleChange} required />
                </label>

                <label>Cardholder Last Name:
                  <input type="text" name="cardLastName" value={formData.cardLastName} onChange={handleChange} required />
                </label>

                <label>Card Number:
                  <input type="text" name="cardNumber" value={formData.cardNumber} onChange={handleChange} required />
                </label>

                <div className="cancellation-policy">
                  <h4>Cancellation Policy</h4>
                  <p>You may cancel up to 24 hours before check-in for a full refund.</p>
                </div>

                <button type="submit" className="confirm-button">Confirm Booking</button>
              </form>
            )}

            <button className="close-button" onClick={() => setShowModal(false)}>Close</button>
          </div>
        </div>
      )}

      {/* Confirmation Popup */}
      {showConfirmation && (
        <div className="confirmation-popup" data-aos="zoom-in">
          <div className="confirmation-content">
            <h2>Booking Confirmed! 🎉</h2>
            <p><strong>Room:</strong> {bookingDetails.roomName}</p>
            <p><strong>Check-in:</strong> {bookingDetails.checkIn}</p>
            <p><strong>Check-out:</strong> {bookingDetails.checkOut}</p>
            <p><strong>Total Payment:</strong> {bookingDetails.totalPayment}</p>
            <p><strong>Booked by:</strong> {bookingDetails.customerName}</p>
            <button className="close-confirmation" onClick={() => setShowConfirmation(false)}>OK</button>
          </div>
        </div>
      )}
    </>
  );
};

export default BookNowButton;
