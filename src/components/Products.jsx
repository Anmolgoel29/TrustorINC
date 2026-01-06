import React, { useEffect, useState } from 'react'
import './Products.css'
import { FaOilCan, FaSeedling, FaCube, FaBreadSlice, FaBoxes } from 'react-icons/fa'

const Products = () => {
  const [activeProduct, setActiveProduct] = useState(0)

  const products = [
    {
      icon: <FaOilCan />,
      name: 'Edible Oils',
      description: 'Premium quality cooking oils including sunflower, palm, coconut, and more. Certified pure and healthy.',
      features: ['100% Pure', 'ISO Certified', 'Multiple Variants', 'Bulk Supply'],
      gradient: 'linear-gradient(135deg, #ff6b35, #ff8c61)'
    },
    {
      icon: <FaSeedling />,
      name: 'Rice',
      description: 'Finest quality rice varieties - Basmati, Sona Masoori, and more. Farm-fresh and perfectly aged.',
      features: ['Premium Grade', 'Multiple Varieties', 'Farm Fresh', 'Competitive Pricing'],
      gradient: 'linear-gradient(135deg, #f7b733, #fc4a1a)'
    },
    {
      icon: <FaCube />,
      name: 'Sugar',
      description: 'Crystal white refined sugar and jaggery. Perfect sweetness for your business needs.',
      features: ['Refined Quality', 'Consistent Supply', 'Hygienically Packed', 'Best Rates'],
      gradient: 'linear-gradient(135deg, #fa8231, #ff6b35)'
    },
    {
      icon: <FaBreadSlice />,
      name: 'Wheat Flour',
      description: 'Freshly milled wheat flour and atta. Perfect texture and taste guaranteed.',
      features: ['Stone Ground', 'High Protein', 'Fresh Milling', 'Custom Packing'],
      gradient: 'linear-gradient(135deg, #ff8008, #ffc837)'
    },
    {
      icon: <FaBoxes />,
      name: 'FMCG Products',
      description: 'Wide range of fast-moving consumer goods. All your daily essentials in one place.',
      features: ['Diverse Range', 'Top Brands', 'Regular Stock', 'Volume Discounts'],
      gradient: 'linear-gradient(135deg, #ff512f, #dd2476)'
    }
  ]

  return (
    <section id="products" className="products-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Our Products</h2>
          <p className="section-subtitle">
            Quality products that fuel your business growth. Every item carefully sourced and delivered with excellence.
          </p>
        </div>

        <div className="products-grid">
          {products.map((product, index) => (
            <div
              key={index}
              className={`product-card ${activeProduct === index ? 'active' : ''}`}
              onMouseEnter={() => setActiveProduct(index)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="product-icon" style={{ background: product.gradient }}>
                {product.icon}
              </div>
              
              <h3 className="product-name">{product.name}</h3>
              
              <p className="product-description">{product.description}</p>
              
              <div className="product-features">
                {product.features.map((feature, i) => (
                  <span key={i} className="feature-tag">{feature}</span>
                ))}
              </div>

              <div className="product-overlay" style={{ background: product.gradient }}></div>
            </div>
          ))}
        </div>

        <div className="products-cta">
          <p className="cta-text">Ready to place an order? Let's discuss your requirements.</p>
          <button className="cta-button" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
            Request Quote
          </button>
        </div>
      </div>
    </section>
  )
}

export default Products
