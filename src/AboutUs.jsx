import React from 'react'
import about_new from './assets/images/video.mp4';

function AboutUs() {
  return (
    <section id="about">
    <div class="container">
        <div class="row gy-4 align-items-center">
            <div class="col-lg-6">
            <video width="530" height="400" controls>
            <source src={about_new} type="video/mp4" />
            </video>
            </div>
            <div class="col-lg-6">
                <h1>A propos de nous</h1>
                <div class="divider my-4"></div>
                <p><b>INNOVAC</b> se distingue en tant que premier centre
spécialisé dans l'accompagnement regroupant la
neuroéducation, la neuronutrition et le coaching
dans le but de résoudre les complexes académiques
en Tunisie et dans le monde arabe.</p>

<br></br>
<p>Notre identité est façonnée par une expertise solide
basée sur la neuronutrition et les conseils en
neurolearning, plaçant l'innovation au cœur de notre
approche distinctive.</p>
<br/>
                <button className="add-to-cart-button">Decouvrir nos Services</button>
            </div>
        </div>
    </div>
</section>
  )
}

export default AboutUs