import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaPinterest } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="footer_container">
        <div className="footer_column">
          <h3>ONLINE SHOPPING</h3>
          <Link to="/category/men">Men</Link>
          <Link to="/category/women">Women</Link>
          <Link to="/category/kids">Kids</Link>
          <Link to="/category/home-living">Home & Living</Link>
          <Link to="/category/beauty">Beauty</Link>
          <Link to="/category/gift-card">Gift Card</Link>
          <Link to="/category/insider">Myntra Insider</Link>
        </div>

        <div className="footer_column">
          <h3>CUSTOMER POLICIES</h3>
          <Link to="/contact">Contact Us</Link>
          <Link to="/faq">FAQ</Link>
          <a href="#terms">T&C</a>
          <a href="#track">Track Orders</a>
          <a href="#shipping">Shipping</a>
          <a href="#cancel">Cancellation</a>
          <a href="#returns">Returns</a>
          <a href="#privacy">Privacy Policy</a>
        </div>

        <div className="footer_column">
          <h3>HELP & SUPPORT</h3>
          <Link to="/faq">FAQ</Link>
          <a href="#size-guide">Size Guide</a>
          <a href="#how-to-order">How to Order</a>
          <a href="#track-order">Track Your Order</a>
          <a href="#returns">Returns & Exchanges</a>
          <a href="#shipping">Shipping Information</a>
          <Link to="/contact">Contact Us</Link>
          <a href="#stores">Store Locator</a>
        </div>

        <div className="footer_column footer-column-center">
          <h3>KEEP IN TOUCH</h3>
          <div className="social-links">
            <a href="#" aria-label="Facebook" className="social-link">
              <FaFacebook />
            </a>
            <a href="#" aria-label="Twitter" className="social-link">
              <FaTwitter />
            </a>
            <a href="#" aria-label="Instagram" className="social-link">
              <FaInstagram />
            </a>
            <a href="#" aria-label="YouTube" className="social-link">
              <FaYoutube />
            </a>
            <a href="#" aria-label="Pinterest" className="social-link">
              <FaPinterest />
            </a>
          </div>
          <div className="newsletter">
            <p>Subscribe to our newsletter</p>
            <div className="newsletter-input">
              <input type="email" placeholder="Enter your email" />
              <button>Subscribe</button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <div className="payment-methods">
            <span>We Accept:</span>
            <div className="payment-icons">
              <span className="payment-icon">💳</span>
              <span className="payment-icon">🏦</span>
              <span className="payment-icon">📱</span>
            </div>
          </div>
          <div className="copyright">
            © 2025 www.myntra.com. All rights reserved. (Developed by Muhammad Muaaz)
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
