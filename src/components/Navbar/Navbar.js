import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo from './div.png';

function Navbar()  {

  return (
    <nav className='navbar'>
      <img src={logo} className='navbar-logo'/>
      <div className='servicios'>Servicios</div>
      <button className='login'>Login</button>
      <button className='navbar-button'>Register</button>
    </nav>
  );
}

export default Navbar;
