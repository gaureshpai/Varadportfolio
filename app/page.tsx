import React from 'react'
import Logo from '@/components/Logo' 
import About from '@/components/About'
import Menu from '@/components/Menu'
import Contact from '@/components/Contact'
const page = () => {
  return (
    <div>
        <Logo />
        <About />
        <Menu />
        <Contact />
    </div>
  )
}

export default page