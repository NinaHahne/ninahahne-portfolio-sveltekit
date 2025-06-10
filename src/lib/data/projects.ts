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
    image: '/projects/AllThatStuff_start-menu_v3.webp',
    features: ['Multiplayer game with socket communication', 'Custom emoji lobby effects', 'Word association mechanic'],
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Node.js/Express', 'PostgreSQL', 'AWS', 'Socket.IO'],
    githubUrl: 'https://github.com/NinaHahne/the-pond',
    liveUrl: {
      href: 'https://www.allthatstuff.fun/',
      label: 'play now',
      iconBefore: '🌸',
      iconAfter: '🍌',
    },
  },
  {
    title: 'thePond',
    subtitle: 'Social network',
    image: '/projects/thePond_welcome.webp',
    features: ['Connect with users', 'Chat with other users online', 'Modify profile information'],
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Node.js/Express', 'PostgreSQL', 'AWS', 'Socket.IO'],
    githubUrl: 'https://github.com/NinaHahne/the-pond',
    // no liveUrl
  },
  {
    title: 'Imageboard - Gallery of Sloths',
    subtitle: 'Instagram-like gallery',
    image: '/projects/Imageboard_overview.webp',
    features: ['Upload images with title and description', 'Commenting system for users'],
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Vue.js', 'Node.js/Express', 'PostgreSQL', 'AWS'],
    githubUrl: 'https://github.com/NinaHahne/imageboard-sloths',
    // no liveUrl
  },
  {
    title: 'Petition - Stop Headwind',
    subtitle: 'Authenticated petition website',
    image: '/projects/petition_register.webp',
    features: [
      'Draw your signature on canvas',
      "View other signers' details",
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
    image: '/projects/connect-four.webp',
    technologies: ['HTML5', 'CSS3', 'JavaScript'],
    githubUrl: 'https://github.com/NinaHahne/connect-four',
    liveUrl: {
      href: 'https://ninahahne.github.io/connect-four/',
      label: 'play now',
      iconBefore: '🍏',
      iconAfter: '🍊',
    },
  },
  {
    title: 'Spotify Search',
    subtitle: 'Spotify API search interface',
    image: '/projects/spotify-search_tom-waits.webp',
    technologies: ['HTML5', 'CSS3', 'JavaScript'],
    githubUrl: 'https://github.com/NinaHahne/spotify-search',
    // no liveUrl
  },
];
