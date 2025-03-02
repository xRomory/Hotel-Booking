import React, { useEffect, useState } from "react";
import "./BookingCard.scss";

const BookingCard = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const baseURL = "http://127.0.0.1:8000";

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

  if (loading) return <p>Loading your bookings...</p>;
  if (error) return <p className="error">{error}</p>;

  return (
    <div className="user-bookings">
      <h2>Your Bookings</h2>
      {bookings.length > 0 ? (
        <div className="booking-list">
          {bookings.map((booking) => (
            <div key={booking.id} className="booking-card">
              <h3>Room: {booking.room}</h3>
              <p>Check-in: {booking.check_in}</p>
              <p>Check-out: {booking.check_out}</p>
              <p>Status: {booking.status}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>No bookings found.</p>
      )}
    </div>
  );
};

export default BookingCard;
