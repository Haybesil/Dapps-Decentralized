import {React, useEffect } from 'react'
import HomeCard from '../../Homecard/HomeCard'
import Footer from '../../footer/Footer'
import Navbar from '../../navbar/Navbar'
import Hero from '../../hero/Hero'
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS

const Home = () => {


  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className='overflow-x-hidden' data-aos="fade-up" data-aos-duration="2000">
        <Navbar/>
        <Hero/>
        <HomeCard/>
        <Footer/>
    </div>
  )
}

export default Home