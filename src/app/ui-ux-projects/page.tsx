"use client";

import { content } from "@/data/content";
import { useState } from "react";
import Navigation from "@/components/Navigation";
import ProjectModal from "@/components/ProjectModal";
import ProjectCard from "@/components/ProjectCard";
import WireframeCard from "@/components/WireframeCard";
import WireframeModal from "@/components/WireframeModal";

export default function UIUXProjects() {
  const [language, setLanguage] = useState("en");
  const [selectedProjectIndex, setSelectedProjectIndex] = useState<
    number | null
  >(null);
  const [selectedWireframeIndex, setSelectedWireframeIndex] = useState<
    number | null
  >(null);
  const [activeFilter, setActiveFilter] = useState<"all" | "designs" | "wires">(
    "all"
  );
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

  const openWireframeModal = (wireframeIndex: number) => {
    setSelectedWireframeIndex(wireframeIndex);
  };

  const closeWireframeModal = () => {
    setSelectedWireframeIndex(null);
  };

  const navigateToWireframe = (newIndex: number) => {
    setSelectedWireframeIndex(newIndex);
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
    {
      mobile: "/images/uiux/JewelersMutualMobile.png",
      desktop: "/images/uiux/JewelersMutualDesktop.png",
      title:
        language === "en"
          ? "Jewelers Mutual - Insurance Platform"
          : "Jewelers Mutual - Plataforma de Seguros",
      description:
        language === "en"
          ? "Insurance platform for jewelry businesses with comprehensive coverage options, claims management, and business protection services. Clean, professional design with trust-building elements."
          : "Plataforma de seguros para negocios de joyería con opciones de cobertura integral, gestión de reclamos y servicios de protección empresarial. Diseño limpio y profesional con elementos que generan confianza.",
      tags:
        language === "en"
          ? [
              "Insurance",
              "Business Platform",
              "Claims Management",
              "Professional Design",
              "Trust Building",
            ]
          : [
              "Seguros",
              "Plataforma Empresarial",
              "Gestión de Reclamos",
              "Diseño Profesional",
              "Generación de Confianza",
            ],
    },
    {
      mobile: "/images/uiux/PeiboAppMobile.png",
      desktop: "/images/uiux/PeiboAppDesktop.png",
      title:
        language === "en"
          ? "Peibo App - Mobile Application"
          : "Peibo App - Aplicación Móvil",
      description:
        language === "en"
          ? "Complete mobile application design and development for Peibo, featuring intuitive user interface, seamless navigation, and modern design principles. Built with responsive design and user-centered approach."
          : "Diseño y desarrollo completo de aplicación móvil para Peibo, con interfaz de usuario intuitiva, navegación fluida y principios de diseño moderno. Construida con diseño responsivo y enfoque centrado en el usuario.",
      tags:
        language === "en"
          ? [
              "Mobile App",
              "UI/UX Design",
              "Responsive Design",
              "User Interface",
              "Modern Design",
            ]
          : [
              "App Móvil",
              "Diseño UI/UX",
              "Diseño Responsivo",
              "Interfaz de Usuario",
              "Diseño Moderno",
            ],
      images: [
        "/images/uiux/PeiboApp1.png",
        "/images/uiux/PeiboApp2.png",
        "/images/uiux/PeiboApp3.png",
        "/images/uiux/PeiboApp4.png",
        "/images/uiux/PeiboApp5.png",
        "/images/uiux/PeiboApp6.png",
        "/images/uiux/PeiboApp7.png",
        "/images/uiux/PeiboApp8.png",
        "/images/uiux/PeiboApp9.png",
      ],
    },
  ];

  const wireframeProjects = [
    {
      image: "/images/uiux/WireDMI.png",
      title:
        language === "en"
          ? "DMI - Wireframes & Prototypes"
          : "DMI - Wireframes y Prototipos",
      description:
        language === "en"
          ? "Comprehensive wireframe and interactive prototype design for DMI platform. Features user flow mapping, interface wireframes, and clickable prototypes showcasing the complete user journey and interaction patterns."
          : "Diseño integral de wireframes y prototipos interactivos para la plataforma DMI. Incluye mapeo de flujos de usuario, wireframes de interfaz y prototipos clicables que muestran el viaje completo del usuario y patrones de interacción.",
      tags:
        language === "en"
          ? [
              "Wireframes",
              "Interactive Prototypes",
              "User Flow",
              "Figma",
              "UX Design",
            ]
          : [
              "Wireframes",
              "Prototipos Interactivos",
              "Flujo de Usuario",
              "Figma",
              "Diseño UX",
            ],
      figmaLink:
        "https://www.figma.com/proto/qqeye3oskIYh49j1Q1mphN/DMI-Farmer-s-Wireframes_UI?page-id=271%3A53&node-id=514-3416&viewport=-2704%2C1266%2C0.21&t=n6uCDEOcZgekMan0-1&scaling=scale-down-width&content-scaling=fixed",
    },
    {
      image: "/images/uiux/PetPlaceApp.png",
      title:
        language === "en"
          ? "PetPlace App - Interactive Prototype"
          : "PetPlace App - Prototipo Interactivo",
      description:
        language === "en"
          ? "Interactive mobile app prototype for PetPlace, a comprehensive pet care platform. Features user onboarding, pet profiles, booking system, and community features with smooth transitions and intuitive navigation patterns."
          : "Prototipo interactivo de aplicación móvil para PetPlace, una plataforma integral de cuidado de mascotas. Incluye incorporación de usuarios, perfiles de mascotas, sistema de reservas y funciones comunitarias con transiciones suaves y patrones de navegación intuitivos.",
      tags:
        language === "en"
          ? [
              "Mobile App",
              "Interactive Prototype",
              "Pet Care",
              "User Onboarding",
              "Booking System",
            ]
          : [
              "App Móvil",
              "Prototipo Interactivo",
              "Cuidado de Mascotas",
              "Incorporación de Usuarios",
              "Sistema de Reservas",
            ],
      figmaLink:
        "https://www.figma.com/proto/TLIXL3zN66VB5VKqZCClga/PetPlace-_-RFP-2?page-id=538%3A79&node-id=538-80&viewport=226%2C246%2C0.14&t=d8HLRtH9rFTxRI7n-1&scaling=scale-down&content-scaling=fixed",
    },
    {
      image: "/images/uiux/ACIPrototype.png",
      title:
        language === "en"
          ? "ACI Location Finder - Interactive Prototype"
          : "ACI Localizador - Prototipo Interactivo",
      description:
        language === "en"
          ? "**Click Illinois and later Use my Location for the prototype.**\n\nInteractive location finder prototype with map integration and search functionality."
          : "**Haz clic en Illinois y luego en Usar mi Ubicación para el prototipo.**\n\nPrototipo interactivo de localizador con integración de mapas y funcionalidad de búsqueda.",
      tags:
        language === "en"
          ? [
              "Location Finder",
              "Interactive Prototype",
              "Map Integration",
              "Search Functionality",
              "Modern UI",
            ]
          : [
              "Localizador",
              "Prototipo Interactivo",
              "Integración de Mapas",
              "Funcionalidad de Búsqueda",
              "UI Moderna",
            ],
      figmaLink:
        "https://www.figma.com/proto/NbpI3h1SbTZoClFXSnJf1L/ACI-Location-Finder?page-id=652%3A518&node-id=652-909&viewport=413%2C210%2C0.09&t=Uf34sswjvaMMoBen-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=652%3A909",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-slate-950 to-slate-900">
      <Navigation language={language} setLanguage={setLanguage} />

      {/* Hero Section */}
      <section className="pt-32 pb-0 px-4 sm:px-6 lg:px-8">
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

      {/* Filter Buttons */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <button
              onClick={() => setActiveFilter("all")}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeFilter === "all"
                  ? "bg-[#beff48] text-black"
                  : "bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white"
              }`}
            >
              {language === "en" ? "All Projects" : "Todos los Proyectos"}
            </button>
            <button
              onClick={() => setActiveFilter("designs")}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeFilter === "designs"
                  ? "bg-[#beff48] text-black"
                  : "bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white"
              }`}
            >
              {language === "en"
                ? "Designs & Development"
                : "Diseños y Desarrollo"}
            </button>
            <button
              onClick={() => setActiveFilter("wires")}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeFilter === "wires"
                  ? "bg-[#beff48] text-black"
                  : "bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white"
              }`}
            >
              {language === "en"
                ? "Wires & Prototypes"
                : "Wireframes y Prototipos"}
            </button>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      {(activeFilter === "all" || activeFilter === "designs") && (
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {language === "en"
                  ? "Designs & Development"
                  : "Diseños y Desarrollo"}
              </h2>
              <p className="text-lg text-slate-300">
                {language === "en"
                  ? "Complete UI/UX designs and web development projects"
                  : "Diseños completos de UI/UX y proyectos de desarrollo web"}
              </p>
            </div>
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
      )}

      {/* Wireframes & Prototypes Section */}
      {(activeFilter === "all" || activeFilter === "wires") && (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/40">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                {language === "en"
                  ? "Wireframes & Prototypes 📐"
                  : "Wireframes y Prototipos 📐"}
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                {language === "en"
                  ? "Interactive wireframes and clickable prototypes showcasing user flows and design thinking"
                  : "Wireframes interactivos y prototipos clicables que muestran flujos de usuario y pensamiento de diseño"}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {wireframeProjects.map((project, index) => (
                <WireframeCard
                  key={index}
                  project={project}
                  index={index}
                  onClick={openWireframeModal}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Project Modal */}
      <ProjectModal
        projects={projects}
        currentProjectIndex={selectedProjectIndex || 0}
        isOpen={selectedProjectIndex !== null}
        onClose={closeModal}
        onNavigate={navigateToProject}
      />

      {/* Wireframe Modal */}
      <WireframeModal
        projects={wireframeProjects}
        currentProjectIndex={selectedWireframeIndex || 0}
        isOpen={selectedWireframeIndex !== null}
        onClose={closeWireframeModal}
        onNavigate={navigateToWireframe}
      />
    </div>
  );
}
