import React from 'react';
import Navbar from './Navbar';
import './Coching.css';
import Footer from './Footer';
import PreFooter from './PreFooter';
function Coaching() {
  return (
    <div>
      <Navbar />
      <CochingHeader/>
      <br />
      <div className='center-container'>
</div>
      <div className="post-container">
        <div className="post">
          <h2>Familiale</h2>
          <div className="post-content">
            <p>
            Le coaching familial chez INNOVAC vise à renforcer les liens et à instaurer une
communication positive au sein de la famille. Des séances personnalisées guident
les membres de la famille vers une compréhension mutuelle et des relations
épanouissantes.
<br/>
<p className="date"><b>Public Cible : Familles, Parents</b></p>
            </p>
          </div>
        </div>
        <hr />
        <div className="post">
          <h2>Individuelle</h2>
          <div className="post-content">
            <p>
            Notre coaching individuel est conçu pour catalyser la croissance personnelle. Les
sessions personnalisées offrent un espace confidentiel pour explorer, comprendre
et surmonter les défis personnels, favorisant ainsi le développement holistique.
            </p>
            <p className="date"><b>Public Cible :Toute personne cherchant un accompagnement pour atteindre ses
objectifs personnels et professionnels.</b></p>

          </div>
        </div>
        <hr />
        <div className="post">
          <h2>Enfants et Ado</h2>
          <div className="post-content">
            <p>
            Les jeunes ont des besoins uniques, c'est pourquoi notre coaching dédié
aux adolescents et enfants les guide à travers les transitions, les défis
émotionnels, et renforce leurs compétences éducatives et sociales.
            </p>
          </div>
        </div>
        <hr />
        <div className="post">
          <h2>Excellence scolaire</h2>
          <div className="post-content">
            <p>
            Ce service s'adresse aux professionnels de l'éducation. Nous offrons des
formations spécialisées, des ateliers innovants et des techniques pour
renforcer les compétences pédagogiques et le bien-être éducatif.
<p className="date"><b>Public Cible :Enseignants, éducateursn Entrepreneurs, animateurs.</b></p>
            </p>
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

export default Coaching;
