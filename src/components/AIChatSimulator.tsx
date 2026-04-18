import { useState, useEffect, useRef, useMemo, type ReactNode } from 'react';
import { useFadeIn } from '../hooks/useFadeIn';
import { useI18n } from '../i18n/context';

interface TextPart {
  text: string;
  bold?: boolean;
  italic?: boolean;
}

type Line = string | TextPart[];

function responseToParts(
  response: readonly { text: string; bold?: boolean; italic?: boolean }[],
): Line[] {
  const lines: Line[] = [];
  let currentLine: TextPart[] = [];

  for (const part of response) {
    const segments = part.text.split('\n');
    segments.forEach((seg, i) => {
      if (i > 0) {
        lines.push(currentLine.length > 0 ? currentLine : '');
        currentLine = [];
      }
      if (seg) {
        currentLine.push({ text: seg, bold: part.bold, italic: part.italic });
      }
    });
  }
  if (currentLine.length > 0) lines.push(currentLine);
  return lines;
}

function linesToPlainText(lines: Line[]): string {
  return lines
    .map(line => {
      if (typeof line === 'string') return line;
      return line.map(p => p.text).join('');
    })
    .join('\n');
}

function renderRichLine(line: Line, key: number): ReactNode {
  if (typeof line === 'string') return <div key={key}>{line || '\u00A0'}</div>;
  return (
    <div key={key}>
      {line.map((part, i) => {
        if (part.bold && part.italic)
          return (
            <strong key={i}>
              <em>{part.text}</em>
            </strong>
          );
        if (part.bold)
          return (
            <strong key={i} style={{ color: '#f1f5f9' }}>
              {part.text}
            </strong>
          );
        if (part.italic)
          return (
            <em key={i} style={{ color: '#c9d1d9' }}>
              {part.text}
            </em>
          );
        return <span key={i}>{part.text}</span>;
      })}
    </div>
  );
}

type Phase = 'user-typing' | 'thinking' | 'ai-streaming' | 'done';

