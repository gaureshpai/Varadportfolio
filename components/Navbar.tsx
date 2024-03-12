"use client"
import React from 'react';
import '@/public/styles/Navbar.css';

const Navbar = () => {
  const handleNavigation = (sectionId: string) => { 
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='titlebar'>
    <div className="navbar">
      <div className='Name'>
        <a href='./'>Gajanana Stores</a>
      </div>
      <nav className='button-container'>
        <ul>
            <li className='buttons'><a href="#home">Home</a></li>
            <li className='buttons'><a href="#New">New</a></li>
            <li className='buttons'><a href="#Menu">Menu</a></li>
            <li className='buttons'><a href="#Location">Location</a></li>
            <li className='buttons'><a href="#Contact">Contact</a></li>
        </ul>
      </nav>
    </div>
    </div>
  );
};

export default Navbar;
