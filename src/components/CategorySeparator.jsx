import React from 'react'
import './CategorySeparator.css'

const CATEGORY_ICONS = {
  centros: (
    <svg className="category-separator-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M8 6h8v10H8zM6 16v2h12v-2M10 6V4a1 1 0 012 0v2" />
      <path d="M12 8v2" />
    </svg>
  ),
  velas: (
    <svg className="category-separator-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 3v2M12 5c-1.5 0-2.5 1.2-2.5 3s1 3 2.5 3 2.5-1.2 2.5-3-1-3-2.5-3z" />
      <path d="M12 11v10M9 21h6" />
      <path d="M11 8a1 1 0 102 0 1 1 0 00-2 0z" fill="currentColor" />
    </svg>
  ),
  sets: (
    <svg className="category-separator-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 2L4 7v10l8 5 8-5V7l-8-5z" />
      <path d="M12 22V12M4 7l8 5 8-5" />
    </svg>
  )
}

const CATEGORY_LABELS = {
  centros: 'Centros de mesa',
  velas: 'Velas',
  sets: 'Sets'
}

function CategorySeparator({ category }) {
  const icon = CATEGORY_ICONS[category] ?? null
  const label = CATEGORY_LABELS[category] ?? category

  return (
    <div className="category-separator" style={{ gridColumn: '1 / -1' }}>
      <div className="category-separator-line" />
      <span className="category-separator-label">
        {icon}
        <span>{label}</span>
      </span>
      <div className="category-separator-line" />
    </div>
  )
}

export default CategorySeparator
