import './About.css';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about__container">
        <p className="about__label">About Us</p>
        <h2 className="about__heading">
          23 Years of Innovation and Excellence<br />
          in Gas Processing and Compression
        </h2>

        <div className="about__body">
          <p>
            Zam Zam Gas is a{' '}
            <span className="highlight">pioneering energy company with a rich history of innovation and growth.</span>{' '}
            Our story began in 2001 with a single CNG station,{' '}
            <span className="highlight">a spark that ignited our passion for innovative energy solutions.</span>{' '}
            Since then, we've been driven by{' '}
            <span className="highlight">a relentless pursuit of excellence</span>{' '}
            and{' '}
            <span className="highlight">a commitment to sustainability.</span>
          </p>

          <p>
            A major milestone in our journey was{' '}
            <span className="highlight">the landmark agreement with OGDCL,</span>{' '}
            <span className="highlight">Pakistan's largest E&P company,</span>{' '}
            for the supply of permeate gas in{' '}
            <span className="highlight">Nurbagla, Sindh,</span>{' '}
            where we processed and compressed natural gas. This partnership not{' '}
            <span className="highlight">only expanded our reach</span>{' '}
            but also marked a{' '}
            <span className="highlight">significant step towards meeting Pakistan's growing energy demands.</span>
          </p>

          <p>
            As we continued to grow, we remained steadfast in{' '}
            <span className="highlight">our dedication to the environment.</span>{' '}
            <span className="highlight">Our latest venture into renewable energy</span>{' '}
            is a testament to this commitment. We're proud to be building{' '}
            <span className="highlight">biogas plants in Lahore and Faisalabad,</span>{' '}
            where we would be able to harness the power of nature to create a{' '}
            <span className="highlight">cleaner, healthier world.</span>
          </p>

          <p>
            Today, Zam Zam Gas is more than just an energy company – we're{' '}
            <span className="highlight">a beacon of hope for a sustainable future.</span>{' '}
            With{' '}
            <span className="highlight">a legacy of innovation</span>{' '}
            and{' '}
            <span className="highlight">a spirit of determination,</span>{' '}
            we're shaping the energy landscape of Pakistan.
          </p>
        </div>

        <a href="#values" className="about__btn">Learn More</a>
      </div>
    </section>
  );
};

export default About;
