// import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import FoodPage from './pages/Foods/Foods';
import RoomPage from './pages/Rooms/Rooms';
import RoomDetailsPage from './pages/RoomDetails/RoomDetails';
import HotelLoginPage from './pages/Login/HotelLoginPage';
import HotelRegistration from './pages/Registration/HotelRegistration';
// import HotelResorts from './components/HotelResorts/HotelResorts';
// import About from './components/About/About';

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
        <Route path="/Rooms" element={<RoomPage/>}/>
        <Route path="/Foods" element={<FoodPage/>} />
        <Route path="/Login" element={<HotelLoginPage/>} />
        <Route path="/Registration" element={<HotelRegistration/>} />
        <Route path ="/Rooms/:id" element ={<RoomDetailsPage />} />
      </Routes>
      {!hideNavbarFooter && <Footer />}
    </div>
  );
};

export default App
