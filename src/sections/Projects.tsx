import FadeIn from '../components/FadeIn';
import CodeEditor from '../components/CodeEditor';
import Particles from '../components/Particles';
import { useIsMobile } from '../hooks/useIsMobile';

const section: React.CSSProperties = {
  position: 'relative',
  overflow: 'hidden',
};
const bgLayer: React.CSSProperties = {
  position: 'absolute',
  inset: 0,
  zIndex: 0,
};
const wrap: React.CSSProperties = {
  padding: '120px 32px',
  maxWidth: 1024,
  margin: '0 auto',
  position: 'relative',
  zIndex: 1,
};
const h2Style: React.CSSProperties = {
  fontSize: 36,
  fontWeight: 700,
  color: '#f1f5f9',
  marginBottom: 48,
};

export default function Projects() {
  const isMobile = useIsMobile();

  return (
    <section id="projects" style={section}>
      {!isMobile && (
        <div style={bgLayer}>
          <Particles
            particleCount={80}
            particleSpread={10}
            speed={0.03}
            particleColors={['#ec4899', '#f472b6', '#a855f7']}
            particleBaseSize={60}
            sizeRandomness={0.6}
            cameraDistance={30}
            alphaParticles
            moveParticlesOnHover
            particleHoverFactor={0.3}
          />
        </div>
      )}
      <div style={wrap}>
        <FadeIn>
          <h2 style={h2Style}>Projetos</h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <CodeEditor />
        </FadeIn>
      </div>
    </section>
  );
}
