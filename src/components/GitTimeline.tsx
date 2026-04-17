import { useState, useEffect, useRef } from 'react';
import { useFadeIn } from '../hooks/useFadeIn';
import { experiences } from '../data/portfolio';

function randomHash() {
  return Math.random().toString(16).slice(2, 9);
}

const commits = experiences.map((exp, i) => ({
  hash: randomHash(),
  branch: i === 0 ? 'main' : `feature/career-${i}`,
  date: exp.period,
  author: 'Vitor Piovezan',
  message: `${exp.role} @ ${exp.company}`,
  description: exp.description,
  techs: exp.techs,
  isCurrent: i === 0,
}));

type Phase = 'typing' | 'output';

export default function GitTimeline() {
  const { ref, isVisible } = useFadeIn(0.2);
  const [phase, setPhase] = useState<Phase>('typing');
  const [typed, setTyped] = useState('');
  const [visibleCommits, setVisibleCommits] = useState(0);
  const startedRef = useRef(false);
  const command = 'git log --graph --oneline --all --career';

  useEffect(() => {
    if (!isVisible || startedRef.current) return;
    startedRef.current = true;

    let i = 0;
    const typeInterval = setInterval(() => {
      i++;
      setTyped(command.slice(0, i));
      if (i >= command.length) {
        clearInterval(typeInterval);
        setTimeout(() => setPhase('output'), 300);
      }
    }, 35);
    return () => clearInterval(typeInterval);
  }, [isVisible]);

  useEffect(() => {
    if (phase !== 'output') return;
    let count = 0;
    const revealInterval = setInterval(() => {
      count++;
      setVisibleCommits(count);
      if (count >= commits.length) clearInterval(revealInterval);
    }, 400);
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
    minHeight: 200,
  };

  const commitWrap: React.CSSProperties = {
    display: 'flex',
    gap: 16,
    marginBottom: 24,
  };

  const graphLine: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: 20,
    flexShrink: 0,
  };

  const graphDot = (isCurrent: boolean): React.CSSProperties => ({
    width: 12,
    height: 12,
    borderRadius: '50%',
    backgroundColor: isCurrent ? '#34d399' : '#8b5cf6',
    border: isCurrent ? '2px solid #6ee7b7' : '2px solid #a78bfa',
    flexShrink: 0,
  });

  const graphStem: React.CSSProperties = {
    width: 2,
    flex: 1,
    backgroundColor: '#21262d',
    minHeight: 20,
  };

  const commitContent: React.CSSProperties = {
    flex: 1,
  };

  const commitHeader: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: 8,
    flexWrap: 'wrap',
    marginBottom: 6,
  };

  const hashStyle: React.CSSProperties = {
    color: '#fbbf24',
    fontSize: 12,
  };

  const branchTag: React.CSSProperties = {
    padding: '1px 8px',
    borderRadius: 4,
    fontSize: 11,
    fontWeight: 600,
  };

  const currentBranch: React.CSSProperties = {
    ...branchTag,
    backgroundColor: 'rgba(52, 211, 153, 0.15)',
    color: '#34d399',
    border: '1px solid rgba(52, 211, 153, 0.3)',
  };

  const otherBranch: React.CSSProperties = {
    ...branchTag,
    backgroundColor: 'rgba(139, 92, 246, 0.15)',
    color: '#a78bfa',
    border: '1px solid rgba(139, 92, 246, 0.3)',
  };

  const messageStyle: React.CSSProperties = {
    color: '#f1f5f9',
    fontWeight: 600,
    fontSize: 14,
    marginBottom: 4,
    fontFamily: "'Inter', system-ui, sans-serif",
  };

  const metaStyle: React.CSSProperties = {
    color: '#8b949e',
    fontSize: 11,
    marginBottom: 8,
  };

  const descStyle: React.CSSProperties = {
    color: '#94a3b8',
    fontSize: 13,
    lineHeight: 1.6,
    marginBottom: 10,
    fontFamily: "'Inter', system-ui, sans-serif",
  };

  const techRow: React.CSSProperties = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 6,
  };

  const techTag: React.CSSProperties = {
    padding: '2px 8px',
    backgroundColor: '#1c2128',
    border: '1px solid #30363d',
    borderRadius: 4,
    color: '#c9d1d9',
    fontSize: 11,
  };

  return (
    <div ref={ref} style={termBg}>
      <div style={titleBar}>
        <div style={dot('#ff5f57')} />
        <div style={dot('#febc2e')} />
        <div style={dot('#28c840')} />
        <span style={{ color: '#8b949e', fontSize: 12, marginLeft: 8 }}>
          vitor@career:~/experience
        </span>
      </div>

      <div style={body}>
        <div style={{ display: 'flex', gap: 8, marginBottom: 20 }}>
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

        {phase === 'output' &&
          commits.slice(0, visibleCommits).map((commit, i) => (
            <div key={commit.hash} style={commitWrap}>
              <div style={graphLine}>
                <div style={graphDot(commit.isCurrent)} />
                {i < commits.length - 1 && <div style={graphStem} />}
              </div>
              <div style={commitContent}>
                <div style={commitHeader}>
                  <span style={hashStyle}>{commit.hash}</span>
                  <span style={commit.isCurrent ? currentBranch : otherBranch}>
                    {commit.branch}
                  </span>
                  <span style={{ color: '#8b949e', fontSize: 11 }}>
                    ({commit.date})
                  </span>
                </div>
                <div style={messageStyle}>{commit.message}</div>
                <div style={metaStyle}>Author: {commit.author}</div>
                <div style={descStyle}>{commit.description}</div>
                <div style={techRow}>
                  {commit.techs.map(t => (
                    <span key={t} style={techTag}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}

        {phase === 'output' && visibleCommits >= commits.length && (
          <div
            style={{
              color: '#8b949e',
              marginTop: 8,
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

      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </div>
  );
}
