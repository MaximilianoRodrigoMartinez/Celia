import React, { useState, useMemo } from 'react'
import ProductCard from './components/ProductCard'
import Header from './components/Header'
import Hero from './components/Hero'
import CategorySeparator from './components/CategorySeparator'
import WaveDivider from './components/WaveDivider'
import FAQ from './components/FAQ'
import ScrollToTop from './components/ScrollToTop'
import { products } from './data/products'
import './App.css'

const CATEGORY_ORDER = ['sets', 'velas', 'centros']

function App() {
  const [selectedCategory, setSelectedCategory] = useState('todos')
  const [searchText, setSearchText] = useState('')

  const categories = ['todos', ...new Set(products.map(p => p.categoria))]

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'todos' || product.categoria === selectedCategory
    const matchesSearch = searchText === '' ||
      product.nombre.toLowerCase().includes(searchText.toLowerCase()) ||
      product.descripcion.toLowerCase().includes(searchText.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const productGroups = useMemo(() => {
    const order = selectedCategory === 'todos' ? CATEGORY_ORDER : [selectedCategory]
    const groups = {}
    filteredProducts.forEach(p => {
      if (!groups[p.categoria]) groups[p.categoria] = []
      groups[p.categoria].push(p)
    })
    return order.filter(cat => groups[cat]?.length).map(cat => ({ category: cat, products: groups[cat] }))
  }, [filteredProducts, selectedCategory])

  let featuredIndex = 0
  const gridItems = productGroups.flatMap(({ category, products: groupProducts }) => {
    const items = [
      <CategorySeparator key={`sep-${category}`} category={category} />,
      ...groupProducts.map(product => {
        const isFeatured = featuredIndex === 0
        featuredIndex++
        return (
          <ProductCard
            key={product.id}
            product={product}
            featured={isFeatured}
          />
        )
      })
    ]
    return items
  })

  return (
    <div className="app">
      <Header />
      <Hero />
      <WaveDivider className="hero-wave" fill="#ffffff" />

      <div id="productos" className="container">
        <div className="search-container">
          <input
            type="text"
            className="search-input"
            placeholder="Buscar productos..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>

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

        {filteredProducts.length > 0 ? (
          <div className="products-grid">
            {gridItems}
          </div>
        ) : (
          <div className="no-results">
            <p>No se encontraron productos que coincidan con tu búsqueda.</p>
          </div>
        )}
      </div>

      <WaveDivider className="faq-wave" fill="rgba(255, 255, 255, 0.95)" inverted />
      <div id="faq">
        <FAQ />
      </div>

      <div className="scroll-divider">
        <div className="scroll-divider-line"></div>
        <div className="scroll-divider-flower">🌸</div>
        <div className="scroll-divider-line"></div>
      </div>

      <ScrollToTop />

      <footer className="footer">
        <div className="footer-title">Celia</div>
        <p>Productos Naturales Hechos con Amor</p>
        <div className="footer-contact">
          <p>Consultas por <a href="https://wa.me/5491122714366" target="_blank" rel="noopener noreferrer" className="footer-whatsapp-link">WhatsApp</a></p>
          <p>© 2025 - Todos los derechos reservados</p>
        </div>
      </footer>
    </div>
  )
}

export default App

