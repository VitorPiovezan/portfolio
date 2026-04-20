import { useState, useMemo, useEffect } from 'react';
import { useI18n } from '../i18n/context';
import MyFinanceProjectModal from './MyFinanceProjectModal';
import ArvoreHubProjectModal from './ArvoreHubProjectModal';

function slugify(title: string) {
  return title
    .toLowerCase()
    .replace(/[áàã]/g, 'a')
    .replace(/[éê]/g, 'e')
    .replace(/[í]/g, 'i')
    .replace(/[óô]/g, 'o')
    .replace(/[ú]/g, 'u')
    .replace(/[ç]/g, 'c')
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '');
}

function wrapText(text: string, maxLen: number): string[] {
  const words = text.split(' ');
  const result: string[] = [];
  let current = '';
  for (const word of words) {
    if (current.length + word.length + 1 > maxLen && current) {
      result.push(current);
      current = word;
    } else {
      current = current ? `${current} ${word}` : word;
    }
  }
  if (current) result.push(current);
  return result;
}

type ProjectDetailModalKind = 'myFinance' | 'arvoreHub';

interface ProjectItem {
  title: string;
  description: string;
  techs: readonly string[];
  link?: string;
  githubUrl?: string;
  detailModal?: ProjectDetailModalKind;
}

function generateCode(project: ProjectItem, index: number): string {
  const descLines = wrapText(project.description, 40);
  const lines = [
    `import { defineProject } from '@portfolio/core';`,
    ``,
    `export default defineProject({`,
    `  name: '${project.title}',`,
    `  status: '${index === 0 ? 'production' : index < 3 ? 'production' : 'active'}',`,
    ``,
    `  description: \``,
    ...descLines.map(l => `    ${l}`),
    `  \`,`,
    ``,
    `  stack: [`,
    ...project.techs.map(
      (t, i) => `    '${t}'${i < project.techs.length - 1 ? ',' : ''}`,
    ),
    `  ],`,
    ``,
  ];
  if (project.link) {
    lines.push(`  url: '${project.link}',`);
    lines.push(``);
  }
  if (project.githubUrl) {
    lines.push(`  repoUrl: '${project.githubUrl}',`);
    lines.push(``);
  }
  const deployPlatform = project.githubUrl
    ? 'github-pages'
    : project.detailModal === 'arvoreHub'
      ? 'hub'
      : project.link
        ? 'vercel'
        : 'internal';
  lines.push(`  deploy: {`);
  lines.push(`    platform: '${deployPlatform}',`);
  lines.push(`    ci: true,`);
  lines.push(`  },`);
  lines.push(`});`);
  return lines.join('\n');
}

