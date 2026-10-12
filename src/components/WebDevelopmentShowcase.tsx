import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { webDevelopmentProjects, WebProject } from '../data/portfolio';

// ─── Browser Window Frame Component ───────────────────────────────────────
function BrowserWindowFrame({
  project,
  children,
  className = ""
}: {
  project: WebProject;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`w-full bg-[#1A1A1A] rounded-xl border-[2.5px] border-[#111] overflow-hidden shadow-[0_18px_45px_rgba(0,0,0,0.14)] flex flex-col ${className}`}>
      {/* Browser Chrome Header */}
      <div className="bg-[#1F1F1F] px-3 sm:px-4 py-2 sm:py-2.5 flex items-center justify-between border-b border-black/40 gap-2 sm:gap-3 select-none">
        {/* Window Control Buttons */}
        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
          <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#FF5F56] border border-black/20 inline-block" />
          <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#FFBD2E] border border-black/20 inline-block" />
          <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#27C93F] border border-black/20 inline-block" />
        </div>

        {/* Address Bar */}
        <div className="flex-1 max-w-md mx-auto bg-[#121212] rounded-md px-2 sm:px-3 py-0.5 sm:py-1 flex items-center gap-1.5 sm:gap-2 border border-white/5 text-[10px] sm:text-[11px] font-mono text-[#AAA] truncate min-w-0">
          <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#27C93F] shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
          </svg>
          <span className="truncate">{project.displayUrl}</span>
        </div>

        {/* Coral Accent Badge */}
        <div className="shrink-0 flex items-center gap-1 bg-[#FF573E]/15 border border-[#FF573E]/40 px-1.5 sm:px-2 py-0.5 rounded text-[9px] sm:text-[10px] font-['Barlow:Bold'] text-[#FF573E] uppercase tracking-wider">
          <span className="w-1.5 h-1.5 rounded-full bg-[#FF573E] animate-pulse" />
          <span>LIVE</span>
        </div>
      </div>

      {/* Browser Body / Viewport Content */}
      <div className="relative w-full overflow-hidden bg-[#0A0A0C] text-white">
        {children}
      </div>
    </div>
  );
}

// ─── Real Project Screenshot Slider ────────────────────────────────────────
function ProjectScreenshotSlider({
  images,
  title,
  aspectClass = "aspect-[16/10]"
}: {
  images: string[];
  title: string;
  aspectClass?: string;
}) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const isReduced = useReducedMotion();

  useEffect(() => {
    if (images.length <= 1 || isReduced) return;
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % images.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [images.length, isReduced]);

  if (!images || images.length === 0) {
    return (
      <div className={`w-full ${aspectClass} bg-[#141416] flex items-center justify-center text-zinc-500 font-mono text-xs`}>
        Preview Loading...
      </div>
    );
  }

  return (
    <div className={`relative w-full ${aspectClass} overflow-hidden bg-[#111215] group/slider`}>
      {/* Slides Container */}
      <div 
        className="flex h-full w-full transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
        style={{ transform: `translateX(-${currentIdx * 100}%)` }}
      >
        {images.map((src, idx) => (
          <div key={idx} className="relative w-full h-full shrink-0 flex items-center justify-center bg-black/40">
            <img
              src={src}
              alt={`${title} preview ${idx + 1}`}
              className="w-full h-full object-cover object-top select-none transition-transform duration-700 group-hover/slider:scale-[1.02]"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {/* Overlay gradient at bottom for contrast */}
      <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />

      {/* Dot Indicators */}
      {images.length > 1 && (
        <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-20 bg-black/50 backdrop-blur-sm px-2.5 py-1 rounded-full border border-white/10">
          {images.map((_, dotIdx) => (
            <button
              key={dotIdx}
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setCurrentIdx(dotIdx);
              }}
              aria-label={`Slide ${dotIdx + 1}`}
              className={`transition-all duration-300 rounded-full cursor-pointer ${
                dotIdx === currentIdx 
                  ? 'w-4 h-1.5 bg-[#FF573E]' 
                  : 'w-1.5 h-1.5 bg-white/40 hover:bg-white/80'
              }`}
            />
          ))}
        </div>
      )}

      {/* Prev / Next manual controls on hover */}
      {images.length > 1 && (
        <>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setCurrentIdx((prev) => (prev === 0 ? images.length - 1 : prev - 1));
            }}
            aria-label="Previous screenshot"
            className="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-black/60 text-white border border-white/20 flex items-center justify-center opacity-0 group-hover/slider:opacity-100 transition-opacity duration-200 z-20 cursor-pointer text-xs"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setCurrentIdx((prev) => (prev + 1) % images.length);
            }}
            aria-label="Next screenshot"
            className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-black/60 text-white border border-white/20 flex items-center justify-center opacity-0 group-hover/slider:opacity-100 transition-opacity duration-200 z-20 cursor-pointer text-xs"
          >
            ›
          </button>
        </>
      )}
    </div>
  );
}

