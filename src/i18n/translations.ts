export type Locale = 'pt-BR' | 'en-US';

const ptBR = {
  nav: {
    about: 'Sobre',
    tech: 'Tech',
    experience: 'Experiência',
    projects: 'Projetos',
    contact: 'Contato',
  },
  hero: {
    iam: 'Sou',
    roles: [
      'Product Engineer',
      'AI Engineer',
      'Front-End Developer',
      'React Specialist',
    ],
    bio: 'Product Engineer e AI Engineer criando produtos end-to-end, estruturando sistemas completos com IA no core e foco direto em impacto real no produto e na experiência do usuário.',
  },
  about: {
    title: 'Sobre Mim',
    userMessage: 'O que sabemos sobre o Vitor?',
    aiResponse: [
      { text: 'Vitor Piovezan', bold: true },
      { text: ' é ' },
      { text: 'Product Engineer', bold: true },
      { text: ' e ' },
      { text: 'AI Engineer', bold: true },
      {
        text: ' na Árvore, atuando de ponta a ponta — da ideia à entrega final.',
      },
      {
        text: '\n\nProjeta e implementa sistemas completos, integrando backend, frontend e IA de forma consistente — da modelagem de dados às interfaces finais, com foco em performance, usabilidade e velocidade de entrega.',
      },
      { text: '\n\n' },
      {
        text: 'Seu foco está em aplicar IA de forma prática no produto',
        bold: true,
      },
      {
        text: ', criando desde pipelines com LLMs e RAG até MCP servers customizados para automatizar processos e integrar inteligência aos workflows.',
      },
      { text: '\n\nJá desenvolveu soluções como:' },
      { text: '\n  - ' },
      { text: 'Leitura narrada de livros', italic: true },
      { text: ' com TTS' },
      { text: '\n  - ' },
      { text: 'Chat inteligente', italic: true },
      { text: ' com dados da plataforma' },
      { text: '\n  - ' },
      { text: 'Ferramentas internas', italic: true },
      { text: ' para acelerar desenvolvimento' },
      { text: '\n\nTrabalha principalmente com ' },
      { text: 'Next.js, Expo (React Native) e NestJS', bold: true },
      {
        text: ', além de explorar constantemente novas formas de orquestrar IA dentro de produtos reais.',
      },
      { text: '\n\n' },
      {
        text: 'Hoje, seu foco é construir produtos completos, rápidos de iterar e com ',
        italic: true,
      },
      { text: 'IA no centro da experiência.', bold: true },
    ],
  },
  tech: {
    title: 'Tech Stack',
    subtitle: 'Tecnologias que uso no dia a dia para construir produtos.',
  },
  experience: {
    title: 'Experiência',
  },
  projects: {
    title: 'Projetos',
    myFinanceModalBody:
      'My Finance é um app de finanças pessoais: orçamento, lançamentos, importação de extratos e visão geral, com login seguro via Firebase — pensado para uso no dia a dia.',
    myFinanceModalBtnProject: 'Ver projeto',
    myFinanceModalBtnLive: 'Abrir app',
    arvoreHubModalBody:
      'Na Árvore, o Árvore Hub é open source e orquestra agentes de IA em vários repositórios — como um docker-compose, mas para IA. Você define repos, MCPs e o pipeline (refinar → codar → revisar → testar → PR); descreve a feature e a IA executa tudo até abrir o PR. Sem servidor no meio: o runtime é o seu editor, com memória de time e ferramentas reais. Compatível com Cursor, Kiro e Claude Code.',
    arvoreHubModalBtnSite: 'Abrir site',
  },
  contact: {
    title: 'Vamos conversar?',
    description:
      'Estou sempre aberto a novas oportunidades, colaborações e conversas sobre tecnologia. Fique à vontade para entrar em contato.',
  },
  experiences: [
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
  ],
  projects_data: [
    {
      title: 'My Finance',
      description:
        'App web de finanças pessoais com orçamentos, transações, importação de extratos e resumo patrimonial, com autenticação Firebase.',
      techs: ['Vite', 'React', 'TypeScript', 'Firebase'],
      link: 'https://vitorpiovezan.com.br/my-finance/',
      githubUrl: 'https://github.com/VitorPiovezan/my-finance',
      detailModal: 'myFinance',
    },
    {
      title: 'Árvore Hub',
      description:
        'Orquestrador open source para agentes de IA em múltiplos repositórios: config, pipeline e MCPs — projeto da Árvore.',
      techs: ['Open Source', 'MCP', 'TypeScript', 'CLI'],
      link: 'https://hub.arvore.com.br/',
      detailModal: 'arvoreHub',
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
  ],
};

const enUS: typeof ptBR = {
  nav: {
    about: 'About',
    tech: 'Tech',
    experience: 'Experience',
    projects: 'Projects',
    contact: 'Contact',
  },
  hero: {
    iam: "I'm a",
    roles: [
      'Product Engineer',
      'AI Engineer',
      'Front-End Developer',
      'React Specialist',
    ],
    bio: 'Product Engineer and AI Engineer building end-to-end products, structuring complete systems with AI at the core and a direct focus on real impact on the product and user experience.',
  },
  about: {
    title: 'About Me',
    userMessage: 'What do we know about Vitor?',
    aiResponse: [
      { text: 'Vitor Piovezan', bold: true },
      { text: ' is a ' },
      { text: 'Product Engineer', bold: true },
      { text: ' and ' },
      { text: 'AI Engineer', bold: true },
      {
        text: ' at Árvore, working end-to-end — from idea to final delivery.',
      },
      {
        text: '\n\nHe designs and implements complete systems, integrating backend, frontend and AI consistently — from data modeling to final interfaces, focusing on performance, usability and delivery speed.',
      },
      { text: '\n\n' },
      {
        text: 'His focus is on applying AI practically in the product',
        bold: true,
      },
      {
        text: ', building everything from LLM and RAG pipelines to custom MCP servers to automate processes and integrate intelligence into workflows.',
      },
      { text: '\n\nHe has developed solutions such as:' },
      { text: '\n  - ' },
      { text: 'Narrated book reading', italic: true },
      { text: ' with TTS' },
      { text: '\n  - ' },
      { text: 'Intelligent chat', italic: true },
      { text: ' with platform data' },
      { text: '\n  - ' },
      { text: 'Internal tools', italic: true },
      { text: ' to accelerate development' },
      { text: '\n\nHe mainly works with ' },
      { text: 'Next.js, Expo (React Native) and NestJS', bold: true },
      {
        text: ', while constantly exploring new ways to orchestrate AI within real products.',
      },
      { text: '\n\n' },
      {
        text: 'Today, his focus is building complete products, fast to iterate and with ',
        italic: true,
      },
      { text: 'AI at the center of the experience.', bold: true },
    ],
  },
  tech: {
    title: 'Tech Stack',
    subtitle: 'Technologies I use daily to build products.',
  },
  experience: {
    title: 'Experience',
  },
  projects: {
    title: 'Projects',
    myFinanceModalBody:
      'My Finance is a personal finance web app for budgets, transactions, statement import and a simple overview — with secure Firebase authentication for everyday use.',
    myFinanceModalBtnProject: 'View project',
    myFinanceModalBtnLive: 'Open app',
    arvoreHubModalBody:
      'At Árvore, Árvore Hub is open source and orchestrates AI agents across repositories — like docker-compose, but for AI. You declare repos, MCPs, and the pipeline (refine → code → review → test → PR); describe the feature and the AI runs the full flow to open the PR. No server in the middle: your editor is the runtime, with team memory and real tooling. Works with Cursor, Kiro, and Claude Code.',
    arvoreHubModalBtnSite: 'Visit site',
  },
  contact: {
    title: "Let's talk?",
    description:
      "I'm always open to new opportunities, collaborations and conversations about technology. Feel free to reach out.",
  },
  experiences: [
    {
      company: 'Árvore',
      role: 'Product Engineer & AI Engineer',
      period: 'Current',
      description:
        'End-to-end development of educational products, from idea to delivery. Building performant interfaces with React.js and Next.js, APIs with Elixir and GraphQL integrations. Implementing AI solutions like narrated reading with TTS, intelligent chat with RAG and custom MCP servers for workflow automation.',
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
      role: 'Web Designer & Front-End Developer',
      period: 'Apr 2021 - Sep 2021',
      description:
        'Full website development using React.js as a freelancer. Responsible for the entire cycle: from graphic design and prototyping in Adobe Photoshop to front-end implementation. Creating responsive layouts and visual experiences for agency clients.',
      techs: [
        'React.js',
        'CSS',
        'Graphic Design',
        'Adobe Photoshop',
        'Responsive',
      ],
    },
    {
      company: 'Unimed',
      role: 'Junior IT Analyst',
      period: 'Mar 2021 - Sep 2021',
      description:
        'Implementation and compliance of LGPD (Brazilian Data Protection Law). Monitoring the deployment of a hospital health plan web application. Oracle database maintenance and support for UNICOO and TOTVS systems. Hardware and server maintenance.',
      techs: ['LGPD', 'Oracle', 'TOTVS', 'UNICOO', 'Web Apps', 'Servers'],
    },
    {
      company: 'Global X',
      role: 'IT Analyst',
      period: 'Apr 2018 - Jul 2020',
      description:
        'ERP support with updates, technical troubleshooting and Excel report creation. Local server and IT infrastructure maintenance. ERP integration with E-commerce (B2B and B2C), B2W Marketplace deployment and email marketing management. Report generation for decision making.',
      techs: [
        'ERP',
        'Excel',
        'E-commerce',
        'B2B',
        'B2C',
        'Servers',
        'Marketing',
      ],
    },
  ],
  projects_data: [
    {
      title: 'My Finance',
      description:
        'Personal finance web app with budgets, transactions, statement import and a net-worth snapshot, powered by Firebase auth.',
      techs: ['Vite', 'React', 'TypeScript', 'Firebase'],
      link: 'https://vitorpiovezan.com.br/my-finance/',
      githubUrl: 'https://github.com/VitorPiovezan/my-finance',
      detailModal: 'myFinance',
    },
    {
      title: 'Árvore Hub',
      description:
        'Open-source orchestrator for AI agents across multiple repos: config, pipeline, and MCPs — an Árvore project.',
      techs: ['Open Source', 'MCP', 'TypeScript', 'CLI'],
      link: 'https://hub.arvore.com.br/',
      detailModal: 'arvoreHub',
    },
    {
      title: 'Platform Data Chat',
      description:
        'Custom AI chat that talks to educational platform data, enabling intelligent queries about content, metrics and users using RAG.',
      techs: ['RAG', 'Claude', 'TypeScript', 'React.js'],
    },
    {
      title: 'Narrated Reading with Kokoro',
      description:
        'Book narration system using Kokoro TTS, transforming educational texts into high-quality audio with natural voices.',
      techs: ['Kokoro TTS', 'TypeScript', 'Node.js'],
    },
    {
      title: 'Pixel-Perfect Validator',
      description:
        'Tool that validates developed pages by comparing them with Figma designs, ensuring pixel-perfect visual fidelity.',
      techs: ['React.js', 'Figma API', 'TypeScript'],
    },
    {
      title: 'MCP Servers',
      description:
        'Custom MCP (Model Context Protocol) servers to integrate AI tools with development workflows.',
      techs: ['MCP', 'TypeScript', 'Claude', 'Kiro'],
    },
    {
      title: 'Educational Mobile App',
      description:
        'App published on App Store and Google Play with React Native and Expo for digital reading.',
      techs: ['React Native', 'Expo', 'Firebase'],
    },
  ],
};

export type TranslationData = typeof ptBR;
export const translations: Record<Locale, TranslationData> = {
  'pt-BR': ptBR,
  'en-US': enUS,
};
