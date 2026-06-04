import { Link } from 'react-router-dom';
import './NotFoundPage.css';

const NotFoundPage = () => (
  <section className="nfp">
    <h1 className="nfp__code">404</h1>
    <p className="nfp__msg">Page not found.</p>
    <Link to="/" className="nfp__btn">Back to Home</Link>
  </section>
);

export default NotFoundPage;
