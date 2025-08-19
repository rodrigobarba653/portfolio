"use client";

import { content } from "@/data/content";
import { useState } from "react";
import Navigation from "@/components/Navigation";
import ProjectModal from "@/components/ProjectModal";
import ProjectCard from "@/components/ProjectCard";

export default function UIUXProjects() {
  const [language, setLanguage] = useState("en");
  const [selectedProjectIndex, setSelectedProjectIndex] = useState<
    number | null
  >(null);
  const t = content[language as keyof typeof content];

  const openModal = (projectIndex: number) => {
    setSelectedProjectIndex(projectIndex);
  };

  const closeModal = () => {
    setSelectedProjectIndex(null);
  };

  const navigateToProject = (newIndex: number) => {
    setSelectedProjectIndex(newIndex);
  };

  const projects = [
    {
      mobile: "/images/uiux/LiberaTuCasaMobile.png",
      desktop: "/images/uiux/LiberaTuCasaDesktop.png",
      title: t.work.project1.title,
      description: t.work.project1.description,
      tags: t.work.project1.tags,
    },
    {
      mobile: "/images/uiux/PetPlaceMobile.png",
      desktop: "/images/uiux/PetPlaceDesktop.png",
      title: t.work.project2.title,
      description: t.work.project2.description,
      tags: t.work.project2.tags,
    },
    {
      mobile: "/images/uiux/PeiboMobile.png",
      desktop: "/images/uiux/PeiboDesktop.png",
      title: t.work.project3.title,
      description: t.work.project3.description,
      tags: t.work.project3.tags,
    },
    {
      mobile: "/images/uiux/CLRMobile.png",
      desktop: "/images/uiux/CLRDesktop.png",
      title: t.work.project4.title,
      description: t.work.project4.description,
      tags: t.work.project4.tags,
    },
    {
      mobile: "/images/uiux/EatPecanMobile.png",
      desktop: "/images/uiux/EatPecanDesktop.png",
      title: t.work.project5.title,
      description: t.work.project5.description,
      tags: t.work.project5.tags,
    },
    {
      mobile: "/images/uiux/AmericanVisionMobile.png",
      desktop: "/images/uiux/AmericanVisionDesktop.png",
      title: t.work.project6.title,
      description: t.work.project6.description,
      tags: t.work.project6.tags,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-slate-950 to-slate-900">
      <Navigation language={language} setLanguage={setLanguage} />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            UI/UX & Development
            <span className="block text-[#beff48]">Projects</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            {language === "en"
              ? "A showcase of my user interface designs, user experience solutions, and web development work"
              : "Una muestra de mis diseños de interfaz de usuario, soluciones de experiencia de usuario y trabajo de desarrollo web"}
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                project={project}
                index={index}
                onClick={openModal}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Project Modal */}
      <ProjectModal
        projects={projects}
        currentProjectIndex={selectedProjectIndex || 0}
        isOpen={selectedProjectIndex !== null}
        onClose={closeModal}
        onNavigate={navigateToProject}
      />
    </div>
  );
}
