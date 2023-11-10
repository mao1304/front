
import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  return (
    <nav className="navbarr">
      <ul className="nav-list">
      <li className="nav-item"><Link to="/">Inicio</Link></li>
        <li className="nav-item"><Link to="/profesores">Profesores</Link></li>
        <li className="nav-item"><Link to="/huellita">huellita</Link></li>
        <li className="nav-item"><Link to="/admin">admin</Link></li>
        {/* Agrega más elementos según sea necesario */}
      </ul>
    </nav>
  );
};

export default Navbar;