// ─── Main Web Project Card ────────────────────────────────────────────────
function WebProjectCard({
  project,
  variant = "normal",
  onOpenPreview
}: {
  project: WebProject;
  variant?: "featured" | "offset" | "wide" | "normal";
  onOpenPreview: (project: WebProject) => void;
}) {
  const isReduced = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Aspect ratio according to card variant
  const aspectClass = variant === 'wide' 
    ? "aspect-[16/8] sm:aspect-[21/9]" 
    : variant === 'featured' 
    ? "aspect-[16/10]" 
    : "aspect-[16/10]";

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: isReduced ? 0 : 36 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="relative group transition-all duration-500 flex flex-col justify-between w-full h-full"
    >
      {/* Paper Card Backing with Scrapbook Depth */}
      <div 
        className="relative bg-[#FFFDF9] rounded-xl sm:rounded-2xl border-2 border-[#171717] p-4 sm:p-6 md:p-8 shadow-[0_16px_36px_rgba(0,0,0,0.06)] hover:shadow-[0_24px_50px_rgba(0,0,0,0.12)] transition-all duration-500 hover:-translate-y-1.5 flex flex-col justify-between gap-4 sm:gap-6 h-full"
        style={{
          transform: isReduced || isMobile ? 'none' : `rotate(${project.rotation}deg)`
        }}
      >
        {/* Subtle Paper Noise Background */}
        <div 
          className="absolute inset-0 rounded-xl sm:rounded-2xl pointer-events-none opacity-40 mix-blend-multiply"
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
        />

        {/* Masking Tape Label (Scrapbook Accent) */}
        {project.tapeText && (
          <div 
            className={`absolute -top-3 sm:-top-3.5 left-5 sm:left-8 ${project.tapeColor} px-3 sm:px-4 py-0.5 sm:py-1 border border-black/15 shadow-xs text-[#111] font-['Covered_By_Your_Grace:Regular'] text-[15px] sm:text-[17px] tracking-wider z-20 select-none`}
            style={{ transform: `rotate(${project.tapeRotation}deg)` }}
          >
            {project.tapeText}
          </div>
        )}

        {/* Top Header Row */}
        <div className="flex flex-wrap items-center justify-between gap-2.5 sm:gap-3 pt-1">
          <div className="flex items-center gap-2 sm:gap-3">
            <span className="font-['Barlow:Bold'] text-[11px] sm:text-xs text-white bg-[#171717] px-2 sm:px-2.5 py-0.5 sm:py-1 rounded tracking-widest">
              {project.number}
            </span>
            <div className="flex items-center gap-1.5 sm:gap-2">
              <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-[#FF573E]" />
              <span className="font-['Barlow:Bold'] text-[10px] sm:text-[11px] text-[#666] tracking-[1.5px] sm:tracking-[2px] uppercase">
                {project.category}
              </span>
            </div>
          </div>

          {/* Metrics Pill if available */}
          {project.metrics && project.metrics[0] && (
            <div className="inline-flex items-center gap-1.5 bg-[#F5EFE3] border border-black/10 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-[11px] font-mono text-[#444] max-w-full truncate">
              <span className="text-[#FF573E] font-bold">●</span>
              <span className="truncate">{project.metrics[0].label}:</span>
              <strong className="text-[#111] shrink-0">{project.metrics[0].value}</strong>
            </div>
          )}
        </div>

        {/* Signature Browser-Window Frame with Real Project Screenshots */}
        <div 
          onClick={() => onOpenPreview(project)}
          className="relative z-10 w-full group/browser cursor-pointer"
        >
          <BrowserWindowFrame project={project}>
            <ProjectScreenshotSlider 
              images={project.images} 
              title={project.title}
              aspectClass={aspectClass}
            />
          </BrowserWindowFrame>
        </div>

        {/* Content Section: Title, Description, Tags, CTA */}
        <div className="flex flex-col gap-3.5 sm:gap-4 relative z-10">
          <div>
            <h3 
              onClick={() => onOpenPreview(project)}
              className="font-['Barlow_Condensed:Black'] text-[clamp(24px,5vw,38px)] text-[#111] uppercase tracking-tight leading-[1] group-hover:text-[#FF573E] transition-colors cursor-pointer"
            >
              {project.title}
            </h3>
            <p className="font-['Inter:Regular'] text-[#555] text-xs sm:text-sm md:text-[15px] leading-relaxed mt-1.5 sm:mt-2 max-w-2xl">
              {project.description}
            </p>
          </div>

          {/* Technology Badges */}
          <div className="flex flex-wrap items-center gap-1.5 pt-0.5 sm:pt-1">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="bg-[#F0EBE0] text-[#222] border border-black/10 px-2 sm:px-2.5 py-0.5 rounded text-[10px] sm:text-[11px] font-mono"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Card Bottom CTA Row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-black/10 pt-3 sm:pt-4 mt-0.5">
            <div className="flex items-center gap-2.5 sm:gap-3">
              <button
                type="button"
                onClick={() => onOpenPreview(project)}
                className="inline-flex items-center gap-1.5 sm:gap-2 font-['Barlow:Bold'] text-[12px] sm:text-[13px] tracking-[1.5px] sm:tracking-[2px] uppercase text-[#111] hover:text-[#FF573E] transition-colors group/cta cursor-pointer"
              >
                <span>VIEW PROJECT</span>
                <span className="text-[#FF573E] group-hover/cta:translate-x-1.5 transition-transform">→</span>
              </button>

              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#111] text-white px-2.5 sm:px-3 py-1 rounded text-[10px] sm:text-[11px] font-['Barlow:Bold'] tracking-wider uppercase hover:bg-[#FF573E] transition-colors no-underline"
                >
                  LIVE DEMO ↗
                </a>
              )}
            </div>

            <span className="font-['Covered_By_Your_Grace:Regular'] text-[#777] text-[16px] sm:text-[18px]">
              {project.tagline}
            </span>
          </div>
        </div>

        {/* Handwritten Annotation if specified */}
        {project.annotation && (
          <div className="hidden md:flex items-center gap-2 absolute -bottom-5 right-6 z-20 pointer-events-none">
            <span className="font-['Covered_By_Your_Grace:Regular'] text-[20px] text-[#111] bg-[#FFFBEF] px-2 py-0.5 border border-black/10 shadow-sm rotate-[2deg]">
              {project.annotation.text}
            </span>
          </div>
        )}
      </div>
    </motion.div>
  );
}

