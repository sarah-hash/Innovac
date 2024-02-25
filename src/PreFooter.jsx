import React from 'react';
import './PreFooter.css';

function PreFooter() {
  return (
      <div className='row'  style={{backgroundColor:'#F4BB44',height:'150px'}}>
        <div className='col-8 leftContent'>
          <h1 className='tt funnyText'>
            Si vous avez des questions ou des demandes de renseignements complémentaires
          </h1>
        </div>
        <div className='col-2 rightContent'>
          <button className='contactButton'>Contactez-nous</button>
        </div>
      </div>
  );
}

export default PreFooter;
