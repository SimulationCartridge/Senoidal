import React from 'react';
import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
      <nav className='nav'>
        <NavLink  to="/inicio" className="navLink">Inicio</NavLink>
        <NavLink  to="/contacto" className="navLink">Contacto</NavLink>
        </nav>
  );
}

export default Navigation;