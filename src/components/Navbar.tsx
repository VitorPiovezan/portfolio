import { useState } from 'react';
import { useI18n } from '../i18n/context';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { locale, setLocale, t } = useI18n();

  const navLinks = [
    { label: t.nav.about, href: '#about' },
    { label: t.nav.tech, href: '#tech' },
    { label: t.nav.experience, href: '#experience' },
    { label: t.nav.projects, href: '#projects' },
    { label: t.nav.contact, href: '#contact' },
  ];

  const toggleLocale = () => {
    setLocale(locale === 'pt-BR' ? 'en-US' : 'pt-BR');
  };

  const langBtn: React.CSSProperties = {
    background: 'none',
    border: '1px solid #1e1e2e',
    color: '#94a3b8',
    padding: '4px 10px',
    borderRadius: 6,
    fontSize: 12,
    cursor: 'pointer',
    fontWeight: 500,
    transition: 'border-color 0.2s, color 0.2s',
  };

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        backgroundColor: 'rgba(10,10,15,0.85)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid #1e1e2e',
      }}
    >
      <div
        style={{
          maxWidth: 1024,
          margin: '0 auto',
          padding: '0 24px',
          height: 64,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <a
          href="#"
          style={{
            color: '#f1f5f9',
            fontWeight: 700,
            fontSize: 22,
            textDecoration: 'none',
            flexShrink: 0,
          }}
        >
          VP<span style={{ color: '#8b5cf6' }}>.</span>
        </a>

        <div
          className="hidden md:flex"
          style={{ alignItems: 'center', gap: 28 }}
        >
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              style={{
                color: '#94a3b8',
                fontSize: 14,
                textDecoration: 'none',
                transition: 'color 0.2s',
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = '#8b5cf6')}
              onMouseLeave={e => (e.currentTarget.style.color = '#94a3b8')}
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={toggleLocale}
            style={langBtn}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = '#8b5cf6';
              e.currentTarget.style.color = '#8b5cf6';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = '#1e1e2e';
              e.currentTarget.style.color = '#94a3b8';
            }}
          >
            {locale === 'pt-BR' ? 'EN' : 'PT'}
          </button>
        </div>

        <div
          className="md:hidden flex"
          style={{ alignItems: 'center', gap: 12 }}
        >
          <button onClick={toggleLocale} style={langBtn}>
            {locale === 'pt-BR' ? 'EN' : 'PT'}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            style={{
              color: '#94a3b8',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: 8,
            }}
            aria-label="Toggle menu"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              {isOpen ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <path d="M3 12h18M3 6h18M3 18h18" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <div
          className="md:hidden"
          style={{
            backgroundColor: 'rgba(10,10,15,0.95)',
            borderBottom: '1px solid #1e1e2e',
          }}
        >
          <div
            style={{
              padding: '16px 24px',
              display: 'flex',
              flexDirection: 'column',
              gap: 16,
            }}
          >
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                style={{
                  color: '#94a3b8',
                  textDecoration: 'none',
                  fontSize: 16,
                }}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
