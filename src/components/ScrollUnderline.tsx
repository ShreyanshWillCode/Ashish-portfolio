import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export function ScrollUnderline({ children, className = '' }: { children: React.ReactNode, className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 95%", "start 50%"]
  });
  
  const width = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  
  return (
    <span ref={ref} className={`relative inline-block ${className}`}>
      {children}
      <motion.div 
         className="absolute -bottom-1 left-0 h-[2px] bg-current"
         style={{ width }}
      />
    </span>
  );
}
