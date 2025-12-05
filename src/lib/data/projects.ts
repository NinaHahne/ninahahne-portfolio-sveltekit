export type Project = {
  id: string;
  title: string;
  subtitle?: string;
  image: string;
  description?: string;
  features?: string[];
  technologies: string[];
  githubUrl: string;
  liveUrl?: {
    href: string;
    label: string;
    iconBefore?: string;
    iconAfter?: string;
  };
  kind: 'project' | 'experiment';
};

// non-breaking space: \u00A0
// soft hyphen: \u00AD
// non-breaking hyphen: \u2011

export const projects: Project[] = [
  {
    id: 'singing-me-happy',
    kind: 'project',
    title: 'Singing Me Happy – Jazzchor Berlin',
    subtitle: 'Website relaunch for a Berlin-based jazz choir',
    image: '/images/projects/singing-me-happy.webp',
    description:
      'A complete redesign and rebuild of the choir’s outdated Readymag website. The new version runs on SvelteKit with clean architecture, improved accessibility, and a lightweight structure that will be extended with CMS functionality. Includes audio and video embeds, responsive layouts, and an elegant visual identity that reflects the choir’s warm personality.',
    features: [
      'Migration from Readymag to SvelteKit',
      'Custom audio & video components',
      'Responsive layout & improved accessibility',
      'SEO-friendly meta setup',
      'Prepared for future headless CMS integration',
    ],
    technologies: ['SvelteKit', 'TypeScript', 'TailwindCSS'],
    githubUrl: 'https://github.com/NinaHahne/singingmehappy',
    liveUrl: {
      href: 'https://singingmehappy.de/',
      label: 'Visit website',
      iconBefore: '/images/emojis/musical-notes_openmoji_1F3B6.svg',
      iconAfter: '/images/emojis/musical-note_openmoji_1F3B5.svg',
    },
  },
  {
    id: 'tanja-shiatsu',
    title: 'Shiatsu-Praxis Tanja Schochow',
    subtitle: 'Bilingual website for a Shiatsu practitioner',
    image: '/images/projects/tanja-shiatsu.webp',
    description:
      'A calm and thoughtfully simple website for Shiatsu practitioner Tanja Schochow. It reflects the mindful and balanced nature of Shiatsu through a clean layout, soft colors, and responsive design. Built deliberately minimal — almost like a digital business card — to form a focused foundation for a future version powered by a headless CMS.',
    features: ['Two-language setup (German / English)', 'Accessibility and SEO-friendly meta setup'],
    technologies: ['SvelteKit', 'TypeScript', 'TailwindCSS', 'YAML\u00A0/\u00A0sveltekit\u2011i18n'],
    githubUrl: 'https://github.com/NinaHahne/tanja-shiatsu',
    liveUrl: {
      href: 'https://tanja-shiatsu.de/',
      label: 'Visit website',
      iconBefore: '/images/emojis/herb_openmoji_1F33F.svg',
      iconAfter: '/images/emojis/massage_openmoji_1F486.svg',
      // iconAfter: '/images/emojis/hands_openmoji_1F450.svg',
    },
    kind: 'project',
  },
  {
    id: 'flowchart-poc',
    title: 'Flowchart PoC',
    image: '/images/projects/flowchart-poc.webp',
    technologies: ['D3.js', 'React 19'],
    githubUrl: 'https://github.com/NinaHahne/flowchart-poc',
    liveUrl: {
      href: 'https://ninahahne.github.io/flowchart-poc/',
      label: 'Try now',
    },
    kind: 'experiment',
  },
  {
    id: 'swing-rhythm-viz',
    title: 'Swing Dance Tempo Visualizer',
    image: '/images/projects/swing-rhythm-viz.webp',
    technologies: ['D3.js'],
    githubUrl: 'https://github.com/NinaHahne/swing-rhythm-viz',
    liveUrl: {
      href: 'https://ninahahne.github.io/swing-rhythm-viz/',
      label: 'Try now',
    },
    kind: 'experiment',
  },
  {
    id: 'all-that-stuff',
    title: 'AllThatStuff',
    subtitle: 'Multiplayer word association game',
    image: '/images/projects/AllThatStuff_start-menu_v3.webp',
    features: [
      'Multiplayer game lobby: host or join a game session',
      'Turn-based gameplay: one player builds a word, others guess it',
      'Intuitive drag & drop interface for creating visual clues',
      "Real-time sync: all players see the builder's actions live",
    ],
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'jQuery', 'Socket.IO'],
    githubUrl: 'https://github.com/NinaHahne/the-pond',
    liveUrl: {
      href: 'https://www.allthatstuff.fun/',
      label: 'Play now',
      iconBefore: '/images/emojis/cherry-blossom_openmoji_1F338-mod.svg',
      iconAfter: '/images/emojis/banana_openmoji_1F34C.svg',
    },
    kind: 'project',
  },
  {
    id: 'the-pond',
    title: 'thePond',
    subtitle: 'Social network',
    image: '/images/projects/thePond_welcome.webp',
    features: ['Connect with users', 'Chat with other users online', 'Modify profile information'],
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Node.js/Express', 'PostgreSQL', 'AWS', 'Socket.IO'],
    githubUrl: 'https://github.com/NinaHahne/the-pond',
    // no liveUrl
    kind: 'project',
  },
  {
    id: 'imageboard-sloths',
    title: 'Imageboard - Gallery of Sloths',
    subtitle: 'Instagram-like gallery',
    image: '/images/projects/Imageboard_overview.webp',
    features: ['Upload images with title and description', 'Commenting system for users'],
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Vue.js', 'Node.js/Express', 'PostgreSQL', 'AWS'],
    githubUrl: 'https://github.com/NinaHahne/imageboard-sloths',
    // no liveUrl
    kind: 'project',
  },
  {
    id: 'petition-stop-headwind',
    title: 'Petition - Stop Headwind',
    subtitle: 'Authenticated petition website',
    image: '/images/projects/petition_register.webp',
    features: [
      'Sign the petition by drawing your signature on a canvas',
      "View other signers' details (name, age, city, signature)",
      'Edit profile info',
      'Delete your signature',
    ],
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Handlebars', 'Node.js/Express', 'PostgreSQL'],
    githubUrl: 'https://github.com/NinaHahne/petition-stop-headwind',
    // no liveUrl
    kind: 'project',
  },
  {
    id: 'connect-four',
    title: 'Connect Four - Apples vs. Oranges',
    subtitle: 'Connect four game for 2 players',
    image: '/images/projects/connect-four.webp',
    technologies: ['HTML5', 'CSS3', 'JavaScript'],
    githubUrl: 'https://github.com/NinaHahne/connect-four',
    liveUrl: {
      href: 'https://ninahahne.github.io/connect-four/',
      label: 'Play now',
      iconBefore: '/images/emojis/green-apple_openmoji_1F34F.svg',
      iconAfter: '/images/emojis/tangerine_openmoji_1F34A.svg',
    },
    kind: 'project',
  },
  {
    id: 'spotify-search',
    title: 'Spotify Search',
    subtitle: 'Spotify API search interface',
    image: '/images/projects/spotify-search_tom-waits.webp',
    technologies: ['HTML5', 'CSS3', 'JavaScript'],
    githubUrl: 'https://github.com/NinaHahne/spotify-search',
    // no liveUrl
    kind: 'project',
  },
];
