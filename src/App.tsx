import { useState, useRef, useEffect, useCallback } from 'react';
import { motion, useScroll, useMotionValueEvent, useTransform, useReducedMotion } from 'framer-motion';
import Lenis from 'lenis';
import { expertiseItems, showcaseItems, basicEditsSection, testimonialsSection } from './data/portfolio';
import { MediaCard } from './components/MediaCard';
import { PhoneMedia } from './components/PhoneMedia';
import { PodcastEdits } from './components/PodcastEdits';
import { ScrollUnderline } from './components/ScrollUnderline';

const DESIGN_W = 1440;

/* ── Scroll-reveal hook ──────────────────────────────────── */
function useReveal(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setVisible(true); obs.disconnect(); }
    }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

/* ── Parallax hook — returns a ref; updates --parallax-offset CSS var ── */
function useParallax(speed = 0.18) {
  const ref = useRef<HTMLDivElement>(null);
  const update = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const center = rect.top + rect.height / 2 - window.innerHeight / 2;
    el.style.setProperty('--parallax-offset', `${center * speed}px`);
  }, [speed]);
  useEffect(() => {
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update, { passive: true });
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, [update]);
  return ref;
}

/* ── Reveal wrapper component ────────────────────────────── */
function Reveal({
  children, className = '', direction = 'up', delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  direction?: 'up' | 'left' | 'right' | 'scale';
  delay?: number;
}) {
  const { ref, visible } = useReveal();
  return (
    <div
      ref={ref}
      className={`reveal-${direction} ${visible ? 'in-view' : ''} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}

/* ── Marquee strip ───────────────────────────────────────── */
const MARQUEE_ITEMS = ['EDIT', 'CREATE', 'INSPIRE', 'VIDEO EDITING', 'MOTION DESIGN', 'PODCAST EDITS', 'COMMERCIAL CUTS', 'VISUAL STORIES'];
function Marquee({ dark = false }: { dark?: boolean }) {
  const repeated = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];
  return (
    <div className={`overflow-hidden w-full py-[14px] border-y ${dark ? 'bg-[#111] border-[#222]' : 'bg-[#f2efe8] border-[#ddd9d0]'}`}>
      <div className="marquee-track">
        {[...repeated, ...repeated].map((item, i) => (
          <span key={i} className={`inline-flex items-center gap-[20px] px-[20px] font-['Barlow_Condensed:Black'] text-[13px] tracking-[2px] uppercase ${dark ? 'text-[#444]' : 'text-[#ccc9c0]'}`}>
            {item}
            <span className={`inline-block w-[5px] h-[5px] rounded-full ${dark ? 'bg-[#333]' : 'bg-[#d4d0c7]'}`} />
          </span>
        ))}
      </div>
    </div>
  );
}

function ScaledArtSection({
  children,
  designHeight,
  className = '',
}: {
  children: React.ReactNode;
  designHeight: number;
  className?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(() =>
    typeof window !== 'undefined' ? window.innerWidth / DESIGN_W : 1
  );

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const obs = new ResizeObserver(([entry]) => {
      setScale(entry.contentRect.width / DESIGN_W);
    });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative shrink-0 w-full overflow-hidden ${className}`}
      style={{ height: `${designHeight * scale}px` }}
    >
      <div
        className="relative"
        style={{
          width: `${DESIGN_W}px`,
          height: `${designHeight}px`,
          transformOrigin: 'top left',
          transform: `scale(${scale})`,
        }}
      >
        {children}
      </div>
    </div>
  );
}

const assetPathPrefix = "/assets";
const imgRectangle = `${assetPathPrefix}/58afb.png`;
const imgRectangle1 = `${assetPathPrefix}/b133d.png`;
const imgRectangle2 = `${assetPathPrefix}/cfc6c.png`;
const imgRectangle3 = `${assetPathPrefix}/56872.png`;
const imgRectangle4 = `${assetPathPrefix}/4c529.png`;
const imgImagePodcastEdits = `${assetPathPrefix}/77dfe.png`;
const imgImageBasicEdits = `${assetPathPrefix}/fe216.png`;
const imgImageMotionGraphics = `${assetPathPrefix}/f6f41.png`;
const imgImage = `${assetPathPrefix}/757bb.png`;
const imgImage1 = `${assetPathPrefix}/b77fb.png`;
const imgImage2 = `${assetPathPrefix}/ef629.png`;
const imgImage3 = `${assetPathPrefix}/0a0f2.png`;
const imgImage4 = `${assetPathPrefix}/db8c8.png`;
const imgImage5 = `${assetPathPrefix}/2e388.png`;
const imgImage6 = `${assetPathPrefix}/72957.png`;
const imgImage7 = `${assetPathPrefix}/6d6fd.png`;
const imgBackground = `${assetPathPrefix}/bdda8.png`;
const imgImage8 = `${assetPathPrefix}/4e13e.png`;
const imgBackground1 = `${assetPathPrefix}/f7468.png`;
const imgImage9 = `${assetPathPrefix}/7ea3c.png`;
const imgImage10 = `${assetPathPrefix}/a8d28.png`;
const imgBackground2 = `${assetPathPrefix}/ea689.png`;
const imgBackground3 = `${assetPathPrefix}/ce018.png`;
const imgImage11 = `${assetPathPrefix}/df3b0.png`;
const imgBackground4 = `${assetPathPrefix}/66b12.png`;
const imgBackground5 = `${assetPathPrefix}/dbe5d.png`;
const imgBackground6 = `${assetPathPrefix}/f1a79.png`;
const imgImage12 = `${assetPathPrefix}/1b298.png`;
const imgImage13 = `${assetPathPrefix}/2e3d3.png`;
const imgImage14 = `${assetPathPrefix}/aa810.png`;
const imgImage15 = `${assetPathPrefix}/4dfa8.png`;
const imgImage16 = `${assetPathPrefix}/ed385.png`;
const imgImage17 = `${assetPathPrefix}/aabc8.png`;
const imgImage18 = `${assetPathPrefix}/f2266.png`;
const imgImage19 = `${assetPathPrefix}/7a684.png`;
const imgImage20 = `${assetPathPrefix}/79d33.png`;
const imgImage21 = `${assetPathPrefix}/28083.png`;
const imgImage22 = `${assetPathPrefix}/d3ea5.png`;
const imgImage23 = `${assetPathPrefix}/29665.png`;
const imgImage24 = `${assetPathPrefix}/31201.png`;
const imgImage25 = `${assetPathPrefix}/67554.png`;
const imgImage26 = `${assetPathPrefix}/c963c.png`;
const imgImage27 = `${assetPathPrefix}/a9217.png`;
const imgImage28 = `${assetPathPrefix}/205f8.png`;
const imgImage29 = `${assetPathPrefix}/0e51f.png`;
const imgImage30 = `${assetPathPrefix}/62b0a.png`;
const imgImage31 = `${assetPathPrefix}/c9686.png`;
const imgImage32 = `${assetPathPrefix}/9d7e4.png`;
const imgImage33 = `${assetPathPrefix}/06b72.png`;
const imgImage34 = `${assetPathPrefix}/5e611.png`;
const imgImage35 = `${assetPathPrefix}/0a22e.png`;
const imgImage36 = `${assetPathPrefix}/affeb.png`;
const imgImage37 = `${assetPathPrefix}/89dca.png`;
const imgImage38 = `${assetPathPrefix}/61fa5.png`;
const imgImage39 = `${assetPathPrefix}/1d4b2.png`;
const imgImage40 = `${assetPathPrefix}/74fc3.png`;
const imgImage41 = `${assetPathPrefix}/641a7.png`;
const imgImage42 = `${assetPathPrefix}/96ac5.png`;
const imgImage43 = `${assetPathPrefix}/0307e.png`;
const imgImage44 = `${assetPathPrefix}/09069.png`;
const imgHeroCard = `${assetPathPrefix}/6f027.png`;
const imgMediaCard1 = `${assetPathPrefix}/56ab5.png`;
const imgMediaCard2 = `${assetPathPrefix}/cffd5.png`;
const imgAccentCard = `${assetPathPrefix}/70aae.png`;
const imgMediaCard4 = `${assetPathPrefix}/e63c2.png`;
const imgImage45 = `${assetPathPrefix}/177fc.png`;
const imgImage46 = `${assetPathPrefix}/39e4f.png`;
const imgImage47 = `${assetPathPrefix}/b07c3.png`;
const imgImage48 = `${assetPathPrefix}/25d91.png`;
const imgImage49 = `${assetPathPrefix}/03a9e.png`;
const imgImage50 = `${assetPathPrefix}/6782d.png`;
const imgImage51 = `${assetPathPrefix}/01485.png`;
const imgImage52 = `${assetPathPrefix}/bd9a3.png`;
const imgBackground7 = `${assetPathPrefix}/53dd5.png`;
const imgImage53 = `${assetPathPrefix}/808c2.png`;
const imgImage54 = `${assetPathPrefix}/d4fc0.png`;
const imgImage55 = `${assetPathPrefix}/276a7.png`;
const imgImage56 = `${assetPathPrefix}/38aae.png`;
const imgImage57 = `${assetPathPrefix}/ef649.png`;
const imgImage58 = `${assetPathPrefix}/2d5a2.png`;
const imgBackground8 = `${assetPathPrefix}/a7264.png`;
const imgImage59 = `${assetPathPrefix}/e3801.png`;
const imgImage60 = `${assetPathPrefix}/3f97d.png`;
const imgImage61 = `${assetPathPrefix}/3a02c.png`;
const imgImage62 = `${assetPathPrefix}/1a245.png`;
const imgBackground9 = `${assetPathPrefix}/dca48.png`;
const imgImage63 = `${assetPathPrefix}/2deba.png`;
const imgImage64 = `${assetPathPrefix}/b7847.png`;
const imgImage65 = `${assetPathPrefix}/7db0f.png`;
const imgBackground10 = `${assetPathPrefix}/8e335.png`;
const imgImage66 = `${assetPathPrefix}/73f45.png`;
const imgImage67 = `${assetPathPrefix}/02dd3.png`;
const imgImage68 = `${assetPathPrefix}/5b850.png`;
const imgImage69 = `${assetPathPrefix}/33634.png`;
const imgImage70 = `${assetPathPrefix}/7630a.png`;
const imgImage71 = `${assetPathPrefix}/fb1aa.png`;
const imgImage72 = `${assetPathPrefix}/4b96b.png`;
const imgImage73 = `${assetPathPrefix}/588d9.png`;
const imgImage74 = `${assetPathPrefix}/c42a7.png`;
const imgImage75 = `${assetPathPrefix}/d0e84.png`;
const imgImage76 = `${assetPathPrefix}/9cf1d.png`;
const imgImage77 = `${assetPathPrefix}/6e1e3.png`;
const imgImage78 = `${assetPathPrefix}/a130c.png`;
const imgImage79 = `${assetPathPrefix}/d0021.png`;
const imgImage80 = `${assetPathPrefix}/fee5a.png`;
const imgImage81 = `${assetPathPrefix}/60b99.svg`;
const imgImage82 = `${assetPathPrefix}/2b85c.svg`;
const imgIcon = `${assetPathPrefix}/60b99.svg`;
const imgLine = `${assetPathPrefix}/2b85c.svg`;
const imgLetsBg = `${assetPathPrefix}/ca8d4.png`;
const imgLetsRightPanel = `${assetPathPrefix}/b8ece.png`;

