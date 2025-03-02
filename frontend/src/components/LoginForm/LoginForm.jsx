import React, { useState, useEffect, useContext } from "react";
import "./LoginForm.scss";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { FaHotel } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { assets } from "../../assets/assets";

const bgImages = [
  assets.hotelBg1,
  assets.hotelBg2,
  assets.hotelBg3,
  assets.hotelBg4,
  assets.hotelBg5,
  assets.hotelBg6,
  assets.hotelBg7,
];

const LoginForm = () => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    // setCredentials({ ...credentials, [e.target.name]: e.target.value });
    setCredentials((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    console.log("Updated credentials:", credentials);
  };

  useEffect(() => {
    const fetchCsrfToken = async () => {
      const csrfResponse = await fetch(
        "http://127.0.0.1:8000/api/users/csrf/",
        { credentials: "include" }
      );
      const csrfData = await csrfResponse.json();
      localStorage.setItem("csrfToken", csrfData.csrfToken);
    };
    fetchCsrfToken();
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();

    setTimeout(() => {
      console.log("Final credentials before sending:", credentials);
    }, 100);

    const payload = {
      username: credentials.username.trim(),
      password: credentials.password,
    };

    try {
      // Fetch CSRF token first
      const csrfResponse = await fetch(
        "http://127.0.0.1:8000/api/users/csrf/",
        {
          credentials: "include",
        }
      );
      const csrfData = await csrfResponse.json();
      const csrftoken = csrfData.csrfToken;
      const authToken = localStorage.getItem("authToken");

      const response = await fetch("http://127.0.0.1:8000/api/users/login/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-CSRFToken": csrftoken,
          // Authorization: `Token ${authToken || ""}`,
        },
        credentials: "include",
        body: JSON.stringify(payload),
      });

      console.log("CSRF Token:", csrfData);
      console.log("Sending credentials:", credentials);
      console.log("Token:", authToken);

      if (!response.ok) {
        alert("Invalid Credentials");
        throw new Error("Invalid credentials");
      }

      const data = await response.json();

      // **Ensure token is stored in localStorage**
      if (data.token) {
        localStorage.setItem("authToken", data.token);
        console.log("Token stored:", localStorage.getItem("authToken")); // Debugging
      } else {
        console.error("No token received from backend");
      }

      login(data); // Update AuthContext
      navigate("/"); // Redirect to home
    } catch (error) {
      console.error("Login failed:", error.message);
    }
  };

  const [currentBg, setCurrentBg] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prevBg) => (prevBg + 1) % bgImages.length);
    }, 5000); // Change background every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="login-container"
      style={{
        background: `linear-gradient(rgba(33, 33, 33, 0.6), rgba(33, 33, 33, 0.6)), url(${assets.hotelBg1}) no-repeat center`,
        backgroundSize: "cover",
        transition: "background-image 1s ease-in-out",
      }}
    >
      <div className="wrapper flex">
        <div className="logo-div">
          <Link to="/" className="logo">
            <h1 className="flex">
              <FaHotel className="icon" />
              <span className="brand-name">PSEUBOMOTEL</span>
            </h1>
          </Link>
        </div>

        <form onSubmit={handleLogin}>
          <h1>Login</h1>
          <div className="input-box">
            <input
              type="text"
              name="username"
              placeholder="Username"
              onChange={handleInputChange}
              required
            />
            <FaUser className="icon" />
          </div>

          <div className="input-box">
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleInputChange}
              required
            />
            <FaLock className="icon" />
          </div>

          <div className="remember-forgot">
            <label>
              <input type="checkbox" /> Remember Me
              <a href="#">Forgot Password?</a>
            </label>
          </div>

          <button type="submit">Login</button>

          <div className="register-link">
            <p>Don't have an account? </p>
            <Link to="/Registration">Register</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
