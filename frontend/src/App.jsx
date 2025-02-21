import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import FoodPage from './pages/Foods/Foods';
// import HotelRoom from './pages/Rooms/Rooms'
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
        <Route path="/rooms" element={<RoomPage/>}/>
        <Route path="/Foods" element={<FoodPage/>} />
      </Routes>
      {!hideNavbarFooter && <Footer />}
    </div>
  );
};

export default App
