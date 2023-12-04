import './Footer.css';
import facebook from '../assets/images/facebook.png';
import instagram from '../assets/images/instagram.png';
import linkedin from '../assets/images/linkedin.png';
import twitter from '../assets/images/twitter.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li>about us</li>
              <li>Our Services</li>
              <li>Private policy</li>
              <li>Affiliate program</li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Get help</h4>
            <ul>
              <li>FAQ</li>
              <li>Shipping</li>
              <li>Returns</li>
              <li>Order status</li>
              <li>Payment options</li>
            </ul>
          </div>
         
          <div className="footer-col">
            <h4>Follow us</h4>
            <div className="social-links">
              <img src={facebook} alt=''/>
              <img src={instagram} alt=''/>
              <img src={linkedin} alt=''/>
              <img src={twitter} alt=''/>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
