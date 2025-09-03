"use client";

import { useEffect } from "react";
import Image from "next/image";

interface Project {
  mobile: string;
  desktop: string;
  title: string;
  description: string;
  tags: string[];
  images?: string[]; // Optional array for multiple images (like Peibo App)
}

interface ProjectModalProps {
  projects: Project[];
  currentProjectIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export default function ProjectModal({
  projects,
  currentProjectIndex,
  isOpen,
  onClose,
  onNavigate,
}: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      switch (e.key) {
        case "ArrowLeft":
          if (currentProjectIndex > 0) {
            onNavigate(currentProjectIndex - 1);
          }
          break;
        case "ArrowRight":
          if (currentProjectIndex < projects.length - 1) {
            onNavigate(currentProjectIndex + 1);
          }
          break;
        case "Escape":
          onClose();
          break;
      }
    };

    // Prevent background scrolling when modal is open
    if (isOpen) {
      // Store original overflow values
      const originalBodyOverflow = document.body.style.overflow;
      const originalHtmlOverflow = document.documentElement.style.overflow;

      // Prevent scrolling on both body and html
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";

      // Add keyboard event listener
      document.addEventListener("keydown", handleKeyDown);

      // Cleanup function
      return () => {
        document.removeEventListener("keydown", handleKeyDown);
        document.body.style.overflow = originalBodyOverflow;
        document.documentElement.style.overflow = originalHtmlOverflow;
      };
    }
  }, [isOpen, currentProjectIndex, projects.length, onNavigate, onClose]);

  if (!isOpen || !projects[currentProjectIndex]) return null;

  const currentProject = projects[currentProjectIndex];
  const isFirstProject = currentProjectIndex === 0;
  const isLastProject = currentProjectIndex === projects.length - 1;

  const goToPrevious = () => {
    if (!isFirstProject) {
      onNavigate(currentProjectIndex - 1);
    }
  };

  const goToNext = () => {
    if (!isLastProject) {
      onNavigate(currentProjectIndex + 1);
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative bg-slate-900/95 border border-slate-700/50 rounded-2xl max-w-6xl w-full max-h-[90vh] my-8"
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
        {!isFirstProject && (
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

        {!isLastProject && (
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
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-2rem)]">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold text-white mb-2">
              {currentProject.title}
            </h2>
            <div className="flex items-center justify-center gap-4 text-slate-400 text-sm mb-4">
              <span>UI/UX Project</span>
              <span>•</span>
              <span>
                {currentProjectIndex + 1} of {projects.length}
              </span>
            </div>
            <p className="text-slate-300 max-w-2xl mx-auto">
              {currentProject.description}
            </p>
          </div>

          {/* Conditional Layout: Grid for multiple images, standard for single images */}
          <div className="bg-slate-800/60 rounded-xl p-6 border border-slate-600/50">
            {currentProject.images && currentProject.images.length > 0 ? (
              /* Multiple Images Grid (for Peibo App) */
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {currentProject.images.map((image, index) => (
                  <div key={index} className="text-center">
                    <Image
                      src={image}
                      alt={`${currentProject.title} - Image ${index + 1}`}
                      width={300}
                      height={400}
                      className="w-full h-auto rounded-xl border border-slate-500/50"
                    />
                  </div>
                ))}
              </div>
            ) : (
              /* Standard Mobile/Desktop Layout */
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Mobile Version */}
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-white mb-4 flex items-center justify-center gap-2">
                    <span>📱</span>
                    Mobile
                  </h3>
                  <div className="max-w-sm mx-auto">
                    <Image
                      src={currentProject.mobile}
                      alt={`${currentProject.title} - Mobile`}
                      width={400}
                      height={800}
                      className="w-full h-auto rounded-xl border border-slate-500/50"
                    />
                  </div>
                </div>

                {/* Desktop Version */}
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-white mb-4 flex items-center justify-center gap-2">
                    <span>💻</span>
                    Desktop
                  </h3>
                  <div className="max-w-full">
                    <Image
                      src={currentProject.desktop}
                      alt={`${currentProject.title} - Desktop`}
                      width={1200}
                      height={800}
                      className="w-full h-auto rounded-xl border border-slate-500/50"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Project Tags */}
          <div className="mt-8 text-center">
            <h3 className="text-lg font-semibold text-white mb-4">
              Technologies & Skills
            </h3>
            <div className="flex flex-wrap gap-2 justify-center">
              {currentProject.tags.map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  className="px-4 py-2 bg-[#beff48]/10 text-[#beff48] text-sm rounded-full border border-[#beff48]/20"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
