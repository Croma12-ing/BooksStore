import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>BookStore</h3>
            <p>Your one-stop destination for books from around the world.</p>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Policies</h4>
            <ul>
              <li><Link to="/privacy">Privacy Policy</Link></li>
              <li><Link to="/refund">Refund & Cancellation</Link></li>
              <li><Link to="/terms">Terms & Conditions</Link></li>
              <li><Link to="/shipping-policy">Shipping & Delivey</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Contact Info</h4>
            <p>Email: info@bookstore.com</p>
            <p>Phone: (555) 123-4567</p>
            <p>Address: 123 Book Street, Reading City</p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2025 BookStore. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
