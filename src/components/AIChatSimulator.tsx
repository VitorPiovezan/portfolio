import { useState, useEffect, useRef } from 'react';
import { useFadeIn } from '../hooks/useFadeIn';

const userMessage = 'O que sabemos sobre o Vitor?';

const aiResponseText = [
  'Vitor Piovezan é Product Engineer e AI Engineer na Árvore, atuando no squad de Expansão e Retenção em Monte Alto, SP.',
  '',
  'Ele combina front-end de alta performance com soluções de inteligência artificial:',
  '',
  '  - UI Architecture, Product Usability e React.js/React Native',
  '  - Criação de MCP Servers customizados para integrar IA com workflows',
  '  - Implementação de RAG para chat inteligente com dados da plataforma',
  '  - Leitura narrada de livros usando Kokoro TTS',
  '  - Validação pixel-perfect de páginas contra designs do Figma',
  '',
  'No dia a dia, usa ferramentas como Kiro, Cursor e Claude (Opus, Sonnet) para acelerar desenvolvimento. Trabalha com LLM Orchestration e Prompt Engineering.',
  '',
  'No backend, tem experiência com Elixir e NestJS, e integrações com Firebase, GraphQL e MySQL.',
  '',
  'Contribuiu diretamente no Árvore Hub, um docker de IA para editores de texto. Tem apps publicados na App Store e Google Play.',
].join('\n');

type Phase = 'user-typing' | 'thinking' | 'ai-streaming' | 'done';

export default function AIChatSimulator() {
  const { ref, isVisible } = useFadeIn(0.2);
  const [phase, setPhase] = useState<Phase>('user-typing');
  const [userTyped, setUserTyped] = useState('');
  const [aiTyped, setAiTyped] = useState('');
  const [dots, setDots] = useState('');
  const startedRef = useRef(false);
  const scrollRef = useRef<HTMLDivElement>(null);

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
  }, [isVisible]);

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
    let charIndex = 0;
    const streamInterval = setInterval(() => {
      charIndex += 2;
      setAiTyped(aiResponseText.slice(0, charIndex));
      if (charIndex >= aiResponseText.length) {
        clearInterval(streamInterval);
        setPhase('done');
      }
    }, 15);
    return () => clearInterval(streamInterval);
  }, [phase]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [aiTyped, dots, userTyped]);

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
    maxHeight: 450,
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
    whiteSpace: 'pre-wrap',
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
                <span style={{ color: '#8b949e' }}>Pensando{dots}</span>
              )}
              {(phase === 'ai-streaming' || phase === 'done') && (
                <>
                  {aiTyped}
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

      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </div>
  );
}
