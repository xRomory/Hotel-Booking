import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import HotelResorts from './components/HotelResorts/HotelResorts';
import About from './components/About/About';
import Footer from './components/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='App'>
        <Navbar/>
        <Home/>
        <HotelResorts/>
        <About/>
        <Footer/>
      </div>
      
    </>
  )
}

export default App
