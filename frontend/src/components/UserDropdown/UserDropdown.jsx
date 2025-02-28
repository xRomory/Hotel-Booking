// import React, { useState, useEffect, useRef } from "react";
// import { Link } from 'react-router-dom';
// import "./UserDropdown.scss";
// import { RxAvatar } from "react-icons/rx";

// const UserDropdown = () => {
//   const [showDropdown, setShowDropdown] = useState(false);
//   const dropdownRef = useRef;

//   const toggleDropdown = () => setShowDropdown(!showDropdown);

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setShowDropdown(false);
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   return (
//     <div className="user-dropdown" ref={dropdownRef}>
//       <RxAvatar onClick={toggleDropdown} className="icon user-btn mx-5" />

//       {showDropdown && (
//         <div className="dropdown-menu">
//           <Link to="/Profile" className="dropdown-item">
//             Profile
//           </Link>
//           <button onClick={handleLogout} className="dropdown-item logout-btn">
//             Logout
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default UserDropdown;
