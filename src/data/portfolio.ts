/**
 * Central portfolio data — generated from Sujal Nanaware's resume.
 * Every fact on the site comes from this file. Update it here and the whole site follows.
 */

export type Palette = { from: string; via: string; to: string; accent: string };

export const profile = {
  fullName: 'Sujal Nanaware',
  displayName: 'Sujal Nanaware',
  firstName: 'SUJAL',
  seriesTag: 'THE SERIES',
  /** Fictional studio card shown at the very start of the opening sequence. */
  originalLabel: 'A NANAWARE ORIGINAL',
  role: 'Java Full Stack Developer',
  tagline: ['Java Full Stack', 'AI & ML Researcher', 'React & Gemini API'],
  intro:
    'Aspiring Java Full Stack Developer and B.E. Information Technology student (CGPA 8.0) at PVG COET, Pune. Hands-on experience building enterprise web applications with Java, Servlets, JSP, Hibernate & MySQL, and intelligent solutions powered by the Gemini API.',
  location: 'Pune, Maharashtra, India',
  phone: '+91 9545759076',
  email: 'sujal30nanaware@gmail.com',
  links: {
    linkedin: 'https://www.linkedin.com/in/sujal-nanaware-01848b27b?utm_source=share_via&utm_content=profile&utm_medium=member_ios',
    github: 'https://github.com/SujalNanaware',
  },
  resumePdf: '/assets/Sujal_Nanaware_Resume.pdf',
  offerLetter: '/assets/Avotech_Offer_Letter.pdf',
  portrait: {
    src: '/assets/portrait-720.webp',
    srcSet: '/assets/portrait-420.webp 420w, /assets/portrait-720.webp 720w, /assets/portrait-1100.webp 1100w',
    alt: 'Portrait of Sujal Nanaware',
  },
  interests: ['Enterprise Java & Spring Boot', 'Machine Learning & Computer Vision', 'AI Agents & LLM Workflows'],
};

export const education = [
  {
    school: 'PVG COET',
    place: 'Pune',
    degree: 'Bachelor of Engineering — Information Technology',
    period: '2023 – 2027 (Expected)',
    score: 'CGPA 8.0 / 10',
  },
  {
    school: "PVG's COET",
    place: 'Pune',
    degree: 'HSC — Class XII',
    period: '2021 – 2023',
    score: 'Score 70%',
  },
  {
    school: 'Muktangan English School',
    place: 'Pune',
    degree: 'SSC — Class X',
    period: 'Completed 2021',
    score: 'Score 87%',
  },
];

export const experience = [
  {
    company: 'Avotech Systems Pvt. Ltd.',
    role: 'DevOps Engineer Intern',
    place: 'Pune, Maharashtra',
    period: 'Oct 2026 – May 2027',
    badge: 'OFFER RECEIVED',
    offerLetterUrl: '/assets/Avotech_Offer_Letter.pdf',
    points: [
      'Selected as DevOps Engineer Intern at Avotech Systems Pvt. Ltd., Hinjewadi Phase-2, Pune — a leading IT solutions company.',
      'Joining Date: October 13th, 2026. Will work on DevOps pipelines, CI/CD automation, cloud infrastructure, and container orchestration.',
      'Assessed on performance after 6 months with stipend eligibility; end-to-end product lifecycle exposure in an Agile environment.',
    ],
  },
  {
    company: 'Full Stack Java Development',
    role: 'Trainee Developer',
    place: 'Pune, Maharashtra',
    period: 'Ongoing',
    points: [
      'Comprehensive hands-on training covering Core Java, Servlets, JSP, JDBC, Hibernate, and modern web application workflows.',
      'Developed responsive and functional web applications implementing MVC architecture, server-side controller logic, and MySQL database connectivity.',
      'Applied Spring Tool Suite (STS), version control with Git, secure prepared statements, and end-to-end debugging practices.',
    ],
  },
  {
    company: 'AI Agents Training',
    role: 'AI Workflows & Prompt Engineering',
    place: 'Online / Practical',
    period: 'Ongoing',
    points: [
      'Hands-on experience in prompt engineering, autonomous AI workflows, agent deployment, and multimodal content generation.',
      'Integrating cutting-edge generative AI models like Google Gemini into production web applications for real-time user assistance.',
    ],
  },
];

