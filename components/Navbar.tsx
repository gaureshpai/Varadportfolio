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
        <button className='buttons' onClick={() => handleNavigation('about-section')}>More about Store</button>
        <button className='buttons' onClick={() => handleNavigation('menu-section')}>Menu</button>
        <button className='buttons' onClick={() => handleNavigation('contact-section')}>Contact details</button>
      </nav>
    </div>
  );
};

export default Navbar;
