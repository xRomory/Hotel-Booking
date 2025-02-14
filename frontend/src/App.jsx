// import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import FoodPage from './pages/Foods/Foods';
import HotelLoginPage from './pages/Login/HotelLoginPage';
import HotelAmenities from './pages/HotelAmenities/HotelAmenities';
import HotelRegistration from './pages/Registration/HotelRegistration';

function App() {
  return(
    <MainLayout/>
  );
}

const MainLayout = () => {
  const location = useLocation();
  const hideNavbarFooter = location.pathname === "/Login" || location.pathname === "/Registration";

  return (
    <div className='App'>

      {!hideNavbarFooter && <Navbar />}
      <Routes>
        <Route path="/" element={<Home/>}/>
        {/* <Route path='/Rooms' element={} */}
        <Route path="/Foods" element={<FoodPage/>} />
        <Route path="/Login" element={<HotelLoginPage/>} />
        <Route path="/Registration" element={<HotelRegistration/>} />
        <Route path="/HotelAmenities" element={<HotelAmenities/>} />
      </Routes>
      {!hideNavbarFooter && <Footer />}
    </div>
  );
};

export default App
