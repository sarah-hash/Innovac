import React from 'react';
import Navbar from './Navbar';
import FormationHeader from './FormationHeader';
import PreFooter from './PreFooter';
import Footer from './Footer';
import FormationFooter from './FormationFooter';
import './Formation.css';
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
              1- Innova-personnalité
              <ol>
                <li>Atelier : Le Pouvoir du Changement en Gestion du Changement .</li>
                <li>Atelier : Intelligence Émotionnelle et Gestion des Émotions</li>
                <li>Atelier : Planification Stratégique et Création de Succès</li>
              </ol>
            </li>
            <li>
              2- Méga Formation
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
