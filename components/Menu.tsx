'use client'
import React, { useState } from 'react';
import '@/public/styles/Menu.css';
import Allinone from '@/public/images/All in one Masala.png'
import Chakkuli from '@/public/images/Chakkuli Masala.png'
import Charmuri from '@/public/images/Charmuri.png'
import Doritos from '@/public/images/Doritos Masala.png'
import Kurkure from '@/public/images/Kurkure Masala.png'
import Lays from '@/public/images/Lays Masala.png'
import MangoSlice from '@/public/images/Mango Slice.png'
import MoongMasala from '@/public/images/Moong Masala.png'
import MoongTeja from '@/public/images/Moong Teja Masala.png'
import Panjabi from '@/public/images/Panjabi Masala.png'
import Potato from '@/public/images/Potatao Masala.png'
import Rajarani from '@/public/images/Raja rani Special.png'
import Raja from '@/public/images/Raja Special.png'
import Rani from '@/public/images/Rani Masala.png'
import Soya from '@/public/images/Soya Masala.png'
import Teja from '@/public/images/Teja Special.png'
import TomatoMasala from '@/public/images/Tomato Masala.png'
import TomatoSlice from '@/public/images/Tomato Slice.png'

const Menu = () => {
  // State to track which item is currently expanded
  const [expandedItem, setExpandedItem] = useState(null);

  // Function to toggle the expanded state of an item
  const toggleItem = (itemName: any) => {
    setExpandedItem((prevItem) => (prevItem === itemName ? null : itemName));
  };

  return (
    <div className="menu-container">
      <h2 className="about-heading">Menu</h2>
      {/* Example menu items with accordion functionality */}
      <div className={`menu-item ${expandedItem === 'item1' ? 'expanded' : ''}`} onClick={() => toggleItem('item1')}>
        <div className="item-header">
          <img src={Allinone.src} alt="Product 1" className="item-image" />
        </div>
        {expandedItem === 'item1' && (
          <div className="item-details">
            <p>Details of All in one Masala</p>
          </div>
        )}
      </div>
      <div className={`menu-item ${expandedItem === 'item2' ? 'expanded' : ''}`} onClick={() => toggleItem('item2')}>
        <div className="item-header">
          <img src={Chakkuli.src} alt="Product 2" className="item-image" />
        </div>
        {expandedItem === 'item2' && (
          <div className="item-details">
            <p>Details of Chakkuli Masala</p>
          </div>
        )}
      </div>
      <div className={`menu-item ${expandedItem === 'item3' ? 'expanded' : ''}`} onClick={() => toggleItem('item3')}>
        <div className="item-header">
          <img src={Charmuri.src} alt="Product 3" className="item-image" />
        </div>
        {expandedItem === 'item3' && (
          <div className="item-details">
            <p>Details of Charmuri</p>
          </div>
        )}
      </div>
      <div className={`menu-item ${expandedItem === 'item4' ? 'expanded' : ''}`} onClick={() => toggleItem('item4')}>
        <div className="item-header">
          <img src={Doritos.src} alt="Product 4" className="item-image" />
        </div>
        {expandedItem === 'item4' && (
          <div className="item-details">
            <p>Details of Doritos Masala</p>
          </div>
        )}
      </div>
      <div className={`menu-item ${expandedItem === 'item5' ? 'expanded' : ''}`} onClick={() => toggleItem('item5')}>
        <div className="item-header">
          <img src={Kurkure.src} alt="Product 5" className="item-image" />
        </div>
        {expandedItem === 'item5' && (
          <div className="item-details">
            <p>Details of Kurkure Masala</p>
          </div>
        )}
      </div>
      <div className={`menu-item ${expandedItem === 'item6' ? 'expanded' : ''}`} onClick={() => toggleItem('item6')}>
        <div className="item-header">
          <img src={Lays.src} alt="Product 6" className="item-image" />
        </div>
        {expandedItem === 'item6' && (
          <div className="item-details">
            <p>Details of Lays Masala</p>
          </div>
        )}
      </div>
      <div className={`menu-item ${expandedItem === 'item7' ? 'expanded' : ''}`} onClick={() => toggleItem('item7')}>
        <div className="item-header">
          <img src={MangoSlice.src} alt="Product 7" className="item-image" />
        </div>
        {expandedItem === 'item7' && (
          <div className="item-details">
            <p>Details of Mango Slice</p>
          </div>
        )}
      </div>
      <div className={`menu-item ${expandedItem === 'item8' ? 'expanded' : ''}`} onClick={() => toggleItem('item8')}>
        <div className="item-header">
          <img src={MoongMasala.src} alt="Product 8" className="item-image" />
        </div>
        {expandedItem === 'item8' && (
          <div className="item-details">
            <p>Details of Moong Masala</p>
          </div>
        )}
      </div>
      <div className={`menu-item ${expandedItem === 'item9' ? 'expanded' : ''}`} onClick={() => toggleItem('item9')}>
        <div className="item-header">
          <img src={MoongTeja.src} alt="Product 9" className="item-image" />
        </div>
        {expandedItem === 'item9' && (
          <div className="item-details">
            <p>Details of Moong Teja Special</p>
          </div>
        )}
      </div>
      <div className={`menu-item ${expandedItem === 'item10' ? 'expanded' : ''}`} onClick={() => toggleItem('item10')}>
        <div className="item-header">
          <img src={Panjabi.src} alt="Product 10" className="item-image" />
        </div>
        {expandedItem === 'item10' && (
          <div className="item-details">
            <p>Details of Panjabi Masala</p>
          </div>
        )}
      </div>
      <div className={`menu-item ${expandedItem === 'item11' ? 'expanded' : ''}`} onClick={() => toggleItem('item11')}>
        <div className="item-header">
          <img src={Potato.src} alt="Product 11" className="item-image" />
        </div>
        {expandedItem === 'item11' && (
          <div className="item-details">
            <p>Details of Potato Masala</p>
          </div>
        )}
      </div>
      <div className={`menu-item ${expandedItem === 'item12' ? 'expanded' : ''}`} onClick={() => toggleItem('item12')}>
        <div className="item-header">
          <img src={Rajarani.src} alt="Product 12" className="item-image" />
        </div>
        {expandedItem === 'item12' && (
          <div className="item-details">
            <p>Details of Raja Rani Masala</p>
          </div>
        )}
      </div>
      <div className={`menu-item ${expandedItem === 'item13' ? 'expanded' : ''}`} onClick={() => toggleItem('item13')}>
        <div className="item-header">
          <img src={Raja.src} alt="Product 13" className="item-image" />
        </div>
        {expandedItem === 'item13' && (
          <div className="item-details">
            <p>Details of Raja Special</p>
          </div>
        )}
      </div>
      <div className={`menu-item ${expandedItem === 'item14' ? 'expanded' : ''}`} onClick={() => toggleItem('item14')}>
        <div className="item-header">
          <img src={Rani.src} alt="Product 14" className="item-image" />
        </div>
        {expandedItem === 'item14' && (
          <div className="item-details">
            <p>Details of Rani Special</p>
          </div>
        )}
      </div>
      <div className={`menu-item ${expandedItem === 'item15' ? 'expanded' : ''}`} onClick={() => toggleItem('item15')}>
        <div className="item-header">
          <img src={Soya.src} alt="Product 15" className="item-image" />
        </div>
        {expandedItem === 'item15' && (
          <div className="item-details">
            <p>Details of Soya Masala</p>
          </div>
        )}
      </div>
      <div className={`menu-item ${expandedItem === 'item16' ? 'expanded' : ''}`} onClick={() => toggleItem('item16')}>
        <div className="item-header">
          <img src={Teja.src} alt="Product 16" className="item-image" />
        </div>
        {expandedItem === 'item16' && (
          <div className="item-details">
            <p>Details of Teja Special</p>
          </div>
        )}
      </div>
      <div className={`menu-item ${expandedItem === 'item17' ? 'expanded' : ''}`} onClick={() => toggleItem('item17')}>
        <div className="item-header">
          <img src={TomatoMasala.src} alt="Product 17" className="item-image" />
        </div>
        {expandedItem === 'item17' && (
          <div className="item-details">
            <p>Details of Tomato Masala</p>
          </div>
        )}
      </div>
      <div className={`menu-item ${expandedItem === 'item18' ? 'expanded' : ''}`} onClick={() => toggleItem('item18')}>
        <div className="item-header">
          <img src={TomatoSlice.src} alt="Product 18" className="item-image" />
        </div>
        {expandedItem === 'item18' && (
          <div className="item-details">
            <p>Details of Tomato Slice</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;
