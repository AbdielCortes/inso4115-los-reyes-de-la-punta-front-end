import React, { useState, useEffect } from 'react';
import './Navbar.css';

function Navbar()  {

  return (
    <nav className='nav'>
      <div className='navbar-title'></div>
      <div className='navbar-links'>
      </div>
      <div className='servicios'>
        <a href="/servicios">Servicios</a>
      </div>
      <div className='login'>
        <a href="/login">Login</a>
      </div>
      <div className='register-button'>
      </div>
        <div className='register'>
          <a href="/signup">Register</a>
        </div>
    </nav>
  );
}

export default Navbar;
