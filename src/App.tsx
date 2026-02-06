import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BeforeAfter from './components/BeforeAfter';
import Services from './components/Services';
import Results from './components/Results';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import FooterCTA from './components/FooterCTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />
      <main>
        <Hero />
        <BeforeAfter />
        <Services />
        <Results />
        <Portfolio />
        <Testimonials />
        <FooterCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;