import ClickSpark from './components/ClickSpark';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import TechSection from './sections/TechSection';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Contact from './sections/Contact';

export default function App() {
  return (
    <div style={{ minHeight: '100vh', width: '100%' }}>
      <ClickSpark
        sparkColor="#8b5cf6"
        sparkSize={12}
        sparkRadius={20}
        sparkCount={10}
      >
        <Navbar />
        <main style={{ overflowX: 'hidden' }}>
          <Hero />
          <div style={{ borderTop: '1px solid #1e1e2e' }} />
          <About />
          <div style={{ borderTop: '1px solid #1e1e2e' }} />
          <TechSection />
          <div style={{ borderTop: '1px solid #1e1e2e' }} />
          <Experience />
          <div style={{ borderTop: '1px solid #1e1e2e' }} />
          <Projects />
          <div style={{ borderTop: '1px solid #1e1e2e' }} />
          <Contact />
        </main>
        <footer
          style={{
            padding: '40px 32px',
            borderTop: '1px solid #1e1e2e',
            textAlign: 'center',
            color: '#64748b',
            fontSize: '14px',
          }}
        >
          Vitor Piovezan - {new Date().getFullYear()}
        </footer>
      </ClickSpark>
    </div>
  );
}
