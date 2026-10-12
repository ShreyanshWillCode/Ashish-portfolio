export type MediaType = "image" | "video";

export interface PortfolioItem {
  id: string;
  section: string;
  mediaType: MediaType;
  mediaSrc: string;
  poster?: string;
  title?: string;
  description?: string;
  category?: string;
  number?: string;
  projectUrl?: string;
}

const assetPathPrefix = "/assets";

export function optimizeCloudinaryUrl(url: string) {
  if (!url.includes("/upload/")) return url;
  return url.replace(
    "/upload/",
    "/upload/q_auto,f_auto,h_480/"
  );
}

export function getPosterUrl(url: string) {
  if (!url.includes("/upload/")) return url;
  return url.replace(
    "/upload/",
    "/upload/so_0,q_auto,f_jpg/"
  ).replace(/\.mp4$/, ".jpg");
}

export const portfolioMedia = {
  commercial: {
    ad1: "https://res.cloudinary.com/dxp7dcmvr/video/upload/v1735460290/adEdit1_ip7ucu.mp4",
    ad2: "https://res.cloudinary.com/dxp7dcmvr/video/upload/v1735470833/ad2_1_rbq2t2.mp4",
    ad3: "https://res.cloudinary.com/dxp7dcmvr/video/upload/v1735469354/ad3_zdkhtp.mp4"
  },
  basic: {
    simple1: "https://res.cloudinary.com/dxp7dcmvr/video/upload/v1735469019/sp1_nqjoei.mp4",
    simple2: "https://res.cloudinary.com/dxp7dcmvr/video/upload/v1735469032/sp3_xztapx.mp4",
    simple3: "https://res.cloudinary.com/dxp7dcmvr/video/upload/v1735469055/sp2_eej222.mp4"
  },
  stories: {
    motion1: "https://res.cloudinary.com/dxp7dcmvr/video/upload/v1735976869/ALL_THE_EDITSrf_cymctm.mp4",
    motion2: "https://res.cloudinary.com/dxp7dcmvr/video/upload/v1735977983/Comp_1_1_fxehc0.mp4",
    motion3: "https://res.cloudinary.com/dxp7dcmvr/video/upload/v1736136336/The%20Freelancer/motion%203.mp4"
  },
  podcast: {
    pd1: "https://res.cloudinary.com/dxp7dcmvr/video/upload/v1766070412/prime_roll_eehsdu.mp4",
    pd2: "https://res.cloudinary.com/dxp7dcmvr/video/upload/v1766065363/V-2_gm2i2s.mp4",
    pd3: "https://res.cloudinary.com/dxp7dcmvr/video/upload/v1766065365/final_flag_ni9crx.mp4",
    pd4: "https://res.cloudinary.com/dxp7dcmvr/video/upload/v1766065359/Why_Rakesh_Jhunjhunwala_was_the_GOATxashish_hhpgn4.mp4",
    pd5: "https://res.cloudinary.com/dxp7dcmvr/video/upload/v1766065365/oahu_vid1_gqjmp0.mp4",
    pd6: "https://res.cloudinary.com/dxp7dcmvr/video/upload/v1766068773/script_2_xo0aub.mp4",
    pd7: "https://res.cloudinary.com/dxp7dcmvr/video/upload/v1766065323/WhatsApp_Video_2025-12-11_at_10.38.34_PM_irlr9m.mp4"
  }
};

