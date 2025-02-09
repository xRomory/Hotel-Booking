import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FoodPage from './pages/Foods/Foods'

import './App.css'
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import HotelResorts from './components/HotelResorts/HotelResorts';
import About from './components/About/About';
import Footer from './components/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
      <Router>
        <div className='App'>
          <Navbar/>
          <Routes>
            <Route 
              path="/"
              element={
                <>
                  <Home/>
                  <HotelResorts/>
                  <About/>
                </>
              }
            />
            <Route path="/pages/Foods" element={<FoodPage/>} />
          </Routes>
          
          <Footer/>
        </div>
      </Router>
  )
}

export default App
