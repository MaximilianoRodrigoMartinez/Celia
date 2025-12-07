import React, { useState } from 'react'
import './Header.css'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const headerHeight = 140
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className="header">
      <div className="header-content">
        <button 
          className="menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div className="logo-section">
          <img 
            src="/assets/logo celia.jpg" 
            alt="Logo Celia" 
            className="logo"
            onError={(e) => {
              e.target.style.display = 'none'
            }}
            onClick={() => scrollToSection('inicio')}
            style={{ cursor: 'pointer' }}
          />
          <h1 onClick={() => scrollToSection('inicio')} style={{ cursor: 'pointer' }}>Celia</h1>
        </div>
        <p className="subtitle">Productos Naturales Hechos con Amor</p>
        
        <nav className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
          <ul className="nav-links">
            <li>
              <button onClick={() => scrollToSection('inicio')}>Inicio</button>
            </li>
            <li>
              <button onClick={() => scrollToSection('productos')}>Productos</button>
            </li>
            <li>
              <button onClick={() => scrollToSection('faq')}>FAQ</button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header

