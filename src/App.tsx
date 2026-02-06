import Hero from './components/Hero';
import BeforeAfter from './components/BeforeAfter';
import Services from './components/Services';
import Results from './components/Results';
import Testimonials from './components/Testimonials';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <BeforeAfter />
        <Services />
        <Results />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}

export default App;