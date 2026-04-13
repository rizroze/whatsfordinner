"use client";

import { useState } from "react";

export function YouTubeEmbed({ videoId }: { videoId: string }) {
  const [loaded, setLoaded] = useState(false);
  const thumbnail = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  if (loaded) {
    return (
      <div className="rounded-2xl overflow-hidden aspect-video">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          title="Recipe video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full border-0"
        />
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setLoaded(true)}
      className="relative w-full rounded-2xl overflow-hidden aspect-video group cursor-pointer"
      aria-label="Play video"
    >
      {/* Thumbnail */}
      <img
        src={thumbnail}
        alt="Video thumbnail"
        className="w-full h-full object-cover"
        loading="lazy"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-200" />

      {/* Play button */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/90 group-hover:bg-white flex items-center justify-center shadow-lg transition-all duration-200 group-hover:scale-110">
          <svg
            width="24"
            height="28"
            viewBox="0 0 24 28"
            fill="none"
            className="ml-1"
          >
            <path
              d="M2 2.5L22 14L2 25.5V2.5Z"
              fill="#F97316"
              stroke="#F97316"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </button>
  );
}
