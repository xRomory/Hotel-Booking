import React, { useState, useEffect, useRef, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./UserDropdown.scss";
import { RxAvatar } from "react-icons/rx";
import { AuthContext } from "../../context/AuthContext";
// import LoginForm from "../LoginForm/LoginForm";

const UserDropdown = () => {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const [username, setUsername] = useState("");

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      try {
        const parsedUser = JSON.parse(userData); // Parse JSON string
        setUsername(parsedUser.username); // Extract username
      } catch (error) {
        console.error("Error parsing user data:", error);
      }
    }
  }, []);

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
    logout();
    navigate("/");
    // window.location.reload(); // Reload to update navbar state
  };

  return (
    <div className="user-dropdown" ref={dropdownRef}>
      <RxAvatar onClick={toggleDropdown} className="icon user-btn mx-5" />

      {showDropdown && (
        <div className="dropdown-menu">
          {username && (
            <p className="username">
              Welcome, <strong>{username}</strong>!
            </p>
          )}
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
