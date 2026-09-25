import React from 'react';
import type { PortfolioItem } from '../data/portfolio';

interface MediaCardProps {
  item: PortfolioItem;
  className?: string;
  imgClassName?: string;
}

export function MediaCard({ item, className = "", imgClassName = "" }: MediaCardProps) {
  if (!item.mediaSrc) {
    return <div className={className} />; // Fallback for no media
  }

  if (item.mediaType === 'video') {
    return (
      <div className={className}>
        <video
          src={item.mediaSrc}
          poster={item.poster}
          className={`absolute inset-0 size-full object-cover pointer-events-none ${imgClassName}`}
          autoPlay
          muted
          loop
          playsInline
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
