import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer';
import AboutUs from './AboutUs';
import Menu from './Menu';
import Team from './Team';
import Insta_Posts from './Insta_Posts';
import Slid from './Slid';
import Features from './Features';
function Home() {
  return (
    <div>
    <Navbar/>
    <Slid/>
    <AboutUs/>
    <Menu/>
    <Features/>
    <Team/>
  <Insta_Posts/>
  <Footer/>
  </div>
  )
}

export default Home