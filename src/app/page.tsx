"use client";

import Image from "next/image";
import { useState } from "react";
import { content } from "@/data/content";
import Navigation from "@/components/Navigation";
import ProjectModal from "@/components/ProjectModal";
import ProjectCard from "@/components/ProjectCard";
import VideoCard from "@/components/VideoCard";
import VideoModal from "@/components/VideoModal";

export default function Home() {
  const [language, setLanguage] = useState("en");
  const [selectedProjectIndex, setSelectedProjectIndex] = useState<
    number | null
  >(null);
  const [selectedVideoIndex, setSelectedVideoIndex] = useState<number | null>(
    null
  );
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const t = content[language as keyof typeof content];

  const openModal = (projectIndex: number) => {
    setSelectedProjectIndex(projectIndex);
  };

  const closeModal = () => {
    setSelectedProjectIndex(null);
  };

  const openVideoModal = (videoIndex: number) => {
    setSelectedVideoIndex(videoIndex);
    setIsVideoModalOpen(true);
  };

  const closeVideoModal = () => {
    setIsVideoModalOpen(false);
    setSelectedVideoIndex(null);
  };

  const navigateToProject = (newIndex: number) => {
    setSelectedProjectIndex(newIndex);
  };

  const navigateToVideo = (newIndex: number) => {
    setSelectedVideoIndex(newIndex);
  };

  const projects = [
    {
      mobile: "/images/uiux/PeiboMobile.png",
      desktop: "/images/uiux/PeiboDesktop.png",
      title: t.work.project3.title,
      description: t.work.project3.description,
      tags: t.work.project3.tags,
    },
    {
      mobile: "/images/uiux/EatPecanMobile.png",
      desktop: "/images/uiux/EatPecanDesktop.png",
      title: t.work.project5.title,
      description: t.work.project5.description,
      tags: t.work.project5.tags,
    },
    {
      mobile: "/images/uiux/PetPlaceMobile.png",
      desktop: "/images/uiux/PetPlaceDesktop.png",
      title: t.work.project2.title,
      description: t.work.project2.description,
      tags: t.work.project2.tags,
    },
  ];

  const topInteractiveProjects = [
    {
      id: "1",
      title: "Animation Reel - Full Portfolio",
      description:
        "Complete animation and motion graphics showcase featuring various projects and creative work",
      url: "https://youtu.be/hYn1ivLxXzk",
      isShorts: false,
    },
    {
      id: "2",
      title: "Motion Design Showcase",
      description:
        "Professional motion graphics and animation work demonstrating advanced techniques",
      url: "https://youtu.be/pmdXltfHMhU",
      isShorts: false,
    },
    {
      id: "3",
      title: "Brand Identity Motion",
      description:
        "Creative brand animation showcasing logo design and visual identity elements",
      url: "https://youtu.be/fjJ-iRsgNcw",
      isShorts: false,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-slate-950 to-slate-900">
      {/* Navigation */}
      <Navigation language={language} setLanguage={setLanguage} />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#beff48]/10 text-[#beff48] text-sm font-medium mb-6 border border-[#beff48]/20">
              <span className="w-2 h-2 bg-[#beff48] rounded-full mr-2 animate-pulse"></span>
              {t.hero.available}
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            {t.hero.title}
            <span className="block text-[#beff48]">{t.hero.subtitle}</span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            {t.hero.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="px-8 py-4 bg-[#beff48] text-black font-semibold rounded-xl hover:bg-[#a3e635] transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl glow-primary">
              {t.hero.viewWork}
            </button>
            <a
              href={
                language === "en"
                  ? "/documents/CV-Rodrigo-Barba-EN.pdf"
                  : "/documents/CV-Rodrigo-Barba-ES.pdf"
              }
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border-2 border-slate-700 text-slate-300 font-semibold rounded-xl hover:border-[#beff48] hover:text-[#beff48] transition-all duration-200"
            >
              {t.hero.downloadResume}
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/40">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6 rounded-2xl bg-black/60 backdrop-blur-sm border border-slate-800/50 hover:border-[#beff48]/30 transition-all duration-300">
              <div className="text-4xl font-bold text-[#beff48] mb-2">50+</div>
              <div className="text-slate-300">{t.stats.projects}</div>
            </div>
            <div className="p-6 rounded-2xl bg-black/60 backdrop-blur-sm border border-slate-800/50 hover:border-[#beff48]/30 transition-all duration-300">
              <div className="text-4xl font-bold text-[#beff48] mb-2">10+</div>
              <div className="text-slate-300">{t.stats.experience}</div>
            </div>
            <div className="p-6 rounded-2xl bg-black/60 backdrop-blur-sm border border-slate-800/50 hover:border-[#beff48]/30 transition-all duration-300">
              <div className="text-4xl font-bold text-[#beff48] mb-2">100%</div>
              <div className="text-slate-300">{t.stats.satisfaction}</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">
                {t.about.title}
              </h2>
              <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                {t.about.description1}
              </p>
              <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                {t.about.description2}
              </p>
              <div className="flex space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-[#beff48] to-[#a3e635] rounded-xl flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-black"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                    />
                  </svg>
                </div>
                <div className="w-12 h-12 bg-gradient-to-r from-[#a3e635] to-[#beff48] rounded-xl flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-black"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                    />
                  </svg>
                </div>
                <div className="w-12 h-12 bg-gradient-to-r from-[#beff48] to-[#d4ff7a] rounded-xl flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-black"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 002 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-[500px] rounded-3xl overflow-hidden border border-slate-800/50 bg-black p-4">
                <Image
                  src="/images/main-hero.png"
                  alt="Rodrigo Barba - UI/UX Designer & Developer"
                  width={400}
                  height={400}
                  className="w-full h-full object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* UI/UX & Development Projects */}
      <section id="work" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {t.work.title}
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              {t.work.subtitle}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                project={project}
                index={index}
                onClick={openModal}
              />
            ))}
          </div>
          <div className="text-center">
            <a
              href="/ui-ux-projects"
              className="inline-flex items-center px-8 py-4 bg-[#beff48] text-black font-semibold rounded-xl hover:bg-[#a3e635] transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              {language === "en"
                ? "View All UI/UX Projects"
                : "Ver Todos los Proyectos UI/UX"}
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Top Interactive Projects */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/40">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {language === "en"
                ? "Top Interactive Projects 🎭"
                : "Proyectos Interactivos Destacados 🎭"}
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              {language === "en"
                ? "A selection of my best motion graphics and video animations"
                : "Una selección de mis mejores gráficos en movimiento y animaciones de video"}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {topInteractiveProjects.map((video, index) => (
              <VideoCard
                key={video.id}
                video={video}
                onClick={() => openVideoModal(index)}
              />
            ))}
          </div>

          <div className="text-center">
            <a
              href="/interactive-projects"
              className="inline-flex items-center px-8 py-4 bg-[#beff48] text-black font-semibold rounded-xl hover:bg-[#a3e635] transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              {language === "en"
                ? "View All Interactive Projects"
                : "Ver Todos los Proyectos Interactivos"}
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-black/40">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              {t.skills.title}
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              {t.skills.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Design Skills */}
            <div className="p-8 rounded-2xl bg-black/60 backdrop-blur-sm border border-slate-800/50 hover:border-[#beff48]/30 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-[#beff48] to-[#a3e635] rounded-2xl flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-black"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                {t.skills.design}
              </h3>
              <ul className="space-y-2 text-slate-300">
                {t.skills.designSkills.map((skill, index) => (
                  <li key={index}>• {skill}</li>
                ))}
              </ul>
            </div>

            {/* Interactive Skills */}
            <div className="p-8 rounded-2xl bg-black/60 backdrop-blur-sm border border-slate-800/50 hover:border-[#beff48]/30 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-[#a3e635] to-[#beff48] rounded-2xl flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-black"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                {t.skills.interaction}
              </h3>
              <ul className="space-y-2 text-slate-300">
                {t.skills.interactionSkills.map((skill, index) => (
                  <li key={index}>• {skill}</li>
                ))}
              </ul>
            </div>

            {/* Development Skills */}
            <div className="p-8 rounded-2xl bg-black/60 backdrop-blur-sm border border-slate-800/50 hover:border-[#beff48]/30 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-[#a3e635] to-[#beff48] rounded-2xl flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-black"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                {t.skills.development}
              </h3>
              <ul className="space-y-2 text-slate-300">
                {t.skills.devSkills.map((skill, index) => (
                  <li key={index}>• {skill}</li>
                ))}
              </ul>
            </div>

            {/* AI Skills */}
            <div className="p-8 rounded-2xl bg-black/60 backdrop-blur-sm border border-slate-800/50 hover:border-[#beff48]/30 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-[#d4ff7a] to-[#beff48] rounded-2xl flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-black"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                {t.skills.ai}
              </h3>
              <ul className="space-y-2 text-slate-300">
                {t.skills.aiSkills.map((skill, index) => (
                  <li key={index}>• {skill}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {language === "en"
              ? "Let's Work Together! 🚀"
              : "¡Trabajemos Juntos! 🚀"}
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            {language === "en"
              ? "Ready to bring your ideas to life? Let's create something amazing together."
              : "¿Listo para dar vida a tus ideas? Creemos algo increíble juntos."}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:rodrigo@example.com"
              className="inline-flex items-center px-8 py-4 bg-[#beff48] text-black font-semibold rounded-xl hover:bg-[#a3e635] transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              {language === "en" ? "Get In Touch ✨" : "Ponte en Contacto ✨"}
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-black text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="text-2xl font-bold text-[#beff48] mb-4">
                Rodrigo Barba
              </div>
              <p className="text-slate-400 mb-4 max-w-md">
                {t.footer.description}
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/in/rodrigo-barba-chao-0345b2193/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center hover:bg-[#beff48] hover:text-black transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.047-1.852-3.047-1.853 0-2.136 1.445-2.136 2.939v5.677H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">
                {t.footer.quickLinks}
              </h3>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <a
                    href="#about"
                    className="hover:text-[#beff48] transition-colors"
                  >
                    {t.nav.about}
                  </a>
                </li>
                <li>
                  <a
                    href="/ui-ux-projects"
                    className="hover:text-[#beff48] transition-colors"
                  >
                    UI/UX Projects
                  </a>
                </li>
                <li>
                  <a
                    href="/interactive-projects"
                    className="hover:text-[#beff48] transition-colors"
                  >
                    Interactive Projects
                  </a>
                </li>
                <li>
                  <a
                    href="#skills"
                    className="hover:text-[#beff48] transition-colors"
                  >
                    {t.nav.skills}
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="hover:text-[#beff48] transition-colors"
                  >
                    {t.nav.contact}
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">{t.footer.contact}</h3>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <a
                    href="mailto:rodrigobarbachao@gmail.com"
                    className="hover:text-[#beff48] transition-colors"
                  >
                    rodrigobarbachao@gmail.com
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+525567088593"
                    className="hover:text-[#beff48] transition-colors"
                  >
                    +52 55 67 088593
                  </a>
                </li>
                <li>Mexico City, Mexico</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
            <p>{t.footer.copyright}</p>
          </div>
        </div>
      </footer>

      {/* Project Modal */}
      <ProjectModal
        projects={projects}
        currentProjectIndex={selectedProjectIndex || 0}
        isOpen={selectedProjectIndex !== null}
        onClose={closeModal}
        onNavigate={navigateToProject}
      />

      {/* Video Modal */}
      <VideoModal
        videos={topInteractiveProjects}
        currentVideoIndex={selectedVideoIndex || 0}
        isOpen={isVideoModalOpen}
        onClose={closeVideoModal}
        onNavigate={navigateToVideo}
      />
    </div>
  );
}