export const research = [
  {
    title: 'Real-Time Fall Detection',
    subtitle: 'Research Paper (Ongoing)',
    domain: 'Healthcare AI • Sensor Fusion & Computer Vision',
    description:
      'Working on a research paper focused on identifying physical falls the moment they occur so timely emergency alerts can be raised for elderly and at-risk individuals.',
    points: [
      'Studying machine learning and deep learning approaches that balance detection accuracy with low latency, while reducing false alarms from everyday activities such as sitting, bending, or lying down.',
      'Reviewing existing sensor-based and vision-based methods, and evaluating performance on metrics such as accuracy, precision, recall, and response time.',
    ],
  },
];

export type Metric = { value: string; label: string };

export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  github?: string;
  live?: string;
  palette: Palette;
  motif: 'shield' | 'flow' | 'tenants';
};

export const projects: Project[] = [
  {
    id: 'ai-study-buddy',
    title: 'AI-Powered Study Buddy Assistant',
    year: '2026',
    genre: 'Generative AI • React • EdTech',
    logline: 'An intelligent web companion powered by the Gemini API generating structured study notes, dynamic quizzes, and step-by-step concept explanations in real time.',
    stack: ['React', 'Vite', 'Gemini API', 'JavaScript', 'CSS', 'Vercel', 'Git'],
    build: [
      'Built a dynamic and highly responsive web app using React and Vite, seamlessly integrated with the Google Gemini API for automated educational content generation.',
      'Engineered interactive features to synthesize concise study notes, interactive multi-question quizzes with instant evaluation, and step-by-step topic breakdowns.',
      'Deployed the production-ready application on Vercel with Git-based version control and continuous deployment.',
    ],
    features: [
      'Automated study notes generation from user prompts',
      'Interactive quiz generation with automated scoring',
      'Step-by-step concept explanations powered by Gemini',
      'Fast client-side rendering with React and Vite',
      'Production deployment on Vercel with CI/CD',
    ],
    metrics: [
      { value: 'Gemini', label: 'multimodal API integration' },
      { value: '<1.5s', label: 'average response generation' },
      { value: '100%', label: 'custom quiz evaluation' },
      { value: 'Vercel', label: 'live cloud deployment' },
      { value: 'React+Vite', label: 'modern frontend stack' },
    ],
    github: 'https://github.com/SujalNanaware',
    palette: { from: '#1a0d33', via: '#511b8a', to: '#090514', accent: '#a855f7' },
    motif: 'flow',
  },
  {
    id: 'fall-detection',
    title: 'Real-Time Fall Detection System',
    year: '2026',
    genre: 'Research Paper • Machine Learning • Healthcare IoT',
    logline: 'A research-backed framework identifying critical fall events in real time to alert caregivers and protect elderly and at-risk individuals.',
    stack: ['Python', 'Machine Learning', 'Deep Learning', 'Computer Vision', 'Sensor Fusion'],
    build: [
      'Authored an ongoing research paper focused on identifying physical falls the moment they happen so timely emergency alerts can be raised for elderly individuals.',
      'Researched ML and deep learning architectures balancing detection accuracy with minimal latency, reducing false alarms from everyday activities such as sitting, bending, or lying down.',
      'Evaluated sensor-based (accelerometer/gyroscope) and computer vision-based methods on critical performance metrics: accuracy, precision, recall, and rapid response time.',
    ],
    features: [
      'Real-time fall event detection & classification',
      'False-alarm mitigation against everyday activities (ADLs)',
      'Comparative evaluation of sensor-based vs vision-based models',
      'Targeted for immediate elderly caregiver notification',
    ],
    metrics: [
      { value: 'Research', label: 'Paper (Ongoing)' },
      { value: '<200ms', label: 'target alert latency' },
      { value: '>95%', label: 'target precision vs false alarms' },
      { value: 'ML & DL', label: 'sensor & vision benchmarks' },
    ],
    palette: { from: '#2a0610', via: '#7a0f24', to: '#0b0710', accent: '#ff3d5a' },
    motif: 'shield',
  },
  {
    id: 'student-records',
    title: 'Student Record Management System',
    year: '2025',
    genre: 'Enterprise Java • Servlets • MVC',
    logline: 'An enterprise-grade academic administration web application with full CRUD operations backed by MySQL and strict MVC layers.',
    stack: ['Java', 'Servlets', 'JSP', 'JDBC', 'JSTL', 'MySQL'],
    build: [
      'Developed a full-stack web application with complete CRUD operations (create, view, update, delete) to manage student records backed by a persistent MySQL database.',
      'Architected following strict MVC principles: JSP and JSTL for views, Java Servlets as controllers, and JDBC for efficient relational database queries.',
      'Implemented prepared statements to prevent SQL injection vulnerabilities and structured maintainable controller logic.',
    ],
    features: [
      'Full CRUD operations for student records',
      'Strict MVC separation of concerns',
      'Dynamic JSP views with JSTL tags',
      'Secure JDBC database transactions with MySQL',
    ],
    metrics: [
      { value: 'Full CRUD', label: 'create, read, update, delete' },
      { value: 'MVC', label: 'architecture adherence' },
      { value: 'MySQL', label: 'relational database backend' },
      { value: 'JDBC', label: 'secure prepared statements' },
    ],
    github: 'https://github.com/SujalNanaware',
    palette: { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' },
    motif: 'tenants',
  },
  {
    id: 'library-management',
    title: 'Library Management System',
    year: '2025',
    genre: 'Java • Hibernate • Spring Tool Suite',
    logline: 'A robust catalog and book circulation management system developed in STS with dynamic JSTL rendering and persistent MySQL storage.',
    stack: ['Java', 'JSP', 'Servlets', 'JDBC', 'JSTL', 'Hibernate', 'MySQL', 'STS'],
    build: [
      'Built a CRUD-based web application to add, search, update, issue, and remove library book records with persistent MySQL storage.',
      'Used JSTL to render dynamic data on JSP pages and structured application code in clean MVC layers for maintainability and scalability.',
      'Developed and tested in Spring Tool Suite (STS), streamlining servlet dispatching, database connectivity, and administrative catalog management.',
    ],
    features: [
      'Book catalog search, addition, update, and removal',
      'Dynamic data rendering using JSTL and JSP',
      'Layered MVC architecture for clean business logic',
      'Developed and configured in Spring Tool Suite (STS)',
    ],
    metrics: [
      { value: 'Instant', label: 'catalog search & filter' },
      { value: 'STS', label: 'Spring Tool Suite development' },
      { value: 'Hibernate', label: 'ORM persistence workflows' },
      { value: 'JSTL', label: 'dynamic JSP rendering' },
    ],
    github: 'https://github.com/SujalNanaware',
    palette: { from: '#1a0d02', via: '#8a4a07', to: '#0a0806', accent: '#ffb547' },
    motif: 'flow',
  },
];

export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  link?: string;
};

