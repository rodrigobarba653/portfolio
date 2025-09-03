"use client";

import Image from "next/image";

interface WireframeProject {
  image: string;
  title: string;
  description: string;
  tags: string[];
  figmaLink: string;
}

interface WireframeCardProps {
  project: WireframeProject;
  index: number;
  onClick: (index: number) => void;
}

export default function WireframeCard({
  project,
  index,
  onClick,
}: WireframeCardProps) {
  return (
    <div
      onClick={() => onClick(index)}
      className="group relative overflow-hidden rounded-2xl bg-black/60 border border-slate-800/50 hover:border-[#beff48]/30 transition-all duration-300 cursor-pointer hover:scale-105"
    >
      <div className="aspect-video overflow-hidden">
        <div className="p-6">
          <Image
            src={project.image}
            alt={`${project.title} - Wireframe`}
            width={400}
            height={225}
            className={`w-full h-full rounded-lg transition-transform duration-300 ${
              project.image.includes("PetPlaceApp")
                ? "object-cover"
                : "object-contain"
            }`}
          />
        </div>
      </div>

      {/* Figma Link - Right after image */}
      <div className="px-6 pb-4 pt-6">
        <a
          href={project.figmaLink}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="inline-flex items-center px-4 py-2 bg-[#beff48] text-black font-semibold rounded-lg hover:bg-[#a3e635] transition-colors duration-200 text-sm"
        >
          <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 12c0-3.172 0-4.758.732-5.964.732-1.206 2.05-1.964 4.686-1.964s3.954.758 4.686 1.964C23 7.242 23 8.828 23 12s0 4.758-.732 5.964c-.732 1.206-2.05 1.964-4.686 1.964s-3.954-.758-4.686-1.964C12 16.758 12 15.172 12 12z" />
            <path d="M12 12c0-3.172 0-4.758-.732-5.964C10.536 4.83 9.218 4.072 6.582 4.072s-3.954.758-4.686 1.964C1 7.242 1 8.828 1 12s0 4.758.732 5.964c.732 1.206 2.05 1.964 4.686 1.964s3.954-.758 4.686-1.964C12 16.758 12 15.172 12 12z" />
          </svg>
          View in Figma
        </a>
      </div>

      <div className="p-6 pt-0">
        <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
        <p className="text-slate-300 mb-4">
          {project.description.split("**").map((part, index) =>
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
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs text-slate-400">📐 Wireframes</span>
          <span className="text-xs text-slate-400">🎯 Prototypes</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, tagIndex) => (
            <span
              key={tagIndex}
              className="px-3 py-1 bg-[#beff48]/10 text-[#beff48] text-sm rounded-full border border-[#beff48]/20"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
