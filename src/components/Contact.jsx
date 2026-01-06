import React, { useState } from 'react'
import './Contact.css'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaClock } from 'react-icons/fa'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    product: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real application, you would send this data to a backend
    const message = `Hello! I'm ${formData.name}.\nEmail: ${formData.email}\nPhone: ${formData.phone}\nInterested in: ${formData.product}\nMessage: ${formData.message}`
    const whatsappUrl = `https://wa.me/919980876968?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  const contactInfo = [
    {
      icon: <FaPhone />,
      title: 'Phone',
      info: '+91 99808 76968',
      link: 'tel:+919980876968'
    },
    {
      icon: <FaWhatsapp />,
      title: 'WhatsApp',
      info: '+91 99808 76968',
      link: 'https://wa.me/919980876968'
    },
    {
      icon: <FaEnvelope />,
      title: 'Email',
      info: 'trustorinc@example.com',
      link: 'mailto:trustorinc@example.com'
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Location',
      info: 'Serving Pan India',
      link: null
    },
    {
      icon: <FaClock />,
      title: 'Business Hours',
      info: 'Mon-Sat: 9AM - 7PM',
      link: null
    }
  ]

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Let's Talk Business</h2>
          <p className="section-subtitle">
            Ready to place an order or have questions? We're here to help. Reach out and let's build a profitable partnership.
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="info-header">
              <h3>Get in Touch</h3>
              <p>We respond within 24 hours. Guaranteed.</p>
            </div>

            <div className="info-list">
              {contactInfo.map((item, index) => (
                <div key={index} className="info-item" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="info-icon">
                    {item.icon}
                  </div>
                  <div className="info-text">
                    <h4>{item.title}</h4>
                    {item.link ? (
                      <a href={item.link} target="_blank" rel="noopener noreferrer">
                        {item.info}
                      </a>
                    ) : (
                      <p>{item.info}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="contact-badges">
              <div className="badge">
                <span>✓</span> Verified Supplier
              </div>
              <div className="badge">
                <span>✓</span> Secure Transactions
              </div>
              <div className="badge">
                <span>✓</span> Quality Assured
              </div>
            </div>
          </div>

          <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Your Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="+91 12345 67890"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="product">Product Interest</label>
                <select
                  id="product"
                  name="product"
                  value={formData.product}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a product</option>
                  <option value="Edible Oils">Edible Oils</option>
                  <option value="Rice">Rice</option>
                  <option value="Sugar">Sugar</option>
                  <option value="Wheat Flour">Wheat Flour</option>
                  <option value="FMCG Products">FMCG Products</option>
                  <option value="Multiple Products">Multiple Products</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  placeholder="Tell us about your requirements..."
                ></textarea>
              </div>

              <button type="submit" className="submit-button">
                <FaWhatsapp /> Send via WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