export default function App() {
  const heroParallaxRef = useParallax(0.25);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const lenisRef = useRef<Lenis | null>(null);

  // --- Contact Section Scroll Animations (Scrapbook Editorial Style) ---
  const contactRef = useRef<HTMLElement>(null);
  const { scrollYProgress: contactY } = useScroll({
    target: contactRef,
    offset: ["start 85%", "end start"]
  });
  const reducedMotion = useReducedMotion();

  // Left side global
  const cOpacity = useTransform(contactY, [0, 0.15, 0.85, 1], [0, 1, 1, 0]);
  const cY = useTransform(contactY, [0, 0.25, 0.85, 1], [reducedMotion ? 0 : 50, 0, 0, reducedMotion ? 0 : -25]);

  // Typography: LET'S
  const letsX = useTransform(contactY, [0, 0.25, 0.85, 1], [reducedMotion ? 0 : -35, 0, 0, reducedMotion ? 0 : -20]);
  const letsRot = useTransform(contactY, [0, 0.25, 0.85, 1], [reducedMotion ? 0 : -2, 0, 0, 0]);
  
  // Typography: CREATE
  const createX = useTransform(contactY, [0.05, 0.3, 0.85, 1], [reducedMotion ? 0 : 35, 0, 0, reducedMotion ? 0 : 15]);
  const createRot = useTransform(contactY, [0.05, 0.3, 0.85, 1], [reducedMotion ? 0 : 1.5, 0, 0, 0]);
  
  // Typography: TOGETHER.
  const togY = useTransform(contactY, [0.1, 0.35, 0.85, 1], [reducedMotion ? 0 : 35, 0, 0, reducedMotion ? 0 : 20]);
  const togScale = useTransform(contactY, [0.1, 0.35, 0.85, 1], [reducedMotion ? 1 : 0.94, 1, 1, 1]);
  const togRot = useTransform(contactY, [0.1, 0.35, 0.85, 1], [reducedMotion ? 0 : -3, 0, 0, 0]);

  // Form Paper
  const formOp = useTransform(contactY, [0.1, 0.25, 0.85, 1], [0, 1, 1, 0]);
  const formY = useTransform(contactY, [0.15, 0.4, 0.85, 1], [reducedMotion ? 0 : 60, 0, 0, reducedMotion ? 0 : 40]);
  const formRot = useTransform(contactY, [0.15, 0.4, 0.85, 1], [reducedMotion ? 0 : 1.5, 0, 0, 0]);
  const formScale = useTransform(contactY, [0.15, 0.4, 0.85, 1], [reducedMotion ? 1 : 0.98, 1, 1, 1]);

  // Floating Photos (Final states: 6deg and -4deg respectively)
  const p1X = useTransform(contactY, [0.2, 0.45, 0.85, 1], [reducedMotion ? 0 : -40, 0, 0, reducedMotion ? 0 : 25]);
  const p1Rot = useTransform(contactY, [0.2, 0.45, 0.85, 1], [reducedMotion ? 6 : 2, 6, 6, reducedMotion ? 6 : 8]);
  const p1Op = useTransform(contactY, [0.2, 0.35, 0.85, 1], [0, 0.9, 0.9, 0]);

  const p2X = useTransform(contactY, [0.25, 0.5, 0.85, 1], [reducedMotion ? 0 : 40, 0, 0, reducedMotion ? 0 : -20]);
  const p2Rot = useTransform(contactY, [0.25, 0.5, 0.85, 1], [reducedMotion ? -4 : -1, -4, -4, reducedMotion ? -4 : -7]);
  const p2Op = useTransform(contactY, [0.25, 0.4, 0.85, 1], [0, 0.9, 0.9, 0]);

  // Form Fields Stagger
  const field1Op = useTransform(contactY, [0.2, 0.3], [0, 1]);
  const field1Y = useTransform(contactY, [0.2, 0.3], [reducedMotion ? 0 : 15, 0]);
  
  const field2Op = useTransform(contactY, [0.25, 0.35], [0, 1]);
  const field2Y = useTransform(contactY, [0.25, 0.35], [reducedMotion ? 0 : 15, 0]);

  const field3Op = useTransform(contactY, [0.3, 0.4], [0, 1]);
  const field3Y = useTransform(contactY, [0.3, 0.4], [reducedMotion ? 0 : 15, 0]);

  const field4Op = useTransform(contactY, [0.35, 0.45], [0, 1]);
  const field4Y = useTransform(contactY, [0.35, 0.45], [reducedMotion ? 0 : 15, 0]);

  const btnOp = useTransform(contactY, [0.4, 0.5], [0, 1]);
  const btnScale = useTransform(contactY, [0.4, 0.5], [reducedMotion ? 1 : 0.96, 1]);

  // --- Hand-Drawn Sketches: Triggered Animations ---
  // Replaced useScroll with native Framer Motion whileInView for standard trigger behavior

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.4,
      smoothWheel: true,
      wheelMultiplier: 0.75,
      touchMultiplier: 1,
      syncTouch: false
    });
    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const hero = document.getElementById('hero');
    if (hero) {
      setIsScrolled(latest > hero.offsetHeight - 72);
    }
  });

  const [formData, setFormData] = useState({ name: '', email: '', projectType: '', message: '' });
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  function scrollTo(id: string) {
    const el = document.getElementById(id);
    if (el) {
      if (lenisRef.current) {
        lenisRef.current.scrollTo(el, { offset: -72 });
      } else {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setMobileMenuOpen(false);
  }

  function validateForm() {
    const errors: Record<string, string> = {};
    if (!formData.name.trim()) errors.name = 'Name is required';
    if (!formData.email.trim()) errors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) errors.email = 'Enter a valid email';
    if (!formData.message.trim()) errors.message = 'Message is required';
    else if (formData.message.trim().length < 10) errors.message = 'Message must be at least 10 characters';
    return errors;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) { setFormErrors(errors); return; }
    setFormErrors({});
    setFormStatus('submitting');
    try {
      // TODO: wire to your backend/email service here
      await new Promise(r => setTimeout(r, 1200));
      setFormStatus('success');
      setFormData({ name: '', email: '', projectType: '', message: '' });
    } catch {
      setFormStatus('error');
    }
  }

  return (
    <div className="app-root bg-white flex flex-col relative w-full" style={{ maxWidth: '100vw' }}>
      {/* Navbar */}
      <nav className={`bg-[#f0ece4] px-5 md:px-10 lg:px-20 border-solid content-stretch flex flex-col items-start fixed top-0 left-0 shrink-0 w-full z-[1000] transition-[border-color,border-width,box-shadow,padding] duration-500 ease-out ${isScrolled ? 'border-b-[4px] border-[#111] shadow-[0_8px_32px_rgba(0,0,0,0.04)]' : 'border-b-[1px] border-[#ddd9d0]'}`}>
        <div className="content-stretch flex h-[72px] items-center justify-between max-w-7xl mx-auto relative shrink-0 w-full">
          <a href="#hero" onClick={e => { e.preventDefault(); scrollTo('hero'); }} className="[word-break:break-word] font-['DM_Sans:Bold'] font-bold leading-[normal] relative shrink-0 text-[#525250] text-[24px] tracking-[-0.5px] whitespace-nowrap no-underline" style={{ fontVariationSettings: '"opsz" 14' }}>
            TF.
          </a>
          <div className="hidden md:flex [word-break:break-word] content-stretch font-['DM_Sans:Regular'] font-normal gap-[20px] lg:gap-[32px] items-center leading-[normal] relative shrink-0 text-[#111] text-[13px] whitespace-nowrap">
            {[['Home','hero'],['Expertise','expertise'],['Podcast Edits','podcast'],['Basic Edits','basic'],['Testimonials','testimonials'],['Commercial Edits','commercials'],['Contact','contact']].map(([label, id]) => (
              <a key={label} href={`#${id}`} onClick={e => { e.preventDefault(); scrollTo(id); }} className="relative shrink-0 hover:text-[#e63228] transition-colors duration-150 no-underline text-[#111]" style={{ fontVariationSettings: '"opsz" 14' }}>{label}</a>
            ))}
          </div>
          <div className="hidden md:flex content-stretch gap-[12px] items-center relative shrink-0">
            <button className="bg-[#f1ece5] border-[#343030] border-[0.8px] border-solid content-stretch flex items-start px-[20px] py-[8px] relative rounded-[4px] shrink-0 cursor-pointer hover:bg-[#e8e3dc] transition-colors duration-150">
              <span className="[word-break:break-word] font-['DM_Sans:Regular'] font-normal leading-[normal] relative shrink-0 text-[#111] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>Sign In</span>
            </button>
            <button className="bg-[#111] content-stretch flex items-start px-[20px] py-[8px] relative rounded-[4px] shrink-0 cursor-pointer hover:bg-[#333] transition-colors duration-150">
              <span className="[word-break:break-word] font-['DM_Sans:SemiBold'] font-semibold leading-[normal] relative shrink-0 text-[12px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>Sign Up</span>
            </button>
          </div>
          <div className="md:hidden flex items-center gap-[10px]">
            <button className="bg-[#111] content-stretch flex items-start px-[14px] py-[7px] relative rounded-[4px] shrink-0 cursor-pointer hover:bg-[#333] transition-colors duration-150">
              <span className="[word-break:break-word] font-['DM_Sans:SemiBold'] font-semibold leading-[normal] relative shrink-0 text-[11px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>Sign Up</span>
            </button>
            <button
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
              onClick={() => setMobileMenuOpen(o => !o)}
              className="flex flex-col justify-center items-center w-[36px] h-[36px] gap-[5px] cursor-pointer"
            >
              <span className={`block w-[22px] h-[1.5px] bg-[#111] transition-all duration-200 ${mobileMenuOpen ? 'rotate-45 translate-y-[6.5px]' : ''}`} />
              <span className={`block w-[22px] h-[1.5px] bg-[#111] transition-all duration-200 ${mobileMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-[22px] h-[1.5px] bg-[#111] transition-all duration-200 ${mobileMenuOpen ? '-rotate-45 -translate-y-[6.5px]' : ''}`} />
            </button>
          </div>
        </div>
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden w-full bg-[#f0ece4] border-t border-[#ddd9d0] py-[16px] px-[20px] flex flex-col gap-[4px]">
            {[['Home','hero'],['Expertise','expertise'],['Podcast Edits','podcast'],['Basic Edits','basic'],['Testimonials','testimonials'],['Commercial Edits','commercials'],['Contact','contact']].map(([label, id]) => (
              <a key={label} href={`#${id}`} onClick={e => { e.preventDefault(); scrollTo(id); }} className="block py-[12px] font-['DM_Sans:Regular'] text-[#111] text-[15px] border-b border-[#ddd9d0] last:border-0 no-underline hover:text-[#e63228] transition-colors duration-150" style={{ fontVariationSettings: '"opsz" 14' }}>{label}</a>
            ))}
          </div>
        )}
      </nav>

      {/* Hero */}
      <div id="hero" className="bg-[#ece8df] px-5 md:px-10 lg:px-20 content-stretch flex flex-col items-center pb-[48px] md:pb-[64px] pt-[132px] md:pt-[152px] relative shrink-0 w-full overflow-hidden">
        <div ref={heroParallaxRef} className="parallax-inner content-stretch flex flex-col md:flex-row gap-[40px] md:gap-[80px] items-center max-w-7xl mx-auto relative shrink-0 w-full">
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-w-px relative w-full">
            <div className="hero-enter content-stretch flex gap-[12px] items-center relative shrink-0" style={{ animationDelay: '0.05s' }}>
              <p className="[word-break:break-word] font-['Barlow:Regular'] leading-[normal] not-italic relative shrink-0 text-[#bebcb6] text-[12px] tracking-[1px] whitespace-nowrap">001</p>
              <div className="bg-[#bebcb6] h-px relative shrink-0 w-[32px]" />
              <ScrollUnderline className="[word-break:break-word] font-['Barlow:Regular'] leading-[normal] not-italic relative shrink-0 text-[#bebcb6] text-[11px] tracking-[0.5px] uppercase">
                {`Video Editing & Motion Design Studio`}
              </ScrollUnderline>
            </div>
            <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0 w-full" style={{ fontSize: 'clamp(48px, 7vw, 96px)' }}>
              <div className="hero-enter font-['Barlow_Condensed:ExtraBold'] leading-[0] relative shrink-0 text-[#242423] w-full" style={{ animationDelay: '0.18s' }}>
                <p className="leading-[1.05] mb-0">{`Editing That Turns `}</p>
                <p className="leading-[1.05]">Vision Into</p>
              </div>
              <p className="hero-enter font-['Barlow_Condensed:Black'] leading-[1.05] relative shrink-0 text-[#828280]" style={{ animationDelay: '0.3s' }}>
                Cinematic Reality
              </p>
            </div>
            <p className="hero-enter [word-break:break-word] font-['Barlow:Regular'] leading-[1.5] not-italic relative shrink-0 text-[#787774] text-[16px] md:text-[20px] w-full max-w-[480px]" style={{ animationDelay: '0.44s' }}>{`Professional video editing & motion design built to increase engagement, retention, and brand authority.`}</p>
            <div className="hero-enter content-stretch flex items-start pt-[12px] relative shrink-0" style={{ animationDelay: '0.56s' }}>
              <button onClick={() => scrollTo('expertise')} className="[word-break:break-word] bg-[#111] content-stretch flex font-['Barlow:SemiBold'] gap-[12px] items-center leading-[normal] px-[24px] py-[12px] relative rounded-[24px] shrink-0 whitespace-nowrap cursor-pointer hover:bg-[#333] transition-colors duration-150">
                <span className="not-italic relative shrink-0 text-[#a09f99] text-[15px] tracking-[1.2px]">View Our Work</span>
                <span className="font-semibold relative shrink-0 text-[#868684] text-[14px]" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>→</span>
              </button>
            </div>
            <div className="hero-enter content-stretch flex gap-[16px] items-center pt-[24px] relative shrink-0" style={{ animationDelay: '0.68s' }}>
              <div className="content-stretch flex items-start relative shrink-0">
                <div className="border-2 border-[#ece8df] border-solid mr-[-8px] relative rounded-[18px] shrink-0 size-[36px]">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[18px] size-full" src={imgRectangle} />
                </div>
                <div className="border-2 border-[#ece8df] border-solid mr-[-8px] relative rounded-[18px] shrink-0 size-[36px]">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[18px] size-full" src={imgRectangle1} />
                </div>
                <div className="border-2 border-[#ece8df] border-solid mr-[-8px] relative rounded-[18px] shrink-0 size-[36px]">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[18px] size-full" src={imgRectangle2} />
                </div>
                <div className="border-2 border-[#ece8df] border-solid relative rounded-[18px] shrink-0 size-[36px]">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[18px] size-full" src={imgRectangle3} />
                </div>
              </div>
              <p className="[word-break:break-word] font-['DM_Sans:Bold'] font-bold leading-[normal] relative shrink-0 text-[#787774] text-[18px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>100+</p>
              <p className="[word-break:break-word] font-['DM_Sans:Regular'] font-normal leading-[normal] relative shrink-0 text-[#b4b1ab] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>Brands That Trust Us</p>
            </div>
          </div>
          <div className="hero-enter hidden md:flex content-stretch h-[400px] lg:h-[540px] items-center justify-center relative shrink-0 w-[220px] lg:w-[263px]" style={{ animationDelay: '0.25s' }}>
            <div className="content-stretch flex h-full items-start relative rounded-[8px] shrink-0 w-full overflow-hidden">
              <div className="flex-[1_0_0] h-full min-w-px relative">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle4} />
              </div>
              {/* Decorative badge — floats inside image, bottom-right area */}
              <div className="absolute bottom-[24px] right-[12px]">
                <div className="badge-float">
                  <div className="bg-[#f5f0d0] content-stretch drop-shadow-[0px_4px_5px_rgba(0,0,0,0.1)] flex flex-col items-start p-[12px] relative">
                    <div className="[word-break:break-word] font-['Oswald:Bold'] font-bold leading-[0] relative shrink-0 text-[#111] text-[12px] text-center whitespace-nowrap">
                      <p className="leading-[1.15] mb-0">Good</p>
                      <p className="leading-[1.15] mb-0">Edits</p>
                      <p className="leading-[1.15] mb-0">Better</p>
                      <p className="leading-[1.15]">Stories.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="[word-break:break-word] content-stretch flex font-normal items-center justify-between leading-[normal] max-w-7xl mx-auto pt-[32px] md:pt-[48px] relative shrink-0 text-[11px] w-full">
          <p className="scroll-bounce font-['DM_Sans:Regular'] relative shrink-0 text-[#c0beb8] tracking-[1px] uppercase whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>Scroll To Explore</p>
          <p className="hidden sm:block font-['DM_Sans:Italic'] italic relative shrink-0 text-[#b4b1ab] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>the pleasant earthy smell after rain</p>
        </div>
      </div>

      {/* Marquee strip */}
      <Marquee />

      {/* Expertise */}
      <div id="expertise" className="bg-[#f2efe8] px-5 md:px-10 lg:px-20 content-stretch flex flex-col items-start overflow-hidden pb-[64px] pt-[72px] relative shrink-0 w-full">
        <div className="content-stretch flex flex-col items-start max-w-7xl mx-auto relative shrink-0 w-full">
          {/* top meta row */}
          <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
            <div className="content-stretch flex gap-[14px] items-center relative shrink-0">
              <div className="content-stretch flex flex-col items-start relative shrink-0">
                <p className="[word-break:break-word] font-['Barlow:ExtraBold'] leading-[16.5px] not-italic relative shrink-0 text-[#111] text-[11px] whitespace-nowrap">02</p>
              </div>
              <div className="bg-[rgba(0,0,0,0.25)] h-[14px] relative shrink-0 w-px" />
              <div className="content-stretch flex flex-col items-start relative shrink-0">
                <ScrollUnderline className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[16.5px] not-italic relative shrink-0 text-[#777] text-[11px] tracking-[2.2px] uppercase whitespace-nowrap">
                  Our Editing Expertise
                </ScrollUnderline>
              </div>
            </div>
            <div className="hidden sm:flex content-stretch flex-col items-end relative shrink-0">
              <div className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[0] not-italic relative shrink-0 text-[#aaa] text-[10px] text-right tracking-[1.6px] uppercase whitespace-nowrap">
                <p className="leading-[20px] mb-0">EVERY PROJECT</p>
                <p className="leading-[20px]">A STRONGER STORY</p>
              </div>
            </div>
          </div>

          {/* OUR + EDITING EXPERTISE heading */}
          <div className="flex gap-[16px] md:gap-[32px] items-end pt-[40px] relative shrink-0 w-full">
            {/* OUR column — pb creates the 44px "lift" so OUR appears higher than EDITING */}
            <Reveal direction="left" className="flex flex-col items-start shrink-0">
              <p
                className="clip-reveal [word-break:break-word] font-['Barlow_Condensed:Black'] not-italic relative shrink-0 text-[#e63228]"
                style={{ fontSize: 'clamp(72px, 21vw, 300px)', lineHeight: '0.5415', letterSpacing: '-0.01274em', paddingBottom: 'clamp(8px, 3.1vw, 44px)' }}
              >OUR</p>
            </Reveal>
            {/* EDITING EXPERTISE column */}
            <Reveal direction="right" delay={120} className="flex flex-col items-start shrink-0">
              <div
                className="[word-break:break-word] font-['Barlow_Condensed:Black'] not-italic relative shrink-0 text-[#111]"
                style={{ fontSize: 'clamp(34px, 6.7vw, 96px)', lineHeight: '0.7440', letterSpacing: '-0.01617em' }}
              >
                <p className="mb-0">EDITING</p>
                <p>EXPERTISE</p>
              </div>
              <div className="content-stretch flex flex-col items-start pt-[24px] relative shrink-0 max-w-[380px]">
                <p className="[word-break:break-word] font-['Barlow:Regular'] leading-[24.75px] not-italic relative shrink-0 text-[#555] text-[13px]">
                  From podcasts to commercials, motion graphics to clean edits — we turn your ideas into high-impact visuals.
                </p>
              </div>
            </Reveal>
          </div>

          {/* Service cards */}
          <div className="content-stretch flex flex-col items-start pt-[48px] relative shrink-0 w-full">
            <div className="border-[rgba(0,0,0,0.1)] border-solid border-t-[0.8px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 relative shrink-0 w-full">
              {expertiseItems.map((item, i) => (
                <Reveal key={item.id} direction="up" delay={i * 90} className={`${i < 3 ? 'border-[rgba(0,0,0,0.1)] border-r-[0.8px] border-solid' : ''} content-stretch flex flex-col items-start justify-self-stretch pb-[28px] pt-[24px] px-[28px] relative self-stretch shrink-0`}>
                  <p className="[word-break:break-word] font-['Barlow:Bold'] leading-[18px] not-italic relative shrink-0 text-[#aaa] text-[12px] tracking-[0.48px] whitespace-nowrap">{item.number}</p>
                  <div className="content-stretch flex flex-col items-start pt-[14px] relative shrink-0 w-full">
                    <MediaCard item={item} className="bg-[#e0dbd2] content-stretch flex flex-col h-[126.125px] items-start overflow-clip relative rounded-[4px] shrink-0 w-full" />
                  </div>
                  <div className="content-stretch flex flex-col h-[39px] items-start pt-[18px] relative shrink-0 w-full">
                    <p className="[word-break:break-word] font-['Barlow:ExtraBold'] leading-[21px] not-italic relative shrink-0 text-[#111] text-[14px] tracking-[0.28px] whitespace-nowrap">{item.title}</p>
                  </div>
                  <div className="content-stretch flex flex-col items-start pt-[10px] relative shrink-0">
                    <div className="bg-[#e63228] h-[2px] relative shrink-0 w-[28px]" />
                  </div>
                  <div className="content-stretch flex flex-col items-start pt-[12px] relative shrink-0 w-full">
                    <p className="[word-break:break-word] font-['Barlow:Regular'] leading-[20.8px] not-italic relative shrink-0 text-[#666] text-[13px]">{item.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* EDIT / CREATE / INSPIRE + Scroll to Explore */}
          <div className="content-stretch flex flex-col items-end pt-[48px] relative shrink-0 w-full">
            <div className="border-[rgba(0,0,0,0.08)] border-solid border-t-[0.8px] content-stretch flex items-end justify-between pt-[20px] relative shrink-0 w-full">
              <div className="content-stretch flex flex-col items-start relative shrink-0">
                <div className="h-[64.8px] relative shrink-0 w-full">
                  <div className="[word-break:break-word] absolute font-['Inter:Semi_Bold'] font-semibold leading-[0] left-0 not-italic text-[#aaa] text-[9px] top-[-0.2px] tracking-[1.98px] uppercase whitespace-nowrap">
                    <p className="leading-[21.6px] mb-0">EDIT</p>
                    <p className="leading-[21.6px] mb-0">CREATE</p>
                    <p className="leading-[21.6px]">INSPIRE</p>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-start pt-[6px] relative shrink-0">
                  <div className="bg-[#ccc] h-px relative shrink-0 w-[28px]" />
                </div>
              </div>
              <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
                <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[13.5px] not-italic relative shrink-0 text-[#aaa] text-[9px] tracking-[1.98px] uppercase whitespace-nowrap">Scroll to Explore</p>
                <div className="h-[20px] relative shrink-0 w-[14px]">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Dark marquee before portfolio sections */}
      <Marquee dark />

      {/* Podcast Edits */}
      <PodcastEdits />

      {/* Basic Edits - 05 */}
      <section id="basic" className="relative w-full bg-[#dfdacc] py-16 md:py-32 px-5 md:px-10 lg:px-20 overflow-hidden">
        {/* Background Noise Overlay */}
        <div 
          className="absolute inset-0 z-0 pointer-events-none opacity-40 mix-blend-overlay" 
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} 
        />
        {/* Top Label */}
        <div className="flex justify-between items-start w-full max-w-7xl mx-auto">
          <div className="flex gap-4 items-center">
            <span className="font-['Barlow:Bold'] text-sm text-[#111]">{basicEditsSection.sectionNumber}</span>
            <div className="w-[1px] h-4 bg-black/20" />
            <ScrollUnderline className="font-['Barlow:Bold'] text-sm tracking-widest text-[#555]">
              {basicEditsSection.label}
            </ScrollUnderline>
          </div>
          <div className="hidden md:flex flex-col text-right">
            {basicEditsSection.eyebrow.map((line, i) => (
              <span key={i} className="font-['Inter:Regular'] text-[10px] tracking-widest uppercase text-[#999] leading-tight">
                {line}
              </span>
            ))}
          </div>
        </div>

        {/* Main Composition */}
        <div className="relative mt-12 md:mt-16 max-w-[1400px] mx-auto w-full">
          
          {/* Top Row: Typography & Features */}
          <div className="flex flex-col lg:flex-row justify-between items-start gap-8 px-4 lg:px-0">
            {/* Left: Typography */}
            <div className="flex flex-col relative z-10 shrink-0">
              <div className="flex flex-col leading-[0.8] tracking-tighter -ml-1">
                <span className="font-['Barlow_Condensed:Black'] text-[clamp(80px,10vw,140px)] text-[#111] uppercase">{basicEditsSection.titlePrimary}</span>
                <span className="font-['Barlow_Condensed:Black'] text-[clamp(80px,10vw,140px)] text-[#999] uppercase">{basicEditsSection.titleSecondary}</span>
              </div>
              <div className="w-12 h-[3px] bg-[#ff4a4a] mt-6 mb-4" />
              <p className="font-['Inter:Regular'] text-[#555] text-[15px] md:text-[17px] max-w-[240px] leading-relaxed">
                {basicEditsSection.description}
              </p>
            </div>

            {/* Right: Features */}
            <div className="flex flex-col gap-5 pt-4 lg:pt-16 pr-8">
              {basicEditsSection.features.map((feature, i) => (
                <div key={i} className="flex items-center gap-6 justify-start">
                  <span className="font-['Barlow:Bold'] text-[#111] text-base">0{i+1}</span>
                  <div className="w-[1px] h-5 bg-black/20" />
                  <span className="font-['Barlow:Regular'] text-[#666] text-base tracking-wide w-[140px]">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Annotations */}
          <div className="absolute top-[35%] left-[2%] hidden lg:flex flex-col items-center z-40 mt-10">
            <div className="font-['Covered_By_Your_Grace:Regular'] text-2xl leading-snug text-[#333] rotate-[-8deg] -ml-8">
              {basicEditsSection.annotationLeft.split('\n').map((line, i) => <div key={i}>{line}</div>)}
            </div>
            <svg className="w-12 h-12 text-[#111] mt-2 ml-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ transform: 'rotate(-20deg)' }}>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </div>

          <div className="absolute top-[25%] right-[5%] hidden lg:flex flex-col items-center z-40">
            <div className="font-['Covered_By_Your_Grace:Regular'] text-2xl leading-snug text-[#333] rotate-[-5deg]">
              {basicEditsSection.annotationRight.split('\n').map((line, i) => <div key={i}>{line}</div>)}
            </div>
            <svg className="w-10 h-10 text-[#111] mt-2 mr-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ transform: 'scaleX(-1) rotate(-60deg)' }}>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </div>

          {/* Deck Container */}
          <div className="relative flex justify-center items-center w-full h-[450px] md:h-[600px] mt-12 md:mt-0 z-20">
            
            {/* Left Nav Arrow */}
            <button className="absolute left-[2%] md:left-[8%] z-40 w-12 h-12 md:w-14 md:h-14 rounded-full border border-black/10 bg-[#F5F2E8]/80 backdrop-blur-sm flex items-center justify-center hover:bg-white hover:shadow-md transition-all">
              <svg className="w-6 h-6 text-[#111]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 19l-7-7 7-7" /></svg>
            </button>

            {/* Cards (Deck) */}
            <div className="relative w-[140px] md:w-[220px] h-[220px] md:h-[340px] flex justify-center items-center">
              {/* L2 (Card 1) */}
              <PhoneMedia 
                item={basicEditsSection.media[0] as any} 
                className="absolute w-full h-full z-10 transition-transform duration-500 hover:-translate-y-2"
                style={{ transform: 'translateX(-170%) translateY(25%) rotate(-12deg) scale(0.8)' }} 
              />
              {/* L1 (Card 2) */}
              <PhoneMedia 
                item={basicEditsSection.media[1] as any} 
                className="absolute w-full h-full z-20 transition-transform duration-500 hover:-translate-y-2"
                style={{ transform: 'translateX(-90%) translateY(12%) rotate(-6deg) scale(0.9)' }} 
              />
              {/* Center (Card 3) */}
              <PhoneMedia 
                item={basicEditsSection.media[2] as any} 
                className="absolute w-full h-full z-40 shadow-2xl transition-transform duration-500 hover:-translate-y-2"
                style={{ transform: 'translateX(0%) translateY(0%) rotate(0deg) scale(1.05)' }} 
              />
              {/* R1 (Card 4) */}
              <PhoneMedia 
                item={basicEditsSection.media[3] as any} 
                className="absolute w-full h-full z-30 transition-transform duration-500 hover:-translate-y-2"
                style={{ transform: 'translateX(90%) translateY(12%) rotate(6deg) scale(0.9)' }} 
              />
              {/* R2 (Card 5) */}
              <PhoneMedia 
                item={basicEditsSection.media[4] as any} 
                className="absolute w-full h-full z-20 transition-transform duration-500 hover:-translate-y-2"
                style={{ transform: 'translateX(170%) translateY(25%) rotate(12deg) scale(0.8)' }} 
              />
              {/* R3 (Card 6) */}
              <PhoneMedia 
                item={basicEditsSection.media[5] as any} 
                className="absolute w-full h-full z-10 hidden md:block transition-transform duration-500 hover:-translate-y-2"
                style={{ transform: 'translateX(240%) translateY(35%) rotate(18deg) scale(0.7)' }} 
              />
            </div>

            {/* Right Nav Arrow */}
            <button className="absolute right-[2%] md:right-[8%] z-40 w-12 h-12 md:w-14 md:h-14 rounded-full border border-black/10 bg-[#F5F2E8]/80 backdrop-blur-sm flex items-center justify-center hover:bg-white hover:shadow-md transition-all">
              <svg className="w-6 h-6 text-[#111]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>

          {/* Bottom CTA */}
          <div className="flex justify-center mt-4 pb-12 relative z-40">
            <button className="group flex items-center gap-2 bg-[#ff6b6b] hover:bg-[#ff4a4a] text-white px-8 py-3.5 rounded-full font-['Inter:SemiBold'] text-[15px] transition-colors shadow-lg shadow-red-500/20 cursor-pointer">
              Explore Edits
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* MAXIMALISM DIVIDER (Section 5 -> 6) */}
      <section className="w-full bg-[#e63228] overflow-hidden py-24 md:py-48 flex flex-col justify-center items-center relative min-h-[60vh] md:min-h-[80vh] border-y border-[#111]">
         
         <div className="absolute inset-0 mix-blend-multiply opacity-40">
           <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-black/50 to-transparent" />
         </div>

         <div className="relative z-10 flex flex-col items-center justify-center whitespace-nowrap leading-[0.75] -rotate-3 scale-110 pointer-events-none">
            <span className="font-['Road_Rage:Regular'] text-[clamp(120px,18vw,300px)] text-[#111] opacity-90 -mb-[4%] ml-[-10%]">PURE CREATIVE</span>
            <span 
              className="font-['Barlow_Condensed:Black'] text-[clamp(140px,22vw,350px)] text-transparent uppercase tracking-tighter" 
              style={{ WebkitTextStroke: '2px #F5F2E8' }}
            >
              MAXIMAL
            </span>
            <span className="font-['Road_Rage:Regular'] text-[clamp(120px,18vw,300px)] text-[#111] opacity-90 -mt-[6%] ml-[10%] z-10">IMPACT.</span>
         </div>
         
         {/* Marquee Stripe */}
         <div className="absolute bottom-10 w-[110%] -rotate-2 bg-[#111] py-4 shadow-2xl z-20">
            <div className="marquee-track flex gap-8">
               {[...Array(10)].map((_, i) => (
                  <span key={i} className="font-['Barlow:Bold'] text-[#F5F2E8] uppercase tracking-[4px] text-lg flex items-center gap-8">
                     NO FILLER <span className="w-2 h-2 rounded-full bg-[#e63228]" /> JUST KILLER
                  </span>
               ))}
            </div>
         </div>
      </section>

      {/* Words That Matter / Testimonials (Minimalist) */}
      <section id="testimonials" className="relative w-full min-h-[100dvh] bg-[#F4F3CA] px-5 md:px-10 lg:px-20 py-24 md:py-32 flex flex-col justify-center overflow-hidden">
        {/* Background Noise Overlay */}
        <div 
          className="absolute inset-0 z-0 pointer-events-none opacity-100 mix-blend-overlay" 
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} 
        />
        <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row gap-20 lg:gap-32 relative z-10">
          
          {/* Left: Typography */}
          <div className="lg:w-[45%] flex flex-col shrink-0">
            <div className="font-['Barlow:Bold'] text-[11px] tracking-[3px] uppercase text-[#888] mb-12 flex items-center gap-4">
              06 <span className="font-['Barlow:Regular'] text-[#ccc9c0]">/</span> 
              <ScrollUnderline>
                {testimonialsSection.label}
              </ScrollUnderline>
            </div>
            
            <div className="flex flex-col leading-[0.8] tracking-tighter -ml-1">
              <span className="font-['Barlow_Condensed:Black'] text-[clamp(80px,12vw,140px)] text-[#111] uppercase">{testimonialsSection.titleLine1}</span>
              <span className="font-['Barlow_Condensed:Black'] text-[clamp(80px,12vw,140px)] text-[#ccc9c0] uppercase">{testimonialsSection.titleLine2}</span>
              <span className="font-['Barlow_Condensed:Black'] text-[clamp(80px,12vw,140px)] text-[#e63228] uppercase">{testimonialsSection.titleHighlight}</span>
            </div>
            
            <p className="font-['Inter:Regular'] text-[#666] text-lg mt-12 max-w-[280px] leading-relaxed">
              {testimonialsSection.description}
            </p>
          </div>

          {/* Right: Clean Testimonial List */}
          <div className="lg:w-[55%] flex flex-col border-t border-black/10 mt-8 lg:mt-0">
            {testimonialsSection.testimonials.map((t) => (
              <div key={t.id} className="flex flex-col py-12 md:py-16 border-b border-black/10 group transition-colors hover:bg-white/50 px-6 -mx-6 rounded-xl">
                <p className="font-['Inter:Regular'] text-[#222] text-[20px] md:text-[24px] leading-[1.6] mb-8">
                  "{t.quote}"
                </p>
                <div className="flex items-center gap-5">
                  <div className="w-12 h-12 rounded-full overflow-hidden border border-black/5 filter grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500">
                    <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-['Barlow:Bold'] text-[#111] text-[15px] uppercase tracking-wide">{t.name}</span>
                    <span className="font-['Inter:Regular'] text-[#888] text-[13px]">{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
        </div>
      </section>

      {/* Scrolling Divider */}
      <div className="w-full bg-[#111] overflow-hidden py-[18px] border-y border-[rgba(255,255,255,0.1)] relative z-20 flex">
        <div className="marquee-track flex gap-8 whitespace-nowrap min-w-max">
          {[...Array(16)].map((_, i) => (
            <span key={i} className="font-['Barlow:Bold'] text-[#F5F2E8] uppercase tracking-[4px] text-[12px] flex items-center gap-8 opacity-80">
              HIGH-IMPACT EDITING <span className="w-[4px] h-[4px] rounded-full bg-[#e63228]" /> CINEMATIC QUALITY <span className="w-[4px] h-[4px] rounded-full bg-[#e63228]" />
            </span>
          ))}
        </div>
      </div>

      {/* Commercials */}
      <div id="commercials" className="bg-[#f5f1e8] px-5 md:px-10 lg:px-20 content-stretch flex flex-col items-center py-[60px] md:py-[120px] relative shrink-0 w-full">
        <div className="content-stretch flex flex-col items-center max-w-7xl mx-auto relative shrink-0 w-full">
          <div className="content-stretch flex items-center justify-between pb-[64px] relative shrink-0 w-full">
            <div className="[word-break:break-word] content-stretch flex gap-[10px] items-center leading-[normal] not-italic relative shrink-0 text-[#999] text-[11px] uppercase whitespace-nowrap">
              <p className="font-['Barlow:Bold'] relative shrink-0 tracking-[3px]">07</p>
              <p className="font-['Barlow:Regular'] relative shrink-0 tracking-[2.5px]">/</p>
              <ScrollUnderline className="font-['Barlow:Regular'] relative shrink-0 tracking-[2.5px]">
                Commercial Edits
              </ScrollUnderline>
            </div>
            <div className="bg-[#111] content-stretch flex items-start px-[16px] py-[8px] relative rounded-[999px] shrink-0">
              <p className="[word-break:break-word] font-['Barlow:Bold'] leading-[normal] not-italic relative shrink-0 text-[#f5f1e8] text-[11px] tracking-[2px] uppercase whitespace-nowrap">High-Impact Video</p>
            </div>
          </div>
          <div className="[word-break:break-word] content-stretch flex flex-col items-center pb-[32px] relative shrink-0 w-full" style={{ fontSize: 'clamp(48px, 9vw, 120px)', lineHeight: '1.1' }}>
            <div className="content-baseline flex flex-wrap gap-[24px] items-baseline justify-center relative shrink-0 w-full">
              <p className="font-['Playfair_Display:Italic'] font-normal italic relative shrink-0 text-[#111]">Commercial</p>
              <p className="font-['Oswald:Bold'] font-bold relative shrink-0 text-[#e8294a] uppercase">Edits</p>
            </div>
            <div className="content-baseline flex flex-wrap gap-[24px] items-baseline justify-center relative shrink-0 text-[#111] w-full">
              <p className="font-['Oswald:Bold'] font-bold relative shrink-0 uppercase">Built for</p>
              <p className="font-['Playfair_Display:Italic'] font-normal italic relative shrink-0">Impact</p>
            </div>
          </div>
          <div className="bg-[rgba(17,17,17,0.09)] h-px relative shrink-0 w-full" />
          <div className="content-stretch flex flex-col md:flex-row gap-[32px] md:gap-[64px] items-start py-[40px] relative shrink-0 w-full">
            <p className="[word-break:break-word] font-['Barlow:Regular'] leading-[1.7] not-italic relative shrink-0 text-[#555] text-[17px] w-full md:max-w-[480px]">
              High-impact commercial video editing services for brands that need to cut through the noise. We build cinematic narratives, bold pacing, and premium polish into every edit.
            </p>
            <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-w-px relative">
              <div className="content-start flex flex-wrap gap-[10px] items-start relative shrink-0 w-full">
                {["Brand Storytelling","Cinematic Color Grading","High-End Post Production","Smooth Transitions","High-Impact Sound Design","Pro-Grade Visual Flow"].map((tag) => (
                  <div key={tag} className="border border-[rgba(17,17,17,0.2)] border-solid content-stretch flex items-start px-[14px] py-[8px] relative rounded-[999px] shrink-0">
                    <p className="[word-break:break-word] font-['Barlow:SemiBold'] leading-[normal] not-italic relative shrink-0 text-[#333] text-[12px] tracking-[0.5px] whitespace-nowrap">{tag}</p>
                  </div>
                ))}
              </div>
              <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
                <div className="[word-break:break-word] bg-[#111] content-stretch flex font-['Barlow:SemiBold'] gap-[10px] items-center leading-[normal] px-[24px] py-[14px] relative rounded-[999px] shrink-0 text-[14px] whitespace-nowrap cursor-pointer">
                  <p className="not-italic relative shrink-0 text-[#f5f1e8]">View Commercial Portfolio</p>
                  <p className="font-semibold relative shrink-0 text-[#e8294a]" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>→</p>
                </div>
                <div className="border border-[rgba(17,17,17,0.2)] border-solid content-stretch flex items-start px-[24px] py-[14px] relative rounded-[999px] shrink-0 cursor-pointer">
                  <p className="[word-break:break-word] font-['Barlow:SemiBold'] leading-[normal] not-italic relative shrink-0 text-[#111] text-[14px] whitespace-nowrap">See the reel</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[rgba(17,17,17,0.09)] h-px relative shrink-0 w-full" />
        </div>
        <div className="content-stretch flex flex-col items-center max-w-7xl mx-auto pt-[80px] relative shrink-0 w-full">
          <div className="[word-break:break-word] content-stretch flex items-center justify-between leading-[normal] not-italic pb-[40px] relative shrink-0 text-[11px] uppercase w-full whitespace-nowrap">
            <p className="font-['Barlow:Bold'] relative shrink-0 text-[#999] tracking-[3px]">Portfolio Showcase</p>
            <p className="font-['Barlow:Regular'] relative shrink-0 text-[#bbb] tracking-[2px]">6 Projects</p>
          </div>
          <div className="content-stretch flex flex-col md:flex-row gap-[20px] items-end pb-[20px] relative shrink-0 w-full">
            <div className="content-stretch flex flex-col h-[400px] md:h-[480px] items-start justify-between overflow-clip p-[28px] relative rounded-[20px] shrink-0 w-full md:w-[55%] lg:w-[600px]">
              <MediaCard item={showcaseItems[0]} className="absolute inset-0 size-full" imgClassName="rounded-[20px]" />
              <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
                <div className="bg-[rgba(255,255,255,0.13)] border border-[rgba(255,255,255,0.2)] border-solid content-stretch flex items-start px-[10px] py-[6px] relative rounded-[999px] shrink-0">
                  <p className="[word-break:break-word] font-['Barlow:Bold'] leading-[normal] not-italic relative shrink-0 text-[10px] text-white tracking-[1.5px] uppercase whitespace-nowrap">Hero Edit</p>
                </div>
                <p className="[word-break:break-word] font-['Barlow:SemiBold'] leading-[normal] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.67)] whitespace-nowrap">01</p>
              </div>
              <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full">
                <p className="[word-break:break-word] font-['Oswald:Bold'] font-bold leading-[52px] min-w-full relative shrink-0 text-[48px] text-white w-[min-content]">Commercial Edits</p>
                <p className="[word-break:break-word] font-['Barlow:Regular'] leading-[1.6] min-w-full not-italic relative shrink-0 text-[14px] text-[rgba(255,255,255,0.8)] w-[min-content]">Premium pacing, cinematic color, and high-energy sound design for brands that need to move fast and feel premium.</p>
                <div className="content-stretch flex gap-[10px] items-center pt-[8px] relative shrink-0">
                  <div className="bg-white content-stretch flex items-start px-[18px] py-[10px] relative rounded-[999px] shrink-0 cursor-pointer">
                    <p className="[word-break:break-word] font-['Barlow:Bold'] leading-[normal] not-italic relative shrink-0 text-[#111] text-[13px] whitespace-nowrap">Watch the cut</p>
                  </div>
                  <p className="[word-break:break-word] font-['Barlow:SemiBold'] font-semibold leading-[normal] relative shrink-0 text-[14px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>→</p>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-[1_0_0] flex-col gap-[20px] items-start min-w-px relative">
              <div className="content-stretch flex flex-col h-[230px] items-start justify-between overflow-clip p-[22px] relative rounded-[18px] shrink-0 w-full">
                <MediaCard item={showcaseItems[1]} className="absolute inset-0 size-full" imgClassName="rounded-[18px]" />
                <motion.svg className="absolute inset-0 overflow-visible pointer-events-none z-50" viewBox="0 0 300 230" preserveAspectRatio="none">
                  <motion.path initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.8, ease: "easeOut" }} d="M -30 115 Q 150 0 280 115" fill="none" stroke="#111" strokeWidth="5" strokeLinecap="round" />
                  <motion.path initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.4, ease: "easeOut", delay: 0.6 }} d="M 260 105 L 280 115 L 265 125" fill="none" stroke="#111" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
                </motion.svg>
                <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
                  <div className="bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.16)] border-solid content-stretch flex items-start px-[10px] py-[5px] relative rounded-[999px] shrink-0">
                    <p className="[word-break:break-word] font-['Barlow:Bold'] leading-[normal] not-italic relative shrink-0 text-[10px] text-white tracking-[1.5px] uppercase whitespace-nowrap">Cinematic</p>
                  </div>
                  <p className="[word-break:break-word] font-['Barlow:SemiBold'] leading-[normal] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.67)] whitespace-nowrap">02</p>
                </div>
                <div className="[word-break:break-word] content-stretch flex flex-col gap-[6px] items-start relative shrink-0 text-white w-full">
                  <p className="font-['Oswald:Bold'] font-bold leading-none min-w-full relative shrink-0 text-[26px] w-[min-content]">High-Energy Sequences</p>
                  <div className="content-stretch flex font-['Barlow:SemiBold'] gap-[8px] items-center leading-[normal] relative shrink-0 text-[12px] whitespace-nowrap">
                    <p className="not-italic relative shrink-0">Watch edit</p>
                    <p className="font-semibold relative shrink-0" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>→</p>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col h-[230px] items-start justify-between overflow-clip p-[22px] relative rounded-[18px] shrink-0 w-full">
                <MediaCard item={showcaseItems[2]} className="absolute inset-0 size-full" imgClassName="rounded-[18px]" />
                <motion.svg className="absolute inset-0 overflow-visible pointer-events-none z-50" viewBox="0 0 300 230" preserveAspectRatio="none">
                  <motion.path initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.8, ease: "easeOut" }} d="M -10 220 Q 150 240 310 215" fill="none" stroke="#e63228" strokeWidth="5" strokeLinecap="round" />
                </motion.svg>
                <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
                  <div className="bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.16)] border-solid content-stretch flex items-start px-[10px] py-[5px] relative rounded-[999px] shrink-0">
                    <p className="[word-break:break-word] font-['Barlow:Bold'] leading-[normal] not-italic relative shrink-0 text-[10px] text-white tracking-[1.5px] uppercase whitespace-nowrap">Sound Design</p>
                  </div>
                  <p className="[word-break:break-word] font-['Barlow:SemiBold'] leading-[normal] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.67)] whitespace-nowrap">03</p>
                </div>
                <div className="[word-break:break-word] content-stretch flex flex-col gap-[6px] items-start relative shrink-0 text-white w-full">
                  <p className="font-['Oswald:Bold'] font-bold leading-none min-w-full relative shrink-0 text-[26px] w-[min-content]">High-Impact Audio</p>
                  <div className="content-stretch flex font-['Barlow:SemiBold'] gap-[8px] items-center leading-[normal] relative shrink-0 text-[12px] whitespace-nowrap">
                    <p className="not-italic relative shrink-0">Watch edit</p>
                    <p className="font-semibold relative shrink-0" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>→</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden md:flex flex-col h-[480px] items-start justify-between overflow-clip p-[22px] relative rounded-[18px] shrink-0 w-[260px]">
              <MediaCard item={showcaseItems[3]} className="absolute inset-0 size-full" imgClassName="rounded-[18px]" />
              <div className="bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.16)] border-solid content-stretch flex items-start px-[10px] py-[5px] relative rounded-[999px] shrink-0">
                <p className="[word-break:break-word] font-['Barlow:Bold'] leading-[normal] not-italic relative shrink-0 text-[10px] text-white tracking-[1.5px] uppercase whitespace-nowrap">Visual Flow</p>
              </div>
              <div className="[word-break:break-word] content-stretch flex flex-col gap-[6px] items-start relative shrink-0 text-white w-full">
                <p className="font-['Oswald:Bold'] font-bold leading-none min-w-full relative shrink-0 text-[26px] w-[min-content]">Pro-Grade Visual Flow</p>
                <div className="content-stretch flex font-['Barlow:SemiBold'] gap-[8px] items-center leading-[normal] relative shrink-0 text-[12px] whitespace-nowrap">
                  <p className="not-italic relative shrink-0">Watch edit</p>
                  <p className="font-semibold relative shrink-0" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>→</p>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col md:flex-row gap-[20px] items-start relative shrink-0 w-full">
            <div className="content-stretch flex flex-col h-[300px] items-start justify-between overflow-clip p-[22px] relative rounded-[18px] w-full md:flex-[1_0_0] md:min-w-px">
              <MediaCard item={showcaseItems[4]} className="absolute inset-0 size-full" imgClassName="rounded-[18px]" />
              <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
                <div className="bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.16)] border-solid content-stretch flex items-start px-[10px] py-[5px] relative rounded-[999px] shrink-0">
                  <p className="[word-break:break-word] font-['Barlow:Bold'] leading-[normal] not-italic relative shrink-0 text-[10px] text-white tracking-[1.5px] uppercase whitespace-nowrap">Post Production</p>
                </div>
                <p className="[word-break:break-word] font-['Barlow:SemiBold'] leading-[normal] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.67)] whitespace-nowrap">05</p>
              </div>
              <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                <p className="font-['Oswald:Bold'] font-bold leading-none min-w-full relative shrink-0 text-[28px] text-white w-[min-content]">High-End Post Production</p>
                <p className="font-['Barlow:Regular'] leading-[1.5] min-w-full not-italic relative shrink-0 text-[13px] text-[rgba(255,255,255,0.8)] w-[min-content]">Advanced grading, smooth transitions, and a polished finish.</p>
                <div className="content-stretch flex font-['Barlow:SemiBold'] gap-[8px] items-center leading-[normal] relative shrink-0 text-[12px] text-white whitespace-nowrap">
                  <p className="not-italic relative shrink-0">Watch edit</p>
                  <p className="font-semibold relative shrink-0" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>→</p>
                </div>
              </div>
            </div>
            <div className="bg-[#111] content-stretch flex flex-col h-[300px] items-start justify-between overflow-clip p-[28px] relative rounded-[18px] shrink-0 w-full md:w-[480px]">
              <MediaCard item={showcaseItems[5]} className="absolute inset-0 size-full" imgClassName="rounded-[18px]" />
              <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
                <div className="bg-[rgba(255,255,255,0.08)] content-stretch flex items-start px-[10px] py-[5px] relative rounded-[999px] shrink-0">
                  <p className="[word-break:break-word] font-['Barlow:Bold'] leading-[normal] not-italic relative shrink-0 text-[#aaa] text-[10px] tracking-[1.5px] uppercase whitespace-nowrap">Brand Story</p>
                </div>
                <p className="[word-break:break-word] font-['Barlow:SemiBold'] leading-[normal] not-italic relative shrink-0 text-[#666] text-[12px] whitespace-nowrap">06</p>
              </div>
              <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
                <p className="[word-break:break-word] font-['Playfair_Display:Italic'] font-normal italic leading-[40px] min-w-full relative shrink-0 text-[36px] text-white w-[min-content]">Brand-Centric Storytelling</p>
                <p className="[word-break:break-word] font-['Barlow:Regular'] leading-[1.6] min-w-full not-italic relative shrink-0 text-[#aaa] text-[14px] w-[min-content]">Narrative-led edits that connect the audience to the brand, the product, and the message.</p>
                <div className="content-stretch flex items-center pt-[4px] relative shrink-0">
                  <div className="bg-[#e8294a] content-stretch flex items-start px-[18px] py-[10px] relative rounded-[999px] shrink-0 cursor-pointer">
                    <p className="[word-break:break-word] font-['Barlow:Bold'] font-bold leading-[normal] relative shrink-0 text-[13px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>Watch edit →</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="[word-break:break-word] content-stretch flex flex-col sm:flex-row items-start sm:items-center justify-between leading-[normal] pt-[48px] relative shrink-0 w-full gap-[12px] sm:gap-0">
            <p className="font-['Playfair_Display:Italic'] font-normal italic relative shrink-0 text-[#999] text-[16px]">Every frame. Every beat. Every brand.</p>
            <div className="content-stretch flex gap-[6px] items-center relative shrink-0 text-[#bbb] whitespace-nowrap">
              <p className="font-['Barlow:Bold'] not-italic relative shrink-0 text-[11px] tracking-[2px] uppercase">Scroll to explore</p>
              <p className="font-['Barlow:Regular'] font-normal relative shrink-0 text-[14px]" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>↓</p>
            </div>
          </div>
        </div>
      </div>

      {/* Some Stories / How It Works */}
      <div>
        <ScaledArtSection designHeight={1108.845}>
          <div className="absolute bg-[rgba(0,0,0,0)] h-[1108.845px] left-0 right-0 top-0">
          <div className="absolute bottom-0 h-[1108.845px] right-0 w-[1440px]">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage45} />
          </div>
          <div className="absolute bg-[rgba(0,0,0,0)] bottom-[1.5px] h-[590.385px] right-0 w-[1440px]">
            <div className="[word-break:break-word] absolute bottom-[149.83px] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic right-[672.8px] text-[#697d9d] text-[14.984px] translate-x-full translate-y-1/2 w-[134.86px]">
              <p className="leading-[normal]">IDEAS IN MOTION</p>
            </div>
            <div className="[word-break:break-word] absolute bottom-[200.04px] flex flex-col font-['Inter:Regular'] font-normal h-[73.424px] justify-center leading-[0] not-italic right-[669.8px] text-[#bfc3ca] text-[28.47px] translate-x-full translate-y-1/2 w-[122.872px]">
              <p className="leading-[34.16px] mb-0">Motion</p>
              <p className="leading-[34.16px]">Graphics</p>
            </div>
            <div className="[word-break:break-word] absolute bottom-[134.11px] flex flex-col font-['Inter:Regular'] font-normal h-[97.399px] justify-center leading-[0] not-italic right-[1371.07px] text-[#a5a49e] text-[17.981px] translate-x-full translate-y-1/2 w-[206.785px]">
              <p className="leading-[22.664px] mb-0">From ideas to impact —</p>
              <p className="leading-[22.664px] mb-0">here are a few projects</p>
              <p className="leading-[22.664px] mb-0">that turned vision into</p>
              <p className="leading-[22.664px]">reality.</p>
            </div>
            <div className="[word-break:break-word] absolute bottom-[265.64px] flex flex-col font-['Oswald:Bold'] font-bold justify-center leading-[0] right-[1372.57px] text-[#e55377] text-[68.928px] translate-x-full translate-y-1/2 w-[197.794px]">
              <p className="leading-[78.762px] mb-0">{`WE'VE`}</p>
              <p className="leading-[78.762px]">BUILT.</p>
              <motion.svg className="absolute inset-0 overflow-visible pointer-events-none" viewBox="0 0 198 158">
                <motion.path initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.8, ease: "easeOut" }} d="M -30 140 Q 20 190 70 130" fill="none" stroke="#111" strokeWidth="5" strokeLinecap="round" />
                <motion.path initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.4, ease: "easeOut", delay: 0.6 }} d="M 60 145 L 70 130 L 50 125" fill="none" stroke="#111" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
              </motion.svg>
            </div>
            <div className="absolute bottom-[370.11px] right-[61.44px] size-[58.439px]">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage47} />
            </div>
            <div className="[word-break:break-word] absolute bottom-[385.1px] flex flex-col font-['Oswald:Bold'] font-bold h-[77.919px] justify-center leading-[0] right-[1371.07px] text-[#181817] text-[74.922px] translate-x-full translate-y-1/2 w-[256.233px]">
              <p className="leading-[normal]">STORIES</p>
            </div>
            <div className="absolute bottom-[440.54px] h-[131.863px] right-[25.47px] w-[113.881px]">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage48} />
            </div>
            <div className="[word-break:break-word] absolute bottom-[464.52px] flex flex-col font-['Oswald:Bold'] font-bold h-[80.916px] justify-center leading-[0] right-[1371.07px] text-[#111] text-[79.417px] translate-x-full translate-y-1/2 w-[182.81px]">
              <p className="leading-[normal]">SOME</p>
              <motion.svg className="absolute inset-0 overflow-visible pointer-events-none" viewBox="0 0 183 81">
                <motion.path initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.8, ease: "easeOut" }} d="M -10 80 Q 90 95 195 75" fill="none" stroke="#e63228" strokeWidth="5" strokeLinecap="round" />
              </motion.svg>
            </div>
            <div className="[word-break:break-word] absolute bottom-[540.43px] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic right-[1273.67px] text-[#a4a39f] text-[17.981px] translate-x-full translate-y-1/2 w-[164.828px]">
              <p className="leading-[normal]">FEATURED WORK</p>
            </div>
          </div>
          <div className="absolute bg-[rgba(0,0,0,0)] bottom-[554.84px] h-[900px] right-[-3px] w-[1440px]">
            <div className="[word-break:break-word] absolute bottom-[191.34px] flex flex-col font-['Covered_By_Your_Grace:Regular'] h-[185.806px] justify-center leading-[0] not-italic right-[92.9px] text-[#585755] text-[23.975px] translate-x-full translate-y-1/2 w-[74.922px]">
              <p className="leading-[34.511px] mb-0">GOOD</p>
              <p className="leading-[34.511px] mb-0">IDEAS</p>
              <p className="leading-[34.511px] mb-0">BETTER</p>
              <p className="leading-[34.511px]">EDITS</p>
            </div>
            <div className="[word-break:break-word] absolute bottom-[75.21px] flex flex-col font-['Inter:Extra_Light'] font-extralight h-[79.417px] justify-center leading-[0] not-italic right-[1306.64px] text-[#a8a6a0] text-[16.483px] translate-x-full translate-y-1/2 w-[244.246px]">
              <p className="leading-[23.788px] mb-0">A simple, transparent process</p>
              <p className="leading-[23.788px] mb-0">to turn your ideas into stunning</p>
              <p className="leading-[23.788px]">visuals.</p>
            </div>
            <div className="absolute bottom-[131.4px] h-[272.716px] right-[125.87px] w-[188.803px]">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage52} />
              <motion.svg className="absolute inset-0 overflow-visible pointer-events-none" viewBox="0 0 189 273">
                <motion.path initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: false, amount: 0.3 }} transition={{ duration: 1, ease: "easeInOut", delay: 1.2 }} d="M 95 10 C 200 0 210 280 95 285 C -10 290 0 20 95 10" fill="none" stroke="#e63228" strokeWidth="4" strokeLinecap="round" />
                <motion.path initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.6, ease: "easeOut", delay: 2.0 }} d="M 180 140 L 195 155 L 225 110" fill="none" stroke="#111" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
              </motion.svg>
            </div>
            <div className="absolute bottom-[120.91px] h-[289.199px] right-[365.62px] w-[205.286px]">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage58} />
              <motion.svg className="absolute inset-0 overflow-visible pointer-events-none -z-10 mix-blend-multiply" viewBox="0 0 205 289">
                <motion.path initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }} d="M -10 145 Q 100 120 215 155" fill="none" stroke="rgba(230, 50, 40, 0.4)" strokeWidth="60" strokeLinecap="round" />
              </motion.svg>
            </div>
            <div className="absolute bottom-[123.91px] h-[284.703px] right-[614.36px] w-[187.305px]">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage62} />
              <motion.svg className="absolute inset-0 overflow-visible pointer-events-none" viewBox="0 0 187 285">
                <motion.path initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }} d="M 0 285 Q 90 295 190 280" fill="none" stroke="#111" strokeWidth="4" strokeLinecap="round" />
                <motion.path initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }} d="M 90 -20 L 95 -5 L 110 -5 L 98 5 L 105 20 L 90 10 L 75 20 L 82 5 L 70 -5 L 85 -5 Z" fill="none" stroke="#e63228" strokeWidth="3" strokeLinejoin="round" />
              </motion.svg>
            </div>
            <div className="absolute bottom-[125.41px] h-[277.211px] right-[851.11px] w-[170.822px]">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage65} />
              <motion.svg className="absolute inset-0 overflow-visible pointer-events-none z-50" viewBox="0 0 171 277">
                <motion.path initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: false, amount: 0.3 }} transition={{ duration: 1, ease: "easeInOut", delay: 0 }} d="M 85 0 C 180 -10 190 280 85 285 C -20 290 -10 10 85 0" fill="none" stroke="#e63228" strokeWidth="4" strokeLinecap="round" />
                <motion.path initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 }} d="M 190 140 Q 220 130 250 150" fill="none" stroke="#111" strokeWidth="3" strokeLinecap="round" />
                <motion.path initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.3, ease: "easeOut", delay: 1.2 }} d="M 240 142 L 250 150 L 235 155" fill="none" stroke="#111" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              </motion.svg>
            </div>
            <div className="absolute bottom-[122.41px] h-[290.697px] right-[1045.91px] w-[266.722px]">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage68} />
            </div>
            {/* Camouflage block to hide baked-in static text and highlights */}
            <div className="absolute left-[130px] bottom-[150px] w-[260px] h-[280px] bg-[#F4F3CA]">
              <div className="absolute inset-0 opacity-40 mix-blend-multiply" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />
            </div>
            
            <div className="[word-break:break-word] absolute bottom-[213.06px] flex flex-col font-['Oswald:Bold'] font-bold h-[97.399px] justify-center leading-[0] right-[1288.66px] text-[#0c1012] text-[74.922px] translate-x-full translate-y-1/2 w-[223.267px] z-10">
              <motion.div 
                className="absolute -inset-x-2 -inset-y-1 bg-[#8bc3f0] -z-10 origin-left"
                initial={{ scaleX: 0, rotate: 2 }} whileInView={{ scaleX: 1, rotate: 2 }} viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
              />
              <p className="leading-[normal]">WORKS</p>
            </div>
            
            <div className="[word-break:break-word] absolute bottom-[290px] flex flex-col font-['Oswald:Bold'] font-bold h-[70px] justify-center leading-[0] right-[1290px] text-[#0f0f09] text-[65px] translate-x-full translate-y-1/2 w-[100px] z-10">
              <motion.p 
                initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.3, delay: 0.3 }}
                className="leading-[normal]" style={{ transform: 'rotate(-2deg)' }}
              >
                IT
              </motion.p>
            </div>

            <div className="[word-break:break-word] absolute bottom-[365.91px] flex flex-col font-['Oswald:Bold'] font-bold h-[88.408px] justify-center leading-[0] right-[1297.65px] text-[#0f0f09] text-[80.916px] translate-x-full translate-y-1/2 w-[154.339px] z-10">
              <motion.div 
                className="absolute -inset-x-2 -inset-y-1 bg-[#F4D160] -z-10 origin-left"
                initial={{ scaleX: 0, rotate: -3 }} whileInView={{ scaleX: 1, rotate: -3 }} viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.5, ease: "easeOut" }}
              />
              <p className="leading-[normal]">HOW</p>
            </div>
            <div className="[word-break:break-word] absolute bottom-[195.08px] flex flex-col font-['Inter:Regular'] font-normal h-[76.42px] justify-center leading-[0] not-italic right-[539.44px] text-[#a9a7a2] text-[14.984px] translate-x-full translate-y-1/2 w-[157.336px]">
              <p className="leading-[22.898px] mb-0">We edit, animate</p>
              <p className="leading-[22.898px] mb-0">and bring your vision</p>
              <p className="leading-[22.898px]">to life.</p>
            </div>
            <div className="[word-break:break-word] absolute bottom-[194.33px] flex flex-col font-['Inter:Regular'] font-normal h-[77.919px] justify-center leading-[0] not-italic right-[773.19px] text-[#a9a7a2] text-[14.984px] translate-x-full translate-y-1/2 w-[121.374px]">
              <p className="leading-[23.202px] mb-0">We suggest the</p>
              <p className="leading-[23.202px] mb-0">best approach</p>
              <p className="leading-[23.202px]">and style</p>
            </div>
            <div className="[word-break:break-word] absolute bottom-[205.57px] flex flex-col font-['Inter:Regular'] font-normal h-[46.452px] justify-center leading-[0] not-italic right-[1006.95px] text-[#aaa8a2] text-[13.486px] translate-x-full translate-y-1/2 w-[143.85px]">
              <p className="leading-[22.336px] mb-0">Share your ideas,</p>
              <p className="leading-[22.336px]">references and goals</p>
            </div>
            <div className="[word-break:break-word] absolute bottom-[201.08px] flex flex-col font-['Inter:Regular'] font-normal h-[76.42px] justify-center leading-[0] not-italic right-[287.7px] text-[#a5a39e] text-[14.984px] translate-x-full translate-y-1/2 w-[145.349px]">
              <p className="leading-[22.898px] mb-0">You get high-quality</p>
              <p className="leading-[22.898px] mb-0">content, ready</p>
              <p className="leading-[22.898px]">to make an impact.</p>
            </div>
          </div>
        </div>
      </ScaledArtSection>
      </div>

      {/* Let's Create Together — Animated Scrapbook Version */}
      <section id="contact" ref={contactRef} className="relative w-full min-h-[100dvh] bg-[#F5F2E8] overflow-hidden flex flex-col justify-center py-24 md:py-32">
        {/* Background Noise Overlay */}
        <motion.div 
          style={{ opacity: useTransform(contactY, [0, 0.1, 0.9, 1], [0, 0.5, 0.5, 0]) }}
          className="absolute inset-0 z-0 pointer-events-none mix-blend-overlay" 
        >
          <div className="absolute inset-0 w-full h-full" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />
        </motion.div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-10 lg:px-20 w-full flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-8">
          
          {/* Left: Typography & Contact Info */}
          <div className="flex flex-col lg:w-[45%] shrink-0">
            <motion.div style={{ opacity: cOpacity, y: cY }}>
              <div className="font-['Barlow:Bold'] text-[11px] tracking-[3px] uppercase text-[#888] mb-12 flex items-center gap-4">
                <span className="w-8 h-[1px] bg-black/20" />
                LET'S WORK TOGETHER
              </div>
            </motion.div>
            
            <div className="flex flex-col leading-[0.8] tracking-tighter -ml-1">
              <motion.span style={{ x: letsX, rotate: letsRot, opacity: cOpacity }} className="font-['Barlow_Condensed:Black'] text-[clamp(80px,12vw,140px)] text-[#111] uppercase block origin-left">LET'S</motion.span>
              <motion.span style={{ x: createX, rotate: createRot, opacity: cOpacity }} className="font-['Barlow_Condensed:Black'] text-[clamp(80px,12vw,140px)] text-[#111] uppercase block origin-right">CREATE</motion.span>
              <motion.span style={{ y: togY, scale: togScale, rotate: togRot, opacity: cOpacity }} className="font-['Barlow_Condensed:Black'] text-[clamp(80px,12vw,140px)] text-[#e63228] uppercase block origin-bottom-left">TOGETHER.</motion.span>
            </div>

            <motion.div style={{ opacity: cOpacity, y: cY }}>
              <p className="font-['Inter:Regular'] text-[#666] text-lg mt-8 max-w-[320px] leading-relaxed">
                Have a project in mind? Let's talk. I'd love to hear your ideas and turn them into reality.
              </p>
            </motion.div>

            {/* Social / contact info */}
            <motion.div style={{ opacity: cOpacity, y: cY }}>
              <div className="mt-16 flex flex-col gap-6 border-l border-black/10 pl-6">
                <p className="font-['Barlow:Bold'] text-[#111] text-xs tracking-widest uppercase">Other ways to reach me</p>
                <div className="flex flex-col gap-4">
                  <a href="mailto:hello@golfedits.com" className="flex items-center gap-4 no-underline group w-fit">
                    <span className="font-['Inter:Regular'] text-[#555] group-hover:text-[#e63228] transition-colors">hello@golfedits.com</span>
                  </a>
                  <a href="https://instagram.com/golfedits" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 no-underline group w-fit">
                    <span className="font-['Inter:Regular'] text-[#555] group-hover:text-[#e63228] transition-colors">@golfedits</span>
                  </a>
                  <a href="tel:+919876543210" className="flex items-center gap-4 no-underline group w-fit">
                    <span className="font-['Inter:Regular'] text-[#555] group-hover:text-[#e63228] transition-colors">+91 98765 43210</span>
                  </a>
                  <div className="flex items-center gap-4">
                    <span className="font-['Inter:Regular'] text-[#888]">Bokaro Steel City, Jharkhand</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right: Floating Form & Images */}
          <div className="relative lg:w-[50%] w-full flex justify-end mt-12 lg:mt-0">
            
            {/* Animated Floating Photos */}
            <motion.div 
              style={{ x: p1X, rotate: p1Rot, opacity: p1Op }}
              className="absolute -right-[10%] top-[10%] w-48 h-64 bg-white p-2 shadow-xl z-0 hidden lg:block transition-transform duration-500 hover:scale-105 hover:z-20 origin-center"
            >
              <img src={showcaseItems[0].mediaSrc} alt="" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
            </motion.div>
            <motion.div 
              style={{ x: p2X, rotate: p2Rot, opacity: p2Op }}
              className="absolute -right-[5%] bottom-[5%] w-40 h-56 bg-white p-2 shadow-xl z-0 hidden lg:block transition-transform duration-500 hover:scale-105 hover:z-20 origin-center"
            >
              <img src={showcaseItems[1].mediaSrc} alt="" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
            </motion.div>

            {/* Clean, Sharp Form Paper */}
            <motion.div style={{ y: formY, rotate: formRot, scale: formScale, opacity: formOp }} className="w-full max-w-[480px] relative z-10 origin-bottom">
              <form onSubmit={handleSubmit} noValidate className="bg-white border border-black/5 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.08)] p-8 md:p-12 w-full flex flex-col gap-8">
                {formStatus === 'success' ? (
                  <div className="flex flex-col items-center justify-center text-center py-16">
                    <p className="font-['Barlow:Bold'] text-[#111] text-lg mb-2 uppercase tracking-wide">Message Sent</p>
                    <p className="font-['Inter:Regular'] text-[#666] text-sm">Thank you. I'll get back to you shortly.</p>
                    <button type="button" onClick={() => setFormStatus('idle')} className="mt-8 font-['Inter:Regular'] text-[#888] text-sm underline hover:text-[#111] transition-colors cursor-pointer">Send another</button>
                  </div>
                ) : (
                  <>
                    <motion.div style={{ opacity: field1Op, y: field1Y }} className="flex flex-col gap-1 group">
                      <label htmlFor="contact-name" className="font-['Barlow:Bold'] text-[#111] text-[10px] tracking-widest uppercase transition-colors group-focus-within:text-[#e63228]">Your Name</label>
                      <input
                        id="contact-name" name="name" type="text" autoComplete="name"
                        value={formData.name}
                        onChange={e => setFormData(d => ({ ...d, name: e.target.value }))}
                        placeholder="John Doe"
                        className={`w-full bg-transparent border-b ${formErrors.name ? 'border-[#e63228]' : 'border-black/20'} py-3 font-['Inter:Regular'] text-[#111] text-[15px] placeholder:text-[#ccc] outline-none focus:border-[#111] transition-colors`}
                      />
                      {formErrors.name && <p className="font-['Inter:Regular'] text-[#e63228] text-[11px] mt-1">{formErrors.name}</p>}
                    </motion.div>

                    <motion.div style={{ opacity: field2Op, y: field2Y }} className="flex flex-col gap-1 group">
                      <label htmlFor="contact-email" className="font-['Barlow:Bold'] text-[#111] text-[10px] tracking-widest uppercase transition-colors group-focus-within:text-[#e63228]">Your Email</label>
                      <input
                        id="contact-email" name="email" type="email" autoComplete="email"
                        value={formData.email}
                        onChange={e => setFormData(d => ({ ...d, email: e.target.value }))}
                        placeholder="hello@example.com"
                        className={`w-full bg-transparent border-b ${formErrors.email ? 'border-[#e63228]' : 'border-black/20'} py-3 font-['Inter:Regular'] text-[#111] text-[15px] placeholder:text-[#ccc] outline-none focus:border-[#111] transition-colors`}
                      />
                      {formErrors.email && <p className="font-['Inter:Regular'] text-[#e63228] text-[11px] mt-1">{formErrors.email}</p>}
                    </motion.div>

                    <motion.div style={{ opacity: field3Op, y: field3Y }} className="flex flex-col gap-1 group">
                      <label htmlFor="contact-project" className="font-['Barlow:Bold'] text-[#111] text-[10px] tracking-widest uppercase transition-colors group-focus-within:text-[#e63228]">Project Type</label>
                      <div className="relative">
                        <select
                          id="contact-project" name="projectType"
                          value={formData.projectType}
                          onChange={e => setFormData(d => ({ ...d, projectType: e.target.value }))}
                          className="w-full appearance-none bg-transparent border-b border-black/20 py-3 font-['Inter:Regular'] text-[#111] text-[15px] outline-none focus:border-[#111] transition-colors cursor-pointer"
                        >
                          <option value="" disabled>Select a project type</option>
                          <option value="podcast">Podcast Edits</option>
                          <option value="basic">Basic Edits</option>
                          <option value="motion">Motion Graphics</option>
                          <option value="commercial">Commercial Edits</option>
                        </select>
                        <svg className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 text-[#888] pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 9l-7 7-7-7" /></svg>
                      </div>
                    </motion.div>

                    <motion.div style={{ opacity: field4Op, y: field4Y }} className="flex flex-col gap-1 group">
                      <label htmlFor="contact-message" className="font-['Barlow:Bold'] text-[#111] text-[10px] tracking-widest uppercase transition-colors group-focus-within:text-[#e63228]">Your Message</label>
                      <textarea
                        id="contact-message" name="message" rows={4}
                        value={formData.message}
                        onChange={e => setFormData(d => ({ ...d, message: e.target.value }))}
                        placeholder="Share your ideas, references, and goals..."
                        className={`w-full bg-transparent border-b ${formErrors.message ? 'border-[#e63228]' : 'border-black/20'} py-3 font-['Inter:Regular'] text-[#111] text-[15px] placeholder:text-[#ccc] outline-none focus:border-[#111] transition-colors resize-none`}
                      />
                      {formErrors.message && <p className="font-['Inter:Regular'] text-[#e63228] text-[11px] mt-1">{formErrors.message}</p>}
                    </motion.div>

                    {formStatus === 'error' && (
                      <p className="font-['Inter:Regular'] text-[#e63228] text-xs">Unable to send your message. Please try again.</p>
                    )}

                    <motion.button
                      type="submit"
                      disabled={formStatus === 'submitting'}
                      style={{ opacity: btnOp, scale: btnScale }}
                      className="mt-4 bg-[#111] text-[#F5F2E8] py-4 px-8 font-['Barlow:Bold'] text-[13px] tracking-[2px] uppercase cursor-pointer hover:bg-[#e63228] hover:-translate-y-1 disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-3 w-full origin-bottom"
                    >
                      {formStatus === 'submitting' ? 'SENDING...' : (
                        <>
                          <span>Send Message</span>
                          <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                        </>
                      )}
                    </motion.button>
                  </>
                )}
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#e3ddc0] border-[#d4ceb0] border-solid border-t-[0.8px] content-stretch flex flex-col items-center py-[48px] relative shrink-0 w-full">
        <div className="content-stretch flex flex-col gap-[32px] items-start max-w-[1200px] px-[20px] md:px-[40px] relative shrink-0 w-full">
          <div className="content-stretch flex flex-col md:flex-row gap-[24px] md:gap-0 items-start md:items-center justify-between relative shrink-0 w-full">
            <a href="#hero" onClick={e => { e.preventDefault(); scrollTo('hero'); }} className="no-underline [word-break:break-word] font-['DM_Sans:Bold'] font-bold leading-[normal] relative shrink-0 text-[#575754] text-[28px] whitespace-nowrap hover:text-[#333] transition-colors" style={{ fontVariationSettings: '"opsz" 14' }}>TF.</a>
            <nav aria-label="Footer navigation" className="[word-break:break-word] content-stretch flex flex-wrap font-['DM_Sans:Regular'] font-normal gap-x-[24px] md:gap-x-[40px] gap-y-[12px] items-start leading-[normal] relative shrink-0 text-[#575754] text-[14px] md:text-[16px]">
              {[['Home','hero'],['Expertise','expertise'],['Podcast Edits','podcast'],['Basic Edits','basic'],['Testimonials','testimonials'],['Commercial Edits','commercials'],['Contact','contact']].map(([label, id]) => (
                <a key={label} href={`#${id}`} onClick={e => { e.preventDefault(); scrollTo(id); }} className="relative shrink-0 no-underline text-[#575754] hover:text-[#333] transition-colors" style={{ fontVariationSettings: '"opsz" 14' }}>{label}</a>
              ))}
            </nav>
            <div className="content-stretch flex gap-[16px] items-start relative shrink-0">
              <a href="https://instagram.com/golfedits" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="bg-[#111] relative rounded-[10px] shrink-0 size-[32px] hover:bg-[#333] transition-colors block" />
              <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="bg-[#111] relative rounded-[10px] shrink-0 size-[32px] hover:bg-[#333] transition-colors block" />
              <a href="mailto:hello@golfedits.com" aria-label="Email" className="bg-[#111] relative rounded-[10px] shrink-0 size-[32px] hover:bg-[#333] transition-colors block" />
            </div>
          </div>
          <div className="h-0 relative shrink-0 w-full">
            <div className="absolute inset-[-0.8px_0_0_0]">
              <img alt="" className="block max-w-none size-full" src={imgLine} />
            </div>
          </div>
          <div className="[word-break:break-word] content-stretch flex flex-col sm:flex-row font-['DM_Sans:Regular'] font-normal gap-[8px] sm:gap-0 items-start justify-between leading-[normal] relative shrink-0 text-[#b2b0a9] text-[14px] w-full">
            <p className="relative shrink-0" style={{ fontVariationSettings: '"opsz" 14' }}>© 2024 All rights reserved</p>
            <div className="flex gap-[16px]">
              <a href="#" className="relative shrink-0 text-[#b2b0a9] hover:text-[#575754] transition-colors no-underline" style={{ fontVariationSettings: '"opsz" 14' }}>Terms of Service</a>
              <span className="text-[#b2b0a9]">·</span>
              <a href="#" className="relative shrink-0 text-[#b2b0a9] hover:text-[#575754] transition-colors no-underline" style={{ fontVariationSettings: '"opsz" 14' }}>Privacy Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
