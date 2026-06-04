import './WhatWeDo.css';

const services = [
  {
    id: 'cng',
    title: 'CNG Station Operations',
    image: '/images/cng-station.jpg',
    description: (
      <>
        We operate a network of CNG stations across the country, primarily in{' '}
        <span className="wwd-highlight">Punjab and Sindh,</span>{' '}
        providing clean-burning fuel to thousands of vehicles every day. Our stations are designed to be
        efficient, safe, and convenient, with a focus on{' '}
        <span className="wwd-highlight">excellent customer service.</span>
      </>
    ),
  },
  {
    id: 'flare',
    title: 'Flare Gas Utilization',
    image: '/images/flare-gas.png',
    description: (
      <>
        We capture, process and compress flare gas into pipe-line ready natural gas. This innovative approach
        reduces waste, lowers emissions, and generates power for industries and communities.
      </>
    ),
  },
  {
    id: 'biomethane',
    title: 'Biomethane Development',
    image: '/images/biomethane.jpg',
    description: (
      <>
        We're pioneering the development of biomethane, a renewable energy source produced from organic waste.
        Our biomethane projects reduce greenhouse gas emissions,{' '}
        <span className="wwd-highlight">promote sustainable agriculture,</span>{' '}
        and create clean energy for a greener future.
      </>
    ),
  },
];

const WhatWeDo = () => {
  return (
    <section className="wwd" id="projects">
      <div className="wwd__container">
        <h2 className="wwd__heading">What We Do!</h2>
        <p className="wwd__subtitle">
          At Zam Zam Gas, we're dedicated to providing{' '}
          <strong>innovative energy solutions</strong> that make a positive impact on our{' '}
          <strong>environment and communities.</strong>
        </p>

        <div className="wwd__grid">
          {services.map((s) => (
            <div key={s.id} className="wwd__card">
              <div className="wwd__card-img">
                <img src={s.image} alt={s.title} />
              </div>
              <h3 className="wwd__card-title">{s.title}</h3>
              <p className="wwd__card-desc">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
