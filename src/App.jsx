import React, { useState } from 'react'
import ProductCard from './components/ProductCard'
import Header from './components/Header'
import FAQ from './components/FAQ'
import { products } from './data/products'
import './App.css'

function App() {
  const [selectedCategory, setSelectedCategory] = useState('todos')

  const categories = ['todos', ...new Set(products.map(p => p.categoria))]

  const filteredProducts = selectedCategory === 'todos' 
    ? products 
    : products.filter(p => p.categoria === selectedCategory)

  return (
    <div className="app">
      <Header />
      
      <div className="hero-section">
        <div className="hero-content">
          <h2 className="hero-title">Artesanía 100% Natural</h2>
          <p className="hero-text">
            Ofrecemos velas y artesanías elaboradas con <strong>cera de soja 100% natural</strong>, 
            <strong> libre de químicos agresivos, parabenos y tóxicos</strong>. Cada pieza está 
            pensada para cuidar tu bienestar y el de tu familia, respetando el medio ambiente. 
            Si tenés dudas sobre qué producto elegir o querés conocer más detalles, 
            <strong> no dudes en consultarnos</strong> — estamos para ayudarte.
          </p>
        </div>
      </div>

      <div className="container">
        <div className="filters">
          {categories.map(cat => (
            <button
              key={cat}
              className={`filter-btn ${selectedCategory === cat ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat === 'todos' ? 'Todos' : cat}
            </button>
          ))}
        </div>

        <div className="products-grid">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      <FAQ />

      <footer className="footer">
        <div className="footer-title">Celia</div>
        <p>Velas y Artesanías Hechas con Amor</p>
        <div className="footer-contact">
          <p>Consultas por WhatsApp</p>
          <p>© 2025 - Todos los derechos reservados</p>
        </div>
      </footer>
    </div>
  )
}

export default App

