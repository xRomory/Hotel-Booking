import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import FoodPage from './pages/Foods/Foods';
// import HotelRoom from './pages/Rooms/Rooms'
import RoomPage from './pages/Rooms/Rooms';
import RoomDetailsPage from './pages/RoomDetails/RoomDetails';
// import HotelResorts from './components/HotelResorts/HotelResorts';
// import About from './components/About/About';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        {/* <Route path='/Rooms' element={} */}
        <Route path="/rooms" element={<RoomPage/>}/>
        <Route path="/Foods" element={<FoodPage/>} />
        <Route path ="rooms/:id" element ={<RoomDetailsPage />} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