// ─── Modal Preview for Real Interactive Exploration ───────────────────────
function ProjectDetailModal({
  project,
  onClose
}: {
  project: WebProject | null;
  onClose: () => void;
}) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-[2000] flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-4xl bg-[#FFFBEF] border-[2.5px] border-[#111] rounded-xl sm:rounded-2xl shadow-2xl p-4 sm:p-6 md:p-8 flex flex-col gap-4 sm:gap-6 max-h-[92vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close preview"
          className="absolute top-3 right-3 sm:top-4 sm:right-4 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#111] text-white flex items-center justify-center font-bold hover:bg-[#FF573E] transition-colors cursor-pointer text-xs sm:text-base z-30"
        >
          ✕
        </button>

        {/* Modal Header */}
        <div className="flex flex-col gap-1.5 sm:gap-2 border-b border-black/10 pb-3 sm:pb-4 pr-10">
          <div className="flex items-center gap-2">
            <span className="bg-[#111] text-white text-[10px] sm:text-xs font-['Barlow:Bold'] px-2 py-0.5 rounded">
              PROJECT {project.number}
            </span>
            <span className="text-[#FF573E] font-['Barlow:Bold'] text-[10px] sm:text-xs tracking-widest uppercase">
              {project.category}
            </span>
          </div>
          <h3 className="font-['Barlow_Condensed:Black'] text-[clamp(24px,5vw,46px)] uppercase leading-none text-[#111]">
            {project.title}
          </h3>
          <p className="font-['Covered_By_Your_Grace:Regular'] text-[18px] sm:text-[22px] text-[#666]">
            {project.tagline}
          </p>
        </div>

        {/* Real Screenshots Browser Showcase in Modal */}
        <BrowserWindowFrame project={project}>
          <ProjectScreenshotSlider 
            images={project.images} 
            title={project.title}
            aspectClass="aspect-[16/10] sm:aspect-[16/9]"
          />
        </BrowserWindowFrame>

        {/* Modal Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 bg-white/70 p-3.5 sm:p-5 rounded-xl border border-black/10">
          <div>
            <h4 className="font-['Barlow:Bold'] text-xs uppercase tracking-widest text-[#111] mb-1.5 sm:mb-2">
              Architecture Overview
            </h4>
            <p className="text-xs sm:text-sm text-[#444] leading-relaxed">
              {project.description}
            </p>
          </div>
          <div className="flex flex-col gap-2.5 sm:gap-3">
            <h4 className="font-['Barlow:Bold'] text-xs uppercase tracking-widest text-[#111]">
              Core Tech Stack
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map(t => (
                <span key={t} className="bg-[#111] text-white text-[10px] sm:text-[11px] font-mono px-2 sm:px-2.5 py-0.5 sm:py-1 rounded">
                  {t}
                </span>
              ))}
            </div>
            {project.metrics && (
              <div className="mt-1.5 flex flex-col gap-1 border-t border-black/10 pt-2 text-[11px] sm:text-xs font-mono text-[#555]">
                {project.metrics.map(m => (
                  <div key={m.label} className="flex justify-between">
                    <span>{m.label}:</span>
                    <strong className="text-[#111]">{m.value}</strong>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Modal CTAs */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-2 border-t border-black/10">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3 w-full sm:w-auto">
            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#111] text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg font-['Barlow:Bold'] text-xs tracking-[1.5px] sm:tracking-[2px] uppercase hover:bg-[#FF573E] transition-colors flex items-center justify-center gap-2 no-underline text-center"
              >
                <span>OPEN LIVE WEBSITE</span>
                <span>↗</span>
              </a>
            )}

            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white border-2 border-[#111] text-[#111] px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg font-['Barlow:Bold'] text-xs tracking-[1.5px] sm:tracking-[2px] uppercase hover:bg-[#111] hover:text-white transition-colors flex items-center justify-center gap-2 no-underline text-center"
              >
                <span>GITHUB REPO</span>
                <span>⌨</span>
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            className="text-xs font-['Barlow:Bold'] text-[#555] uppercase tracking-wider hover:text-[#111] transition-colors cursor-pointer text-center py-1 sm:py-0"
          >
            Back to Showcase
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Main Section: WebDevelopmentShowcase ─────────────────────────────────
export function WebDevelopmentShowcase() {
  const [activePreview, setActivePreview] = useState<WebProject | null>(null);
  const [activeFilter, setActiveFilter] = useState<'all' | 'freelance' | 'web' | 'python'>('all');
  
  const filters: { id: 'all' | 'freelance' | 'web' | 'python'; label: string; count: number }[] = [
    { id: 'all', label: 'ALL PROJECTS', count: webDevelopmentProjects.length },
    { id: 'freelance', label: 'FREELANCE', count: webDevelopmentProjects.filter(p => p.filterCategory === 'freelance').length },
    { id: 'web', label: 'WEB APPS', count: webDevelopmentProjects.filter(p => p.filterCategory === 'web').length },
    { id: 'python', label: 'PYTHON / ALGORITHMS', count: webDevelopmentProjects.filter(p => p.filterCategory === 'python').length },
  ];

  const filteredProjects = activeFilter === 'all'
    ? webDevelopmentProjects
    : webDevelopmentProjects.filter(p => p.filterCategory === activeFilter);

  return (
    <section 
      id="web-dev" 
      className="relative w-full bg-[#FFFBEF] text-[#111] overflow-hidden py-12 sm:py-16 md:py-24 border-t-2 border-b-2 border-[#111]/10"
    >
      {/* Background Scrapbook Noise Texture Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-40 mix-blend-multiply z-0" 
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
      />

      {/* Decorative Grid Lines / Dotted Motif */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-10 z-0" 
        style={{ backgroundImage: `radial-gradient(#111 1px, transparent 1px)`, backgroundSize: '32px 32px' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-16 w-full flex flex-col gap-8 sm:gap-12 md:gap-16">
        
        {/* ─── 1. Section Heading Area ─────────────────────────────────── */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 sm:gap-8 border-b-2 border-[#111]/15 pb-8 sm:pb-10">
          
          {/* Left: Eyebrow + Main Title */}
          <div className="flex flex-col gap-3 sm:gap-4 max-w-3xl">
            {/* Eyebrow */}
            <div className="flex items-center gap-2.5 sm:gap-3">
              <span className="w-5 sm:w-6 h-[2px] bg-[#FF573E]" />
              <span className="font-['Barlow:Bold'] text-[11px] sm:text-[13px] tracking-[2px] sm:tracking-[3px] uppercase text-[#666]">
                WEB DEVELOPMENT / SELECTED PROJECTS
              </span>
            </div>

            {/* Main Editorial Headline */}
            <h2 className="font-['Barlow_Condensed:Black'] text-[clamp(38px,8vw,96px)] leading-[0.92] sm:leading-[0.88] uppercase tracking-tight text-[#111]">
              <span className="block">WE BUILD</span>
              <span className="block">
                <span className="text-[#FF573E] relative inline-block">
                  DIGITAL
                  {/* Hand-drawn marker stroke under DIGITAL */}
                  <motion.svg 
                    className="absolute -bottom-2 left-0 w-full h-[12px] overflow-visible pointer-events-none" 
                    viewBox="0 0 100 12" 
                    preserveAspectRatio="none"
                  >
                    <motion.path 
                      initial={{ pathLength: 0 }} 
                      whileInView={{ pathLength: 1 }} 
                      viewport={{ once: true }} 
                      transition={{ duration: 0.8, delay: 0.2 }} 
                      d="M 0 6 Q 50 12 100 4" 
                      fill="none" 
                      stroke="#FF573E" 
                      strokeWidth="3.5" 
                      strokeLinecap="round" 
                    />
                  </motion.svg>
                </span>{' '}
                <span className="text-stroke-black text-stroke-black-lg">EXPERIENCES</span>
              </span>
              <span className="block">
                <span className="text-stroke-black text-stroke-black-lg">THAT</span> SCALE.
              </span>
            </h2>
          </div>

          {/* Right: Supporting Description & Dynamic Count Pill */}
          <div className="flex flex-col gap-3 sm:gap-4 lg:max-w-sm lg:items-end lg:text-right">
            {/* Dynamic Counter Pill */}
            <div className="inline-flex items-center gap-2 bg-[#111] text-[#FFFBEF] px-3.5 sm:px-4 py-1 sm:py-1.5 rounded-full font-['Barlow:Bold'] text-[11px] sm:text-xs tracking-[1.5px] sm:tracking-[2px] uppercase w-fit">
              <span className="w-2 h-2 rounded-full bg-[#FF573E] animate-pulse" />
              <span>SELECTED WORK / 0{webDevelopmentProjects.length} PROJECTS</span>
            </div>

            <p className="font-['Inter:Regular'] text-[#555] text-sm sm:text-base md:text-lg leading-relaxed">
              Websites, web applications, and algorithmic products built around real client and business needs.
            </p>

            <div className="font-['Covered_By_Your_Grace:Regular'] text-[#888] text-[17px] sm:text-[20px] rotate-[-2deg]">
              High-performance code · Scalable systems
            </div>
          </div>
        </div>

        {/* ─── 2. Category Filter Pills (Horizontal swipe on mobile) ──── */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 pt-0.5 -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap sm:gap-2.5 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setActiveFilter(f.id)}
              className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full font-['Barlow:Bold'] text-[11px] sm:text-xs tracking-[1px] sm:tracking-[1.5px] uppercase transition-all duration-300 border-2 cursor-pointer flex items-center gap-1.5 sm:gap-2 shrink-0 ${
                activeFilter === f.id
                  ? 'bg-[#111] text-white border-[#111] shadow-md -translate-y-0.5'
                  : 'bg-white/80 text-[#333] border-[#111]/20 hover:border-[#111] hover:bg-white'
              }`}
            >
              <span>{f.label}</span>
              <span className={`px-1.5 py-0.2 rounded-full text-[9px] sm:text-[10px] font-mono ${
                activeFilter === f.id ? 'bg-[#FF573E] text-white' : 'bg-black/10 text-[#666]'
              }`}>
                {f.count}
              </span>
            </button>
          ))}
        </div>

        {/* ─── 3. Editorial Projects Showcase Grid ────────────────────── */}
        <motion.div layout className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-stretch">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => {
              let colSpanClass = "lg:col-span-6";
              let variantType: "featured" | "offset" | "wide" | "normal" = "normal";

              if (activeFilter === 'all') {
                if (index === 0) {
                  colSpanClass = "lg:col-span-7";
                  variantType = "featured";
                } else if (index === 1) {
                  colSpanClass = "lg:col-span-5 lg:mt-12";
                  variantType = "offset";
                } else if (index === 2) {
                  colSpanClass = "lg:col-span-6";
                } else if (index === 3) {
                  colSpanClass = "lg:col-span-6";
                }
              }

              return (
                <div key={project.id} className={`${colSpanClass} flex`}>
                  <WebProjectCard
                    project={project}
                    variant={variantType}
                    onOpenPreview={setActivePreview}
                  />
                </div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* ─── 4. Bottom Banner & CTA ─────────────────────────────────── */}
        <div className="mt-2 sm:mt-4 border-t border-black/10 pt-6 sm:pt-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-6">
          <div className="flex items-center gap-2.5 sm:gap-3">
            <span className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-[#FF573E] shrink-0" />
            <span className="font-['Barlow:Bold'] text-[11px] sm:text-xs uppercase tracking-[1.5px] sm:tracking-[2px] text-[#444]">
              FULL STACK WEB DEVELOPMENT · PYTHON SYSTEMS · CLOUD DEPLOYMENTS
            </span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
            <span className="font-['Covered_By_Your_Grace:Regular'] text-[#666] text-[18px] sm:text-[20px]">
              Ready to ship your web application?
            </span>
            <a
              href="#contact"
              className="bg-[#111] text-[#FFFBEF] px-5 py-2.5 rounded font-['Barlow:Bold'] text-xs tracking-[2px] uppercase hover:bg-[#FF573E] transition-colors no-underline text-center justify-center w-full sm:w-auto"
            >
              START A PROJECT →
            </a>
          </div>
        </div>

      </div>

      {/* Interactive Detail Modal */}
      <ProjectDetailModal 
        project={activePreview} 
        onClose={() => setActivePreview(null)} 
      />
    </section>
  );
}
