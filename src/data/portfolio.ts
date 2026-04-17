export const personalInfo = {
  name: 'Vitor Piovezan',
  role: 'Product Engineer & AI Engineer',
  company: 'Árvore',
  location: 'Monte Alto, SP - Brasil',
  bio: 'Product Engineer e AI Engineer construindo aplicações web, mobile e experiências com inteligência artificial. Combino front-end de alta performance com soluções de IA para criar produtos que realmente fazem diferença na experiência do usuário.',
  email: '[email]',
  github: 'https://github.com/VitorPiovezan',
  linkedin: 'https://www.linkedin.com/in/vitor-piovezan-6a65351aa/',
};

export const rotatingRoles = [
  'Product Engineer',
  'AI Engineer',
  'Front-End Developer',
  'React Specialist',
];

export const techStack = {
  frontend: [
    'React.js',
    'Next.js',
    'TypeScript',
    'Tailwind CSS',
    'Zustand',
    'Redux',
    'Vite',
    'Context API',
  ],
  mobile: ['React Native', 'Expo'],
  backend: ['Elixir', 'NestJS', 'Node.js', 'MySQL', 'GraphQL'],
  ai: [
    'Claude',
    'GPT',
    'Kiro',
    'Cursor',
    'MCP Servers',
    'RAG',
    'Kokoro TTS',
    'LLM Orchestration',
    'Prompt Engineering',
  ],
  tools: ['Firebase', 'Datadog', 'PostHog', 'Mixpanel', 'Sentry', 'REST APIs'],
  testing: ['Vitest', 'Jest', 'Testing Library', 'Cypress', 'Playwright'],
};

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  techs: string[];
}

export const experiences: Experience[] = [
  {
    company: 'Árvore',
    role: 'Product Engineer & AI Engineer',
    period: 'Atual',
    description:
      'Desenvolvimento de produtos educacionais com foco em expansão e retenção de usuários. Construção de interfaces performáticas e acessíveis com React.js. Integração de soluções de IA para leitura narrada, chat inteligente com dados da plataforma e ferramentas de produtividade com LLMs.',
    techs: [
      'React.js',
      'TypeScript',
      'Next.js',
      'Elixir',
      'GraphQL',
      'Claude',
      'MCP',
      'RAG',
    ],
  },
  {
    company: 'Agência Olcan',
    role: 'Designer Web',
    period: 'abr 2021 - set 2021',
    description:
      'Desenvolvimento de sites utilizando React.js. Atuação como autônomo com design gráfico e Adobe Photoshop.',
    techs: ['React.js', 'Design Gráfico', 'Adobe Photoshop'],
  },
  {
    company: 'Unimed',
    role: 'Analista de T.I. Junior',
    period: 'mar 2021 - set 2021',
    description:
      'Implantação e regularização da LGPD (Lei Geral de Proteção de Dados). Monitoramento na implantação de aplicação web de plano de saúde hospitalar.',
    techs: ['LGPD', 'Monitoramento', 'Aplicações Web'],
  },
  {
    company: 'Global X',
    role: 'Analista em T.I.',
    period: 'abr 2018 - jul 2020',
    description:
      'Suporte em ERP (atualizações, problemas técnicos, criação de relatórios via Excel). Manutenção em servidores locais.',
    techs: ['ERP', 'Excel', 'Servidores', 'Suporte T.I.'],
  },
];

export interface Project {
  title: string;
  description: string;
  techs: string[];
  link?: string;
}

export const projects: Project[] = [
  {
    title: 'Chat com Dados da Plataforma',
    description:
      'Chat personalizado com IA que conversa com dados da plataforma educacional, permitindo consultas inteligentes sobre conteúdo, métricas e usuários usando RAG.',
    techs: ['RAG', 'Claude', 'TypeScript', 'React.js'],
  },
  {
    title: 'Leitura Narrada com Kokoro',
    description:
      'Sistema de narração de livros usando Kokoro TTS, transformando textos educacionais em áudio de alta qualidade com vozes naturais.',
    techs: ['Kokoro TTS', 'TypeScript', 'Node.js'],
  },
  {
    title: 'Pixel-Perfect Validator',
    description:
      'Ferramenta que valida páginas desenvolvidas comparando com designs do Figma, garantindo fidelidade visual pixel a pixel.',
    techs: ['React.js', 'Figma API', 'TypeScript'],
  },
  {
    title: 'Árvore Hub - AI Editors',
    description:
      'Docker de IA para editores de texto com inteligência artificial integrada. Contribuidor direto no desenvolvimento da plataforma.',
    techs: ['AI', 'Docker', 'React.js', 'LLM'],
    link: 'https://hub.arvore.com.br/ai',
  },
  {
    title: 'MCP Servers',
    description:
      'Criação de servidores MCP (Model Context Protocol) customizados para integrar ferramentas de IA com workflows de desenvolvimento.',
    techs: ['MCP', 'TypeScript', 'Claude', 'Kiro'],
  },
  {
    title: 'App Mobile Educacional',
    description:
      'Aplicativo publicado na App Store e Google Play com React Native e Expo para leitura digital.',
    techs: ['React Native', 'Expo', 'Firebase'],
  },
];
