import React, {useState} from 'react'
import logo from './assets/images/logo.jpg';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Link } from 'react-router-dom';

function Navbar() {

  return (
      <nav className="navbar navbar-expand-lg bg-white shadow py-3 sticky-top">
        <div className="container">
          <Link to="/" className="navbar-brand">
            <img src={logo} alt="" style={{ width: '150px' }} />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-links">
        <li className="nav-item">
          <a href="/" className="nav-link">Acceuil</a>
        </li>
        <li className="navbar-dropdown">
          <a href="#about" >A propos</a>
        </li>
        <li className="nav-item dropdown">
  <a
    className="nav-link dropdown-toggle"
    href="#"
    id="navbarDropdown"
    role="button"
    data-bs-toggle="dropdown"
    aria-haspopup="true"
    aria-expanded="false"
  >
    Expertise
  </a>
  <div className="dropdown-menu" aria-labelledby="navbarDropdown">
    <Link to="/coaching" className="dropdown-item">
      Accompagnement et Coaching
    </Link>
    <Link to="/ateliers" className="dropdown-item">
      Nos ateliers techniques éducatifs
    </Link>
    <Link to="/formations" className="dropdown-item">
      Nos formations professionnelles certifiées
    </Link>
  </div>
</li>
        <li className="navbar-dropdown">
          <Link to="/evenements">Conférences et évenements</Link>
         
        </li>
        <li className="navbar-dropdown">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
          </div>
        </div>
      </nav>
     
  );
  
}

export default Navbar