export const achievements: Achievement[] = [
  {
    id: 'fall-detection-research',
    title: 'Real-Time Fall Detection Researcher',
    org: 'Healthcare AI & ML Research Paper',
    detail: 'Authoring an ongoing research paper focused on low-latency fall detection to safeguard elderly and at-risk individuals.',
    laurel: 'Research Paper (Ongoing)',
  },
  {
    id: 'pvg-coet-cgpa',
    title: '8.0 CGPA Academic Distinction',
    org: 'PVG COET, Pune',
    detail: 'Pursuing B.E. Information Technology (Class of 2027) with consistent academic performance across 3 years.',
    laurel: 'Academic Distinction',
  },
  {
    id: 'ssc-board-score',
    title: '87% SSC High Distinction',
    org: 'Muktangan English School, Pune',
    detail: 'Cleared Maharashtra State Board Class X examination with 87% overall score.',
    laurel: 'High Distinction',
  },
  {
    id: 'german-language',
    title: 'German A1 Certified',
    org: 'International Language Certification',
    detail: 'Successfully completed and cleared the German A1 official exam assessments.',
    laurel: 'Language Certification',
  },
  {
    id: 'ibm-ai-ml',
    title: 'AI & ML Fundamentals Completed',
    org: 'IBM SkillsBuild',
    detail: 'Completed core AI and Machine Learning fundamentals modules and cleared all rigorous assessments.',
    laurel: 'IBM Certified',
  },
];

