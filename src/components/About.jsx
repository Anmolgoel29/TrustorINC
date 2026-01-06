import React from 'react'
import './About.css'
import { FaAward, FaHandshake, FaTruck, FaLeaf } from 'react-icons/fa'

const About = () => {
  const values = [
    {
      icon: <FaAward />,
      title: 'Quality First',
      description: 'Every product undergoes rigorous quality checks before reaching you.'
    },
    {
      icon: <FaHandshake />,
      title: 'Trust & Reliability',
      description: 'Building lasting partnerships through consistent service and integrity.'
    },
    {
      icon: <FaTruck />,
      title: 'Timely Delivery',
      description: 'Your orders delivered on schedule, every single time. No excuses.'
    },
    {
      icon: <FaLeaf />,
      title: 'Sustainable',
      description: 'Committed to eco-friendly practices and responsible sourcing.'
    }
  ]

  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="section-title">Why Choose Trustor INC?</h2>
            <p className="about-intro">
              We're not just another supplier — we're your growth partner. Since our inception, 
              we've been committed to delivering excellence in every shipment, every transaction, 
              every relationship.
            </p>

            <div className="about-story">
              <h3 className="story-title">Our Story</h3>
              <p>
                Founded with a vision to revolutionize wholesale trading in essential commodities, 
                Trustor INC has grown from a small operation to a trusted name in the industry. 
                We understand that your business depends on reliable suppliers, and we take that 
                responsibility seriously.
              </p>
              <p>
                Our extensive network, combined with deep industry expertise, allows us to offer 
                competitive pricing without compromising on quality. From edible oils to FMCG products, 
                we've got your supply chain covered.
              </p>
            </div>

            <div className="about-stats-inline">
              <div className="stat-inline">
                <h4>1000+</h4>
                <p>Happy Clients</p>
              </div>
              <div className="stat-inline">
                <h4>5000+</h4>
                <p>Orders Delivered</p>
              </div>
              <div className="stat-inline">
                <h4>99.9%</h4>
                <p>On-Time Delivery</p>
              </div>
            </div>
          </div>

          <div className="about-values">
            <h3 className="values-title">Our Core Values</h3>
            <div className="values-grid">
              {values.map((value, index) => (
                <div key={index} className="value-card" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="value-icon">
                    {value.icon}
                  </div>
                  <h4 className="value-title">{value.title}</h4>
                  <p className="value-description">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
