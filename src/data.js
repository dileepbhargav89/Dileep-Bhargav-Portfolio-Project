// ─── PERSONAL ────────────────────────────────────────────────────────────────
export const PERSONAL = {
  name:       'Dileep Bhargav',
  firstName:  'Dileep',
  lastName:   'Bhargav',
  initials:   'DB',
  title:      'Final year CSE student',      // ← UPDATED
  university: 'MANIT Bhopal',
  cgpa:       '6.33',                        // ← UPDATED
  club:       'FiNIT — The Student Finance Club',
  location:   'Bhopal, Madhya Pradesh, India',
  email:      'dileepbhargav722@gmail.com',
  mobile:     '+91 9109059791',
  linkedin:   'https://www.linkedin.com/in/dileep-bhargav89/',
  github:     'https://github.com/dileepbhargav89',
  // ↓ These point to /public/ — update if you rename the files
  sdeResume:      '/SDE_Resume.pdf',
  analystResume:  '/DataAnalyst_Resume.pdf',
  quantResume:    '/Quant_Resume.pdf',
}

// ─── TYPEWRITER ROLES ────────────────────────────────────────────────────────
export const ROLES = [
  'Full-Stack Developer',
  'Derivatives Trader',
  'Fintech Innovator',
  'AI Engineer',
  'Quant Strategist',
  'Data Analyst',
]

// ─── HERO STATS ─────────────────────────────────────────────────────────────
export const STATS = [
  { value: '10+',  label: 'Projects Built'  },
  { value: '4+',   label: 'Trading Markets' },
  { value: '5+',   label: 'ML Models'       },
  { value: '6.33', label: 'CGPA'            },
]

// ─── ABOUT PILLARS ───────────────────────────────────────────────────────────
export const PILLARS = [
  { icon: '⚡', title: 'Full-Stack Engineering', desc: 'React · Node.js · MongoDB · REST APIs',      color: '#00D4FF' },
  { icon: '🧠', title: 'AI & Data Science',      desc: 'ML Models · Time Series · NLP · Analytics', color: '#FFB800' },
  { icon: '📊', title: 'Quant Finance',          desc: 'F&O · Algo Trading · Market Forecasting',   color: '#00FF88' },
  { icon: '🌐', title: 'Emerging Tech',          desc: 'Web3 · DeFi · Fintech Innovation',          color: '#A78BFA' },
]

// ─── SKILLS GRID ─────────────────────────────────────────────────────────────
export const SKILLS_DATA = {
  'Web Development': {
    color: '#00D4FF',
    skills: [
      { name: 'React.js',        level: 88 },
      { name: 'Node.js/Express', level: 82 },
      { name: 'HTML & CSS',      level: 95 },
      { name: 'JavaScript',      level: 88 },
    ],
  },
  'Data & AI': {
    color: '#FFB800',
    skills: [
      { name: 'Python',             level: 92 },
      { name: 'Pandas / NumPy',     level: 86 },
      { name: 'Time Series / ML',   level: 80 },
      { name: 'Data Visualization', level: 84 },
    ],
  },
  'Finance & Quant': {
    color: '#00FF88',
    skills: [
      { name: 'Derivatives (F&O)', level: 88 },
      { name: 'Quant Strategies',  level: 82 },
      { name: 'Market Analysis',   level: 86 },
      { name: 'Forex / Crypto',    level: 78 },
    ],
  },
  'Databases & CS': {
    color: '#A78BFA',
    skills: [
      { name: 'MongoDB',          level: 80 },
      { name: 'SQL',              level: 78 },
      { name: 'DSA & Algorithms', level: 82 },
      { name: 'C++',              level: 75 },
    ],
  },
}

// ─── PROJECTS ────────────────────────────────────────────────────────────────
export const PROJECTS = [
  {
    title: 'AI Mock Interview Platform',
    desc:  'Full-stack AI-powered mock interview platform with real-time question generation, scoring, and NLP feedback. Built with React, TypeScript, Firebase & OpenAI API.',
    tags:  ['React', 'TypeScript', 'Firebase', 'OpenAI'],
    icon:  '🤖',
    color: '#00D4FF',
    link:  'https://github.com/dileepbhargav89',
  },
  {
    title: 'Movie Recommendation System',
    desc:  'Content-based recommendation engine using cosine similarity. Interactive Streamlit app integrated with TMDB API for dynamic poster fetching.',
    tags:  ['Python', 'Streamlit', 'Scikit-learn', 'TMDB API'],
    icon:  '🎬',
    color: '#FFB800',
    link:  'https://github.com/dileepbhargav89',
  },
  {
    title: 'Customer Shopping Behavior',
    desc:  'Analyzed 3,900+ retail transactions to identify customer behavior & revenue trends. Power BI dashboard with RFM segmentation & churn prediction.',
    tags:  ['Python', 'SQL', 'Power BI', 'Analytics'],
    icon:  '🛍️',
    color: '#00FF88',
    link:  'https://github.com/dileepbhargav89',
  },
  {
    title: 'Vendor Performance Analysis',
    desc:  'Operational analytics evaluating vendor KPIs & SLA compliance across multiple DB tables. Interactive Power BI dashboard for data-driven decision making.',
    tags:  ['Python', 'SQL', 'Power BI', 'Reporting'],
    icon:  '📊',
    color: '#FF6B6B',
    link:  'https://github.com/dileepbhargav89',
  },
  {
    title: 'Movementum Thoko Strategy',
    desc:  'Systematic short-selling strategy for Indian equity market. Multi-factor analysis for entry/exit/risk rules. Improved accuracy from 70% to 90%.',
    tags:  ['Quant', 'Python', 'TradingView', 'Strategy'],
    icon:  '📈',
    color: '#A78BFA',
    link:  'https://github.com/dileepbhargav89',
  },
]

