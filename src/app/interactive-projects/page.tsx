"use client";

import { useState } from "react";
import Navigation from "@/components/Navigation";
import VideoCard from "@/components/VideoCard";
import VideoModal from "@/components/VideoModal";

export default function InteractiveProjects() {
  const [language, setLanguage] = useState("en");
  const [selectedVideoIndex, setSelectedVideoIndex] = useState<number | null>(
    null
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openVideoModal = (videoIndex: number) => {
    setSelectedVideoIndex(videoIndex);
    setIsModalOpen(true);
  };

  const closeVideoModal = () => {
    setIsModalOpen(false);
    setSelectedVideoIndex(null);
  };

  const navigateToVideo = (newIndex: number) => {
    setSelectedVideoIndex(newIndex);
  };

  const regularVideos = [
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
      title: "Rise Happy Holidays",
      description:
        "Dynamic product showcase with smooth animations and engaging visual effects",
      url: "https://youtu.be/lTHN6K1Xjuo",
      isShorts: false,
    },
    {
      id: "3",
      title: "Ninjatrader Live",
      description:
        "Creative brand animation showcasing logo design and visual identity elements",
      url: "https://youtu.be/fjJ-iRsgNcw",
      isShorts: false,
    },
    {
      id: "4",
      title: "Ninjatrader Challenges",
      description:
        "Interactive interface animations demonstrating user experience and design principles",
      url: "https://youtu.be/_GnJRpkBLB8",
      isShorts: false,
    },
    {
      id: "5",
      title: "Rise Happy Holidays V2",
      description:
        "Professional motion graphics and animation work demonstrating advanced techniques",
      url: "https://youtu.be/pmdXltfHMhU",
      isShorts: false,
    },
  ];

  const shortsVideos = [
    {
      id: "6",
      title: "Avant Ambition",
      description:
        "Engaging short-form content designed for social media platforms",
      url: "https://youtube.com/shorts/jZMKCU2C-rc",
      isShorts: true,
    },
    {
      id: "7",
      title: "Ninjatrader MOLOCO",
      description:
        "Innovative motion design showcasing creative techniques and visual storytelling",
      url: "https://youtube.com/shorts/NtmoIftxYmM",
      isShorts: true,
    },
    {
      id: "8",
      title: "Avant Better Life",
      description:
        "Quick brand identity animation showcasing logo design and visual elements",
      url: "https://youtube.com/shorts/P654kjscwBc",
      isShorts: true,
    },
    {
      id: "9",
      title: "Avant No Hidden Fees",
      description:
        "Dynamic product animation with smooth transitions and engaging visuals",
      url: "https://youtube.com/shorts/Q4TJrZWvztU",
      isShorts: true,
    },
    {
      id: "10",
      title: "Avant New Credit Card",
      description:
        "Innovative short-form animation demonstrating creative motion design",
      url: "https://youtube.com/shorts/bgkrfgHTA3s",
      isShorts: true,
    },
    {
      id: "11",
      title: "WOW BAO V1",
      description:
        "Collection of motion graphics work showcasing various animation styles",
      url: "https://youtube.com/shorts/O0ZkmJBSe80",
      isShorts: true,
    },
    {
      id: "12",
      title: "Innovage Programmatic",
      description: "Quick brand animation with smooth motion and visual appeal",
      url: "https://youtube.com/shorts/VUndDbT7lZA",
      isShorts: true,
    },
    {
      id: "13",
      title: "WOW BAO V2",
      description:
        "Creative animation work demonstrating motion graphics expertise",
      url: "https://youtube.com/shorts/hYpn4Z9LvvE",
      isShorts: true,
    },
    {
      id: "14",
      title: "Jeweller's Mutual Social",
      description:
        "Professional motion design work showcasing animation skills",
      url: "https://youtube.com/shorts/kLNiz0_dZ_8",
      isShorts: true,
    },
  ];

  // Combine all videos for the carousel
  const allVideos = [...regularVideos, ...shortsVideos];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-slate-950 to-slate-900">
      <Navigation language={language} setLanguage={setLanguage} />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Interactive Design
            <span className="block text-[#beff48]">Projects</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            {language === "en"
              ? "A showcase of my motion graphics, video animations, and social media content"
              : "Una muestra de mis gráficos en movimiento, animaciones de video y contenido para redes sociales"}
          </p>
        </div>
      </section>

      {/* Regular Videos Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Featured Animation Reel - Bigger Card */}
          <div className="mb-16">
            <div className="max-w-4xl mx-auto">
              <VideoCard
                video={regularVideos[0]}
                onClick={() => openVideoModal(0)}
              />
            </div>
          </div>

          {/* Other Regular Videos Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularVideos.slice(1).map((video, index) => (
              <VideoCard
                key={video.id}
                video={video}
                onClick={() => openVideoModal(index + 1)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* YouTube Shorts Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/40">
        <div className="max-w-7xl mx-auto">
          {/* Shorts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {shortsVideos.map((video, index) => (
              <VideoCard
                key={video.id}
                video={video}
                onClick={() => openVideoModal(regularVideos.length + index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Video Modal */}
      <VideoModal
        videos={allVideos}
        currentVideoIndex={selectedVideoIndex || 0}
        isOpen={isModalOpen}
        onClose={closeVideoModal}
        onNavigate={navigateToVideo}
      />
    </div>
  );
}
