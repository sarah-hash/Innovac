import React from 'react';
import Navbar from './Navbar';
import './Coching.css';
import CochingHeader from './CochingHeader';
import Footer from './Footer';
import PreFooter from './PreFooter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faUser, faChild, faChalkboardTeacher } from '@fortawesome/free-solid-svg-icons';


function Coaching() {
  return (
    <div>
      <Navbar />
      <CochingHeader />
      <br />
      <div className="post-container">
        <div className="post">
          <div className="box">
            <FontAwesomeIcon icon="fa-sharp fa-thin fa-people-roof" className="icon" />
            <br />             <br />

            <h4>Familiale</h4>
          </div>
          <div className="post-content">
            <p>
              Le coaching familial chez INNOVAC vise à renforcer les liens et à instaurer une communication positive au sein de la famille. Des séances personnalisées guident les membres de la famille vers une compréhension mutuelle et des relations épanouissantes.
              <br />
              <p className="date"><b>Public Cible : Familles, Parents</b></p>
            </p>
          </div>
        </div>
        <div className="post">
          <div className="box">
            <FontAwesomeIcon icon={faUser} className="icon" />
            <h3>Individuelle</h3>
          </div>
          <div className="post-content">
            <p>
              Notre coaching individuel est conçu pour catalyser la croissance personnelle. Les sessions personnalisées offrent un espace confidentiel pour explorer, comprendre et surmonter les défis personnels, favorisant ainsi le développement holistique.
            </p>
            <p className="date"><b>Public Cible : Toute personne cherchant un accompagnement pour atteindre ses objectifs personnels et professionnels.</b></p>
          </div>
        </div>
        <div className="post">
          <div className="box">
            <FontAwesomeIcon icon={faChild} className="icon" />
            <h3>Enfants et Ado</h3>
          </div>
          <div className="post-content">
            <p>
              Les jeunes ont des besoins uniques, c'est pourquoi notre coaching dédié aux adolescents et enfants les guide à travers les transitions, les défis émotionnels, et renforce leurs compétences éducatives et sociales.
            </p>
          </div>
        </div>
        <div className="post">
          <div className="box">
            <FontAwesomeIcon icon={faChalkboardTeacher} className="icon" />
            <h3>Excellence scolaire</h3>
          </div>
          <div className="post-content">
            <p>
              Ce service s'adresse aux professionnels de l'éducation. Nous offrons des formations spécialisées, des ateliers innovants et des techniques pour renforcer les compétences pédagogiques et le bien-être éducatif.
              <p className="date"><b>Public Cible : Enseignants, éducateurs, Entrepreneurs, animateurs.</b></p>
            </p>
          </div>
        </div>
      </div>
      <br />
      <PreFooter />
      <br />
      <Footer />
    </div>
  );
}

export default Coaching;
