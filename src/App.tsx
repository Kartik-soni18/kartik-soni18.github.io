import { Routes, Route } from 'react-router-dom';
import Navigation from './sections/Navigation';
import Hero from './sections/Hero';
import SkillsTicker from './sections/SkillsTicker';
import AlumniArchives from './sections/AlumniArchives';
import Footer from './sections/Footer';
import CapabilityDetail from './sections/CapabilityDetail';
import PortfolioAssistant from './components/PortfolioAssistant';

function HomePage() {
  return (
    <div className="site-shell">
      <Navigation />

      <main>
        <Hero />
        <SkillsTicker />
        <AlumniArchives />
        <Footer />
        <PortfolioAssistant />
      </main>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/capability/:slug" element={<CapabilityDetail />} />
    </Routes>
  );
}