export const expertiseItems: PortfolioItem[] = [
  {
    id: "expertise-01",
    section: "expertise",
    mediaType: "video",
    mediaSrc: optimizeCloudinaryUrl(portfolioMedia.podcast.pd1),
    poster: getPosterUrl(portfolioMedia.podcast.pd1),
    title: "PODCAST EDITS",
    description: "Polished conversations for a bigger audience.",
    number: "01"
  },
  {
    id: "expertise-02",
    section: "expertise",
    mediaType: "video",
    mediaSrc: optimizeCloudinaryUrl(portfolioMedia.basic.simple1),
    poster: getPosterUrl(portfolioMedia.basic.simple1),
    title: "BASIC EDITS",
    description: "Clean, engaging edits for everyday content.",
    number: "02"
  },
  {
    id: "expertise-03",
    section: "expertise",
    mediaType: "video",
    mediaSrc: optimizeCloudinaryUrl(portfolioMedia.stories.motion2),
    poster: getPosterUrl(portfolioMedia.stories.motion2),
    title: "MOTION GRAPHICS",
    description: "Turn ideas into stunning visual stories.",
    number: "03"
  },
  {
    id: "expertise-04",
    section: "expertise",
    mediaType: "video",
    mediaSrc: optimizeCloudinaryUrl(portfolioMedia.commercial.ad1),
    poster: getPosterUrl(portfolioMedia.commercial.ad1),
    title: "COMMERCIAL EDITS",
    description: "High-impact edits for brands and businesses.",
    number: "04"
  }
];

export const showcaseItems: PortfolioItem[] = [
  {
    id: "showcase-hero",
    section: "showcase",
    mediaType: "video",
    mediaSrc: optimizeCloudinaryUrl(portfolioMedia.commercial.ad1),
    poster: getPosterUrl(portfolioMedia.commercial.ad1),
    category: "Hero Edit",
    number: "01",
    title: "Commercial Edits",
    description: "Premium pacing, cinematic color, and high-energy sound design for brands that need to move fast and feel premium."
  },
  {
    id: "showcase-02",
    section: "showcase",
    mediaType: "video",
    mediaSrc: optimizeCloudinaryUrl(portfolioMedia.commercial.ad2),
    poster: getPosterUrl(portfolioMedia.commercial.ad2),
    category: "Cinematic",
    number: "02",
    title: "High-Energy Sequences"
  },
  {
    id: "showcase-03",
    section: "showcase",
    mediaType: "video",
    mediaSrc: optimizeCloudinaryUrl(portfolioMedia.commercial.ad3),
    poster: getPosterUrl(portfolioMedia.commercial.ad3),
    category: "Sound Design",
    number: "03",
    title: "High-Impact Audio"
  },
  {
    id: "showcase-04",
    section: "showcase",
    mediaType: "image",
    mediaSrc: `${assetPathPrefix}/70aae.png`,
    category: "Visual Flow",
    title: "Pro-Grade Visual Flow"
  },
  {
    id: "showcase-05",
    section: "showcase",
    mediaType: "image",
    mediaSrc: `${assetPathPrefix}/e63c2.png`,
    category: "Post Production",
    number: "05",
    title: "High-End Post Production",
    description: "Advanced grading, smooth transitions, and a polished finish."
  },
  {
    id: "showcase-06",
    section: "showcase",
    mediaType: "image",
    mediaSrc: "",
    category: "Brand Story",
    number: "06",
    title: "Brand-Centric Storytelling",
    description: "Narrative-led edits that connect the audience to the brand, the product, and the message."
  }
];


