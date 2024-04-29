import React, { useState, useEffect } from 'react';
import 'animate.css';
import img1 from './assets/images/img1.jpg';
import img2 from './assets/images/Home/GDJ2.webp';
import img3 from './assets/images/professionel.png';
import img4 from './assets/images/parent.jpg';

function Slid() {
  const [activeIndex, setActiveIndex] = useState(0);

  const options = ['Le Coaching', 'Les ateliers techniques éducatifs', 'Les formations professionnelles certifiées'];
  const images = [img1, img3, img4, img2];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div id="acceuil" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        {images.map((image, index) => (
          <div
            key={index}
            className={`carousel-item text-center vh-100 ${index === activeIndex ? 'active' : ''}`}
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="container h-100 d-flex align-items-center justify-content-center">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <h6 className="text-white">Bienvenue à INNOVA'C</h6>
                  <h1 className="display-1 my-3 fw-bold text-white animate__animated animate__bounce animate__slow">Inspiring Innovative Center (Innova'c)</h1>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Slid;