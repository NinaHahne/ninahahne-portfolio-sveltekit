export type Project = {
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
};

export const projects: Project[] = [
  {
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
  },
  {
    title: 'thePond',
    subtitle: 'Social network',
    image: '/images/projects/thePond_welcome.webp',
    features: ['Connect with users', 'Chat with other users online', 'Modify profile information'],
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Node.js/Express', 'PostgreSQL', 'AWS', 'Socket.IO'],
    githubUrl: 'https://github.com/NinaHahne/the-pond',
    // no liveUrl
  },
  {
    title: 'Imageboard - Gallery of Sloths',
    subtitle: 'Instagram-like gallery',
    image: '/images/projects/Imageboard_overview.webp',
    features: ['Upload images with title and description', 'Commenting system for users'],
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Vue.js', 'Node.js/Express', 'PostgreSQL', 'AWS'],
    githubUrl: 'https://github.com/NinaHahne/imageboard-sloths',
    // no liveUrl
  },
  {
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
  },
  {
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
  },
  {
    title: 'Spotify Search',
    subtitle: 'Spotify API search interface',
    image: '/images/projects/spotify-search_tom-waits.webp',
    technologies: ['HTML5', 'CSS3', 'JavaScript'],
    githubUrl: 'https://github.com/NinaHahne/spotify-search',
    // no liveUrl
  },
];
