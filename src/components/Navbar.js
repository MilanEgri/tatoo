import './style.css'
import React from 'react'
import logo from './navbarPictures/the-void-tattoo-logo.png'
import instagramm from './navbarPictures/ion_logo-instagram.png'
import pinterst from './navbarPictures/ion_logo-pinterest.png'
import twitter from './navbarPictures/ion_logo-twitter.png'
import youtube from './navbarPictures/ion_logo-youtube.png'
import facebook from './navbarPictures/Vector.png'
const Navbar = () => {
  return (
    <nav className='navBar'>
      <img src={logo} className='logo'/>
        <div className='links'>
          <a className='link' href='#home'>Home</a>
          <a className='link' href='#about'>About</a>
          <a className='link' href='#gallery'>Gallery</a>
          <a className='link' href='#services'>Services</a>
          <a className='link' href='#interview'>Interview</a>
          <a className='link' href='#contact'>Contact</a>
        </div>
        <div className='icons'>
          <img className='icon' src={instagramm}  alt='instagramm'/>
          <img className='icon' src={pinterst} alt="pinterst" />
          <img className='icon' src={twitter} alt='twitter'/>
          <img className='icon' src={youtube} alt='youtube'/>
          <img className='icon' src={facebook} alt='facebook'/>
          </div>                                      
    </nav>
  )
}

export default Navbar
