// import { useState } from 'react'
import React from 'react'
import '../../App.css'
import HomeComp from '../../components/Home/Home';
import HotelResorts from '../../components/HotelResorts/HotelResorts';
import About from '../../components/About/About';

const Home = () => {
  return (
    <>
      <HomeComp/>
      <HotelResorts/>
      <About/>
    </>
  )
}

export default Home