import CTA from '../../components/CTA/CTA';
import Footer from '../../components/Footer/Footer';
import './AboutPage.css';

const AboutPage = () => (
  <>
    {/* Hero */}
    <section className="ap-hero">
      <div className="ap-hero__overlay" />
      <h1 className="ap-hero__title">ABOUT US</h1>
    </section>

    {/* Body */}
    <section className="ap-body">
      <div className="ap-container">
        <div className="ap-left">
          <span className="ap-label">zamzamgas</span>
          <h2 className="ap-heading">Company Story!</h2>
        </div>

        <div className="ap-right">
          <p className="ap-text">
            Zam Zam Gas was founded in 2001 with a vision to revolutionize the energy
            landscape in Pakistan. Our journey began with a single CNG station, but our
            ambition was always much larger. We saw an opportunity to make a real
            difference in people's lives by providing a cleaner, more efficient alternative
            to traditional fuels. Over the years, we've grown and evolved, embracing
            new technologies and innovative solutions to meet the changing needs of
            our customers and the environment. We've expanded our operations to
            include <span className="ap-hi">biogas plants</span>, <span className="ap-hi">flare gas utilization</span>, and{' '}
            <span className="ap-hi">biomethane development</span>,
            always pushing the boundaries of what's possible.
          </p>

          <p className="ap-text">
            Today, we're proud to be a <span className="ap-hi">leading player</span> in the energy sector,
            with a <span className="ap-hi">diverse portfolio</span> of projects and a commitment to{' '}
            <span className="ap-hi">sustainability</span> that guides everything we do.
          </p>
        </div>
      </div>
    </section>

    {/* Follow Us */}
    <section className="ap-follow">
      <div className="ap-follow__center">
        <h3 className="ap-follow__heading">Follow Us</h3>
        <div className="ap-follow__divider" />
        <div className="ap-follow__icons">
          <a href="#" aria-label="Facebook">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
          </a>
          <a href="#" aria-label="Twitter">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></svg>
          </a>
          <a href="#" aria-label="Instagram">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
          </a>
          <a href="#" aria-label="Google+">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4zm9-4h-2V8h-2v2h-2v2h2v2h2v-2h2v-2z"/></svg>
          </a>
        </div>
      </div>
    </section>

    {/* Stats */}
    <section className="ap-stats">
      <div className="ap-stats__inner">
        <div className="ap-stats__left">
          <span className="ap-label">zamzamgas</span>
          <h2 className="ap-stats__heading">Numbers Speak For<br />Themselves</h2>
        </div>
        <div className="ap-stats__right">
          <div className="ap-stat">
            <span className="ap-stat__num">10</span>
            <span className="ap-stat__lbl">Products</span>
          </div>
          <div className="ap-stat">
            <span className="ap-stat__num">20</span>
            <span className="ap-stat__lbl">Years of Experience</span>
          </div>
          <div className="ap-stat">
            <span className="ap-stat__num">100</span>
            <span className="ap-stat__lbl">Completed Projects</span>
          </div>
        </div>
      </div>
      <div className="ap-stats__rule" />
    </section>

    {/* Mission & Vision */}
    <section className="ap-mv">
      <div className="ap-mv__inner">
        <h2 className="ap-mv__title">Mission and Vision</h2>
        <div className="ap-mv__grid">
          <div className="ap-mv__col">
            <h3 className="ap-mv__col-heading">Mission</h3>
            <p className="ap-mv__col-text">
              To provide <span className="ap-hi">innovative energy solutions</span> that are{' '}
              <span className="ap-hi">sustainable, efficient, and accessible</span> to all. We're
              dedicated to delivering exceptional service, building strong relationships with our
              customers and partners, and making a positive impact on the communities we serve.
            </p>
          </div>
          <div className="ap-mv__divider" />
          <div className="ap-mv__col">
            <h3 className="ap-mv__col-heading">Vision</h3>
            <p className="ap-mv__col-text">
              To be the <span className="ap-hi">leading energy company in Pakistan</span>, powering a{' '}
              <span className="ap-hi">greener future</span> for generations to come. We envision a
              future where energy is no longer a scarce resource, but a abundant and clean one. A
              future where our children can grow up in a healthier, more sustainable world. We're
              committed to making that vision a reality, one project at a time.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Founder's Message */}
    <section className="ap-founder">
      <div className="ap-founder__inner">
        <h2 className="ap-founder__title">Founder's Message!</h2>
        <p className="ap-founder__quote">
          "At Zam Zam Gas, we believe that energy is the{' '}
          <span className="ap-hi">lifeblood of progress</span>.{' '}
          <span className="ap-hi">Our journey began with a simple idea</span> – to make energy
          cleaner, more efficient, and more accessible. Today, we're proud to be at the{' '}
          <span className="ap-hi">forefront of Pakistan's energy revolution</span>. Our commitment
          to sustainability, innovation, and customer satisfaction drives everything we do.{' '}
          <span className="ap-hi">I'm honored to lead this talented team</span> of individuals who
          share my passion for making a difference. Together,{' '}
          <span className="ap-hi">we're working towards a future</span> where energy is no longer a
          challenge, but a catalyst for growth and prosperity. I invite you to join us on this
          exciting journey." – Awais Anwer Khawaja, CEO, Zam Zam Gas
        </p>
      </div>
    </section>

    <CTA />
    <Footer />
  </>
);

export default AboutPage;