export const podcastEditsSection = {
  sectionNumber: '01',
  label: 'PODCAST EDITS',
  eyebrow: ['CONVERSATIONS', 'IDEAS', 'BIGGER AUDIENCES'],
  titlePrimary: 'PODCAST',
  titleSecondary: 'EDITS',
  description: 'Polished conversations for a bigger audience. We edit, enhance and transform your podcast into engaging content across platforms.',
  annotationLeft: 'Listen\nCreate\nGrow',
  annotationRight: 'Your Story\ndeserves to be heard',
  features: ['Audio Clean', 'Seamless Transitions', 'Highlights & Clips'],
  media: [
    { id: 'pod-01', type: 'video', src: optimizeCloudinaryUrl(portfolioMedia.podcast.pd1), poster: getPosterUrl(portfolioMedia.podcast.pd1), alt: 'Podcast 1' },
    { id: 'pod-02', type: 'video', src: optimizeCloudinaryUrl(portfolioMedia.podcast.pd2), poster: getPosterUrl(portfolioMedia.podcast.pd2), alt: 'Podcast 2' },
    { id: 'pod-03', type: 'video', src: optimizeCloudinaryUrl(portfolioMedia.podcast.pd3), poster: getPosterUrl(portfolioMedia.podcast.pd3), alt: 'Podcast 3' },
    { id: 'pod-04', type: 'video', src: optimizeCloudinaryUrl(portfolioMedia.podcast.pd4), poster: getPosterUrl(portfolioMedia.podcast.pd4), alt: 'Podcast 4' },
    { id: 'pod-05', type: 'video', src: optimizeCloudinaryUrl(portfolioMedia.podcast.pd5), poster: getPosterUrl(portfolioMedia.podcast.pd5), alt: 'Podcast 5' },
    { id: 'pod-06', type: 'video', src: optimizeCloudinaryUrl(portfolioMedia.podcast.pd6), poster: getPosterUrl(portfolioMedia.podcast.pd6), alt: 'Podcast 6' },
    { id: 'pod-07', type: 'video', src: optimizeCloudinaryUrl(portfolioMedia.podcast.pd7), poster: getPosterUrl(portfolioMedia.podcast.pd7), alt: 'Podcast 7' }
  ]
};

export const storiesItems: PortfolioItem[] = [
  { id: 'story-01', section: 'stories', mediaType: 'video', mediaSrc: optimizeCloudinaryUrl(portfolioMedia.stories.motion1), poster: getPosterUrl(portfolioMedia.stories.motion1) },
  { id: 'story-02', section: 'stories', mediaType: 'video', mediaSrc: optimizeCloudinaryUrl(portfolioMedia.stories.motion2), poster: getPosterUrl(portfolioMedia.stories.motion2) },
  { id: 'story-03', section: 'stories', mediaType: 'video', mediaSrc: optimizeCloudinaryUrl(portfolioMedia.stories.motion3), poster: getPosterUrl(portfolioMedia.stories.motion3) }
];

export const basicEditsSection = {
  sectionNumber: '05',
  label: 'BASIC EDITS',
  eyebrow: ['EVERYDAY', 'STORIES', 'BETTER EDITS'],
  titlePrimary: 'BASIC',
  titleSecondary: 'EDITS',
  description: 'Clean, engaging and everyday edits that make your content look better.',
  annotationLeft: 'Clean Cuts\nSmooth Flow',
  annotationRight: 'Elevate\nyour content',
  features: ['Fine Cuts', 'Smooth Transitions', 'Subtitles'],
  media: [
    { id: 'basic-01', type: 'video', src: optimizeCloudinaryUrl(portfolioMedia.basic.simple1), poster: getPosterUrl(portfolioMedia.basic.simple1), alt: 'Video 1' },
    { id: 'basic-02', type: 'video', src: optimizeCloudinaryUrl(portfolioMedia.basic.simple2), poster: getPosterUrl(portfolioMedia.basic.simple2), alt: 'Video 2' },
    { id: 'basic-03', type: 'video', src: optimizeCloudinaryUrl(portfolioMedia.basic.simple3), poster: getPosterUrl(portfolioMedia.basic.simple3), alt: 'Video 3' }
  ]
};


