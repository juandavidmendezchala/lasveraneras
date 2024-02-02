// Navbar.js
import React from 'react';
import './Navbar.css';
import Logo from '../assets/Logo.png';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="brand">
          <img width="70px" src={Logo} alt="Logo"></img>
          <NavLink to="/" className="brand-link">
            <h1>Tubos y Postes Las Veraneras</h1>
          </NavLink>
        </div>
        <ul className="nav-links">
          <NavLink to="/" activeClassName="active-link" exact>
            <li>Inicio</li>
          </NavLink>
          <NavLink to="/vision" activeClassName="active-link">
            <li>Nuestra Visión</li>
          </NavLink>
        </ul>
      </nav>
      <div>
        {/* Otro contenido que desees agregar */}
      </div>
    </div>
  );
};

export default Navbar;
