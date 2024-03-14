'use client'
import React from 'react'
import Logo from '@/components/Logo' 
import About from '@/components/About'
import Menu from '@/components/Menu'
import Contact from '@/components/Contact'
const page = () => {
  return (
    <div>
        <Logo />
        <hr/>
        <div id="about-section"><About /></div>
        <hr/>
       <div id="menu-section"><Menu /></div>
       <hr/>
        <div id="contact-section"><Contact /></div>
    </div>
  )
}
export default page;
