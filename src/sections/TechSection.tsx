import FadeIn from '../components/FadeIn';
import ScrollVelocity from '../components/ScrollVelocity';
import TerminalTUI from '../components/TerminalTUI';
import Aurora from '../components/Aurora';
import { useIsMobile } from '../hooks/useIsMobile';
import { useI18n } from '../i18n/context';

const wrap: React.CSSProperties = {
  padding: '120px 0',
  position: 'relative',
  overflow: 'hidden',
};
const bgLayer: React.CSSProperties = {
  position: 'absolute',
  inset: 0,
  zIndex: 0,
  opacity: 0.3,
};
const inner: React.CSSProperties = {
  padding: '0 32px',
  maxWidth: 1024,
  margin: '0 auto',
  position: 'relative',
  zIndex: 1,
};
const h2Style: React.CSSProperties = {
  fontSize: 36,
  fontWeight: 700,
  color: '#f1f5f9',
  marginBottom: 16,
};
const subStyle: React.CSSProperties = {
  color: '#94a3b8',
  fontSize: 16,
  marginBottom: 0,
};
const scrollWrap: React.CSSProperties = {
  margin: '48px 0 48px',
  overflow: 'hidden',
  position: 'relative',
  zIndex: 1,
};

export default function TechSection() {
  const isMobile = useIsMobile();
  const { t } = useI18n();

  return (
    <section id="tech" style={wrap}>
      {!isMobile && (
        <div style={bgLayer}>
          <Aurora
            colorStops={['#3b0764', '#6d28d9', '#1e1b4b']}
            amplitude={0.8}
            blend={0.6}
            speed={0.3}
          />
        </div>
      )}

      <div style={inner}>
        <FadeIn>
          <h2 style={h2Style}>{t.tech.title}</h2>
          <p style={subStyle}>{t.tech.subtitle}</p>
        </FadeIn>
      </div>

      <div style={scrollWrap}>
        <ScrollVelocity
          texts={[
            'React.js - Next.js - TypeScript - Claude - MCP Servers - RAG - Kokoro TTS - Elixir - GraphQL',
            'Kiro - Cursor - Vitest - Playwright - React Native - Zustand - Firebase - Prompt Engineering',
          ]}
          velocity={40}
          className="text-xl md:text-3xl font-bold"
          scrollerStyle={{ color: 'rgba(100,116,139,0.15)' }}
        />
      </div>

      <div style={inner}>
        <TerminalTUI />
      </div>
    </section>
  );
}
