import React, { useRef, useEffect } from 'react';
import type { PortfolioItem } from '../data/portfolio';

interface MediaCardProps {
  item: PortfolioItem;
  className?: string;
  imgClassName?: string;
}

export function MediaCard({ item, className = "", imgClassName = "" }: MediaCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (item.mediaType !== 'video') return;
    const currentVideo = videoRef.current;
    if (!currentVideo) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            currentVideo.play().catch(() => {});
          } else {
            currentVideo.pause();
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(currentVideo);
    return () => observer.disconnect();
  }, [item.mediaType, item.mediaSrc]);

  if (!item.mediaSrc) {
    return <div className={className} />; // Fallback for no media
  }


  if (item.mediaType === 'video') {
    return (
      <div className={className}>
        <video
          ref={videoRef}
          src={item.mediaSrc}
          poster={item.poster}
          className={`absolute inset-0 size-full object-cover pointer-events-none ${imgClassName}`}
          muted
          loop
          playsInline
          preload="metadata"
        />
      </div>
    );
  }

  return (
    <div className={className}>
      <img
        alt={item.title || item.category || ""}
        className={`absolute inset-0 max-w-none size-full object-cover pointer-events-none ${imgClassName}`}
        src={item.mediaSrc}
        loading="lazy"
      />
    </div>
  );
}
