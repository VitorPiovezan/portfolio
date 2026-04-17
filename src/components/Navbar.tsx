import { useState } from 'react';

const navLinks = [
  { label: 'Sobre', href: '#about' },
  { label: 'Tech', href: '#tech' },
  { label: 'Experiência', href: '#experience' },
  { label: 'Projetos', href: '#projects' },
  { label: 'Contato', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

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
          style={{ alignItems: 'center', gap: 32 }}
        >
          {navLinks.map(link => (
            <a
              key={link.label}
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
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden"
          style={{
            color: '#94a3b8',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: 8,
            display: 'flex',
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
                key={link.label}
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
