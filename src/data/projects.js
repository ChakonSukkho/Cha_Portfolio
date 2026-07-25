export const projectFilters = [
  'All',
  'Landing Pages',
  'Software Engineering',
  'Full Stack',
  'Dashboard',
  'Automation',
  'CMS / SEO',
];

const publicAsset = (path) => `${import.meta.env.BASE_URL}${path}`;

export const projects = [
  {
    id: 6,
    title: 'Food Restaurant Landing Page',
    category: 'Landing Pages',
    image: publicAsset('food-landing-page.png'),
    tech: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
    description:
      'A modern food landing page designed to introduce a restaurant, highlight popular dishes, and encourage visitors to order or book a table.',
    features: [
      'Appetizing hero section',
      'Featured food menu',
      'Clear order and reservation actions',
      'Mobile-friendly responsive layout',
    ],
    demoUrl: 'https://foodburgerlandingpage.netlify.app/',
    caseStudyUrl: '#',
    githubUrl: 'https://github.com/ChakonSukkho',
    caseStudy: {
      problem:
        'A restaurant needs to make a strong first impression online while helping customers quickly discover its food and take action.',
      solution:
        'Created a focused one-page experience with bold food presentation, simple content sections, and prominent ordering and reservation calls to action.',
      techStack: 'HTML, CSS, JavaScript, responsive web design',
      features:
        'Hero section, featured dishes, menu highlights, promotional content, calls to action, and a responsive mobile layout.',
      role:
        'Designed and developed the landing page, structured the content, styled the responsive interface, and refined the user experience.',
      outcome:
        'Produced a clean restaurant landing page that clearly presents the brand and guides visitors toward ordering food or making a reservation.',
    },
  },
  {
    id: 7,
    title: 'Barber Shop Landing Page',
    category: 'Landing Pages',
    image: publicAsset('barber-shop-landing-page.png'),
    tech: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
    description:
      'A polished barber shop landing page that presents services, builds trust, and makes it easy for customers to book an appointment.',
    features: [
      'Strong service-focused hero section',
      'Barber services and pricing',
      'Appointment booking call to action',
      'Responsive layout for every screen',
    ],
    demoUrl: 'https://barbershoplandpage.netlify.app/',
    caseStudyUrl: '#',
    githubUrl: 'https://github.com/ChakonSukkho',
    caseStudy: {
      problem:
        'A local barber shop needs a professional web presence that communicates its style, services, and booking options at a glance.',
      solution:
        'Built a concise landing page with a confident visual hierarchy, service information, trust-building content, and visible appointment actions.',
      techStack: 'HTML, CSS, JavaScript, responsive web design',
      features:
        'Hero section, service list, pricing, barber shop highlights, booking calls to action, and mobile-friendly navigation.',
      role:
        'Planned the page structure, developed the interface, created the responsive styling, and improved the booking journey.',
      outcome:
        'Delivered a professional landing page that helps the barber shop showcase its services and turn visitors into appointment enquiries.',
    },
  },
  {
    id: 8,
    title: 'Simple SaaS Landing Page',
    category: 'Landing Pages',
    image: publicAsset('saas-landing-page.png'),
    tech: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
    description:
      'A clean SaaS product landing page that explains the product value, introduces key features, and guides users toward getting started.',
    features: [
      'Product-focused hero section',
      'Feature and benefit highlights',
      'Simple pricing presentation',
      'Conversion-focused calls to action',
    ],
    demoUrl: 'https://saastasklandingpage.netlify.app/',
    caseStudyUrl: '#',
    githubUrl: 'https://github.com/ChakonSukkho',
    caseStudy: {
      problem:
        'A new software product needs a simple way to communicate its value and move potential customers from discovery to sign-up.',
      solution:
        'Designed a clear, conversion-focused page with concise product messaging, feature explanations, pricing content, and repeated calls to action.',
      techStack: 'HTML, CSS, JavaScript, responsive web design',
      features:
        'Hero section, product benefits, feature cards, pricing overview, testimonials, calls to action, and responsive layouts.',
      role:
        'Designed the visual structure, developed the responsive page, organized the product content, and refined the conversion flow.',
      outcome:
        'Created an approachable SaaS landing page that makes the product easier to understand and gives visitors a clear next step.',
    },
  },
  {
    id: 1,
    title: 'ePengakap Daerah — District Scout Management System',
    category: 'Full Stack',
    image: publicAsset('epengakap-dashboard.png'),
    tech: ['React', 'Vite', 'TypeScript', 'Bootstrap', 'Supabase'],
    description:
      'A district-level scout management system covering users, groups, members, activities, reporting, settings, and audit logs.',
    features: [
      'Role-based access control',
      'Activity management',
      'Member import, search, pagination, validation, and reporting',
      'Supabase PostgreSQL integration',
    ],
    demoUrl: 'https://e-pengakap-daerah-bintara.vercel.app/',
    caseStudyUrl: '#',
    githubUrl: 'https://github.com/ChakonSukkho',
    caseStudy: {
      problem:
        'District scout operations required a more organized system to manage users, groups, members, activities, reports, settings, and audit logs in one place.',
      solution:
        'Developed a responsive management platform with structured modules, access control, data validation, and Supabase-backed records.',
      techStack: 'React, Vite, TypeScript, Bootstrap, Supabase PostgreSQL',
      features:
        'RBAC, member import, searching, pagination, validation, reporting, group management, activity management, settings, and audit logs.',
      role:
        'Worked on front-end modules, UI improvements, Supabase integration support, testing, troubleshooting, and documentation.',
      outcome:
        'Improved operational visibility and made member, group, and activity information easier to manage and verify.',
    },
  },
  {
    id: 2,
    title: 'NetWatch — Agentless Network Monitoring Dashboard',
    category: 'Dashboard',
    image: publicAsset('project-placeholder.svg'),
    tech: ['React', 'Flask', 'PostgreSQL', 'Python', 'JWT'],
    description:
      'A network-monitoring prototype for device discovery, asset inventory, scan history, security alerts, and risk indicators.',
    features: [
      'Local Python scanner',
      'Device discovery',
      'Scan command retrieval',
      'JWT authentication',
      'Admin/operator/viewer roles',
      'Dashboard and reporting',
    ],
    demoUrl: '#',
    caseStudyUrl: '#',
    githubUrl: 'https://github.com/ChakonSukkho',
    caseStudy: {
      problem:
        'Manual network visibility made it difficult to quickly understand discovered devices, scan history, alerts, and security risk indicators.',
      solution:
        'Built a dashboard prototype that connects a local Python scanning workflow with a web dashboard for inventory and reporting.',
      techStack: 'React, Flask, PostgreSQL, Python, JWT',
      features:
        'Device discovery, scan command retrieval, scan history, security alerts, asset inventory, JWT authentication, and role-based views.',
      role:
        'Designed the dashboard workflow, supported scanner logic, tested API communication, and structured the reporting interface.',
      outcome:
        'Created a working prototype that demonstrates agentless monitoring, role-based access, and clearer network asset visibility.',
    },
  },
  {
    id: 3,
    title: 'Dynamics 365 Renewal Record Automation',
    category: 'Automation',
    image: publicAsset('project-placeholder.svg'),
    tech: ['Power Automate', 'Dynamics 365 Field Service', 'Dataverse', 'Excel'],
    description:
      'A centralised license-renewal system with daily expiry tracking, automated Sales reminders, and validated Excel imports.',
    renewalAutomation: {
      workflows: 2,
      reminderDays: [90, 60, 30],
    },
    features: [
      'Daily agreement-expiry tracking and status updates',
      'Automated 90, 60, and 30-day Sales reminders',
      'Validated Excel-to-Dynamics agreement imports',
      'Duplicate prevention and lookup-record mapping',
    ],
    caseStudy: {
      problem:
        'The Sales team relied on manually checking Excel files for customer agreement and license renewals. Records were not centralised, upcoming expiries could be missed, repeated entry increased errors, and inconsistent Excel formats made migration into Dynamics 365 difficult.',
      solution:
        'I configured the Dynamics 365 Field Service Agreement table around the Sales team’s working process and developed two Power Automate workflows. The first runs daily, calculates days to expiry, updates renewal status, and sends one-time 90, 60, 30-day or expired notifications. The second validates Excel rows, resolves Dynamics lookup IDs, converts serial dates, detects existing agreement numbers, and creates clean agreement records.',
      techStack: 'Power Automate, Dynamics 365 Field Service, Dataverse, Excel',
      features:
        'Custom Agreement fields and form sections; daily scheduled tracking; Active, 90-day, 60-day, 30-day, and Expired statuses; reminder flags that prevent duplicate emails; customer and agreement lookup mapping; Excel date conversion; required-field validation; duplicate agreement-number checks; skipped-row handling.',
      role:
        'I gathered requirements from the Sales team, mapped Excel columns to Dynamics fields, cleaned and validated source data, customised the Agreement form, built both workflows, configured reminder and import logic, and tested valid, empty, duplicate, expired, missing-lookup, and invalid-date scenarios.',
      outcome:
        'Renewal records were centralised in Dynamics 365, existing Excel agreements could be imported with less manual entry, upcoming expiries became visible automatically, and Sales received timely reminders. Both workflows were configured and tested successfully while reducing duplicate records and repetitive checking.',
    },
  },
  {
    id: 4,
    title: 'Inventa — Student Talent Management System',
    category: 'Software Engineering',
    image: publicAsset('inventa-student-management.png'),
    tech: ['PHP', 'MySQL', 'Azure App Service', 'cPanel'],
    description:
      'A PHP and MySQL-based student management system supported through debugging, deployment, and system fixes.',
    features: [
      'Login and session troubleshooting',
      'Database connection fixes',
      'SSL/HTTPS and redirect setup',
      'Azure deployment support',
    ],
    demoUrl: 'https://inventa.chakon.my/',
    caseStudyUrl: '#',
    githubUrl: 'https://github.com/ChakonSukkho',
    caseStudy: {
      problem:
        'The student management system required debugging and deployment support to solve login, database, redirect, and hosting issues.',
      solution:
        'Supported PHP/MySQL troubleshooting, fixed connection-related issues, and assisted deployment across Azure App Service and cPanel.',
      techStack: 'PHP, MySQL, Azure App Service, cPanel',
      features:
        'Login troubleshooting, session checks, database connection fixes, SSL/HTTPS configuration, redirect setup, and deployment support.',
      role:
        'Investigated errors, verified database configuration, supported hosting setup, tested fixes, and documented technical issues.',
      outcome:
        'Improved application stability and helped make the system accessible through proper hosting and configuration fixes.',
    },
  },
  {
    id: 5,
    title: 'WordPress Website & SEO Improvement',
    category: 'CMS / SEO',
    image: publicAsset('project-placeholder.svg'),
    tech: ['WordPress', 'HTML', 'CSS', 'JavaScript', 'JSON', 'SEMrush', 'Seobility'],
    description:
      'Corporate WordPress enhancement combining on-page SEO, content updates, new page development, and product-section troubleshooting.',
    scoreImprovement: {
      before: 61,
      after: 92,
    },
    features: [
      'Raised the on-page SEO audit score from 61% to 92%',
      'Improved titles, metadata, headings, alt text, and internal links',
      'Created and updated responsive WordPress pages',
      'Fixed product details using JSON and JavaScript troubleshooting',
    ],
    caseStudy: {
      problem:
        'The corporate website had multiple SEO warnings, incomplete titles and descriptions, outdated content, and missing pages. A product section also failed to display the correct details because of issues in its data mapping and interaction logic.',
      solution:
        'I audited the website with SEMrush, Seobility, and on-page analysis tools, then prioritised recurring issues. I improved page titles, meta descriptions, heading hierarchy, image alt text, content readability, URLs, and internal links. I also built new WordPress pages and corrected the JSON and JavaScript logic that connected selected products to their detail pop-ups.',
      techStack: 'WordPress, HTML, CSS, JavaScript, JSON, SEMrush, Seobility, SEO audit tools, browser developer tools',
      features:
        'Multi-tool SEO auditing; title and metadata optimisation; logical H1-H3 structure; image and content optimisation; internal-link improvements; responsive WordPress page creation; product data-mapping repair; desktop and mobile testing; post-implementation SEO audit.',
      role:
        'I conducted the audits, reviewed and prioritised recommendations, implemented on-page SEO changes, updated corporate content, created new pages, maintained design consistency, troubleshot the product section, corrected its JSON/JavaScript mapping, and tested the completed work across screen sizes.',
      outcome:
        'The on-page SEO score increased from 61% to 92%. The website gained clearer structure and metadata, more accurate and readable content, working product-detail pop-ups, consistent new pages, and a more reliable experience on desktop and mobile.',
    },
  },
];
