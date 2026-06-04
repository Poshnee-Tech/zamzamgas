import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import './App.css';

const HomePage          = lazy(() => import('./pages/HomePage/HomePage'));
const AboutPage         = lazy(() => import('./pages/AboutPage/AboutPage'));
const ContactPage       = lazy(() => import('./pages/ContactPage/ContactPage'));
const ProjectsPage      = lazy(() => import('./pages/ProjectsPage/ProjectsPage'));
const ProjectDetailPage = lazy(() => import('./pages/ProjectDetailPage/ProjectDetailPage'));
const NotFoundPage      = lazy(() => import('./pages/NotFoundPage/NotFoundPage'));

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Suspense fallback={<div className="app-loading" />}>
          <Routes>
            <Route path="/"             element={<HomePage />} />
            <Route path="/about"        element={<AboutPage />} />
            <Route path="/contact"      element={<ContactPage />} />
            <Route path="/projects"     element={<ProjectsPage />} />
            <Route path="/projects/:id" element={<ProjectDetailPage />} />
            <Route path="*"             element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </main>
    </BrowserRouter>
  );
}

export default App;