// ─── RESUME TABS DATA (from actual uploaded PDFs) ────────────────────────────

export const RESUME_TABS = {
  sde: {
    label: 'SDE',
    fullLabel: 'Software Dev Engineer',
    color: '#00D4FF',
    icon: '💻',
    tagline: 'Building scalable full-stack applications & AI-powered platforms',
    experience: [
      {
        role: 'Web Development Intern',
        org:  'Brainwave Matrix Solutions',
        period: 'May 2024 – Jun 2024',
        color: '#00D4FF',
        icon: '🏢',
        points: [
          'Built responsive web apps using React.js, JavaScript, HTML & CSS — landing pages, password generators, tour guide platforms',
          'Optimized UI/UX, implemented reusable components, collaborated using Git for clean, scalable code',
        ],
      },
      {
        role: 'AI Mock Interview Web App',
        org:  'Personal Project',
        period: 'Jan 2025 – May 2025',
        color: '#A78BFA',
        icon: '🤖',
        points: [
          'Built AI-powered mock interview platform with real-time question generation, scoring & NLP-based feedback',
          'Stack: React, TypeScript, Tailwind CSS, Firebase (Firestore + Auth), OpenAI API, Vite',
        ],
      },
      {
        role: 'Movie Recommender System',
        org:  'Personal Project',
        period: 'Oct 2025',
        color: '#FFB800',
        icon: '🎬',
        points: [
          'Content-based recommendation engine using cosine similarity to suggest top-5 similar movies',
          'Streamlit UI with TMDB API integration for dynamic poster display — Python, Scikit-learn',
        ],
      },
    ],
    skills: [
      { name: 'C++',            pct: 75, cat: 'Language' },
      { name: 'Python',         pct: 92, cat: 'Language' },
      { name: 'JavaScript',     pct: 88, cat: 'Language' },
      { name: 'React.js',       pct: 88, cat: 'Framework' },
      { name: 'Node.js',        pct: 80, cat: 'Framework' },
      { name: 'DSA / OOP',      pct: 82, cat: 'CS Fundamentals' },
      { name: 'DBMS / SQL',     pct: 78, cat: 'Database' },
      { name: 'Git / GitHub',   pct: 88, cat: 'Tools' },
    ],
    certs: [
      { label: 'ONGC Scholarship (2022–2026) — Top 500 Students India', icon: '🏛️' },
      { label: 'Foundation for Excellence Scholarship (2022–2026)', icon: '🎖️' },
      { label: 'Dakshana Scholar (2021–2022) — Fully Funded IIT-JEE Program', icon: '🏆' },
    ],
    downloadUrl: '/SDE_Resume.pdf',
    downloadLabel: 'Download SDE Resume',
  },

  analyst: {
    label: 'Data Analyst',
    fullLabel: 'Data Analyst',
    color: '#FFB800',
    icon: '📊',
    tagline: 'Transforming raw data into actionable insights with SQL, Python & Power BI',
    experience: [
      {
        role: 'Customer Shopping Behavior Analysis',
        org:  'Personal Project',
        period: 'Nov 2025',
        color: '#FFB800',
        icon: '🛍️',
        points: [
          'Analyzed 3,900+ retail transactions to identify customer behavior, revenue trends & product performance',
          'Data cleaning & transformation in Python; business metrics via SQL; Power BI dashboard for KPIs & RFM segments',
        ],
      },
      {
        role: 'Vendor Performance Analysis',
        org:  'Personal Project',
        period: 'Oct 2025',
        color: '#FF6B6B',
        icon: '📦',
        points: [
          'Evaluated vendor KPIs using transactional + operational data across multiple SQL database tables',
          'EDA & metric calculation in Python; interactive Power BI dashboard for vendor efficiency visualization',
        ],
      },
      {
        role: 'Finance Leadership — FiNIT',
        org:  'The Finance Society, MANIT Bhopal',
        period: 'Nov 2024 – Present',
        color: '#00FF88',
        icon: '🏦',
        points: [
          'Organized trading simulations, case study competitions, Financial Debates & Quiz Competitions',
          'Conducted sessions on crypto, derivatives, blockchain in finance — mentored juniors on stock market',
        ],
      },
    ],
    skills: [
      { name: 'Python',            pct: 92, cat: 'Language'  },
      { name: 'SQL',               pct: 78, cat: 'Language'  },
      { name: 'Power BI',          pct: 84, cat: 'Tool'      },
      { name: 'Excel',             pct: 82, cat: 'Tool'      },
      { name: 'Pandas / NumPy',    pct: 86, cat: 'Library'   },
      { name: 'Data Visualization',pct: 84, cat: 'Skill'     },
      { name: 'Predictive Modeling',pct: 80, cat: 'Skill'    },
      { name: 'DBMS & OOP',        pct: 80, cat: 'CS'        },
    ],
    certs: [
      { label: 'Foundation for Excellence Scholarship (2022–2026)', icon: '🎖️' },
      { label: 'Dakshana Scholar (2021–2022) — National Level, Fully Funded', icon: '🏆' },
      { label: 'Power BI Fundamentals — Self Directed', icon: '📊' },
    ],
    downloadUrl: '/DataAnalyst_Resume.pdf',
    downloadLabel: 'Download Data Analyst Resume',
  },

  trader: {
    label: 'Trader',
    fullLabel: 'Derivative Trader',
    color: '#00FF88',
    icon: '📈',
    tagline: 'Systematic quant strategies across F&O, Forex, MCX & Crypto markets',
    experience: [
      {
        role: 'Independent Trader',
        org:  'NSE, Forex, MCX, Crypto',
        period: 'Dec 2022 – Present',
        color: '#00FF88',
        icon: '📈',
        points: [
          'Actively traded Nifty, Bank Nifty, Equity Stocks, Crypto & Forex using technical + sentiment-based strategies with real & virtual capital',
          'Managed drawdowns, applied position sizing & stop-loss rules, tracked trades in Excel journals',
          'Platforms: TradingView, Sensibull, Kite, MT5, TT Sim for paper & real-time trading',
        ],
      },
      {
        role: 'Movementum Thoko Strategy',
        org:  'Systematic Short-Selling — Equity Market',
        period: '2024 – Present',
        color: '#FFB800',
        icon: '🎯',
        points: [
          'Developed & executed systematic short-selling strategy: top gainer stocks from past 2–3 days using multi-factor analysis',
          'Optimized accuracy from 70% to a consistent 90% through a data-driven backtesting approach',
          'Strict daily trading system — mitigated emotional bias, maintained consistent process execution',
        ],
      },
      {
        role: 'Co-Founder & Fintech Head — FiNIT',
        org:  'The Finance Society, MANIT Bhopal',
        period: 'Nov 2024 – Present',
        color: '#A78BFA',
        icon: '🏦',
        points: [
          'Led sessions on crypto, derivatives, blockchain in finance & algo trading basics',
          'Organized trading simulations, case study competitions & financial debates for 80+ members',
        ],
      },
    ],
    skills: [
      { name: 'Options Greeks',        pct: 85, cat: 'Finance'   },
      { name: 'Technical Analysis',    pct: 88, cat: 'Finance'   },
      { name: 'Risk Management',       pct: 85, cat: 'Finance'   },
      { name: 'Quant Strategies',      pct: 82, cat: 'Finance'   },
      { name: 'Forex Pip Calculation', pct: 80, cat: 'Finance'   },
      { name: 'TradingView / MT5',     pct: 88, cat: 'Tools'     },
      { name: 'Sentiment Analysis',    pct: 78, cat: 'Research'  },
      { name: 'Python for Trading',    pct: 82, cat: 'Language'  },
    ],
    certs: [
      { label: 'NISM Certificate (2025–2027) — SEBI Registered Investor Awareness', icon: '🏛️' },
      { label: 'CME Group — Mini/Micro Futures & Options, Global Instruments (2025)', icon: '🌐' },
      { label: 'Dakshana Scholar (2021–2022) — IIT-JEE Residential Program', icon: '🏆' },
    ],
    downloadUrl: '/Quant_Resume.pdf',
    downloadLabel: 'Download Trader Resume',
  },
}

// ─── CONTACTS ────────────────────────────────────────────────────────────────
export const CONTACTS = [
  { icon: '💼', label: 'LinkedIn', handle: 'dileep-bhargav89',          href: 'https://www.linkedin.com/in/dileep-bhargav89/', color: '#0A66C2' },
  { icon: '🐙', label: 'GitHub',   handle: 'dileepbhargav89',            href: 'https://github.com/dileepbhargav89',            color: '#8957e5' },
  { icon: '📧', label: 'Email',    handle: 'dileepbhargav722@gmail.com', href: 'mailto:dileepbhargav722@gmail.com',             color: '#EA4335' },
  { icon: '📱', label: 'Mobile',   handle: '+91 9109059791',             href: 'tel:+919109059791',                            color: '#00D4FF' },
]
