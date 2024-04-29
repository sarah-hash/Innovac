import React from 'react';
import './PreFooter.css';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

function PreFooter() {
  return (
      <div className='row'  style={{backgroundColor:'#F4BB44',height:'150px'}}>
        <div className='col-8 leftContent'>
          <h1 className='tt funnyText'>
            <b>Si vous avez des questions ou des demandes de renseignements complémentaires</b>
          </h1>
        </div>
        <div className='col-2 rightContent'>
        <Link to="/contact">
        <button className='contactButton'>Contactez-nous</button>
      </Link>
        </div>
      </div>
  );
}

export default PreFooter;
