const GITHUB_ICON_SVG = `<svg viewBox="0 0 16 16" fill="currentColor"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/></svg>`;

const SITE_DATA = {

  nav: {
    logo: "AdamSaidane",
    links: [
      { label: "About",         href: "#about" },
      { label: "Experience",    href: "#experience" },
      { label: "Projects",      href: "#projects" },
      { label: "Open Source",   href: "#opensource" },
      { label: "Certifications",href: "#certifications" },
      { label: "Contact",       href: "#contact" },
    ],
    resumeFile: "Resume_Adam_Saidane.pdf",
  },

  hero: {
    tag: "Software Engineer · INSAT Tunis",
    nameFirst: "Adam",
    nameLast: "Saidane",
    role: "Building systems that scale,<br>models that predict, products that matter.",
    desc: `Second-year Software Engineering student at INSAT.
      I build full-stack web applications, data science pipelines, and intelligent systems
      — from REST APIs to advanced AI models.`,
    ctaPrimary: { label: "View Projects", href: "#projects" },
    ctaGhost:   { label: "GitHub ↗", href: "https://github.com/adamsaidane" },
    terminal: {
      title: "adam@insat ~ profile.json",
      fields: [
        { key: "name",        value: "Adam Saidane" },
        { key: "role",        value: "Software Engineer" },
        { key: "university",  value: "INSAT Tunis" },
        { key: "status",      value: "Open to opportunities" },
      ],
    },
    stats: [
      { num: "5+",  label: "Projects shipped" },
      { num: "10+", label: "Technologies used" },
      { num: "2",   label: "Certifications" },
    ],
  },

  about: {
    label: "01 — About",
    title: "Engineer by training,<br><em>builder by nature.</em>",
    paragraphs: [
      `I'm Adam, a <strong> Software Engineering student at INSAT</strong> in Tunis.
      My work sits at the intersection of software architecture, data engineering, and AI,
      and I bring that range into every project I build.`,
      `At <strong>Teamwill</strong>, I worked as a Data Engineer Intern, designing a generic ETL pipeline
      that dynamically syncs unknown PostgreSQL schemas — with checksum-based streaming diffs,
      automatic foreign-key dependency resolution, and fault-tolerant transaction handling at scale.`,
      `At <strong>Welyne</strong>, I built an AI-powered financial reporting backend
      with FastAPI`,
      `At <strong>IID</strong>, I delivered production-ready banking APIs using Spring Boot,
      and leading a full CRM version migration in a live codebase.`,
      `Beyond internships, I build projects driven by curiosity: an intelligent medical assistance platform, 
      a reinforcement learning traffic system that reduced waiting times by 60%, a football Expected Goals model 
      using XGBoost, and a full-stack HR management platform.`,
      `I'm <strong>trilingual</strong> — Arabic, English, French — and I enjoy working in collaborative,
      international environments on challenging, high-impact problems.`,
    ],
    education: [
      {
        year: "Since Sept. 2023",
        school: "INSAT — National Institute of Applied Sciences and Technology",
        degree: "Software Engineering",
        badge: "Active",
      },
      {
        year: "Sept. 2019 – June 2023",
        school: "LPM8 — Menzah 8 Pioneer High School",
        degree: "Baccalaureate · Mathematics",
        badge: "Highest Honors",
      },
    ],
    skillGroups: [
      { label: "Languages", chips: ["Python", "Java", "C#", "PHP", "JavaScript", "C / C++"] },
      { label: "Backend",   chips: ["Spring Boot", "ASP.NET Core", "Symfony"] },
      { label: "Data & AI", chips: ["PyTorch", "TensorFlow", "Keras", "Scikit-learn", "Pandas", "NumPy", "Matplotlib"] },
      { label: "Tools & DB",chips: ["Git", "Docker", "MySQL", "Swagger", "Postman", "Jupyter"] },
    ],
  },

  experience: {
    label: "02 — Experience",
    title: "Where I've <em>shipped</em> things.",
    items: [
      {
        company: "Teamwill",
        role: "Data Engineer Intern",
        date: "July – August 2026 · Tunis",
        bullets: [
          "Designed and built a generic Talend/Java ETL pipeline synchronizing two unknown PostgreSQL schemas, dynamically discovering tables, columns, and constraints runtime.",
          "Engineered a streaming row-comparison engine (checksum-based diffing with server-side cursors) achieving O(1) memory per table, avoiding full table loads on datasets of arbitrary size.",
          "Implemented automatic foreign-key dependency resolution (topological sort) to generate transaction-safe INSERT/UPDATE/DELETE scripts respecting referential integrity constraints",
          "Added fault-tolerance layer with retry/backoff logic, connection recovery, and REPEATABLE READ transaction snapshots to guarantee consistent reads under concurrent writes.",
        ],
        stack: ["Java", "Talend Studio", "PostgreSQL", "JDBC", "SQL"],
      },
      {
        company: "Welyne",
        role: "AI Engineer Intern",
        date: "April – June 2026 · Tunis",
        bullets: [
          "Built a FastAPI backend automating monthly financial reporting: CSV ingestion, KPI computation, and AIgenerated analysis.",
          "Designed an asynchronous background pipeline (upload → processing → PDF generation) with real-time task status tracking via REST endpoints.",
          "Generated automated PDF reports combining financial KPIs and AI-written insights using ReportLab, Pandas, and Matplotlib.",

        ],
        stack: ["Python", "FastAPI", "Pandas", "ReportLab", "Pytest"],
      },
      {
        company: "International Information Development (IID)",
        role: "Software Engineer Intern",
        date: "July – August 2025 · Tunis",
        bullets: [
          "Designed and implemented Java Spring Boot REST services for the ECHO Credit Card project (card lifecycle management) and ECHOS Ecommerce (financial calculation services).",
          "Developed robust unit tests using JUnit and Mockito, achieving 90%+ code coverage across banking APIs — mocking external dependencies, validating edge cases, and ensuring reliable error handling.",
          "Managed a full version migration of the Edeal CRM platform, resolving post-migration bugs and implementing custom business logic for sales automation.",
        ],
        stack: ["Spring Boot", "JUnit", "Mockito", "Swagger", "REST APIs"],
      },
    ],
  },

  projects: {
    label: "03 — Projects",
    title: "Things I <em>built</em>.",
    items: [
      {
        image: "images/medassist.png",
        alt: "AI Medical Assistant",
        title: "MedAssistAI",
        desc: "AI-powered medical assistance platform combining conversational AI, symptom-based disease assessment, retrieval-augmented generation, and medical image analysis. The system integrates a FastAPI backend with a React frontend and uses LLMs to provide structured, context-aware assistance while supporting patient–doctor interactions and medical image analysis.",
        stack: ["Python", "FastAPI", "React", "LLMs", "RAG", "Ollama", "SQLAlchemy", "PostgreSQL"],
        github: "https://github.com/adamsaidane/AIMedicalAssistant",
      },
      {
        image: "images/traffic.png",
        alt: "AI Traffic Lights Manager",
        title: "AI Traffic Lights Manager",
        desc: "Research-grade adaptive traffic signal control using Deep Reinforcement Learning on a 4-way intersection via SUMO/TraCI. Implements three algorithms — tabular Q-Learning, Double Dueling DQN with Prioritised Replay, and PPO with entropy decay — operating on a 73-dimensional state vector. Best result: DQN achieves ~60% reduction in average waiting time vs fixed-time signals.",
        stack: ["Python", "PyTorch", "Q-Learning", "DQN", "PPO", "SUMO/TraCI", "TensorBoard"],
        github: "https://github.com/adamsaidane/AITrafficLightsManager",
      },
      {
        image: "images/xg_model.png",
        alt: "xG Model",
        title: "xG Model — Football Analytics",
        desc: "End-to-end Expected Goals pipeline built on StatsBomb open data. Separate XGBoost models for each shot category (foot/head/penalty/1v1), enriched with spatial and contextual features including goalkeeper positioning and defensive pressure. Includes an interactive Streamlit app where you click the pitch to get a live xG prediction.",
        stack: ["Python", "XGBoost", "Streamlit", "mplsoccer", "Scikit-learn", "StatsBomb"],
        github: "https://github.com/adamsaidane/xG_model",
      },
      {
        image: "images/hr_system.png",
        alt: "HR Management System",
        title: "HR Management System",
        desc: "Enterprise-grade HRMS built with ASP.NET Core 8. Covers the full employee lifecycle: onboarding, payroll, recruitment pipeline, promotion tracking, and equipment management. Features a real-time dashboard with 40+ analytics views, three-tier RBAC (AdminRH / Manager / Employee), and cookie-based auth with Claims authorization.",
        stack: ["ASP.NET Core 8", "C#", "EF Core", "SQL Server", "Razor Views"],
        github: "https://github.com/adamsaidane/HR-Management-System",
      },
      {
        image: "images/livres_rares.png",
        alt: "Livres Rares",
        title: "LivresRares — Rare Books E-Commerce",
        desc: "Full-stack Symfony e-commerce platform for rare books. Complete catalogue with search/filter/pagination, AJAX cart with real-time updates, checkout flow with order confirmation, customer review system, and a full admin interface with CRUD for products, users, orders, and categories.",
        stack: ["Symfony 6", "PHP", "Twig", "MySQL", "Doctrine", "Docker"],
        github: "https://github.com/adamsaidane/LivresRares",
      },
      {
        image: "images/takwira_api.png",
        alt: "Takwira API",
        title: "Takwira API — Football Backend",
        desc: "RESTful Spring Boot API for football team management. Full CRUD for players, matches, and goals, JWT authentication, role-based access control, Swagger/OpenAPI docs, and Docker + Docker Compose deployment.",
        stack: ["Java 17", "Spring Boot", "JWT", "MySQL", "Docker", "Swagger"],
        github: "https://github.com/adamsaidane/TakwiraAPI",
      },
    ],
  },

  opensource: {
    label: "04 — Open Source",
    title: "Code I gave <em>back.</em>",
    items: [
      {
        project: "Keras — Deep Learning Library",
        badge: "Contributor",
        bullets: [
          "Implemented input validation for PReLU and LeakyReLU activation layers.",
          "Diagnosed a backend-specific failure in OpenVINO during testing, isolating it as a pre-existing issue.",
        ],
        link: { href: "https://github.com/keras-team/keras", label: "keras-team/keras ↗" },
      },
    ],
  },

  certifications: {
    label: "05 — Certifications",
    title: "What I've <em>earned.</em>",
    items: [
      {
        issuer: "IBM",
        year: "2026",
        name: "Generative AI Engineering with LLMs Specialization",
        desc: "Professional specialization focused on building generative AI applications with large language models, covering prompt engineering, LLM architecture, fine-tuning, RAG, and AI application development.",
        tags: ["Generative AI", "LLMs", "Prompt Engineering", "RAG", "AI Engineering"],
      },
      {
        issuer: "IBM",
        year: "2026",
        name: "IBM AI Engineering Professional Certificate",
        desc: "Comprehensive professional certification covering machine learning, deep learning, neural networks, computer vision, and NLP. Includes hands-on projects using TensorFlow, Keras, PyTorch, and Scikit-Learn.",
        tags: ["Machine Learning", "Deep Learning", "TensorFlow", "PyTorch", "Keras"],
      },
      {
        issuer: "Harvard / CS50",
        year: "2024",
        name: "CS50x — Introduction to Computer Science",
        desc: "Harvard's renowned introduction to computer science and programming. Covers algorithms, data structures, memory management, web development, and problem-solving in C, Python, SQL, and JavaScript.",
        tags: ["Algorithms", "C", "Python", "SQL", "Web"],
      },
    ],
  },

  contact: {
    label: "06 — Contact",
    tagline: `Let's build something <em style="color:var(--primary-container);font-style:normal">remarkable.</em>`,
    sub: "I'm open to internships, collaborations, and interesting problems. Whether it's a backend system, a data pipeline, or an idea that needs an engineer — reach out.",
    email: "adam.saidane@insat.ucar.tn",
    phone: "(+216) 56 179 434",
    phoneHref: "tel:+21656179434",
    linkedin: { url: "https://www.linkedin.com/in/adam-saidane-5461aa353/", label: "Adam Saidane" },
    github: { url: "https://github.com/adamsaidane", label: "@adamsaidane" },
    resumeFile: "Resume_Adam_Saidane.pdf",
    ctaLabel: "Start a conversation →",
  },

  footer: {
    text: `Designed & built by <span>Adam Saidane</span> · INSAT Tunis · 2026`,
  },
};
