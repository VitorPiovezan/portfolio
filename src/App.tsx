import ClickSpark from './components/ClickSpark';
import Navbar from './components/Navbar';
import SmoothScroll from './components/SmoothScroll';
import AnimatedDivider from './components/AnimatedDivider';
import Hero from './sections/Hero';
import About from './sections/About';
import TechSection from './sections/TechSection';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Contact from './sections/Contact';

export default function App() {
  return (
    <SmoothScroll>
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
            <AnimatedDivider color="#8b5cf6" />
            <About />
            <AnimatedDivider color="#06b6d4" />
            <TechSection />
            <AnimatedDivider color="#22d3ee" />
            <Experience />
            <AnimatedDivider color="#ec4899" />
            <Projects />
            <AnimatedDivider color="#a855f7" />
            <Contact />
          </main>
          <footer
            style={{
              padding: '40px 32px',
              borderTop: '1px solid #1e1e2e',
              textAlign: 'center',
              color: '#64748b',
              fontSize: 14,
            }}
          >
            Vitor Piovezan - {new Date().getFullYear()}
          </footer>
        </ClickSpark>
      </div>
    </SmoothScroll>
  );
}
