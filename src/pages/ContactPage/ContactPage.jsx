import { useState } from 'react';
import Footer from '../../components/Footer/Footer';
import './ContactPage.css';

const ContactPage = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* ── Hero Banner ── */}
      <section className="cp-hero">
        <div className="cp-hero__overlay" />
        <h1 className="cp-hero__title">CONTACT</h1>
      </section>

      {/* ── Contact Content ── */}
      <section className="cp-body">
        <div className="cp-body__container">

          {/* Left — Contact Info */}
          <div className="cp-info">
            <h2 className="cp-info__heading">Contact Us</h2>
            <p className="cp-info__quote">
              "Reach out to Zamzamgas for all your gas-related needs. We're
              here to assist you with reliable and efficient service."
            </p>

            <ul className="cp-info__list">
              <li>
                <span className="cp-info__icon">
                  {/* Location */}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 6-9 13-9 13S3 16 3 10a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </span>
                <span>NE-208, Tipu Road, Rawalpindi</span>
              </li>
              <li>
                <span className="cp-info__icon">
                  {/* Email */}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </span>
                <a href="mailto:info@zamzamgas.com">info@zamzamgas.com</a>
              </li>
              <li>
                <span className="cp-info__icon">
                  {/* Phone */}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.81a16 16 0 0 0 6.29 6.29l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </span>
                <a href="tel:+92518896268">+92-51-8896268</a>
              </li>
            </ul>
          </div>

          {/* Right — Contact Form */}
          <div className="cp-form-wrap">
            {submitted ? (
              <div className="cp-form__success">
                <svg viewBox="0 0 24 24" fill="none" stroke="#e05543" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                  <polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
                <h3>Message Sent!</h3>
                <p>Thank you for reaching out. We'll get back to you shortly.</p>
              </div>
            ) : (
              <form className="cp-form" onSubmit={handleSubmit}>
                <div className="cp-form__row">
                  <div className="cp-form__field">
                    <label htmlFor="name">Full Name <span>*</span></label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Your full name"
                      value={form.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="cp-form__field">
                    <label htmlFor="email">Email Address <span>*</span></label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="cp-form__field">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="+92-XXX-XXXXXXX"
                    value={form.phone}
                    onChange={handleChange}
                  />
                </div>

                <div className="cp-form__field">
                  <label htmlFor="message">Message <span>*</span></label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    placeholder="How can we help you?"
                    value={form.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <button type="submit" className="cp-form__submit">Send Message</button>
              </form>
            )}
          </div>

        </div>
      </section>

      {/* ── Google Map ── */}
      <section className="cp-map">
        <iframe
          title="Zam Zam Gas Location"
          src="https://www.google.com/maps?q=NE-208+Tipu+Road+Rawalpindi+Pakistan&output=embed"
          width="100%"
          height="420"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>

      <Footer />
    </>
  );
};

export default ContactPage;
