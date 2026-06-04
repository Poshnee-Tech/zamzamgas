import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__main">
        <div className="footer__brand">
          <p className="footer__tagline">
            An oil and gas company,<br />
            dedicated to Innovation and<br />
            bringing sustainable energy into<br />
            Pakistan's energy mix.
          </p>
        </div>

        <div className="footer__links">
          <h4 className="footer__links-heading">Company</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <p>Copyright &copy; 2026 zamzamgas</p>
        <p>Powered by zamzamgas Industry</p>
      </div>
    </footer>
  );
};

export default Footer;
