import { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { podcastEditsSection } from '../data/portfolio';
import { PhoneMedia } from './PhoneMedia';
import { ScrollUnderline } from './ScrollUnderline';

export function PodcastEdits() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % podcastEditsSection.media.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + podcastEditsSection.media.length) % podcastEditsSection.media.length);
  };

  const getMediaItem = (offset: number) => {
    const index = (currentIndex + offset + podcastEditsSection.media.length) % podcastEditsSection.media.length;
    return podcastEditsSection.media[index];
  };
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const progressWidth = useTransform(scrollYProgress, [0.3, 0.7], ["0%", "100%"]);

  return (
    <section ref={containerRef} id="podcast" className="relative w-full bg-[#f4f1e9] py-16 md:py-32 px-5 md:px-10 lg:px-20 overflow-hidden">
      {/* Background Noise Overlay */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none opacity-100 mix-blend-overlay" 
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} 
      />

      {/* Top Label */}
      <div className="flex justify-between items-start w-full max-w-7xl mx-auto">
        <div className="flex gap-4 items-center">
          <span className="font-['Barlow:Bold'] text-sm text-[#111]">{podcastEditsSection.sectionNumber}</span>
          <div className="w-[1px] h-4 bg-black/20" />
          <ScrollUnderline className="font-['Barlow:Bold'] text-sm tracking-widest text-[#555]">
            {podcastEditsSection.label}
          </ScrollUnderline>
        </div>
        
        {/* Right Eyebrow */}
        <div className="hidden md:flex flex-col text-right text-xs tracking-widest font-['Inter:Regular'] text-[#888] gap-1">
          {podcastEditsSection.eyebrow.map((line, i) => (
            <span key={i}>{line}</span>
          ))}
        </div>
      </div>

      <div className="flex flex-col mt-12 w-full max-w-7xl mx-auto">
        {/* Typography Row */}
        <div className="flex flex-col lg:flex-row justify-between w-full">
          {/* Huge Title Left */}
          <div className="flex flex-col leading-[0.8] tracking-tighter w-full lg:w-1/2 relative z-20 pointer-events-none">
            <span className="font-['Barlow_Condensed:Black'] text-[clamp(80px,10vw,140px)] text-[#111] uppercase">{podcastEditsSection.titlePrimary}</span>
            <span className="font-['Barlow_Condensed:Black'] text-[clamp(80px,10vw,140px)] text-[#999] uppercase">{podcastEditsSection.titleSecondary}</span>
            
            <div className="w-16 h-1 bg-[#e63228] mt-8 mb-6" />
            <p className="font-['Inter:Regular'] text-[#555] text-base max-w-[280px]">
              {podcastEditsSection.description}
            </p>
          </div>

          {/* Right Features & Circular Button */}
          <div className="flex flex-col w-full lg:w-1/3 mt-12 lg:mt-0 pt-4 z-20 pointer-events-none items-end">
            <div className="flex flex-col gap-6 w-full max-w-[280px]">
              {podcastEditsSection.features.map((feature, i) => (
                <div key={i} className="flex gap-4 items-center font-['Inter:Regular'] text-[#555]">
                  <span className="font-['Barlow:Bold'] text-[#111]">0{i+1}</span>
                  <div className="w-[1px] h-4 bg-black/20" />
                  <span>{feature}</span>
                </div>
              ))}
              
              <div className="mt-8 flex flex-col items-end w-full pr-12">
                <button className="w-16 h-16 rounded-full border border-[#111] flex items-center justify-center hover:bg-[#111] hover:text-white transition-colors cursor-pointer pointer-events-auto group">
                   <svg className="w-6 h-6 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 12h14m-7-7l7 7-7 7" /></svg>
                </button>
                <div className="text-left text-[10px] tracking-widest font-['Inter:Regular'] text-[#888] uppercase mt-6 leading-[1.6]">
                   TURNING<br/>CONVERSATIONS<br/>INTO IMPACT.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Fanned Deck Centerpiece */}
        <div className="relative w-full h-[400px] md:h-[600px] mt-24 md:mt-16 flex justify-center items-center overflow-visible z-10 pointer-events-none select-none group">
          
          {/* Annotations */}
          <div className="absolute left-[5%] bottom-[5%] md:left-[5%] text-[10px] tracking-[4px] uppercase text-[#888] font-['Barlow:Regular'] leading-[1.8] z-30">
            {podcastEditsSection.annotationLeft.split('\n').map((line, i) => <div key={i}>{line}</div>)}
          </div>
          
          <div className="absolute left-[15%] bottom-[-20%] md:left-[20%] md:bottom-[-10%] z-30 rotate-[-12deg] text-[#111] text-[28px] md:text-[38px] font-['Covered_By_Your_Grace:Regular'] opacity-90">
            {podcastEditsSection.annotationRight.split('\n').map((line, i) => <div key={i} className={i>0?'ml-8':''}>{line}</div>)}
            <svg className="w-12 h-12 ml-24 mt-2 hidden md:block" fill="none" stroke="currentColor" viewBox="0 0 100 100"><path stroke="currentColor" strokeWidth="2" strokeLinecap="round" d="M10,80 Q50,90 90,40 M75,35 L90,40 L95,55" /></svg>
          </div>

          {/* Carousel Buttons */}
          <button onClick={prevSlide} className="absolute left-[2%] md:left-[8%] z-40 w-12 h-12 md:w-14 md:h-14 rounded-full border border-black/10 bg-[#F5F2E8]/80 backdrop-blur-sm flex items-center justify-center hover:bg-white hover:shadow-md transition-all pointer-events-auto cursor-pointer">
            <svg className="w-6 h-6 text-[#111]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 19l-7-7 7-7" /></svg>
          </button>

          <div className="absolute inset-0 flex items-center justify-center w-full max-w-[1000px] mx-auto z-20 pointer-events-auto">
            {/* 1 */}
            <PhoneMedia item={getMediaItem(-2) as any} className="absolute w-[240px] sm:w-[280px] md:w-[320px] h-[480px] sm:h-[560px] md:h-[640px] z-10 hidden md:block transition-transform duration-500 hover:-translate-y-2 -translate-x-[240%] translate-y-[35%] -rotate-[18deg] scale-[0.7]" />
            {/* 2 */}
            <PhoneMedia item={getMediaItem(-1) as any} className="absolute w-[240px] sm:w-[280px] md:w-[320px] h-[480px] sm:h-[560px] md:h-[640px] z-20 transition-transform duration-500 hover:-translate-y-2 -translate-x-[80%] sm:-translate-x-[110%] md:-translate-x-[150%] translate-y-[15%] -rotate-[6deg] md:-rotate-[10deg] scale-[0.85]" />
            {/* 3 (Center Main) */}
            <div className="absolute w-[240px] sm:w-[280px] md:w-[320px] h-[480px] sm:h-[560px] md:h-[640px] z-30 transition-transform duration-500 hover:-translate-y-2 group translate-x-0 scale-100">
               <PhoneMedia item={getMediaItem(0) as any} className="absolute inset-0 w-full h-full" />
               
               {/* Live Scroll Waveform Bar overlay */}
               <div className="absolute bottom-[20%] left-0 w-full h-12 flex items-center justify-center px-6">
                  <div className="w-full h-[2px] bg-white/20 rounded overflow-hidden relative shadow-[0_0_10px_rgba(255,255,255,0.2)]">
                     <motion.div style={{ width: progressWidth }} className="h-full bg-white relative">
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
                     </motion.div>
                  </div>
                  {/* Faux Waveform graphics on top */}
                  <div className="absolute right-[15%] top-1/2 -translate-y-1/2 flex items-center gap-[3px]">
                     {[...Array(12)].map((_, i) => (
                        <motion.div key={i} className="w-[2px] bg-white rounded-full" 
                          animate={{ height: ['8px', '32px', '8px'] }}
                          transition={{ repeat: Infinity, duration: 1.5, delay: i * 0.1, ease: 'easeInOut' }}
                        />
                     ))}
                  </div>
               </div>
            </div>
            {/* 4 */}
            <PhoneMedia item={getMediaItem(1) as any} className="absolute w-[240px] sm:w-[280px] md:w-[320px] h-[480px] sm:h-[560px] md:h-[640px] z-20 transition-transform duration-500 hover:-translate-y-2 translate-x-[80%] sm:translate-x-[110%] md:translate-x-[150%] translate-y-[15%] rotate-[6deg] md:rotate-[10deg] scale-[0.85]" />
            {/* 5 */}
            <PhoneMedia item={getMediaItem(2) as any} className="absolute w-[240px] sm:w-[280px] md:w-[320px] h-[480px] sm:h-[560px] md:h-[640px] z-10 hidden md:block transition-transform duration-500 hover:-translate-y-2 translate-x-[240%] translate-y-[35%] rotate-[18deg] scale-[0.7]" />
          </div>

          <button onClick={nextSlide} className="absolute right-[2%] md:right-[8%] z-40 w-12 h-12 md:w-14 md:h-14 rounded-full border border-black/10 bg-[#F5F2E8]/80 backdrop-blur-sm flex items-center justify-center hover:bg-white hover:shadow-md transition-all pointer-events-auto cursor-pointer">
            <svg className="w-6 h-6 text-[#111]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 5l7 7-7 7" /></svg>
          </button>
        </div>

        {/* Scroll Progress Indicator Bottom (Pagination Style) */}
        <div className="flex justify-center gap-2 mt-16 md:mt-8 pb-12 relative z-40">
           <motion.div className="h-1.5 rounded-full bg-[#e63228]" style={{ width: useTransform(scrollYProgress, [0, 0.5, 1], [40, 40, 10]) }} />
           <motion.div className="h-1.5 rounded-full bg-black/10" style={{ width: useTransform(scrollYProgress, [0, 0.5, 1], [15, 30, 15]) }} />
           <motion.div className="h-1.5 rounded-full bg-black/10" style={{ width: useTransform(scrollYProgress, [0, 0.5, 1], [15, 15, 40]) }} />
        </div>
      </div>
    </section>
  );
}