export type Certification = { issuer: string; name: string; link: string };

export const certifications: Certification[] = [
  {
    issuer: 'IBM SkillsBuild',
    name: 'AI & Machine Learning Fundamentals',
    link: 'https://skillsbuild.org/',
  },
  {
    issuer: 'Language Exam',
    name: 'German A1 Exam Certificate',
    link: '#',
  },
  {
    issuer: 'Full Stack Java',
    name: 'Core Java, Servlets, Hibernate & Web Workflows',
    link: '#',
  },
  {
    issuer: 'AI Agents Training',
    name: 'Prompt Engineering, AI Workflows & Multimodal Generation',
    link: '#',
  },
];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    title: 'Languages',
    subtitle: 'Java is the primary programming language',
    skills: [
      { name: 'Java', mono: 'Jv', note: 'Primary' },
      { name: 'Python', mono: 'Py' },
      { name: 'SQL', mono: 'Sq' },
      { name: 'JavaScript', mono: 'Js' },
      { name: 'HTML', mono: 'Ht' },
      { name: 'CSS', mono: 'Cs' },
    ],
  },
  {
    id: 'frameworks',
    title: 'Frameworks & Technologies',
    subtitle: 'Enterprise web & modern frontend',
    skills: [
      { name: 'React', mono: 'Re' },
      { name: 'Vite', mono: 'Vt' },
      { name: 'Servlet', mono: 'Sv' },
      { name: 'JSP', mono: 'Jp' },
      { name: 'JDBC', mono: 'Jb' },
      { name: 'JSTL', mono: 'Jl' },
      { name: 'Hibernate', mono: 'Hb' },
    ],
  },
  {
    id: 'databases',
    title: 'Databases',
    subtitle: 'Relational & Document Stores',
    skills: [
      { name: 'MySQL', mono: 'My', note: 'Primary' },
      { name: 'MongoDB', mono: 'Mg' },
    ],
  },
  {
    id: 'tools',
    title: 'Tools & Platforms',
    subtitle: 'Development, IDEs & Deployment',
    skills: [
      { name: 'Git', mono: 'Gt' },
      { name: 'GitHub', mono: 'Gh' },
      { name: 'Spring Tool Suite (STS)', mono: 'St' },
      { name: 'VS Code', mono: 'Vc' },
      { name: 'Vercel', mono: 'Vc' },
    ],
  },
  {
    id: 'ai-research',
    title: 'AI & Research',
    subtitle: 'GenAI, ML & Healthcare IoT',
    skills: [
      { name: 'Gemini API', mono: 'Gm' },
      { name: 'Prompt Engineering', mono: 'Pe' },
      { name: 'Machine Learning', mono: 'Ml' },
      { name: 'Deep Learning', mono: 'Dl' },
      { name: 'Computer Vision', mono: 'Cv' },
      { name: 'Sensor Fusion', mono: 'Sf' },
    ],
  },
  {
    id: 'fundamentals',
    title: 'CS Fundamentals & Languages',
    subtitle: 'Architectural foundations',
    skills: [
      { name: 'MVC Architecture', mono: 'Mv' },
      { name: 'OOPs', mono: 'Oo' },
      { name: 'CRUD Workflows', mono: 'Cr' },
      { name: 'German A1', mono: 'De', note: 'Certified' },
      { name: 'English', mono: 'En' },
    ],
  },
];

/**
 * Factual cross-references shown when a skill card is hovered/tapped:
 * where the skill appears in the projects, certifications or achievements on the resume.
 */
