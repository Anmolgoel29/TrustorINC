import React from 'react'
import './Footer.css'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaWhatsapp, FaPhone, FaEnvelope } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-main">
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="logo-text">TRUSTOR</span>
              <span className="logo-accent">INC</span>
            </div>
            <p className="footer-tagline">
              Your trusted partner in wholesale excellence. Quality products, reliable service, lasting partnerships.
            </p>
            <div className="footer-social">
              <a href="https://wa.me/919980876968" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaWhatsapp />
              </a>
              <a href="#" className="social-link">
                <FaFacebookF />
              </a>
              <a href="#" className="social-link">
                <FaInstagram />
              </a>
              <a href="#" className="social-link">
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><a onClick={() => scrollToSection('hero')}>Home</a></li>
              <li><a onClick={() => scrollToSection('products')}>Products</a></li>
              <li><a onClick={() => scrollToSection('about')}>About Us</a></li>
              <li><a onClick={() => scrollToSection('contact')}>Contact</a></li>
            </ul>
          </div>

          <div className="footer-products">
            <h4>Our Products</h4>
            <ul>
              <li>Edible Oils</li>
              <li>Rice Varieties</li>
              <li>Sugar & Sweeteners</li>
              <li>Wheat Flour</li>
              <li>FMCG Products</li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4>Contact Us</h4>
            <div className="contact-item">
              <FaPhone />
              <a href="tel:+919980876968">+91 7982843604</a>
            </div>
            <div className="contact-item">
              <FaWhatsapp />
              <a href="https://wa.me/919980876968" target="_blank" rel="noopener noreferrer">WhatsApp</a>
            </div>
            <div className="contact-item">
              <FaEnvelope />
              <a href="mailto:trustor.inc@gmail.com ">Get Quote</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; {currentYear} Trustor INC. All rights reserved.</p>
            <div className="footer-bottom-links">
              <a href="#">Privacy Policy</a>
              <span>•</span>
              <a href="#">Terms of Service</a>
              <span>•</span>
              <a href="#">Shipping Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
