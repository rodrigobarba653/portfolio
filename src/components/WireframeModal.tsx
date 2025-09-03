"use client";

import { useEffect } from "react";
import Image from "next/image";

interface WireframeProject {
  image: string;
  title: string;
  description: string;
  tags: string[];
  figmaLink: string;
}

interface WireframeModalProps {
  projects: WireframeProject[];
  currentProjectIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (newIndex: number) => void;
}

export default function WireframeModal({
  projects,
  currentProjectIndex,
  isOpen,
  onClose,
  onNavigate,
}: WireframeModalProps) {
  const currentProject = projects[currentProjectIndex];

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!isOpen) return;

      if (event.key === "Escape") {
        onClose();
      } else if (event.key === "ArrowLeft") {
        const prevIndex =
          currentProjectIndex > 0
            ? currentProjectIndex - 1
            : projects.length - 1;
        onNavigate(prevIndex);
      } else if (event.key === "ArrowRight") {
        const nextIndex =
          currentProjectIndex < projects.length - 1
            ? currentProjectIndex + 1
            : 0;
        onNavigate(nextIndex);
      }
    };

    // Prevent background scrolling when modal is open
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, currentProjectIndex, projects.length, onClose, onNavigate]);

  if (!isOpen || !currentProject) return null;

  return (
    <div
      className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-0 lg:p-4 overflow-y-auto lg:overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full h-full lg:max-w-6xl lg:max-h-[90vh] lg:h-auto bg-slate-900 lg:rounded-2xl overflow-hidden border-0 lg:border border-slate-700/50 lg:my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors"
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
        {projects.length > 1 && (
          <>
            <button
              onClick={() => {
                const prevIndex =
                  currentProjectIndex > 0
                    ? currentProjectIndex - 1
                    : projects.length - 1;
                onNavigate(prevIndex);
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors"
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
            <button
              onClick={() => {
                const nextIndex =
                  currentProjectIndex < projects.length - 1
                    ? currentProjectIndex + 1
                    : 0;
                onNavigate(nextIndex);
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors"
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
          </>
        )}

        {/* Content */}
        <div className="flex flex-col lg:flex-row h-full lg:max-h-[calc(90vh-2rem)] overflow-y-auto lg:overflow-hidden">
          {/* Info Section - First on mobile, right side on desktop */}
          <div className="lg:w-1/3 p-4 lg:p-8 bg-slate-900 flex flex-col justify-between lg:overflow-y-auto order-1 lg:order-2">
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">
                {currentProject.title}
              </h2>
              <p className="text-slate-300 mb-6 leading-relaxed">
                {currentProject.description.split("**").map((part, index) =>
                  index % 2 === 1 ? (
                    <strong key={index} className="text-white font-bold">
                      {part}
                    </strong>
                  ) : (
                    part.split("\n").map((line, lineIndex) => (
                      <span key={lineIndex}>
                        {line}
                        {lineIndex < part.split("\n").length - 1 && <br />}
                      </span>
                    ))
                  )
                )}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {currentProject.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-[#beff48]/10 text-[#beff48] text-sm rounded-full border border-[#beff48]/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Figma CTA */}
            <div className="space-y-4">
              <a
                href={currentProject.figmaLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center px-6 py-4 bg-[#beff48] text-black font-semibold rounded-xl hover:bg-[#a3e635] transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 12c0-3.172 0-4.758.732-5.964.732-1.206 2.05-1.964 4.686-1.964s3.954.758 4.686 1.964C23 7.242 23 8.828 23 12s0 4.758-.732 5.964c-.732 1.206-2.05 1.964-4.686 1.964s-3.954-.758-4.686-1.964C12 16.758 12 15.172 12 12z" />
                  <path d="M12 12c0-3.172 0-4.758-.732-5.964C10.536 4.83 9.218 4.072 6.582 4.072s-3.954.758-4.686 1.964C1 7.242 1 8.828 1 12s0 4.758.732 5.964c.732 1.206 2.05 1.964 4.686 1.964s3.954-.758 4.686-1.964C12 16.758 12 15.172 12 12z" />
                </svg>
                View in Figma
              </a>
              {projects.length > 1 && (
                <div className="text-center text-slate-400 text-sm">
                  {currentProjectIndex + 1} of {projects.length}
                </div>
              )}
            </div>
          </div>

          {/* Image Section - Second on mobile, left side on desktop */}
          <div className="lg:w-2/3 p-4 lg:p-8 bg-slate-800/50 lg:overflow-y-auto order-2 lg:order-1">
            <div className="w-full max-w-4xl mx-auto">
              <Image
                src={currentProject.image}
                alt={currentProject.title}
                width={800}
                height={600}
                className="w-full h-auto rounded-lg shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
