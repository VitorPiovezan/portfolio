import FadeIn from '../components/FadeIn';
import Magnet from '../components/Magnet';
import GradientText from '../components/GradientText';
import Aurora from '../components/Aurora';
import { personalInfo } from '../data/portfolio';
import { useIsMobile } from '../hooks/useIsMobile';
import { useI18n } from '../i18n/context';

const socialLinks = [
  {
    label: 'GitHub',
    href: personalInfo.github,
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: personalInfo.linkedin,
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

const section: React.CSSProperties = {
  position: 'relative',
  overflow: 'hidden',
};
const bgLayer: React.CSSProperties = {
  position: 'absolute',
  inset: 0,
  zIndex: 0,
  opacity: 0.25,
};
const wrap: React.CSSProperties = {
  padding: '120px 32px',
  maxWidth: 1024,
  margin: '0 auto',
  textAlign: 'center',
  position: 'relative',
  zIndex: 1,
};
const iconLink: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 56,
  height: 56,
  borderRadius: 12,
  border: '1px solid #1e1e2e',
  backgroundColor: '#12121a',
  color: '#94a3b8',
  textDecoration: 'none',
  transition: 'color 0.2s, border-color 0.2s',
};

export default function Contact() {
  const isMobile = useIsMobile();
  const { t } = useI18n();

  return (
    <section id="contact" style={section}>
      {!isMobile && (
        <div style={bgLayer}>
          <Aurora
            colorStops={['#4c1d95', '#be185d', '#1e1b4b']}
            amplitude={0.5}
            blend={0.8}
            speed={0.15}
          />
        </div>
      )}
      <div style={wrap}>
        <FadeIn>
          <GradientText
            colors={['#8b5cf6', '#ec4899', '#8b5cf6']}
            animationSpeed={6}
            className="text-3xl md:text-4xl font-bold"
          >
            {t.contact.title}
          </GradientText>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p
            style={{
              color: '#94a3b8',
              maxWidth: 480,
              margin: '32px auto 48px',
              lineHeight: 1.7,
              fontSize: 16,
            }}
          >
            {t.contact.description}
          </p>
        </FadeIn>
        <FadeIn delay={0.2}>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 32 }}>
            {socialLinks.map(link => (
              <Magnet key={link.label} padding={15} magnetStrength={6}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  style={iconLink}
                  onMouseEnter={e => {
                    e.currentTarget.style.color = '#8b5cf6';
                    e.currentTarget.style.borderColor = '#8b5cf6';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.color = '#94a3b8';
                    e.currentTarget.style.borderColor = '#1e1e2e';
                  }}
                >
                  {link.icon}
                </a>
              </Magnet>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
