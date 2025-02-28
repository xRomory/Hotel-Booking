import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./UserDropdown.scss";
import { RxAvatar } from "react-icons/rx";

const UserDropdown = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  // Toggle dropdown visibility
  const toggleDropdown = () => setShowDropdown(!showDropdown);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem("user"); // Clear user session
    window.location.reload(); // Reload to update navbar state
  };

  return (
    <div className="user-dropdown" ref={dropdownRef}>
      <RxAvatar onClick={toggleDropdown} className="icon user-btn mx-5" />

      {showDropdown && (
        <div className="dropdown-menu">
          <Link to="/Bookings" className="dropdown-item">
            My Bookings
          </Link>
          <button onClick={handleLogout} className="dropdown-item logout-btn">
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default UserDropdown;
