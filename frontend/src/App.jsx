import { useContext } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar/Navbar';
import { AuthContext } from "./context/AuthContext";
import LoginNavbar from './components/LoginNavbar/LoginNavbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import FoodPage from './pages/Foods/Foods';
import RoomPage from './pages/Rooms/Rooms';
import RoomDetailsPage from './pages/RoomDetails/RoomDetails';
import HotelLoginPage from './pages/Login/HotelLoginPage';
import HotelRegistration from './pages/Registration/HotelRegistration';
import Bookings from './pages/BookingPage/Bookings';

function App() {
  return(
        <MainLayout />
  );
}

const MainLayout = () => {
  const location = useLocation();
  const { user } = useContext(AuthContext); // Get auth state
  const hideNavbarFooter = location.pathname === "/Login" || location.pathname === "/Registration";

  return (
    <div className='App'>

      {!hideNavbarFooter && (user ? <LoginNavbar /> : <Navbar />)}
      <Routes>
        <Route path="/" element={<Home/>}/>
        {/* <Route path='/Rooms' element={} */}
        <Route path="/Rooms" element={<RoomPage/>}/>
        <Route path="/Foods" element={<FoodPage/>} />
        <Route path="/Login" element={<HotelLoginPage/>} />
        <Route path="/Registration" element={<HotelRegistration/>} />
        <Route path ="/Rooms/:id" element ={<RoomDetailsPage />} />
        <Route path='/Bookings' element={<Bookings/>} />
      </Routes>
      {!hideNavbarFooter && <Footer />}
    </div>
  );
};

export default App
