"use client";

import Image from "next/image";

interface Project {
  mobile: string;
  desktop: string;
  title: string;
  description: string;
  tags: string[];
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
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
        <p className="text-slate-300 mb-4">{project.description}</p>
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs text-slate-400">📱 Mobile</span>
          <span className="text-xs text-slate-400">💻 Desktop</span>
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
