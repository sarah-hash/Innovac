import React from 'react';
import './Events.css';
import Navbar from './Navbar';
import Footer from './Footer';
import img1 from './assets/images/events/img1.jpg'
import img2 from './assets/images/events/img2.jpg'
import img4 from './assets/images/events/img4.jpg'
import img5 from './assets/images/events/img5.jpg'
import img8 from './assets/images/events/img8.jpg'
import img9 from './assets/images/events/img9.jpg'


import EventHeader from './EventHeader';

function Events() {
  return (
    <div>
    <Navbar/>
    <EventHeader/>
    <br/>
    <div className="container">
      <div className="card">
      <img src={img1} alt="stars on sky" />
        <div className="infos">
          <p className="text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse, cum.</p>
          <span className="date">August 12, 2021</span>
        </div>
      </div>

      <div className="card">
        <div className="infos">
          <p className="text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio, assumenda!</p>
          <span className="date">August 12, 2021</span>
        </div>
        <img src={img2} alt="earth from space" />
      </div>

      <div className="card">
      <img src={img4} alt="desert" />
        <div className="infos">
          <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, cupiditate?</p>
          <span className="date">August 12, 2021</span>
        </div>
      </div>
      <div className="card">
      <img src={img5} alt="desert" />
        <div className="infos">
          <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, cupiditate?</p>
          <span className="date">August 12, 2021</span>
        </div>
      </div> <div className="card">
      <img src={img8} alt="desert" />
        <div className="infos">
          <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, cupiditate?</p>
          <span className="date">August 12, 2021</span>
        </div>
      </div> <div className="card">
      <img src={img9} alt="desert" />
        <div className="infos">
          <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, cupiditate?</p>
          <span className="date">August 12, 2021</span>
        </div>
      </div>
    </div>
    <br/>
    <Footer/>
    </div>
  );
}

export default Events;