export default function CodeEditor() {
  const [activeTab, setActiveTab] = useState(0);
  const [detailModalOpen, setDetailModalOpen] = useState(false);
  const { t } = useI18n();

  const projects = t.projects_data;
  const fileNames = useMemo(
    () => projects.map(p => `${slugify(p.title)}.ts`),
    [projects],
  );

  const container: React.CSSProperties = {
    backgroundColor: '#1e1e2e',
    borderRadius: 12,
    border: '1px solid #313244',
    overflow: 'hidden',
    maxWidth: 900,
    margin: '0 auto',
    fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
    fontSize: 13,
  };
  const titleBar: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: 8,
    padding: '10px 16px',
    backgroundColor: '#181825',
    borderBottom: '1px solid #313244',
  };
  const dot = (color: string): React.CSSProperties => ({
    width: 12,
    height: 12,
    borderRadius: '50%',
    backgroundColor: color,
  });
  const fileItem = (isActive: boolean): React.CSSProperties => ({
    padding: '6px 12px',
    cursor: 'pointer',
    color: isActive ? '#cdd6f4' : '#6c7086',
    backgroundColor: isActive ? 'rgba(139, 92, 246, 0.1)' : 'transparent',
    borderLeft: isActive ? '2px solid #8b5cf6' : '2px solid transparent',
    fontSize: 12,
    display: 'flex',
    alignItems: 'center',
    gap: 6,
    transition: 'all 0.15s',
    wordBreak: 'break-all' as const,
  });
  const tab = (isActive: boolean): React.CSSProperties => ({
    padding: '8px 12px',
    cursor: 'pointer',
    color: isActive ? '#cdd6f4' : '#6c7086',
    backgroundColor: isActive ? '#1e1e2e' : 'transparent',
    borderBottom: isActive ? '2px solid #8b5cf6' : '2px solid transparent',
    fontSize: 11,
    whiteSpace: 'nowrap',
    display: 'flex',
    alignItems: 'center',
    gap: 4,
    transition: 'all 0.15s',
    flexShrink: 0,
  });
  const lineNum: React.CSSProperties = {
    color: '#45475a',
    width: 32,
    textAlign: 'right',
    paddingRight: 12,
    userSelect: 'none',
    display: 'inline-block',
    fontSize: 12,
    flexShrink: 0,
  };

  const tsIcon = (
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      style={{ flexShrink: 0 }}
    >
      <rect width="24" height="24" rx="3" fill="#3178c6" />
      <text
        x="4"
        y="17"
        fill="white"
        fontSize="12"
        fontWeight="bold"
        fontFamily="monospace"
      >
        TS
      </text>
    </svg>
  );

  const current = projects[activeTab] as ProjectItem;
  const code = generateCode(current, activeTab);
  const codeLines = code.split('\n');

  const detailKind = current.detailModal;
  const showProjectDetailFab =
    detailKind === 'myFinance'
      ? Boolean(current.githubUrl && current.link)
      : detailKind === 'arvoreHub'
        ? Boolean(current.link)
        : false;

  const detailFabLabel =
    detailKind === 'arvoreHub'
      ? 'Árvore Hub'
      : detailKind === 'myFinance'
        ? 'My Finance'
        : '';

  useEffect(() => {
    if (!detailModalOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setDetailModalOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [detailModalOpen]);

  const colorize = (line: string) => {
    if (line.startsWith('import') || line.startsWith('export'))
      return <span style={{ color: '#c678dd' }}>{line}</span>;
    if (line.includes("'") || line.includes('`')) {
      const parts = line.split(/('[^']*'|`[^`]*`)/g);
      return parts.map((part, i) =>
        part.startsWith("'") || part.startsWith('`') ? (
          <span key={i} style={{ color: '#98c379' }}>
            {part}
          </span>
        ) : (
          <span
            key={i}
            style={{ color: line.includes(':') ? '#e06c75' : '#abb2bf' }}
          >
            {part}
          </span>
        ),
      );
    }
    if (
      /^\s*(name|status|description|stack|url|repoUrl|deploy|platform|ci)\s*:/.test(
        line,
      )
    ) {
      const [key, ...rest] = line.split(':');
      return (
        <>
          <span style={{ color: '#e06c75' }}>{key}</span>:
          <span style={{ color: '#abb2bf' }}>{rest.join(':')}</span>
        </>
      );
    }
    return <span style={{ color: '#abb2bf' }}>{line}</span>;
  };

  const detailBtn: React.CSSProperties = {
    position: 'absolute',
    right: 12,
    bottom: 12,
    zIndex: 2,
    padding: '8px 14px',
    borderRadius: 8,
    border: '1px solid rgba(139, 92, 246, 0.45)',
    backgroundColor: 'rgba(139, 92, 246, 0.2)',
    color: '#cdd6f4',
    fontSize: 11,
    fontWeight: 600,
    cursor: 'pointer',
    fontFamily: 'inherit',
    boxShadow: '0 2px 12px rgba(0,0,0,0.35)',
    transition: 'background-color 0.15s, border-color 0.15s',
  };

  return (
    <div style={{ ...container, position: 'relative' }}>
      <div style={titleBar}>
        <div style={dot('#ff5f57')} />
        <div style={dot('#febc2e')} />
        <div style={dot('#28c840')} />
        <span style={{ color: '#6c7086', fontSize: 12, marginLeft: 8 }}>
          VS Code - {t.projects.title}
        </span>
      </div>
      <div style={{ display: 'flex', minHeight: 350 }}>
        <div
          className="hidden md:block"
          style={{
            width: 180,
            backgroundColor: '#181825',
            borderRight: '1px solid #313244',
            padding: '12px 0',
            flexShrink: 0,
          }}
        >
          <div
            style={{
              color: '#6c7086',
              fontSize: 10,
              textTransform: 'uppercase',
              letterSpacing: 1.5,
              padding: '0 12px 8px',
              fontWeight: 600,
            }}
          >
            Explorer
          </div>
          {fileNames.map((name, i) => (
            <div
              key={name}
              style={fileItem(i === activeTab)}
              onClick={() => {
                setActiveTab(i);
                setDetailModalOpen(false);
              }}
            >
              {tsIcon}
              <span>{name}</span>
            </div>
          ))}
        </div>
        <div
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            minWidth: 0,
            position: 'relative',
          }}
        >
          <div
            style={{
              display: 'flex',
              backgroundColor: '#181825',
              borderBottom: '1px solid #313244',
              overflowX: 'auto',
            }}
          >
            {fileNames.map((name, i) => (
              <div
                key={name}
                style={tab(i === activeTab)}
                onClick={() => {
                  setActiveTab(i);
                  setDetailModalOpen(false);
                }}
              >
                {tsIcon}
                <span className="hidden sm:inline">{name}</span>
                <span className="sm:hidden">{i + 1}</span>
              </div>
            ))}
          </div>
          <div
            style={{
              flex: 1,
              padding: '16px 0',
              paddingBottom: showProjectDetailFab ? 52 : 16,
              overflowX: 'auto',
              overflowY: 'auto',
            }}
          >
            {codeLines.map((line, i) => (
              <div
                key={i}
                style={{
                  lineHeight: 1.8,
                  paddingRight: 12,
                  whiteSpace: 'nowrap',
                }}
              >
                <span style={lineNum}>{i + 1}</span>
                {colorize(line)}
              </div>
            ))}
          </div>
          {showProjectDetailFab && detailFabLabel && (
            <button
              type="button"
              style={detailBtn}
              aria-haspopup="dialog"
              aria-expanded={detailModalOpen}
              onClick={() => setDetailModalOpen(true)}
              onMouseEnter={e => {
                e.currentTarget.style.backgroundColor =
                  'rgba(139, 92, 246, 0.35)';
                e.currentTarget.style.borderColor = 'rgba(139, 92, 246, 0.75)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.backgroundColor =
                  'rgba(139, 92, 246, 0.2)';
                e.currentTarget.style.borderColor =
                  'rgba(139, 92, 246, 0.45)';
              }}
            >
              {detailFabLabel}
            </button>
          )}
        </div>
      </div>
      {detailKind === 'myFinance' &&
        current.githubUrl &&
        current.link && (
          <MyFinanceProjectModal
            open={detailModalOpen}
            onClose={() => setDetailModalOpen(false)}
            githubUrl={current.githubUrl}
            liveUrl={current.link}
          />
        )}
      {detailKind === 'arvoreHub' && current.link && (
        <ArvoreHubProjectModal
          open={detailModalOpen}
          onClose={() => setDetailModalOpen(false)}
          liveUrl={current.link}
        />
      )}
    </div>
  );
}
