import BlurText from '../components/BlurText';
import TextType from '../components/TextType';
import Particles from '../components/Particles';
import TiltWrapper from '../components/TiltWrapper';
import Magnet from '../components/Magnet';
import { personalInfo, rotatingRoles } from '../data/portfolio';

const section: React.CSSProperties = {
  position: 'relative',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '0 32px',
  overflow: 'hidden',
};

const particlesWrap: React.CSSProperties = {
  position: 'absolute',
  inset: 0,
  zIndex: 0,
};

const card: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 24,
  maxWidth: 720,
  textAlign: 'center',
  padding: '48px 40px',
  borderRadius: 24,
  border: 'none',
  background: 'rgba(10,10,15,0.5)',
  backdropFilter: 'none',
};

const avatarWrap: React.CSSProperties = {
  width: 140,
  height: 140,
  borderRadius: '50%',
  padding: 3,
  background: 'linear-gradient(135deg, #8b5cf6, #ec4899, #6d28d9)',
};

const avatarImg: React.CSSProperties = {
  width: '100%',
  height: '100%',
  borderRadius: '50%',
  objectFit: 'cover',
  objectPosition: 'center top',
  display: 'block',
  backgroundColor: '#8b5cf6',
};

const roleRow: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: 10,
  fontSize: 22,
  color: '#94a3b8',
};

const btnRow: React.CSSProperties = {
  display: 'flex',
  gap: 32,
  marginTop: 8,
};

const btnPrimary: React.CSSProperties = {
  display: 'inline-block',
  padding: '14px 32px',
  backgroundColor: '#8b5cf6',
  color: '#fff',
  borderRadius: 12,
  fontWeight: 500,
  textDecoration: 'none',
  fontSize: 15,
};

const btnSecondary: React.CSSProperties = {
  display: 'inline-block',
  padding: '14px 32px',
  border: '1px solid #1e1e2e',
  color: '#f1f5f9',
  borderRadius: 12,
  fontWeight: 500,
  textDecoration: 'none',
  fontSize: 15,
};

const arrow: React.CSSProperties = {
  position: 'absolute',
  bottom: 40,
  zIndex: 10,
  color: '#64748b',
};

export default function Hero() {
  return (
    <section style={section}>
      <div style={particlesWrap}>
        <Particles
          particleCount={150}
          particleSpread={12}
          speed={0.05}
          particleColors={['#8b5cf6', '#a78bfa', '#6d28d9']}
          particleBaseSize={80}
          sizeRandomness={0.8}
          cameraDistance={25}
          alphaParticles
          moveParticlesOnHover
          particleHoverFactor={0.4}
        />
      </div>

      <TiltWrapper
        rotateAmplitude={6}
        scaleOnHover={1.02}
        style={{ position: 'relative', zIndex: 10 }}
      >
        <div style={card}>
          <div style={avatarWrap}>
            <img
              src="/images/profile.png"
              alt="Vitor Piovezan"
              style={avatarImg}
            />
          </div>

          <BlurText
            text={personalInfo.name}
            className="text-5xl md:text-7xl font-bold tracking-tight"
            delay={100}
            animateBy="letters"
          />

          <div style={roleRow}>
            <span>Sou</span>
            <TextType
              text={rotatingRoles}
              typingSpeed={60}
              deletingSpeed={40}
              pauseDuration={2000}
              loop
              showCursor
              cursorCharacter="|"
              cursorClassName="text-accent"
              textColors={['#8b5cf6']}
              className="text-xl md:text-2xl font-semibold"
            />
          </div>

          <BlurText
            text={personalInfo.bio}
            className="text-base md:text-lg leading-relaxed"
            delay={30}
            animateBy="words"
            direction="bottom"
          />

          <div style={btnRow}>
            <Magnet padding={20} magnetStrength={6}>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                style={btnPrimary}
              >
                GitHub
              </a>
            </Magnet>
            <Magnet padding={20} magnetStrength={6}>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                style={btnSecondary}
              >
                LinkedIn
              </a>
            </Magnet>
          </div>
        </div>
      </TiltWrapper>

      <div style={arrow} className="animate-bounce">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </div>
    </section>
  );
}
