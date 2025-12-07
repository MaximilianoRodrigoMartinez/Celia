import React, { useState } from 'react'
import ProductCard from './components/ProductCard'
import Header from './components/Header'
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
            Cada pieza está elaborada artesanalmente con cera de soja 100% natural, 
            <strong> libre de químicos y tóxicos</strong>. Nuestras velas y artesanías 
            no solo decoran tu hogar, sino que también cuidan de tu bienestar y el de tu familia. 
            Descubrí productos únicos, hechos con amor y dedicación.
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

