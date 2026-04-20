export const personalInfo = {
  name: 'Vitor Piovezan',
  role: 'Product Engineer & AI Engineer',
  company: 'Árvore',
  location: 'Monte Alto, SP - Brasil',
  bio: 'Product Engineer e AI Engineer criando produtos end-to-end, estruturando sistemas completos com IA no core e foco direto em impacto real no produto e na experiência do usuário.',
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
      'Desenvolvimento de produtos educacionais de ponta a ponta, da ideia à entrega. Construção de interfaces performáticas com React.js e Next.js, APIs com Elixir e integrações com GraphQL. Implementação de soluções de IA como leitura narrada com TTS, chat inteligente com RAG e MCP servers customizados para automação de workflows.',
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
    role: 'Designer Web & Desenvolvedor Front-End',
    period: 'abr 2021 - set 2021',
    description:
      'Desenvolvimento de sites completos utilizando React.js como autônomo. Responsável por todo o ciclo: desde o design gráfico e prototipação no Adobe Photoshop até a implementação front-end. Criação de layouts responsivos e experiências visuais para clientes da agência.',
    techs: [
      'React.js',
      'CSS',
      'Design Gráfico',
      'Adobe Photoshop',
      'Responsividade',
    ],
  },
  {
    company: 'Unimed',
    role: 'Analista de T.I. Junior',
    period: 'mar 2021 - set 2021',
    description:
      'Implantação e regularização da LGPD (Lei Geral de Proteção de Dados) na organização. Monitoramento na implantação de aplicação web de plano de saúde hospitalar. Manutenção de banco de dados Oracle e suporte aos sistemas UNICOO e TOTVS. Manutenção em hardware e servidores.',
    techs: [
      'LGPD',
      'Oracle',
      'TOTVS',
      'UNICOO',
      'Aplicações Web',
      'Servidores',
    ],
  },
  {
    company: 'Global X',
    role: 'Analista em T.I.',
    period: 'abr 2018 - jul 2020',
    description:
      'Suporte em ERP com atualizações, resolução de problemas técnicos e criação de relatórios via Excel. Manutenção em servidores locais e infraestrutura de TI. Integração de ERP com E-commerce (B2B e B2C), implantação da B2W Marketing Place e gerenciamento de e-mails marketing. Geração de relatórios para tomada de decisão.',
    techs: [
      'ERP',
      'Excel',
      'E-commerce',
      'B2B',
      'B2C',
      'Servidores',
      'Marketing',
    ],
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
    title: 'My Finance',
    description:
      'App web de finanças pessoais com orçamentos, transações, importação de extratos e resumo patrimonial, com autenticação Firebase.',
    techs: ['Vite', 'React', 'TypeScript', 'Firebase'],
    link: 'https://vitorpiovezan.com.br/my-finance/',
  },
  {
    title: 'Árvore Hub',
    description:
      'Orquestrador open source para agentes de IA em múltiplos repositórios: config, pipeline e MCPs — projeto da Árvore.',
    techs: ['Open Source', 'MCP', 'TypeScript', 'CLI'],
    link: 'https://hub.arvore.com.br/',
  },
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
