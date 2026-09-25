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

export const expertiseItems: PortfolioItem[] = [
  {
    id: "expertise-01",
    section: "expertise",
    mediaType: "image",
    mediaSrc: `${assetPathPrefix}/77dfe.png`,
    title: "PODCAST EDITS",
    description: "Polished conversations for a bigger audience.",
    number: "01"
  },
  {
    id: "expertise-02",
    section: "expertise",
    mediaType: "image",
    mediaSrc: `${assetPathPrefix}/fe216.png`,
    title: "BASIC EDITS",
    description: "Clean, engaging edits for everyday content.",
    number: "02"
  },
  {
    id: "expertise-03",
    section: "expertise",
    mediaType: "image",
    mediaSrc: `${assetPathPrefix}/f6f41.png`,
    title: "MOTION GRAPHICS",
    description: "Turn ideas into stunning visual stories.",
    number: "03"
  },
  {
    id: "expertise-04",
    section: "expertise",
    mediaType: "image",
    mediaSrc: "",
    title: "COMMERCIAL EDITS",
    description: "High-impact edits for brands and businesses.",
    number: "04"
  }
];

export const showcaseItems: PortfolioItem[] = [
  {
    id: "showcase-hero",
    section: "showcase",
    mediaType: "image",
    mediaSrc: `${assetPathPrefix}/6f027.png`,
    category: "Hero Edit",
    number: "01",
    title: "Commercial Edits",
    description: "Premium pacing, cinematic color, and high-energy sound design for brands that need to move fast and feel premium."
  },
  {
    id: "showcase-02",
    section: "showcase",
    mediaType: "image",
    mediaSrc: `${assetPathPrefix}/56ab5.png`,
    category: "Cinematic",
    number: "02",
    title: "High-Energy Sequences"
  },
  {
    id: "showcase-03",
    section: "showcase",
    mediaType: "image",
    mediaSrc: `${assetPathPrefix}/cffd5.png`,
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
    { id: 'pod-01', type: 'video', src: 'https://assets.mixkit.co/videos/preview/mixkit-girl-in-neon-sign-1232-large.mp4', poster: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=600&q=80', alt: 'Podcast 1' },
    { id: 'pod-02', type: 'video', src: 'https://assets.mixkit.co/videos/preview/mixkit-tree-with-yellow-flowers-1173-large.mp4', poster: 'https://images.unsplash.com/photo-1589903308904-1010c2294adc?w=600&q=80', alt: 'Podcast 2' },
    { id: 'pod-03', type: 'video', src: 'https://assets.mixkit.co/videos/preview/mixkit-taking-photos-from-different-angles-of-a-model-34421-large.mp4', poster: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&q=80', alt: 'Podcast 3' },
    { id: 'pod-04', type: 'video', src: 'https://assets.mixkit.co/videos/preview/mixkit-girl-in-neon-sign-1232-large.mp4', poster: 'https://images.unsplash.com/photo-1598550880863-4e8aa3d0edb4?w=600&q=80', alt: 'Podcast 4' },
    { id: 'pod-05', type: 'video', src: 'https://assets.mixkit.co/videos/preview/mixkit-tree-with-yellow-flowers-1173-large.mp4', poster: 'https://images.unsplash.com/photo-1606335192038-f5a05f761b3a?w=600&q=80', alt: 'Podcast 5' },
    { id: 'pod-06', type: 'video', src: 'https://assets.mixkit.co/videos/preview/mixkit-taking-photos-from-different-angles-of-a-model-34421-large.mp4', poster: 'https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=600&q=80', alt: 'Podcast 6' }
  ]
};

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
    { id: 'basic-01', type: 'video', src: 'https://assets.mixkit.co/videos/preview/mixkit-girl-in-neon-sign-1232-large.mp4', poster: '', alt: 'Video 1' },
    { id: 'basic-02', type: 'video', src: 'https://assets.mixkit.co/videos/preview/mixkit-tree-with-yellow-flowers-1173-large.mp4', poster: '', alt: 'Video 2' },
    { id: 'basic-03', type: 'video', src: 'https://assets.mixkit.co/videos/preview/mixkit-taking-photos-from-different-angles-of-a-model-34421-large.mp4', poster: '', alt: 'Video 3' },
    { id: 'basic-04', type: 'video', src: 'https://assets.mixkit.co/videos/preview/mixkit-girl-in-neon-sign-1232-large.mp4', poster: '', alt: 'Video 4' },
    { id: 'basic-05', type: 'video', src: 'https://assets.mixkit.co/videos/preview/mixkit-tree-with-yellow-flowers-1173-large.mp4', poster: '', alt: 'Video 5' },
    { id: 'basic-06', type: 'video', src: 'https://assets.mixkit.co/videos/preview/mixkit-taking-photos-from-different-angles-of-a-model-34421-large.mp4', poster: '', alt: 'Video 6' }
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