export const testimonialsSection = {
  label: 'TESTIMONIALS',
  titleLine1: 'WORDS',
  titleLine2: 'THAT',
  titleHighlight: 'MATTER.',
  description: 'Real people. Real projects. Real impact.',
  testimonials: [
    { id: 't1', name: 'Arjun Verma', role: 'Business Owner', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop', quote: 'Fast delivery, creative ideas and top-notch quality. Highly recommended!' },
    { id: 't2', name: 'Priya Sharma', role: 'Fashion Brand', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop', quote: 'Amazing attention to detail. The motion graphics gave our brand a whole new life.' },
    { id: 't3', name: 'Rohan Mehta', role: 'Content Creator', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop', quote: 'The edits were beyond my expectations. Super professional and easy to work with!' }
  ]
};

export interface WebProject {
  id: string;
  number: string;
  title: string;
  category: string;
  filterCategory: "all" | "freelance" | "web" | "python";
  tagline: string;
  description: string;
  tags: string[];
  url: string;
  repoUrl?: string;
  displayUrl: string;
  tapeText: string;
  tapeColor: string;
  tapeRotation: number;
  rotation: number;
  accentColor: string;
  images: string[];
  annotation?: {
    text: string;
    position: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
    arrowDirection?: 'up' | 'down' | 'left' | 'right';
  };
  metrics?: { label: string; value: string }[];
}

export const webDevelopmentProjects: WebProject[] = [
  {
    id: 'web-01',
    number: '01',
    category: 'FREELANCE PLATFORM',
    filterCategory: 'freelance',
    title: 'VELORAGT',
    tagline: 'Reddit Marketing & Multi-Tier RBAC Dashboard',
    description: 'A full-stack Reddit marketing platform with role-based access control (RBAC) powering dashboards for owners, distributors, members, and moderators managing campaign queues at scale.',
    tags: ['React', 'Node.js', 'RBAC', 'WebSocket', 'Tailwind CSS'],
    url: 'https://veloragt.in/',
    displayUrl: 'veloragt.in',
    tapeText: 'FEATURED FREELANCE',
    tapeColor: 'bg-[#FFE873]',
    tapeRotation: -3,
    rotation: -1.2,
    accentColor: '#FF573E',
    images: ['/projects/reddit1 (1).png', '/projects/reddit1 (2).png'],
    annotation: {
      text: 'Live RBAC Engine ⚡',
      position: 'top-right',
      arrowDirection: 'down'
    },
    metrics: [
      { label: 'Architecture', value: '4-Tier RBAC' },
      { label: 'Queue Engine', value: 'Real-time WebSocket' }
    ]
  },
  {
    id: 'web-02',
    number: '02',
    category: 'LOCAL COMMERCE',
    filterCategory: 'freelance',
    title: 'ZAIGRO',
    tagline: 'On-Demand Food & Grocery Delivery Platform',
    description: 'A responsive freelance digital platform engineered for a local food and grocery delivery service in Jhalda, Purulia — featuring dynamic item catalogs and streamlined ordering.',
    tags: ['React', 'Tailwind CSS', 'Web Delivery', 'Vite'],
    url: 'https://zaigro.in/',
    displayUrl: 'zaigro.in',
    tapeText: 'DELIVERY APP',
    tapeColor: 'bg-[#FFDFDF]',
    tapeRotation: 2,
    rotation: 1.5,
    accentColor: '#FF573E',
    images: ['/projects/Zaigro.png', '/projects/zaigroo.png'],
    annotation: {
      text: 'Real-World Delivery 🛵',
      position: 'bottom-left',
      arrowDirection: 'up'
    },
    metrics: [
      { label: 'Service Area', value: 'Jhalda, Purulia' },
      { label: 'Target', value: 'Food & Groceries' }
    ]
  },
  {
    id: 'web-03',
    number: '03',
    category: 'HEALTHCARE WEB',
    filterCategory: 'freelance',
    title: 'DENTAL CLINIC',
    tagline: 'Modern Clinical Patient Portal & Booking Experience',
    description: 'A modern, responsive healthcare website showcasing specialized dental procedures, doctor qualifications, patient reviews, and instant appointment scheduling.',
    tags: ['React', 'Responsive Design', 'Appointment Portal', 'CSS3'],
    url: 'https://dental-clinic-sample-swart.vercel.app/',
    displayUrl: 'dental-clinic-sample.vercel.app',
    tapeText: 'HEALTHCARE PORTAL',
    tapeColor: 'bg-[#D2E9FF]',
    tapeRotation: -2,
    rotation: -0.8,
    accentColor: '#FF573E',
    images: ['/projects/dental.png', '/projects/dental clinic.png', '/projects/dental clinic 2.png'],
    annotation: {
      text: 'Patient Booking Flow 🦷',
      position: 'top-left',
      arrowDirection: 'right'
    },
    metrics: [
      { label: 'Deployment', value: 'Vercel Live' },
      { label: 'Responsiveness', value: '100% Fluid' }
    ]
  },
  {
    id: 'web-04',
    number: '04',
    category: 'PROPERTY PORTAL',
    filterCategory: 'web',
    title: 'HOUSE RENTAL',
    tagline: 'Property Listing & Real Estate Management Web App',
    description: 'A modern full-stack rental platform allowing users to browse, filter, list, and manage real estate properties with search filters and detail modals.',
    tags: ['React', 'Node.js', 'MongoDB', 'Express', 'REST API'],
    url: 'https://house-rental-blush.vercel.app/',
    repoUrl: 'https://github.com/ShreyanshWillCode/House-Rental-',
    displayUrl: 'house-rental-blush.vercel.app',
    tapeText: 'REAL ESTATE APP',
    tapeColor: 'bg-[#FFE873]',
    tapeRotation: 3,
    rotation: 1.1,
    accentColor: '#FF573E',
    images: ['/projects/House.png', '/projects/House rental.png', '/projects/House rental2.png'],
    annotation: {
      text: 'MERN Property Search 🏡',
      position: 'top-right',
      arrowDirection: 'down'
    },
    metrics: [
      { label: 'Stack', value: 'MERN Stack' },
      { label: 'Database', value: 'MongoDB Atlas' }
    ]
  },
  {
    id: 'web-05',
    number: '05',
    category: 'ALGORITHMS & SEARCH',
    filterCategory: 'python',
    title: 'MINI-SEARCH ENGINE',
    tagline: 'Web Crawler & TF-IDF Ranking Engine from Scratch',
    description: 'A lightweight search engine that crawls web pages, tokenizes content, and computes relevance ranking using TF-IDF and BFS graph exploration — built from scratch.',
    tags: ['Python', 'TF-IDF', 'BFS Crawler', 'Algorithms', 'FastAPI'],
    url: 'https://mini-search-engine-eight.vercel.app/',
    repoUrl: 'https://github.com/ShreyanshWillCode/Mini-Search-Engine',
    displayUrl: 'mini-search-engine.vercel.app',
    tapeText: 'PYTHON & ALGORITHMS',
    tapeColor: 'bg-[#E5D4FF]',
    tapeRotation: -2.5,
    rotation: -1.3,
    accentColor: '#FF573E',
    images: ['/projects/gravity search.png'],
    annotation: {
      text: 'Custom TF-IDF Crawler 🔍',
      position: 'bottom-right',
      arrowDirection: 'up'
    },
    metrics: [
      { label: 'Algorithm', value: 'TF-IDF & BFS' },
      { label: 'Language', value: 'Python Core' }
    ]
  },
  {
    id: 'web-06',
    number: '06',
    category: 'FINTECH APP',
    filterCategory: 'web',
    title: 'EWALLET',
    tagline: 'Digital Wallet & Peer-to-Peer Balance Transfers',
    description: 'A secure digital wallet application featuring peer-to-peer balance transfers, transaction ledgers, bank account linking, and real-time balance updates.',
    tags: ['React', 'Tailwind CSS', 'Node.js', 'MongoDB', 'JWT Auth'],
    url: 'https://ewallet-eight.vercel.app/',
    repoUrl: 'https://github.com/ShreyanshWillCode/User-Wallet-APP',
    displayUrl: 'ewallet-eight.vercel.app',
    tapeText: 'FINTECH PLATFORM',
    tapeColor: 'bg-[#D2E9FF]',
    tapeRotation: 1.8,
    rotation: 0.9,
    accentColor: '#FF573E',
    images: ['/projects/Ewallet.png'],
    annotation: {
      text: 'Secure P2P Transfers 💳',
      position: 'top-left',
      arrowDirection: 'right'
    },
    metrics: [
      { label: 'Security', value: 'JWT & Session Auth' },
      { label: 'Database', value: 'MongoDB Ledger' }
    ]
  }
];


