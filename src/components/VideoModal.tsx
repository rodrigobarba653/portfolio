"use client";

import { useEffect } from "react";

interface Video {
  id: string;
  title: string;
  description: string;
  url: string;
  isShorts?: boolean;
}

interface VideoModalProps {
  videos: Video[];
  currentVideoIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export default function VideoModal({
  videos,
  currentVideoIndex,
  isOpen,
  onClose,
  onNavigate,
}: VideoModalProps) {
  // Handle body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      // Prevent scrolling when modal is open
      document.body.style.overflow = "hidden";
    } else {
      // Reset body scroll when modal is closed
      document.body.style.overflow = "auto";
    }

    // Cleanup function
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      switch (e.key) {
        case "ArrowLeft":
          if (currentVideoIndex > 0) {
            onNavigate(currentVideoIndex - 1);
          }
          break;
        case "ArrowRight":
          if (currentVideoIndex < videos.length - 1) {
            onNavigate(currentVideoIndex + 1);
          }
          break;
        case "Escape":
          onClose();
          break;
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, currentVideoIndex, videos.length, onNavigate, onClose]);

  if (!isOpen || !videos[currentVideoIndex]) return null;

  const currentVideo = videos[currentVideoIndex];
  const isFirstVideo = currentVideoIndex === 0;
  const isLastVideo = currentVideoIndex === videos.length - 1;

  // Convert YouTube URLs to embed format
  const getEmbedUrl = (url: string) => {
    if (url.includes("youtube.com/shorts/")) {
      const shortId = url.split("youtube.com/shorts/")[1];
      return `https://www.youtube.com/embed/${shortId}`;
    } else if (url.includes("youtu.be/")) {
      const videoId = url.split("youtu.be/")[1];
      return `https://www.youtube.com/embed/${videoId}`;
    }
    return url;
  };

  const embedUrl = getEmbedUrl(currentVideo.url);

  const goToPrevious = () => {
    if (!isFirstVideo) {
      onNavigate(currentVideoIndex - 1);
    }
  };

  const goToNext = () => {
    if (!isLastVideo) {
      onNavigate(currentVideoIndex + 1);
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="relative bg-slate-900/95 border border-slate-700/50 rounded-2xl w-full max-w-5xl max-h-[95vh] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 bg-slate-800/70 hover:bg-slate-700/70 rounded-full flex items-center justify-center text-white hover:text-[#beff48] transition-colors z-10"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Navigation Arrows */}
        {!isFirstVideo && (
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-slate-800/70 hover:bg-slate-700/70 rounded-full flex items-center justify-center text-white hover:text-[#beff48] transition-colors z-10"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
        )}

        {!isLastVideo && (
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-slate-800/70 hover:bg-slate-700/70 rounded-full flex items-center justify-center text-white hover:text-[#beff48] transition-colors z-10"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        )}

        {/* Modal Content */}
        <div className="p-6 h-full flex flex-col">
          <div className="text-center mb-4 flex-shrink-0">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
              {currentVideo.title}
            </h2>
            <div className="flex items-center justify-center gap-4 text-slate-400 text-sm">
              <span>{currentVideo.isShorts ? "SOCIAL" : "VIDEO"}</span>
              <span>•</span>
              <span>
                {currentVideoIndex + 1} of {videos.length}
              </span>
            </div>
          </div>

          {/* Video Container */}
          <div className="flex-1 min-h-0">
            <div
              className="relative w-full h-full"
              style={{ paddingBottom: "56.25%" }}
            >
              <iframe
                src={embedUrl}
                title={currentVideo.title}
                className="absolute top-0 left-0 w-full h-full rounded-lg"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
