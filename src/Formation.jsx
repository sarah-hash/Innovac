import React from 'react';
import Navbar from './Navbar';
import FormationHeader from './FormationHeader';
import PreFooter from './PreFooter';
import Footer from './Footer';
import './Formation.css';
import FormationFooter from './FormationFooter';

function Formation() {
  return (
    <div>
      <Navbar />
      <FormationHeader />
      <br />
      <div className='container'>
        <div className='row'>
          <ol className="style_1">
            <li>
              Innova-personnalité
              <ol>
                <li>Atelier : Le Pouvoir du Changement en Gestion du Changement .</li>
                <li>Atelier : Intelligence Émotionnelle et Gestion des Émotions</li>
                <li>Atelier : Planification Stratégique et Création de Succès</li>
              </ol>
            </li>
            <li>
              Méga Formation
              <ol>
                <li>Neuroéducation</li>
                <li>Discipline Positive</li>
                <li>Parentalité Positive</li>
              </ol>
            </li>
          </ol>
        </div>
      </div>
      <br />
      <FormationFooter/>
      <PreFooter />
      <br />
      <Footer />
    </div>
  );
}

export default Formation;
