import React from 'react'
import { NavLink } from "react-router-dom"
import "./Navbar.css"
import "./Queries.css"
import { useState } from "react"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="allnav text-query">
    <div className="navbar-container">
      
      <nav className={`nav-links ${isOpen ? 'open' : ''}`}>
        <NavLink to="/" className="allLink" onClick={() => setIsOpen(false)}>Domů</NavLink>
        <NavLink to="/MyGallery" className="allLink" onClick={() => setIsOpen(false)}>Galerie</NavLink>
        <NavLink to="/InfoPrice" className="allLink" onClick={() => setIsOpen(false)}>Info a Ceny</NavLink>
        <NavLink to="/ContactForm" className="allLink" onClick={() => setIsOpen(false)}>Kontakt</NavLink>
      </nav>
      <div className="logo" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </div>
  </header>
    
    
      
    
  
  

  );
}

export default Navbar;