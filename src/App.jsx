import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 font-sans">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <CTA />
      </main>
    </div>
  );
}

export default App;
