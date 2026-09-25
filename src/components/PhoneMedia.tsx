import React, { useRef, useState } from 'react';

export interface PhoneMediaItem {
  id: string;
  type: 'image' | 'video';
  src: string;
  poster?: string;
  alt?: string;
}

interface PhoneMediaProps {
  item: PhoneMediaItem;
  className?: string;
  style?: React.CSSProperties;
}

export function PhoneMedia({ item, className = "", style }: PhoneMediaProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div 
      className={`${className.includes('absolute') ? '' : 'relative'} rounded-[24px] md:rounded-[32px] overflow-hidden bg-black shadow-lg ${className}`}
      style={style}
    >
      {/* Removed notch */}

      {item.type === 'video' ? (
        <video
          ref={videoRef}
          src={item.src}
          poster={item.poster}
          className="absolute inset-0 w-full h-full object-cover"
          muted
          loop
          playsInline
          autoPlay
          onClick={togglePlay}
        />
      ) : (
        <img
          src={item.src}
          alt={item.alt || ""}
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
      )}
      
      {/* Play Icon Overlay */}
      {item.type === 'video' && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none bg-black/10 transition-opacity">
          <div className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-white/60 bg-white/10 backdrop-blur-sm flex items-center justify-center transition-transform group-hover:scale-110">
            {isPlaying ? (
              <div className="flex gap-1 ml-0.5">
                <div className="w-1 h-4 bg-white rounded-sm" />
                <div className="w-1 h-4 bg-white rounded-sm" />
              </div>
            ) : (
              <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-white border-b-[6px] border-b-transparent ml-1" />
            )}
          </div>
        </div>
      )}
    </div>
  );
}
