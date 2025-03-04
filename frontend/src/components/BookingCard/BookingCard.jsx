import React, { useEffect, useState } from "react";
import "./BookingCard.scss";
import { assets } from "../../assets/assets";
import CancellationBooking from "../CustomerModal/CancellationBooking";

const BookingCard = () => {
  const [showModal, setShowModal] = useState(false);
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedBookingId, setSelectedBookingId] = useState(null);

  useEffect(() => {
    const fetchBookings = async () => {
      setLoading(true);
      setError(null);

      // Retrieve token from local storage (or state management if using Redux)
      const token = localStorage.getItem("authToken");
      console.log("Retrieved token from localStorage:", token);

      if (!token) {
        setError("You need to be logged in to view your bookings.");
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(
          "http://127.0.0.1:8000/api/bookings/room-bookings/",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              //   "X-CSRFToken": csrfToken,
              Authorization: `Token ${token}`,
            },
          }
        );

        if (!response.ok) {
          if (response.status === 401) {
            setError("Unauthorized. Please log in again.");
          } else if (response.status === 404) {
            setBookings([]);
          } else {
            throw new Error(`Server error: ${response.status}`);
          }
        } else {
          const data = await response.json();
          setBookings(data);
        }
      } catch (err) {
        console.error("Fetching error:", err);
        setError("Unable to load bookings. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, []);

  const handleCancelClick = (bookingId) => {
    setSelectedBookingId(bookingId);
    setShowModal(true);
  };

  const handleConfirmCancellation = async () => {
    if (!selectedBookingId) return;

    const token = localStorage.getItem("authToken");

    try {
      const response = await fetch(
        `http://127.0.0.1:8000/api/bookings/room-bookings/${selectedBookingId}/`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
          },
        }
      );

      console.log("Deleting booking with ID:", selectedBookingId);

      if (response.ok) {
        setBookings(
          bookings.filter((booking) => booking.id !== selectedBookingId)
        );
        setShowModal(false);
        setSelectedBookingId(null);
      } else {
        throw new Error("Failed to cancel booking.");
      }

      console.log("Deleting booking with ID:", selectedBookingId);
    } catch (error) {
      console.error("Cancellation error:", error);
      alert("Failed to cancel booking. Please try again.");
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedBookingId(null);
  };

  if (loading) return <p>Loading your bookings...</p>;
  if (error) return <p className="error">{error}</p>;

  const formatDate = (dateString) => {
    if (!dateString) return "Not selected";
    const date = new Date(dateString);
    return date.toLocaleString();
  };

  return (
    <div
      className="user-container"
      style={{
        background: `linear-gradient(rgba(33, 33, 33, 0.6), rgba(33, 33, 33, 0.6)), url(${assets.hotelBg1}) no-repeat center`,
        backgroundSize: "cover",
        transition: "background-image 1s ease-in-out",
      }}
    >
      <h2 className="header-title">Your Bookings</h2>
      {bookings.length > 0 ? (
        <div className="booking-list grid">
          {bookings.map((booking) => (
            <div key={booking.id} className="booking-card">
              <h3>Room ID: {booking.room}</h3>
              <p>Check-in: {formatDate(booking.check_in)}</p>
              <p>Check-out: {formatDate(booking.check_out)}</p>
              <p>Account of: {booking.customer} </p>
              <p>
                Booked by: {booking.first_name} {booking.last_name}{" "}
              </p>
              <p>Status: {booking.status}</p>
              <button
                className="btn"
                onClick={() => handleCancelClick(booking.id)}
              >
                Cancel Booking
              </button>
              <button className="btn">View Details</button>
            </div>
          ))}
        </div>
      ) : (
        <p>No bookings found.</p>
      )}

      {showModal && (
        <CancellationBooking
          onConfirm={handleConfirmCancellation}
          onCancel={handleCloseModal}
        />
      )}
    </div>
  );
};

export default BookingCard;
