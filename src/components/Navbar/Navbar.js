import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo from './logo.png';
import history from "../../Routing/history";

function Navbar()  {

  return (
    <nav className='navbar'>
      <button className="navbar-logo-home" onClick={() => history.push("/")}>
        <img src={logo} className='navbar-logo'/>
      </button>
      <div className='servicios'>Servicios</div>
      <button className='login' onClick={() => history.push("/login")}>Login</button>
      <button className='signup' onClick={() => history.push("/signup")}className='navbar-button'>Sign Up</button>
    </nav>
  );
}

export default Navbar;