export default function AIChatSimulator() {
  const { ref, isVisible } = useFadeIn(0.2);
  const { t, locale } = useI18n();
  const [phase, setPhase] = useState<Phase>('user-typing');
  const [userTyped, setUserTyped] = useState('');
  const [charCount, setCharCount] = useState(0);
  const [dots, setDots] = useState('');
  const startedRef = useRef(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const userMessage = t.about.userMessage;
  const aiLines = useMemo(() => responseToParts(t.about.aiResponse), [locale]);
  const fullPlainText = useMemo(() => linesToPlainText(aiLines), [aiLines]);
  const thinkingText = locale === 'pt-BR' ? 'Pensando' : 'Thinking';

  useEffect(() => {
    setPhase('user-typing');
    setUserTyped('');
    setCharCount(0);
    setDots('');
    startedRef.current = false;
  }, [locale]);

  useEffect(() => {
    if (!isVisible || startedRef.current) return;
    startedRef.current = true;
    let i = 0;
    const typeInterval = setInterval(() => {
      i++;
      setUserTyped(userMessage.slice(0, i));
      if (i >= userMessage.length) {
        clearInterval(typeInterval);
        setTimeout(() => setPhase('thinking'), 400);
      }
    }, 50);
    return () => clearInterval(typeInterval);
  }, [isVisible, userMessage]);

  useEffect(() => {
    if (phase !== 'thinking') return;
    let d = 0;
    const thinkInterval = setInterval(() => {
      d++;
      setDots('.'.repeat((d % 3) + 1));
      if (d >= 6) {
        clearInterval(thinkInterval);
        setPhase('ai-streaming');
      }
    }, 400);
    return () => clearInterval(thinkInterval);
  }, [phase]);

  useEffect(() => {
    if (phase !== 'ai-streaming') return;
    let idx = 0;
    const streamInterval = setInterval(() => {
      idx += 3;
      setCharCount(idx);
      if (idx >= fullPlainText.length) {
        clearInterval(streamInterval);
        setPhase('done');
      }
    }, 12);
    return () => clearInterval(streamInterval);
  }, [phase, fullPlainText.length]);

  useEffect(() => {
    if (scrollRef.current)
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [charCount, dots, userTyped]);

  const visibleLines: Line[] = [];
  if (phase === 'ai-streaming' || phase === 'done') {
    let remaining = phase === 'done' ? Infinity : charCount;
    for (const line of aiLines) {
      if (remaining <= 0) break;
      const plainLen =
        typeof line === 'string'
          ? line.length
          : line.reduce((a, p) => a + p.text.length, 0);
      if (remaining >= plainLen) {
        visibleLines.push(line);
        remaining -= plainLen + 1;
      } else {
        if (typeof line === 'string') {
          visibleLines.push(line.slice(0, remaining));
        } else {
          const partial: TextPart[] = [];
          let left = remaining;
          for (const part of line) {
            if (left <= 0) break;
            if (part.text.length <= left) {
              partial.push(part);
              left -= part.text.length;
            } else {
              partial.push({ ...part, text: part.text.slice(0, left) });
              left = 0;
            }
          }
          visibleLines.push(partial);
        }
        remaining = 0;
      }
    }
  }

  const container: React.CSSProperties = {
    backgroundColor: '#0d1117',
    borderRadius: 12,
    border: '1px solid #21262d',
    overflow: 'hidden',
    maxWidth: 700,
    margin: '0 auto',
    fontFamily: "'Inter', system-ui, sans-serif",
  };
  const header: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: 8,
    padding: '12px 16px',
    backgroundColor: '#161b22',
    borderBottom: '1px solid #21262d',
  };
  const dotStyle = (color: string): React.CSSProperties => ({
    width: 12,
    height: 12,
    borderRadius: '50%',
    backgroundColor: color,
  });
  const chatBody: React.CSSProperties = {
    padding: '24px 20px',
    minHeight: 280,
    maxHeight: 500,
    overflowY: 'auto',
    display: 'flex',
    flexDirection: 'column',
    gap: 20,
  };
  const userBubble: React.CSSProperties = {
    alignSelf: 'flex-end',
    backgroundColor: '#8b5cf6',
    color: '#fff',
    padding: '10px 16px',
    borderRadius: '16px 16px 4px 16px',
    maxWidth: '80%',
    fontSize: 14,
    lineHeight: 1.5,
  };
  const aiWrap: React.CSSProperties = {
    display: 'flex',
    gap: 12,
    alignItems: 'flex-start',
  };
  const avatar: React.CSSProperties = {
    width: 32,
    height: 32,
    borderRadius: 8,
    backgroundColor: '#1c2128',
    border: '1px solid #30363d',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    color: '#8b5cf6',
    fontSize: 14,
    fontWeight: 700,
  };
  const aiBubble: React.CSSProperties = {
    backgroundColor: '#161b22',
    color: '#c9d1d9',
    padding: '14px 18px',
    borderRadius: '4px 16px 16px 16px',
    maxWidth: '85%',
    fontSize: 14,
    lineHeight: 1.7,
    border: '1px solid #21262d',
  };

  return (
    <div ref={ref} style={container}>
      <div style={header}>
        <div style={dotStyle('#ff5f57')} />
        <div style={dotStyle('#febc2e')} />
        <div style={dotStyle('#28c840')} />
        <span style={{ color: '#8b949e', fontSize: 12, marginLeft: 8 }}>
          AI Chat
        </span>
        <span
          style={{
            color: '#34d399',
            fontSize: 10,
            marginLeft: 'auto',
            backgroundColor: '#0d1117',
            padding: '2px 8px',
            borderRadius: 999,
            border: '1px solid #21262d',
          }}
        >
          online
        </span>
      </div>
      <div ref={scrollRef} style={chatBody}>
        {userTyped && (
          <div style={userBubble}>
            {userTyped}
            {phase === 'user-typing' && (
              <span style={{ animation: 'blink 1s step-end infinite' }}>|</span>
            )}
          </div>
        )}
        {(phase === 'thinking' ||
          phase === 'ai-streaming' ||
          phase === 'done') && (
          <div style={aiWrap}>
            <div style={avatar}>AI</div>
            <div style={aiBubble}>
              {phase === 'thinking' && (
                <span style={{ color: '#8b949e' }}>
                  {thinkingText}
                  {dots}
                </span>
              )}
              {(phase === 'ai-streaming' || phase === 'done') && (
                <>
                  {visibleLines.map((line, i) => renderRichLine(line, i))}
                  {phase === 'ai-streaming' && (
                    <span
                      style={{
                        animation: 'blink 0.5s step-end infinite',
                        color: '#8b5cf6',
                      }}
                    >
                      |
                    </span>
                  )}
                </>
              )}
            </div>
          </div>
        )}
      </div>
      <style>{`@keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }`}</style>
    </div>
  );
}
