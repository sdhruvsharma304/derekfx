'use client';

import { useState } from 'react';

export default function VideoSection() {
  const [videoLoaded, setVideoLoaded] = useState(false);
  
  // This would be replaced with the actual video URL
  const placeholderVideoUrl = "https://player.vimeo.com/video/517069690?h=9c6b3a2f93&title=0&byline=0&portrait=0";
  
  return (
    <div className="w-full my-8">
      <div className="relative w-full pt-[56.25%]">
        <iframe 
          src={placeholderVideoUrl}
          allow="autoplay; fullscreen; picture-in-picture" 
          allowFullScreen
          onLoad={() => setVideoLoaded(true)}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${videoLoaded ? 'opacity-100' : 'opacity-0'}`}
        ></iframe>
        {!videoLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-primary">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-accent"></div>
          </div>
        )}
      </div>
      <div className="mt-4 text-center">
        <p className="text-sm text-gray-300">
          Watch how DEREKFX trading signals can transform your trading strategy
        </p>
      </div>
    </div>
  );
}
