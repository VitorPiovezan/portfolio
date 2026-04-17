import { useState, useEffect, useRef } from 'react';
import { useFadeIn } from '../hooks/useFadeIn';
import { techStack } from '../data/portfolio';

const command = 'tech-stacks --list -u "Vitor Piovezan"';

const categories = [
  { title: 'Frontend', items: techStack.frontend, color: '#8b5cf6' },
  { title: 'Mobile', items: techStack.mobile, color: '#22d3ee' },
  { title: 'Backend', items: techStack.backend, color: '#f472b6' },
  { title: 'AI & LLMs', items: techStack.ai, color: '#fbbf24' },
  { title: 'Tools', items: techStack.tools, color: '#fb923c' },
  { title: 'Testing', items: techStack.testing, color: '#34d399' },
];

type Phase = 'typing' | 'loading' | 'output';

export default function TerminalTUI() {
  const { ref, isVisible } = useFadeIn(0.2);
  const [phase, setPhase] = useState<Phase>('typing');
  const [typed, setTyped] = useState('');
  const [loadDots, setLoadDots] = useState('');
  const [visibleCats, setVisibleCats] = useState(0);
  const startedRef = useRef(false);

  useEffect(() => {
    if (!isVisible || startedRef.current) return;
    startedRef.current = true;

    let i = 0;
    const typeInterval = setInterval(() => {
      i++;
      setTyped(command.slice(0, i));
      if (i >= command.length) {
        clearInterval(typeInterval);
        setTimeout(() => setPhase('loading'), 300);
      }
    }, 40);

    return () => clearInterval(typeInterval);
  }, [isVisible]);

  useEffect(() => {
    if (phase !== 'loading') return;
    let dots = 0;
    const loadInterval = setInterval(() => {
      dots++;
      setLoadDots('.'.repeat((dots % 3) + 1));
      if (dots >= 6) {
        clearInterval(loadInterval);
        setPhase('output');
      }
    }, 300);
    return () => clearInterval(loadInterval);
  }, [phase]);

  useEffect(() => {
    if (phase !== 'output') return;
    let count = 0;
    const revealInterval = setInterval(() => {
      count++;
      setVisibleCats(count);
      if (count >= categories.length) clearInterval(revealInterval);
    }, 200);
    return () => clearInterval(revealInterval);
  }, [phase]);

  const termBg: React.CSSProperties = {
    backgroundColor: '#0d1117',
    borderRadius: 12,
    border: '1px solid #21262d',
    overflow: 'hidden',
    fontFamily: "'JetBrains Mono', 'Fira Code', 'Cascadia Code', monospace",
    fontSize: 13,
    lineHeight: 1.6,
    maxWidth: 800,
    margin: '0 auto',
  };

  const titleBar: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: 8,
    padding: '12px 16px',
    backgroundColor: '#161b22',
    borderBottom: '1px solid #21262d',
  };

  const dot = (color: string): React.CSSProperties => ({
    width: 12,
    height: 12,
    borderRadius: '50%',
    backgroundColor: color,
  });

  const body: React.CSSProperties = {
    padding: '20px 24px',
    minHeight: 300,
  };

  const promptLine: React.CSSProperties = {
    display: 'flex',
    gap: 8,
    marginBottom: 16,
  };

  const catBlock: React.CSSProperties = {
    marginBottom: 16,
  };

  const catHeader = (color: string): React.CSSProperties => ({
    color,
    fontWeight: 600,
    marginBottom: 6,
    display: 'flex',
    alignItems: 'center',
    gap: 8,
  });

  const itemRow: React.CSSProperties = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 6,
    paddingLeft: 20,
  };

  const techItem: React.CSSProperties = {
    padding: '3px 10px',
    backgroundColor: '#1c2128',
    border: '1px solid #30363d',
    borderRadius: 4,
    color: '#c9d1d9',
    fontSize: 12,
  };

  return (
    <div ref={ref} style={termBg}>
      <div style={titleBar}>
        <div style={dot('#ff5f57')} />
        <div style={dot('#febc2e')} />
        <div style={dot('#28c840')} />
        <span style={{ color: '#8b949e', fontSize: 12, marginLeft: 8 }}>
          vitor@portfolio:~
        </span>
      </div>

      <div style={body}>
        <div style={promptLine}>
          <span style={{ color: '#34d399' }}>$</span>
          <span style={{ color: '#c9d1d9' }}>
            {typed}
            {phase === 'typing' && (
              <span
                style={{
                  animation: 'blink 1s step-end infinite',
                  color: '#8b5cf6',
                }}
              >
                |
              </span>
            )}
          </span>
        </div>

        {phase === 'loading' && (
          <div style={{ color: '#8b949e' }}>Fetching tech stacks{loadDots}</div>
        )}

        {phase === 'output' && (
          <div>
            <div
              style={{
                color: '#8b949e',
                marginBottom: 16,
                borderBottom: '1px solid #21262d',
                paddingBottom: 12,
              }}
            >
              <span style={{ color: '#34d399' }}>
                Found {categories.reduce((a, c) => a + c.items.length, 0)}{' '}
                technologies
              </span>{' '}
              across {categories.length} categories
            </div>

            {categories.slice(0, visibleCats).map(cat => (
              <div key={cat.title} style={catBlock}>
                <div style={catHeader(cat.color)}>
                  <span>{'>'}</span>
                  <span>{cat.title}</span>
                  <span
                    style={{ color: '#8b949e', fontWeight: 400, fontSize: 11 }}
                  >
                    ({cat.items.length})
                  </span>
                </div>
                <div style={itemRow}>
                  {cat.items.map(item => (
                    <span key={item} style={techItem}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}

            {visibleCats >= categories.length && (
              <div
                style={{
                  color: '#8b949e',
                  marginTop: 16,
                  borderTop: '1px solid #21262d',
                  paddingTop: 12,
                }}
              >
                <span style={{ color: '#34d399' }}>$</span>
                <span
                  style={{
                    animation: 'blink 1s step-end infinite',
                    color: '#8b5cf6',
                    marginLeft: 8,
                  }}
                >
                  |
                </span>
              </div>
            )}
          </div>
        )}
      </div>

      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </div>
  );
}