export const skillEvidence: Record<string, string[]> = {
  Java: ['Student Record Management System', 'Library Management System', 'Full Stack Java Training'],
  Python: ['Real-Time Fall Detection Research', 'IBM SkillsBuild AI/ML'],
  SQL: ['Student Record Management System', 'Library Management System', 'MySQL'],
  JavaScript: ['AI-Powered Study Buddy Assistant', 'React & Vite Development'],
  HTML: ['AI-Powered Study Buddy Assistant', 'JSP Views'],
  CSS: ['AI-Powered Study Buddy Assistant', 'Modern UI Design'],
  React: ['AI-Powered Study Buddy Assistant'],
  Vite: ['AI-Powered Study Buddy Assistant', 'Fast Build Tooling'],
  Servlet: ['Student Record Management System', 'Library Management System'],
  JSP: ['Student Record Management System', 'Library Management System'],
  JDBC: ['Student Record Management System', 'Library Management System'],
  JSTL: ['Student Record Management System', 'Library Management System'],
  Hibernate: ['Library Management System', 'Full Stack Java Training'],
  MySQL: ['Student Record Management System', 'Library Management System'],
  MongoDB: ['Full Stack Web Development & Database Modeling'],
  Git: ['AI-Powered Study Buddy Assistant', 'All GitHub Projects'],
  GitHub: ['AI-Powered Study Buddy Assistant', 'Student Record System', 'Library System'],
  'Spring Tool Suite (STS)': ['Library Management System'],
  'VS Code': ['React, Vite & AI Development Workflows'],
  Vercel: ['AI-Powered Study Buddy Assistant Live Production'],
  'Gemini API': ['AI-Powered Study Buddy Assistant', 'AI Agents Training'],
  'Prompt Engineering': ['AI Agents Training', 'Gemini API Workflows'],
  'Machine Learning': ['Real-Time Fall Detection Research', 'IBM SkillsBuild'],
  'Deep Learning': ['Real-Time Fall Detection Research', 'IBM SkillsBuild'],
  'MVC Architecture': ['Student Record Management System', 'Library Management System'],
  'OOPs': ['Core Java Applications', 'Hibernate ORM'],
  'German A1': ['German A1 Exam Certificate'],
};

export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

