import React from 'react';
import './Events.css';
import Navbar from './Navbar';
import Footer from './Footer';
import img1 from './assets/images/events/img1.jpg'
import img2 from './assets/images/events/img2.jpg'
import img4 from './assets/images/events/img4.jpg'
import img5 from './assets/images/events/img5.jpg'
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
      <img src='https://images.unsplash.com/photo-1586442886903-1cb792cd1dc4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYyODc3NzA3NQ&ixlib=rb-1.2.1&q=80&w=400' alt="desert" />
        <div className="infos">
          <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, cupiditate?</p>
          <span className="date">August 12, 2021</span>
        </div>
      </div> <div className="card">
      <img src='https://images.unsplash.com/photo-1586442886903-1cb792cd1dc4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYyODc3NzA3NQ&ixlib=rb-1.2.1&q=80&w=400' alt="desert" />
        <div className="infos">
          <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, cupiditate?</p>
          <span className="date">August 12, 2021</span>
        </div>
      </div> <div className="card">
      <img src='https://images.unsplash.com/photo-1586442886903-1cb792cd1dc4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYyODc3NzA3NQ&ixlib=rb-1.2.1&q=80&w=400' alt="desert" />
        <div className="infos">
          <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, cupiditate?</p>
          <span className="date">August 12, 2021</span>
        </div>
      </div> <div className="card">
      <img src='https://images.unsplash.com/photo-1586442886903-1cb792cd1dc4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYyODc3NzA3NQ&ixlib=rb-1.2.1&q=80&w=400' alt="desert" />
        <div className="infos">
          <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, cupiditate?</p>
          <span className="date">August 12, 2021</span>
        </div>
      </div> <div className="card">
      <img src='https://images.unsplash.com/photo-1586442886903-1cb792cd1dc4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYyODc3NzA3NQ&ixlib=rb-1.2.1&q=80&w=400' alt="desert" />
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
