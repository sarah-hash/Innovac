import React from 'react';
import about_new from './assets/images/video.mp4';
import 'animate.css';

function AboutUs() {
  return (
    <section id="about" className="animated-section">
      <div className="container">
        <div className="row gy-4 align-items-center">
          <div className="col-lg-6 animate__animated animate__backInLeft animate__delay-s">
            <video width="530" height="400" controls className="video-animation">
              <source src={about_new} type="video/mp4" />
            </video>
          </div>
          <div className="col-lg-6">
            <h1>A propos de nous</h1>
            <div className="divider my-4  animate__animated animate__backInLeft"></div>
            <p className='animate__animated animate__backInLeft animate__delay-1s'>
              <b>INNOVAC</b> se distingue en tant que premier centre spécialisé dans l'accompagnement regroupant la
              neuroéducation, la neuronutrition et le coaching dans le but de résoudre les complexes académiques en Tunisie
              et dans le monde arabe.
            </p>
            <br />
            <p className='animate__animated animate__backInLeft animate__delay-1s'>
              Notre identité est façonnée par une expertise solide basée sur la neuronutrition et les conseils en
              neurolearning, plaçant l'innovation au cœur de notre approche distinctive.
            </p>
            <br />
            <button className="add-to-cart-button  animate__animated animate__backInLeft animate__delay-1s">Decouvrir nos Services</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
