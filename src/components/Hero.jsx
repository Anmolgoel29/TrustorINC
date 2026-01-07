import React, { useEffect, useState } from 'react'
import './Hero.css'
import { FaArrowDown, FaShippingFast, FaCheckCircle, FaGlobeAmericas } from 'react-icons/fa'

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToProducts = () => {
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <div className={`hero-text ${isVisible ? 'visible' : ''}`}>
          <div className="hero-badge">
            <span className="badge-dot"></span>
            Wholesale Excellence Since 2020
          </div>
          
          <h1 className="hero-title">
            Your Trusted Partner in
            <span className="highlight"> Premium Wholesale</span>
          </h1>
          
          <p className="hero-description">
            Supplying top-quality edible oils, rice, sugar, wheat flour, and FMCG products 
            to businesses across the region. We don't just deliver products — we deliver trust.
          </p>

          <div className="hero-stats">
            <div className="stat-item">
              <FaShippingFast className="stat-icon" />
              <div className="stat-text">
                <h3>Fast Delivery</h3>
                <p>On-time, Every time</p>
              </div>
            </div>
            <div className="stat-item">
              <FaCheckCircle className="stat-icon" />
              <div className="stat-text">
                <h3>Premium Quality</h3>
                <p>Certified Products</p>
              </div>
            </div>
            <div className="stat-item">
              <FaGlobeAmericas className="stat-icon" />
              <div className="stat-text">
                <h3>Wide Network</h3>
                <p>Regional Coverage</p>
              </div>
            </div>
          </div>

          <div className="hero-cta">
            <button className="cta-primary" onClick={scrollToProducts}>
              Explore Products
            </button>
            <button className="cta-secondary" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              Get Quote
            </button>
          </div>
        </div>

        <div className={`hero-visual ${isVisible ? 'visible' : ''}`}>
          <div className="visual-circle circle-1"></div>
          <div className="visual-circle circle-2"></div>
          <div className="visual-circle circle-3"></div>
          <div className="hero-image-container">
            <img src="WhatsApp Image 2026-01-06 at 18.34.17.jpeg" alt="Trustor INC" className="hero-image" />
          </div>
        </div>
      </div>

      <div className="scroll-indicator" onClick={scrollToProducts}>
        <FaArrowDown className="scroll-arrow" />
      </div>

      <div className="hero-bg-pattern"></div>
    </section>
  )
}

export default Hero
