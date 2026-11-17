import type { Dictionary } from './pt';

/*
 * Hero headline, options considered:
 *   1. "I build APIs and integrations that never fail silently."  (chosen)
 *   2. "I connect systems with tested, observable APIs built to run every day."
 *   3. "I ship integrations that run daily, backed by tests, CI and alerts."
 */
export const en: Dictionary = {
  meta: {
    title: 'Nicolas Zampieri',
    titleSuffix: 'Backend developer',
    description:
      'Nicolas Delecrode Zampieri, backend developer in São Paulo. APIs and system integrations in Python (FastAPI, Django) and Java (Spring Boot), with tests and CI from the first commit.',
    ogAlt: 'Nicolas Delecrode Zampieri, backend-focused software developer',
    ogRole: 'Backend developer · São Paulo, Brazil',
    ogTagline: 'APIs and integrations that never fail silently.',
  },
  a11y: {
    skip: 'Skip to content',
    sections: 'Sections',
    home: 'Nicolas Zampieri, back to top',
    theme: 'Switch between dark and light theme',
    language: 'Language',
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
  },
  nav: {
    about: 'About',
    skills: 'Skills',
    experience: 'Experience',
    projects: 'Projects',
    education: 'Education',
    contact: 'Contact',
  },
  hero: {
    role: 'Software developer · Backend',
    status: 'Open to opportunities',
    headline: 'I build APIs and integrations that never fail silently.',
    lead: 'I work in Python (FastAPI, Django) and Java (Spring Boot), connecting systems with tests and CI from the first commit.',
    ctaProjects: 'View projects',
    ctaCv: 'Download CV',
    cvNote: '(PDF, in English)',
    scroll: 'Scroll',
    terminal: {
      aria: 'Illustration: the 7 steps of a daily Task Time Sync run, all completed.',
      title: 'task-time-sync',
      schedule: 'GitHub Actions · daily at 06:50 BRT',
      steps: [
        'Download the workbook from the bucket',
        'Sync employees to Postgres',
        'Collect Jira tasks',
        'Collect Clockify hours',
        'Upload the updated workbook',
        'Alert deadlines in 8 Teams channels',
        'Fire the heartbeat',
      ],
      ok: 'ok',
      done: '7 of 7 steps completed',
      note: 'Failures go to Sentry. A Better Stack heartbeat confirms the run finished.',
    },
  },
  proofs: {
    title: 'Project numbers',
    items: {
      tests: { label: 'automated tests', source: 'Quimia, admin panel' },
      steps: { label: 'steps in every daily run', source: 'Task Time Sync' },
      channels: { label: 'Teams channels with deadline alerts', source: 'Task Time Sync' },
      screens: { label: 'CRUD screens with an audit trail', source: 'Quimia, admin panel' },
      lockout: { label: 'failed logins in a row before lockout', source: 'Quimia, admin panel' },
    },
  },
  about: {
    title: 'About',
    lead: "I'm a backend developer. Much of my work is integrating systems: consuming REST APIs, normalizing the data and writing it to PostgreSQL, with tests and CI running from the start.",
    body: [
      'On Task Time Sync, I maintain a pipeline that runs every day and consolidates Jira and Clockify into Excel and Postgres. Its steps are independent: if Jira goes down, the Clockify collection keeps running and the error is sent to Sentry.',
      "Quimia is a team project for ExpoTech 2026, with an admin panel in Java and a public website. I'm open to conversations and opportunities across different areas.",
    ],
    facts: [
      { key: 'Location', value: 'São Paulo, Brazil' },
      { key: 'Focus', value: 'Backend, APIs and integrations' },
      { key: 'Languages', value: 'Python, Java, SQL' },
      { key: 'Frameworks', value: 'FastAPI, Django, Spring Boot' },
      { key: 'Status', value: 'Open to opportunities' },
    ],
  },
  skills: {
    title: 'Skills',
    intro: 'What I use to build, test, ship and monitor.',
    marquee: 'Featured technologies',
    groups: {
      languages: 'Languages',
      backend: 'Back end',
      data: 'Data and integrations',
      quality: 'Quality and delivery',
      observability: 'Observability',
      soft: 'Teamwork',
    },
    techLabels: { rest: 'REST APIs', github: 'Git and GitHub' },
    soft: {
      communication: 'Communication',
      autonomy: 'Autonomy',
      feedback: 'Openness to feedback',
      detail: 'Attention to detail',
    },
  },
  experience: {
    title: 'Experience',
    items: {
      quimia: {
        title: 'Quimia',
        org: 'ExpoTech 2026 · team project',
        bullets: [
          'Admin panel in Java and Spring Boot, with change auditing, restoration of deleted records and more than 160 automated tests.',
          'Responsive, accessible public website, live at quimia.tech.',
          'Task and hours dashboard with login and access control through Row Level Security.',
        ],
      },
      tts: {
        title: 'Task Time Sync',
        org: 'Personal project',
        bullets: [
          'Python pipeline with a layered architecture, Pydantic models and upserts into Postgres.',
          'Steps isolated from each other, with failures sent to Sentry and a heartbeat on Better Stack.',
          'CI with pylint, black and pytest, coverage on Codecov and a daily scheduled run on GitHub Actions.',
        ],
      },
    },
  },
  projects: {
    title: 'Projects',
    intro: 'Five projects, each with the problem, the solution and what keeps the quality up.',
    filterAria: 'Filter projects',
    filters: {
      all: 'All',
      python: 'Python',
      java: 'Java',
      frontend: 'Front End',
      integrations: 'Integrations',
    },
    labels: {
      problem: 'Problem',
      solution: 'Solution',
      quality: 'Quality',
      stack: 'Stack',
      team: 'Team project',
      solo: 'Personal project',
    },
    links: { case: 'Read the case study', repo: 'Repository', demo: 'Visit site' },
    countOne: '1 project',
    countMany: '{n} projects',
    empty: 'No projects in this category yet.',
    items: {
      tts: {
        title: 'Task Time Sync',
        kind: 'Integration pipeline',
        problem: 'Tasks lived in Jira and logged hours in Clockify, in separate places.',
        solution:
          'A daily 7-step pipeline on GitHub Actions that consolidates both into Excel and Postgres and sends deadline alerts to 8 Microsoft Teams channels.',
        quality:
          'Isolated steps, failures sent to Sentry and a Better Stack heartbeat. CI runs pylint, black and pytest.',
      },
      'quimia-admin': {
        title: 'Quimia, admin panel',
        kind: 'Web application',
        problem: 'A panel that really deletes and edits data has to be safe and reversible.',
        solution: 'CRUD across 11 screens, with a change audit trail and restoration of deleted records.',
        quality: 'Lockout after 5 failed logins in a row and more than 160 JUnit 5 tests.',
      },
      'quimia-dashboard': {
        title: 'Quimia Dashboard',
        kind: 'Static dashboard',
        problem: 'The team needed to track tasks and hours per person without exposing the data.',
        solution: 'A static dashboard with login that queries 8 tables and exports CSV and XLSX.',
        quality: 'Access is enforced by Row Level Security. Three front-end dependencies and no build step.',
      },
      'quimia-site': {
        title: 'Quimia, public website',
        kind: 'Website',
        problem: 'Introduce Quimia, an app that helps people avoid dangerous mixes of cleaning products.',
        solution: 'A public website, live at quimia.tech.',
        quality: 'Responsive layout from 360 to 1440 px, with accessibility attributes.',
      },
      'tts-docs': {
        title: 'Task Time Sync, documentation',
        kind: 'Documentation',
        problem: 'Explain how the pipeline and the dashboard work, and why they were designed that way.',
        solution: 'Bilingual MkDocs documentation covering architecture and data model.',
        quality: 'Every design decision comes with the reasoning behind it.',
      },
    },
  },
  education: {
    title: 'Education',
    items: [
      { title: 'High School', detail: 'Instituto J&F, São Paulo, Brazil' },
      { title: 'GitHub Foundations', detail: 'DataCamp, 2026 (in progress)' },
      { title: 'Python', detail: 'Instituto J&F, 2026' },
      { title: 'HTML and CSS', detail: 'IFFRS, 2026' },
    ],
  },
  contact: {
    title: 'Contact',
    big: "Let's talk",
    text: 'Open to conversations and opportunities across different areas. Send me an email.',
    cta: "Let's talk",
    ctaAria: "Let's talk: write an email to Nicolas",
    copy: 'Copy email',
    copied: 'Email copied',
    copyFail: "Couldn't copy. Select the address above instead.",
    cv: 'Download CV',
    emailLabel: 'Email',
  },
  footer: {
    rights: '© 2026 Nicolas Delecrode Zampieri',
    place: 'São Paulo, Brazil',
    top: 'Back to top',
  },
  notFound: {
    title: 'Page not found',
    line: "This route isn't on the map.",
    text: 'The address may have changed, or it never existed. The rest of the site is right where it was.',
    cta: 'Back to home',
  },
  cases: {
    back: 'Back to projects',
    eyebrow: 'Case study',
    stack: 'Stack',
    context: 'Context',
    problem: 'Problem',
    decisions: 'Decisions',
    result: 'Result',
    limits: 'Limitations and next steps',
    links: 'Links',
    linkKinds: { repo: 'Repository', docs: 'Documentation', site: 'Project site (quimia.tech)' },
    diagram: 'Architecture',
    items: {
      'task-time-sync': {
        title: 'Task Time Sync: from Jira and Clockify to a workbook the team actually uses',
        summary:
          'A daily pipeline that consolidates tasks and logged hours into Excel and Postgres and alerts the team on Teams about deadlines.',
        context:
          'The team tracked tasks in Jira and hours in Clockify, in separate places. The Excel workbook was the final product the team already used, so the challenge was feeding it reliable data every day with no manual work.',
        problem:
          'Joining two APIs with different identities (the same person shows up under different names in Jira and Clockify), keeping the workbook and a relational database consistent, and sending deadline alerts, without one failing source taking down the whole run.',
        decisions: [
          {
            h: 'Excel is the product.',
            t: 'Formulas and indicators live in the workbook; the pipeline only updates the data tables. The same data is mirrored in Postgres for relational queries.',
          },
          {
            h: 'A single source of truth for people.',
            t: 'The employee sheet is the only editable source of identity, shared by the workbook and the database. It maps Jira assignees and Clockify users to one canonical name. Repeated emails go to a removed-duplicates tab instead of overwriting data.',
          },
          {
            h: 'Isolated steps.',
            t: 'Jira, Clockify and alerts run separately. A Jira outage does not block Clockify collection. Failures are logged and sent to Sentry.',
          },
          {
            h: 'Layers with clear responsibilities.',
            t: 'Clients only speak HTTP; rules live in services; Pydantic models validate data.',
          },
          {
            h: 'Cheap observability.',
            t: 'A Better Stack heartbeat confirms the run reached the end.',
          },
        ],
        extras: [
          {
            h: 'How it works (one run, 7 steps)',
            ordered: true,
            text: '',
            items: [
              'Download the workbook from the bucket.',
              'Sync employees to Postgres.',
              'Collect Jira tasks.',
              'Collect Clockify hours.',
              'Upload the updated workbook.',
              'Send deadline alerts to Teams channels (8 webhooks, one per area).',
              'Fire the heartbeat.',
            ],
          },
          {
            h: 'Delivery and quality',
            ordered: false,
            text: '',
            items: [
              'CI on every push and pull request: pylint, black format check and pytest with coverage uploaded to Codecov.',
              'Scheduled daily at 06:50 (Brasília time) by a workflow, with credentials stored as repository secrets.',
              'Its own bilingual documentation covering architecture, data model and design decisions.',
            ],
          },
        ],
        result:
          'A daily, automatic flow that delivers the updated workbook and deadline alerts with no manual intervention. By estimate, it avoids about 2 hours per day of manual data entry.',
        limits:
          "The README does not record a test coverage percentage, and there is no helper script to get Clockify's `WORKSPACE_ID` (today it comes from the API response). Two clear improvements.",
        diagramAlt: '',
        shotAlt: '',
        shotCaption: '',
      },
      'quimia-admin': {
        title: 'Quimia: an admin panel with an audit trail and reversible deletes',
        summary:
          'A Spring Boot panel to manage Quimia, with secure login, a log of every change and the ability to undo deletions.',
        context:
          'Quimia helps people avoid dangerous mixtures of cleaning products by tracking home inventory, uses, mixtures and disposals. Partner companies register their products and track usage. The panel manages users, companies, products, shelves, histories and disposals. Team project, built for ExpoTech 2026.',
        problem:
          'A panel that really deletes and edits data has to be safe and reversible. We needed to know who changed what, be able to undo a delete that cascades to dependent records, and avoid holes in login, forms and photo upload.',
        decisions: [
          {
            h: 'Full audit trail.',
            t: 'Every create, edit and delete made through the UI is logged with the responsible admin and the previous data. Passwords never enter the log.',
          },
          {
            h: 'Reversible deletes.',
            t: 'Before deleting, the affected rows are copied to the log as JSON, which allows restoring with the original IDs. Deleting and restoring each run in a single transaction: if any step fails (for example, an email already in use), nothing changes.',
          },
          {
            h: 'The database owns the schema.',
            t: 'With `ddl-auto=validate`, the app only starts if the entities match the real database.',
          },
          {
            h: 'Reused generic CRUD.',
            t: '`CrudService`, `GenericController` and `ListController` serve all 11 screens; adding a new screen follows a known recipe (entity, DTO, mapper, service, controller and template).',
          },
          {
            h: 'Layered security:',
            t: 'Argon2id password hashing; a 15-minute lockout after 5 consecutive failed logins; only admins with ACTIVE status can sign in; CSRF on and logout only via POST; a Content Security Policy limited to the same origin; session cookie HttpOnly and SameSite=Lax with a 30-minute expiry.',
          },
          {
            h: 'Defensive photo upload.',
            t: 'File type is identified by magic bytes, not extension; the image is re-encoded (stripping metadata and hidden content); filenames are random; 2 MB and 4096 px per side limits.',
          },
          {
            h: 'Column names in bulk actions come from an allowlist,',
            t: 'since they end up in SQL.',
          },
          {
            h: 'Fast dashboard.',
            t: 'It reads a materialized view in one query, refreshed every 2 hours by a workflow and on demand by a button, with a guard that rejects a second click during a refresh.',
          },
        ],
        extras: [
          {
            h: 'Quality',
            ordered: false,
            text: 'More than 160 tests (JUnit 5, `@WebMvcTest`, `@SpringBootTest` and Spring Security Test) that run without a database. Some tests catch misalignment between screens and repositories, and an opt-in test deletes and restores one record of each type against the real database inside an always-rolled-back transaction.',
            items: [],
          },
          {
            h: 'Team process',
            ordered: false,
            text: 'Branches from `develop` with prefixes (`feat/`, `fix/`, `refactor/`, `test/`, `chore/`), Conventional Commits and pull requests with review. Nothing goes straight to `main`.',
            items: [],
          },
        ],
        result:
          'A panel with 11 screens, end-to-end auditing and reversible deletes, covered by more than 160 automated tests.',
        limits:
          'The SQL for the materialized view is not versioned in either repository, and the failed-login counter is kept in memory. Both are clear improvements.',
        diagramAlt:
          'Diagram of the Quimia admin panel architecture: browser, Spring Security, controllers, services, repositories and PostgreSQL, with GitHub Actions refreshing the materialized view every 2 hours.',
        shotAlt:
          'Home screen of the Quimia admin panel, with navigation shortcuts, summary cards for users, companies, queries and alerts, a usage activity chart and a chart of queries by type.',
        shotCaption: 'Admin panel screen',
      },
      'quimia-dashboard': {
        title: 'Quimia Dashboard: access control in the database, no server of its own',
        summary:
          'A static dashboard the browser queries straight from Postgres, with access controlled by Row Level Security.',
        context:
          'The team needed to see tasks and hours per person and for the whole project. Data already reached Postgres through a separate pipeline (task-time-sync), so the dashboard could be read-only.',
        problem:
          'Deliver a panel that is simple to host (no server, no build) without exposing data to people who should not see it, and still integrate with the Excel workbook the team uses.',
        decisions: [
          {
            h: 'No server and no intermediate API.',
            t: 'The browser talks straight to Supabase (email and password Auth, plus PostgREST). Aggregation, charts and export run in the browser. Three frontend dependencies and no build step.',
          },
          {
            h: 'Security in the database, not in the site.',
            t: 'The Supabase public key in the code is public by design and grants no access on its own. Row Level Security policies release rows only to signed-in users registered as employees; anonymous sessions and unregistered emails see zero rows.',
          },
          {
            h: 'Explicit business rules.',
            t: "Tasks with several assignees appear in each person's list and once in the project table; subtasks collapse under their parent task, and the export is flat with a parent-task column; archived tasks are excluded everywhere.",
          },
          {
            h: 'Export designed for Brazilian Excel.',
            t: 'CSV with `;` and a UTF-8 BOM so it opens correctly in Portuguese Excel, plus a real `.xlsx`.',
          },
          {
            h: 'Protected workbook downloads.',
            t: 'Two Cloudflare Pages Functions serve the data workbook (read by Excel through Power Query) and the `.xlsm` dashboard. Storage credentials never reach the browser. Each person generates a personal key (prefix `qxl_`), shown once, which revokes the previous one; the functions return 401 with the right header only when Excel needs to prompt for credentials, so browsers never open a login dialog.',
          },
          {
            h: 'Unauthorized signup log',
            t: 'through a database trigger recording email and timestamp.',
          },
        ],
        extras: [],
        result:
          'A dashboard hosted for free, with no server to maintain, where access control lives in the database and workbooks reach Excel through revocable personal keys. It queries 8 tables and has 5 SQL migrations.',
        limits:
          'Only one of the RLS policies is versioned in `sql/`; the others were applied directly in the Supabase editor and need to be added to the repository. There is also no automatic notification for unauthorized signups.',
        diagramAlt:
          'Diagram of the Quimia Dashboard architecture: the task-time-sync pipeline writes to Postgres with RLS, Supabase serves the browser, and Cloudflare Pages Functions deliver workbooks from Backblaze B2 to Excel.',
        shotAlt:
          "Quimia Dashboard screen showing overall project progress, a chart of tasks per area, overall task status, hours per employee and a list of the most urgent tasks. People's names and photos are blurred.",
        shotCaption: 'Dashboard screen',
      },
    },
  },
};
