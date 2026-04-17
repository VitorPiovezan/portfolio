import FadeIn from '../components/FadeIn';
import GitTimeline from '../components/GitTimeline';
import Particles from '../components/Particles';

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

export default function Experience() {
  return (
    <section id="experience" style={section}>
      <div style={bgLayer}>
        <Particles
          particleCount={60}
          particleSpread={8}
          speed={0.02}
          particleColors={['#22d3ee', '#06b6d4', '#0891b2']}
          particleBaseSize={50}
          sizeRandomness={0.5}
          cameraDistance={30}
          alphaParticles
          moveParticlesOnHover
          particleHoverFactor={0.2}
        />
      </div>
      <div style={wrap}>
        <FadeIn>
          <h2 style={h2Style}>Experiência</h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <GitTimeline />
        </FadeIn>
      </div>
    </section>
  );
}
