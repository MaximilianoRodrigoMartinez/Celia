import React from 'react'
import './Header.css'

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo-section">
          <img 
            src="/assets/logo celia.jpg" 
            alt="Logo Celia" 
            className="logo"
            onError={(e) => {
              e.target.style.display = 'none'
            }}
          />
          <h1>Celia</h1>
        </div>
        <p className="subtitle">Productos Naturales Hechos con Amor</p>
      </div>
    </header>
  )
}

export default Header

