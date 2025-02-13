import { useState } from 'react'
import { Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import FoodPage from './pages/Foods/Foods';
import RoomPage from './pages/Rooms/Rooms';
// import HotelResorts from './components/HotelResorts/HotelResorts';
// import About from './components/About/About';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Rooms" element={<RoomPage/>}/>
        <Route path="/Foods" element={<FoodPage/>} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
