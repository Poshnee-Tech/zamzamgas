import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero__overlay" />
      <div className="hero__content">
        <p className="hero__tagline">Leading Pakistan Towards Sustainable Energy</p>
        <h1 className="hero__title">
          Virtual Pipeline and<br />
          Biomethane<br />
          Solutions
        </h1>
        <a href="#about" className="hero__btn">Learn More</a>
      </div>
      <div className="hero__arrow">
        <svg width="20" height="28" viewBox="0 0 20 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 2L10 26M10 26L2 18M10 26L18 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
