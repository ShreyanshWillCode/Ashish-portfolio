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
