import { useParams, Link } from 'react-router-dom';
import { projects } from '../ProjectsPage/ProjectsPage';
import CTA from '../../components/CTA/CTA';
import Footer from '../../components/Footer/Footer';
import './ProjectDetailPage.css';

const ProjectDetailPage = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <>
        <section className="pdp-notfound">
          <h2>Project not found.</h2>
          <Link to="/projects" className="pdp-back-btn">← Back to Projects</Link>
        </section>
        <Footer />
      </>
    );
  }

  return (
    <>
      {/* ── Hero ── */}
      <section
        className="pdp-hero"
        style={{ backgroundImage: `url(${project.image})` }}
      >
        <div className="pdp-hero__overlay" />
        <h1 className="pdp-hero__title">{project.title.toUpperCase()}</h1>
      </section>

      {/* ── Content ── */}
      <section className="pdp-body">
        <div className="pdp-body__container">
          <Link to="/projects" className="pdp-back">← Back to Projects</Link>

          <div className="pdp-content">
            <div className="pdp-img">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="pdp-info">
              <h2 className="pdp-info__title">{project.title}</h2>
              <p className="pdp-info__desc">{project.descriptionText}</p>
              <Link to="/contact" className="pdp-info__cta">Get In Touch</Link>
            </div>
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </>
  );
};

export default ProjectDetailPage;
