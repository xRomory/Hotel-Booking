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
  const [amountPaid, setAmountPaid] = useState(Number(room?.price) || 0);

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

  const handleConfirmBooking = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token") || "";

    if (!token.trim()) {
      alert("You must be logged in to book a room.");
      return;
    }

    const bookingData = {
      room: room?.id,
      first_name: formData.firstName,
      last_name: formData.lastName,
      email: formData.email,
      contact_number: formData.contact,
      booking_date: selectedDates[1]
        ? selectedDates[1].toISOString().split("T")[0]
        : null,
      check_in: selectedDates[0]
        ? selectedDates[0].toISOString().split("T")[0] + "T14:00:00" // Set fixed check-in time
        : null,
      check_out: selectedDates[1]
        ? selectedDates[1].toISOString().split("T")[0] + "T12:00:00" // Set fixed check-out time
        : null,
      status: "reserved",
    };

    if (selectedDates[1] <= selectedDates[0]) {
      alert("Check-out date must be after check-in date.");
      return;
    }

    if (!room?.id) {
      alert("Invalid room selection.");
      return;
    }

    if (!selectedDates[0] || !selectedDates[1]) {
      alert("Please select check-in and check-out dates.");
      return;
    }

    // Verify booking details before sending the request
    if (!room?.id || !selectedDates[0] || !selectedDates[1]) {
      alert("Please ensure all booking details are filled.");
      return;
    }

    try {
      const bookingResponse = await fetch(
        "http://127.0.0.1:8000/api/bookings/room-bookings/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-CSRFToken":
              document.cookie.match(/csrftoken=([^ ;]+)/)?.[1] || "",
            Authorization: `Token ${token}`, // Include the token here
          },
          body: JSON.stringify(bookingData),
        }
      );
      if (!bookingResponse.ok) throw new Error("Booking Failed!");

      let bookingResult;
      try {
        bookingResult = await bookingResponse.json();
      } catch (error) {
        console.error("Error parsing JSON response:", error);
        alert("Booking request failed. Please try again.");
        return;
      }

      const bookingId = bookingResult.id;

      console.log("Booking successful:", bookingResult);

      const transactionData = {
        booking: bookingId,
        cardholder_first_name: formData.cardFirstName,
        cardholder_last_name: formData.cardLastName,
        amount_paid: parseFloat(amountPaid),
        total_payment: parseFloat(room?.price),
        card_number: formData.cardNumber,
      };

      console.log(
        "Transaction Payload:",
        JSON.stringify(transactionData, null, 2)
      );

      const transactionResponse = await fetch(
        "http://127.0.0.1:8000/api/bookings/transactions/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
          },
          body: JSON.stringify(transactionData),
        }
      );

      if (!transactionResponse.ok) throw new Error("Transaction Failed!");

      const transactionResult = await transactionResponse.json();
      console.log("Transaction successful:", transactionResult);

      setBookingDetails({
        ...bookingData,
        roomName: room?.roomsTitle,
        totalPayment: room?.price,
        customerName: `${formData.firstName} ${formData.lastName}`,
      });

      room.status = "reserved";

      setShowModal(false);
      setShowConfirmation(true);
    } catch (error) {
      console.error("Error:", error);
      alert("Booking Failed! Please try again.");
    }

    console.log("Token:", token);
  };

  const formatDate = (dateString) => {
    if (!dateString) return "Not selected";
    const date = new Date(dateString);
    return date.toLocaleString(); // Format to locale date and time string
  };

  return (
    <>
      <button
        className="book-now-button"
        data-aos="zoom-in"
        onClick={() => setShowModal(true)}
      >
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
                <p>
                  <strong>Room:</strong> {room?.roomsTitle}
                </p>
                <p>
                  <strong>Price:</strong> {room?.price} per night
                </p>

                <label>
                  Check-in / Check-out:
                  <HotelDatePicker onDateSelect={setSelectedDates} />
                </label>

                <button className="next-button" onClick={() => setStep(2)}>
                  Next
                </button>
              </div>
            )}

            <form className="form-style" onSubmit={handleConfirmBooking}>
              {step === 2 && (
                <>
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
                  <div className="cancellation-policy">
                    <h4>Cancellation Policy</h4>
                    <p>
                      You may cancel up to 24 hours before check-in for a full
                      refund.
                    </p>
                  </div>

                  <button
                    type="submit"
                    className="back-button mx-2"
                    onClick={() => setStep(1)}
                  >
                    Back
                  </button>

                  <button className="confirm-button" onClick={() => setStep(3)}>
                    Next
                  </button>
                </>
              )}

              {step === 3 && (
                <>
                  {/* Card Payment Section */}
                  <h3>Step 3: Payment Details</h3>

                  <label>
                    Cardholder First Name:
                    <input
                      type="text"
                      name="cardFirstName"
                      value={formData.cardFirstName}
                      onChange={handleChange}
                      required
                    />
                  </label>

                  <label>
                    Cardholder Last Name:
                    <input
                      type="text"
                      name="cardLastName"
                      value={formData.cardLastName}
                      onChange={handleChange}
                      required
                    />
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
                  </label>

                  <label>
                    Amount to Pay:
                    <input
                      type="number"
                      name="amountPaid"
                      value={amountPaid}
                      onChange={(e) => setAmountPaid(e.target.value)}
                      min="100"
                      max={room?.price}
                      required
                    />
                  </label>

                  <div className="cancellation-policy">
                    <h4>Cancellation Policy</h4>
                    <p>
                      You may cancel up to 24 hours before check-in for a full
                      refund.
                    </p>
                  </div>

                  <button
                    className="back-button mx-2"
                    onClick={() => setStep(2)}
                  >
                    Back
                  </button>

                  <button type="submit" className="confirm-button">
                    Confirm
                  </button>
                </>
              )}
            </form>

            <button
              className="close-button"
              onClick={() => setShowModal(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Confirmation Popup */}
      {showConfirmation && (
        <div className="confirmation-popup my-5" data-aos="zoom-in">
          <div className="confirmation-content">
            <h2>Booking Confirmed! 🎉</h2>
            <p>
              <strong>Room:</strong> {bookingDetails.roomName}
            </p>
            <p>
              <strong>Check-in:</strong> {formatDate(bookingDetails.check_in)}
            </p>
            <p>
              <strong>Check-out:</strong> {formatDate(bookingDetails.check_out)}
            </p>
            <p>
              <strong>Total Payment:</strong> {bookingDetails.totalPayment}
            </p>
            <p>
              <strong>Booked by:</strong> {bookingDetails.customerName}
            </p>
            <button
              className="close-confirmation"
              onClick={() => setShowConfirmation(false)}
            >
              OK
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default BookNowButton;
