import { useState, useEffect } from 'react';
import { Link, NavLink, useNavigate, useLocation } from 'react-router-dom';

import './Header.css';

const Header = () => {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const navigate  = useNavigate();
  const location  = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu and scroll to a section on the home page
  const goToSection = (sectionId) => {
    setMenuOpen(false);
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const close = () => setMenuOpen(false);

  return (
    <header className={`header${scrolled ? ' header--scrolled' : ''}`}>
      <div className="header__container">

        <Link to="/" className="header__logo" onClick={close}>
          <img src="/images/logo.png" alt="Zam Zam Gas" className="logo-img" />
        </Link>

        <button
          className={`header__hamburger${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>

        <nav className={`header__nav${menuOpen ? ' header__nav--open' : ''}`}>
          <button className="header__nav-btn" onClick={() => goToSection('home')}>Home</button>
          <NavLink
            to="/about"
            className={({ isActive }) => isActive ? 'header__nav-link active' : 'header__nav-link'}
            onClick={close}
          >
            About
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) => isActive ? 'header__nav-link active' : 'header__nav-link'}
            onClick={close}
          >
            Projects
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => isActive ? 'header__nav-link active' : 'header__nav-link'}
            onClick={close}
          >
            Contact
          </NavLink>
          <button className="header__signup">Sign up</button>
        </nav>

      </div>
    </header>
  );
};

export default Header;
