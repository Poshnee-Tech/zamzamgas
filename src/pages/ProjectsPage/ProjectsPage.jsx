import { Link } from 'react-router-dom';
import CTA from '../../components/CTA/CTA';
import Footer from '../../components/Footer/Footer';
import './ProjectsPage.css';

export const projects = [
  {
    id: 'biogas-plant-faisalabad',
    title: 'Biogas Plant Faisalabad',
    image: '/images/project-1.webp',
    descriptionText:
      'Our upcoming facility in Faisalabad will soon join the ranks of our pioneering biogas projects, harnessing organic waste to produce clean energy.',
    description: (
      <> Our upcoming facility in <span className="ph">Faisalabad</span> will soon join the ranks of our{' '}
        <span className="ph">pioneering biogas projects,</span> harnessing <span className="ph">organic waste</span>{' '}
        to produce <span className="ph">clean energy.</span>
      </>
    ),
  },
  {
    id: 'biogas-plant-lahore',
    title: 'Biogas Plant Lahore',
    image: '/images/project-2.webp',
    descriptionText:
      'Another state-of-the-art biogas plant is currently under construction in Lahore, further solidifying our position as a leader in renewable energy.',
    description: (
      <>Another state-of-the-art biogas plant is currently under construction in{' '}
        <span className="ph">Lahore,</span> further <span className="ph">solidifying our position</span>{' '}
        as a leader in renewable energy.
      </>
    ),
  },
  {
    id: 'nurbagla-biogas-plant',
    title: 'Nurbagla Biogas Plant, Badin, Sindh',
    image: '/images/project-3.webp',
    descriptionText:
      'Our flagship processing plant has been successfully operating in Nurbagla, Badin, since 2019, serving as a model for sustainable energy production in the region. At Nurbagla, we capture, process and compress flare gas which otherwise would have been wasted.',
    description: (
      <> Our flagship processing plant has been successfully{' '}
        <span className="ph">operating in Nurbagla, Badin, since 2019,</span> serving as a model for{' '}
        <span className="ph">sustainable energy production</span> in the region. At Nurbagla, we capture,
        process and compress flare gas which otherwise would have been wasted.
      </>
    ),
  },
  {
    id: 'cng-stations',
    title: 'CNG Stations',
    image: '/images/project-4.webp',
    descriptionText:
      'We operate four Compressed Natural Gas (CNG) stations across Punjab and Sindh, catering to thousands of vehicles daily. These stations provide a cleaner alternative fuel source, reducing greenhouse gas emissions and contributing to a healthier environment.',
    description: (
      <>We operate four Compressed Natural Gas (CNG) stations across{' '}
        <span className="ph">Punjab and Sindh,</span> catering to thousands of vehicles daily. These stations
        provide a <span className="ph">cleaner</span> alternative fuel source, reducing greenhouse gas emissions
        and contributing to a <span className="ph">healthier environment.</span>
      </>
    ),
  },
];

const ProjectsPage = () => (
  <>
    {/* Hero */}
    <section className="pp-hero">
      <div className="pp-hero__overlay" />
      <h1 className="pp-hero__title">PROJECTS</h1>
      
    </section>

    {/* Projects Grid */}
    <section className="pp-body">
      <div className="pp-container">
        <h2 className="pp-heading">Our Projects</h2>
        <p className="pp-subtitle">
          At Zam Zam Gas, we're committed to turning our vision into reality through innovative projects
          that make a real difference. Here are some of our notable projects:
        </p>

        <div className="pp-grid">
          {projects.map((p) => (
            <Link to={`/projects/${p.id}`} key={p.id} className="pp-card">
              <div className="pp-card__img-wrap">
                <img src={p.image} alt={p.title} />
              </div>
              <h3 className="pp-card__title">{p.title}</h3>
              <p className="pp-card__desc">{p.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>

    <CTA />
    <Footer />
  </>
);

export default ProjectsPage;
