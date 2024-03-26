import React from 'react'
import HomeCard from '../../Homecard/HomeCard'
import Footer from '../../footer/Footer'
import Navbar from '../../navbar/Navbar'
import Hero from '../../hero/Hero'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <HomeCard/>
        <Footer/>
    </div>
  )
}

export default Home