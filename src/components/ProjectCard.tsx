"use client";

import Image from "next/image";

interface Project {
  mobile: string;
  desktop: string;
  title: string;
  description: string;
  tags: string[];
  figmaLink?: string;
  images?: string[]; // Optional array for multiple images (like Peibo App)
}

interface ProjectCardProps {
  project: Project;
  index: number;
  onClick: (index: number) => void;
}

export default function ProjectCard({
  project,
  index,
  onClick,
}: ProjectCardProps) {
  return (
    <div
      onClick={() => onClick(index)}
      className="group relative overflow-hidden rounded-2xl bg-black/60 border border-slate-800/50 hover:border-[#beff48]/30 transition-all duration-300 cursor-pointer hover:scale-105"
    >
      <div className="aspect-video overflow-hidden">
        {project.images && project.images.length > 0 ? (
          /* Multiple Images Grid (for Peibo App) */
          <div className="grid grid-cols-2 md:grid-cols-4 gap-1 p-4">
            {project.images.slice(0, 8).map((image, index) => (
              <div key={index} className="text-center">
                <Image
                  src={image}
                  alt={`${project.title} - Image ${index + 1}`}
                  width={150}
                  height={200}
                  className="w-full h-full object-cover rounded-lg transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        ) : (
          /* Standard Mobile/Desktop Layout */
          <div className="flex gap-2 p-7">
            <div className="w-1/2">
              <Image
                src={project.mobile}
                alt={`${project.title} - Mobile Version`}
                width={200}
                height={225}
                className="w-full object-contain rounded-lg  transition-transform duration-300"
              />
            </div>
            <div className="w-1/2">
              <Image
                src={project.desktop}
                alt={`${project.title} - Desktop Version`}
                width={400}
                height={225}
                className="w-full object-contain rounded-lg  transition-transform duration-300"
              />
            </div>
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
        <p className="text-slate-300 mb-4">{project.description}</p>
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs text-slate-400">📱 Mobile</span>
          <span className="text-xs text-slate-400">💻 Desktop</span>
        </div>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, tagIndex) => (
            <span
              key={tagIndex}
              className="px-3 py-1 bg-[#beff48]/10 text-[#beff48] text-sm rounded-full border border-[#beff48]/20"
            >
              {tag}
            </span>
          ))}
        </div>
        {project.figmaLink && (
          <a
            href={project.figmaLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center px-4 py-2 bg-[#beff48] text-black font-semibold rounded-lg hover:bg-[#a3e635] transition-colors duration-200 text-sm"
          >
            <svg
              className="w-4 h-4 mr-2"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 12c0-3.172 0-4.758.732-5.964.732-1.206 2.05-1.964 4.686-1.964s3.954.758 4.686 1.964C23 7.242 23 8.828 23 12s0 4.758-.732 5.964c-.732 1.206-2.05 1.964-4.686 1.964s-3.954-.758-4.686-1.964C12 16.758 12 15.172 12 12z" />
              <path d="M12 12c0-3.172 0-4.758-.732-5.964C10.536 4.83 9.218 4.072 6.582 4.072s-3.954.758-4.686 1.964C1 7.242 1 8.828 1 12s0 4.758.732 5.964c.732 1.206 2.05 1.964 4.686 1.964s3.954-.758 4.686-1.964C12 16.758 12 15.172 12 12z" />
            </svg>
            View in Figma
          </a>
        )}
      </div>
    </div>
  );
}