const crimson: Palette = { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' };
const amber: Palette = { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' };
const ocean: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };
const violet: Palette = { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' };
const jade: Palette = { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' };

export const seasons: Season[] = [
  {
    number: 1,
    title: 'The Foundation',
    period: '2020 – 2023',
    synopsis: 'Schooling and Higher Secondary in Pune — building strong analytical and mathematical roots.',
    episodes: [
      {
        code: 'S01 E01',
        title: 'Muktangan High School',
        description: 'Completed SSC at Muktangan English School, Pune with an outstanding score of 87%.',
        tags: ['SSC', '87%', 'Pune'],
        runtime: 'Class X',
        palette: jade,
      },
      {
        code: 'S01 E02',
        title: 'Higher Secondary',
        description: "Completed HSC (Class XII) at PVG's COET, Pune with 70% in science discipline.",
        tags: ['HSC', '70%', 'PVG COET'],
        runtime: '2021 – 2023',
        palette: amber,
      },
    ],
  },
  {
    number: 2,
    title: 'Engineering at PVG COET',
    period: '2023 – Present',
    synopsis: 'Bachelor of Engineering in Information Technology at Pune Vidyarthi Griha’s College of Engineering and Technology.',
    episodes: [
      {
        code: 'S02 E01',
        title: 'The IT Engineer',
        description: 'B.E. Information Technology at PVG COET, Pune — maintaining a cumulative CGPA of 8.0 / 10 across 3 years.',
        tags: ['B.E. IT', 'CGPA 8.0', 'PVG COET Pune'],
        runtime: '2023 – 2027',
        palette: violet,
      },
      {
        code: 'S02 E02',
        title: 'Core Foundations',
        description: 'Mastering Object-Oriented Programming, Database Management Systems, SQL, and algorithms.',
        tags: ['OOPs', 'DBMS', 'SQL'],
        runtime: 'Coursework',
        palette: ocean,
      },
    ],
  },
  {
    number: 3,
    title: 'Enterprise Java Mastery',
    period: '2024 – 2025',
    synopsis: 'Deep dive into full-stack Java architecture: Servlets, JSP, JDBC, JSTL, Hibernate, and MVC pattern.',
    episodes: [
      {
        code: 'S03 E01',
        title: 'Student Records System',
        description: 'Developed a full-stack CRUD application for student records with strict MVC separation: JSP/JSTL, Servlets, and JDBC.',
        tags: ['Java', 'Servlets', 'JSP', 'JDBC', 'MySQL'],
        runtime: 'Full-Stack MVC',
        palette: ocean,
      },
      {
        code: 'S03 E02',
        title: 'Library Management in STS',
        description: 'Built a CRUD library management web application in Spring Tool Suite with persistent MySQL storage and Hibernate workflows.',
        tags: ['Hibernate', 'STS', 'JSTL', 'MySQL'],
        runtime: 'Spring Tool Suite',
        palette: amber,
      },
    ],
  },
  {
    number: 4,
    title: 'The AI & Gemini Frontier',
    period: '2025 – 2026',
    synopsis: 'Merging modern React & Vite frontends with Google Gemini generative AI and autonomous agent concepts.',
    episodes: [
      {
        code: 'S04 E01',
        title: 'AI Study Buddy Assistant',
        description: 'Built and deployed a production web app using React, Vite, and the Gemini API for notes, quizzes, and concept explanations.',
        tags: ['Gemini API', 'React', 'Vite', 'Vercel'],
        runtime: 'Live on Vercel',
        palette: violet,
      },
      {
        code: 'S04 E02',
        title: 'IBM SkillsBuild & AI Agents',
        description: 'Completed AI & Machine Learning fundamentals certification with IBM SkillsBuild and practical agentic prompt workflows.',
        tags: ['IBM SkillsBuild', 'AI Agents', 'Prompt Engineering'],
        runtime: 'Certified',
        palette: jade,
      },
    ],
  },
  {
    number: 5,
    title: 'The Healthcare AI Researcher',
    period: 'Ongoing',
    synopsis: 'Authoring a real-time fall detection research paper to provide instant alerts and protect elderly lives.',
    episodes: [
      {
        code: 'S05 E01',
        title: 'Real-Time Fall Detection',
        description: 'Studying machine learning and deep learning approaches that balance detection accuracy with low latency for immediate alerts.',
        tags: ['Research Paper', 'ML / DL', 'Elderly Care'],
        runtime: 'Ongoing Research',
        palette: crimson,
      },
      {
        code: 'S05 E02',
        title: 'Reducing False Alarms',
        description: 'Benchmarking sensor-based and vision-based methods to distinguish falls from routine daily activities like sitting or bending.',
        tags: ['Sensors', 'Computer Vision', 'Low Latency'],
        runtime: 'Benchmarking',
        palette: crimson,
      },
    ],
  },
  {
    number: 6,
    title: 'Global Horizons',
    period: 'Now Streaming',
    synopsis: 'Broadening cultural and technical horizons with official German A1 language certification.',
    episodes: [
      {
        code: 'S06 E01',
        title: 'German A1 Certified',
        description: 'Cleared official German A1 language examination, enhancing cross-cultural technical communication.',
        tags: ['German A1', 'International', 'Certified'],
        runtime: 'Certified',
        palette: amber,
      },
    ],
  },
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };

export const topPicks: TopPick[] = [
  { label: 'Primary Language', title: 'Java', detail: 'Servlets, JSP, JDBC, Hibernate & MVC', palette: amber },
  { label: 'The AI Original', title: 'AI Study Buddy', detail: 'Gemini API + React + Vite on Vercel', palette: violet },
  { label: 'Research Original', title: 'Fall Detection Paper', detail: 'Real-time ML/DL for elderly safety', palette: crimson },
  { label: 'Academic Standing', title: 'PVG COET Pune', detail: '8.0 CGPA in B.E. Information Technology', palette: jade },
  { label: 'School Merit', title: '87% SSC', detail: 'Muktangan English School, Pune', palette: amber },
  { label: 'International Credential', title: 'German A1', detail: 'Language exam certificate', palette: violet },
  { label: 'AI Credential', title: 'IBM SkillsBuild', detail: 'AI & Machine Learning Certification', palette: ocean },
  { label: 'Enterprise Java', title: 'Student Records', detail: 'Full CRUD with strict MVC & MySQL', palette: ocean },
  { label: 'IDE & Persistence', title: 'Library System', detail: 'Spring Tool Suite + Hibernate + JSTL', palette: amber },
  { label: 'Cloud Deployment', title: 'Vercel & Git', detail: 'Production CI/CD Web Deployment', palette: jade },
];

/** Slides for the "▶ Play Intro" cinematic sequence. */
export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const introSlides: IntroSlide[] = [
  {
    kicker: 'Education',
    title: 'B.E. · Information Technology',
    lines: ['PVG COET, Pune', 'Class of 2027 · CGPA 8.0 / 10'],
    chips: ['CGPA 8.0', 'PVG COET Pune', 'IT 2027'],
  },
  {
    kicker: 'Core Foundation',
    title: 'Java First.',
    lines: ['Core Java, Servlets, JSP, JDBC, JSTL, Hibernate', 'MySQL, MongoDB · Clean MVC Architecture'],
    chips: ['Java', 'Servlets', 'JSP', 'JDBC', 'Hibernate', 'MySQL'],
  },
  {
    kicker: 'GenAI Production',
    title: 'AI Study Buddy Assistant',
    lines: ['Automated study notes, dynamic quizzes & explanations', 'Integrated with Google Gemini API', 'Deployed live on Vercel with Git CI/CD'],
    chips: ['Gemini API', 'React', 'Vite', 'Vercel'],
  },
  {
    kicker: 'Research Spotlight',
    title: 'Real-Time Fall Detection',
    lines: ['Ongoing research paper on low-latency fall classification', 'Safeguarding elderly & at-risk individuals', 'Balancing accuracy with false-alarm mitigation'],
    chips: ['Research Paper', 'ML & DL', 'Sensor Fusion', 'Computer Vision'],
  },
  {
    kicker: 'Enterprise Systems',
    title: 'Two Java MVC Platforms',
    lines: ['Student Record Management — full CRUD with MySQL', 'Library Management — built in Spring Tool Suite with JSTL'],
  },
  {
    kicker: 'Certifications',
    title: 'Recognized Credentials',
    lines: ['IBM SkillsBuild AI & Machine Learning Fundamentals', 'German A1 Exam Certificate', 'Full Stack Java & AI Agents Training'],
  },
  {
    kicker: 'Mission',
    title: 'Next Chapter',
    lines: ['Building scalable enterprise systems, AI-driven applications and contributing to impactful engineering teams.'],
  },
];

export type ProfileId = 'sujal' | 'recruiter' | 'developer' | 'research';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  {
    id: 'sujal',
    name: 'Sujal',
    blurb: 'The full series, in order',
    color: '#e5132b',
    order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'story'],
  },
  {
    id: 'recruiter',
    name: 'Recruiter',
    blurb: 'Resume, credentials & education first',
    color: '#4cc9ff',
    order: ['story', 'moments', 'skills', 'originals', 'about', 'journey', 'picks'],
  },
  {
    id: 'developer',
    name: 'Tech Lead / Java Dev',
    blurb: 'Enterprise MVC, projects & GitHub first',
    color: '#46e3a8',
    order: ['originals', 'skills', 'journey', 'moments', 'about', 'picks', 'story'],
  },
  {
    id: 'research',
    name: 'AI & Research',
    blurb: 'Fall detection paper & Gemini AI first',
    color: '#ffb547',
    order: ['originals', 'picks', 'journey', 'moments', 'about', 'skills', 'story'],
  },
];

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'The Pilot • PVG COET IT', palette: violet },
  journey: { nav: 'Journey', card: 'My Journey', meta: `${seasons.length} Seasons • ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Episodes`, palette: amber },
  originals: { nav: 'Originals', card: 'My Projects', meta: `${projects.length} Productions • 2025–2026`, palette: crimson },
  picks: { nav: 'Top Picks', card: 'Top Picks', meta: 'Top 10 from the resume', palette: jade },
  skills: { nav: 'Skills', card: 'My Skills', meta: `${skillCategories.length} Categories`, palette: ocean },
  moments: { nav: 'Moments', card: 'Achievements', meta: `${achievements.length} Moments • ${certifications.length} Certifications`, palette: crimson },
  story: { nav: 'Resume', card: 'The Full Story', meta: 'Resume • View & download', palette: violet },
};
