import FadeIn from '../components/FadeIn';
import AIChatSimulator from '../components/AIChatSimulator';
import Aurora from '../components/Aurora';
import { useIsMobile } from '../hooks/useIsMobile';

const section: React.CSSProperties = {
  position: 'relative',
  overflow: 'hidden',
};
const bgLayer: React.CSSProperties = {
  position: 'absolute',
  inset: 0,
  zIndex: 0,
  opacity: 0.2,
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

export default function About() {
  const isMobile = useIsMobile();

  return (
    <section id="about" style={section}>
      {!isMobile && (
        <div style={bgLayer}>
          <Aurora
            colorStops={['#0c4a6e', '#164e63', '#1e1b4b']}
            amplitude={0.6}
            blend={0.7}
            speed={0.2}
          />
        </div>
      )}
      <div style={wrap}>
        <FadeIn>
          <h2 style={h2Style}>Sobre Mim</h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <AIChatSimulator />
        </FadeIn>
      </div>
    </section>
  );
}
