import './App.css';
import { Analytics } from '@vercel/analytics/react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import FeaturesSection from './components/FeaturesSection';
import HowItWorksSection from './components/HowItWorksSection';
import ProofSection from './components/ProofSection';
import TrustSection from './components/TrustSection';
import RealLifeScenarioSection from './components/RealLifeScenarioSection';
import FAQSection from './components/FAQSection';
import NotifyMeSection from './components/NotifyMeSection';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <HowItWorksSection />
      <ProofSection />
      <TrustSection />
      <RealLifeScenarioSection />
      <FAQSection />
      <NotifyMeSection />
      <Footer />
      <Analytics />
      {/* Other sections (Email Signup, Footer) will go here */}
    </>
  );
}

export default App;
