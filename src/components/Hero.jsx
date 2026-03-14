import React from 'react'
import './Hero.css'

function Hero() {
  return (
    <div id="inicio" className="hero-section">
      <div className="hero-copy-wrap">
        <h2 className="hero-title">Productos naturales y artesanías</h2>
        <p className="hero-text">
          Ofrecemos velas, centros de mesa y artesanías elaborados con <strong>ingredientes 100% naturales</strong>,
          <strong> libres de químicos agresivos, parabenos y tóxicos</strong>. Cada pieza está
          pensada para cuidar tu bienestar y el de tu familia, respetando el medio ambiente.
          Si tenés dudas sobre qué producto elegir o querés conocer más detalles,
          <strong> no dudes en consultarnos</strong> — estamos para ayudarte.
        </p>
      </div>
    </div>
  )
}

export default Hero
