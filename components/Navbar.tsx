'use client'
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
      </div>
      <nav className='button-container'>
        <a className='buttons' onMouseOver={() => handleNavigation('about-section')}>More about Store</a>
        <a className='buttons' onMouseOver={() => handleNavigation('menu-section')}>Menu</a>
        <a className='buttons' onMouseOver={() => handleNavigation('contact-section')}>Contact details</a>
      </nav>
    </div>
  );
};

export default Navbar;
