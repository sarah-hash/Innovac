import React from 'react';
import Navbar from './Navbar';
import './Ateliers.css'
import img1 from './assets/images/atelier1.jpg'
import img2 from './assets/images/img2.jpg'
import img3 from './assets/images/img3.jpg'
import img4 from './assets/images/img4.jpg'
import img5 from './assets/images/img5.png'
import img6 from './assets/images/img6.avif'
import PreFooter from './PreFooter';
import Footer from './Footer';
import AtelierHeader from './AtelierHeader';
function Ateliers() {
  return (
    <div>
      <Navbar />
      <AtelierHeader/>
        <br /> <br/>
      <div className="container">
        <div className="card">
          <div className="card__header">
            <img src={img1} alt="card__image" className="card__image" width="600" />
          </div>
          <div className="card__body">
            <span className="tag">News</span>
            <h4>Atelier sur la Neuroéducation</h4>
            <p>Les bases passionnantes de la neuroéducation. Des stratégies
pédagogiques innovantes sont combinées à des jeux stimulants,
des activités interactives et des méthodes d'apprentissage
avancées.</p>
          </div>
        </div>

        <div className="card">
          <div className="card__header">
            <img src={img2} alt="card__image" className="card__image" width="700" />
          </div>
          <div className="card__body">
            <span className="tag">News</span>
            <h4>Atelier sur les Innovations Pédagogiques</h4>
            <p>Les bases passionnantes de la neuroéducation. Des stratégies
pédagogiques innovantes sont combinées à des jeux stimulants, des
activités interactives et des méthodes d'apprentissage avancées.</p>
          </div>
       
        </div>

        <div className="card">
          <div className="card__header">
            <img src={img3} alt="card__image" className="card__image" width="800" />
          </div>
          <div className="card__body">
            <span className="tag">News</span>
            <h4>Atelier sur l'Éducation Responsable</h4>
            <p>Une éducation éthique et durable avec notre atelier sur
l'éducation responsable. Des stratégies responsables sont
explorées à travers des activités pratiques.</p>
          </div>
       
        </div>


        <div className="card">
          <div className="card__header">
            <img src={img4} alt="card__image" className="card__image" width="800" />
          </div>
          <div className="card__body">
            <span className="tag">News</span>
            <h4>Atelier sur la Nutrition Cérébrale</h4>
            <p>Des ateliers de nutrition cérébrale. Des recettes créatives, des
jeux éducatifs et des activités interactives promeuvent la santé
mentale et le bien-être.</p>
          </div>
       
        </div>


        <div className="card">
          <div className="card__header">
            <img src={img5} alt="card__image" className="card__image" style={{width:"350px"}} />
          </div>
          <div className="card__body">
            <span className="tag">News</span>
            <h4>Atelier sur les Troubles de l'Attention</h4>
            <p>Des stratégies dédiées pour ceux ayant des besoins spécifiques. Des
jeux adaptés, des exercices ciblés et des méthodes spécialisées offrent
un soutien personnalisé.</p>
          </div>
       
        </div>

        <div className="card">
          <div className="card__header">
            <img src={img6} alt="card__image" className="card__image" style={{width:"350px"}} />
          </div>
          <div className="card__body">
            <span className="tag">News</span>
            <h4>Atelier sur l'Éducation Émotionnelle</h4>
            <p>Cultivez l'intelligence émotionnelle avec notre atelier dédié.
Des activités pratiques, des jeux sensoriels et des méthodes
interactives favorisent l'épanouissement émotionnel des
apprenants.</p>
          </div>
       
        </div>

      </div>
      <br/>
      <PreFooter/>
      <br/>
      <Footer/>
    </div>
  );
}

export default Ateliers;
