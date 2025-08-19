"use client";

interface VideoCardProps {
  video: {
    id: string;
    title: string;
    description: string;
    url: string;
    isShorts?: boolean;
  };
  onClick: () => void;
}

export default function VideoCard({ video, onClick }: VideoCardProps) {
  // Convert YouTube URLs to embed format
  const getEmbedUrl = (url: string) => {
    if (url.includes("youtube.com/shorts/")) {
      const shortId = url.split("youtube.com/shorts/")[1];
      return `https://www.youtube.com/embed/${shortId}?controls=0&showinfo=0&rel=0&modestbranding=1&disablekb=1&fs=0&iv_load_policy=3&cc_load_policy=0`;
    } else if (url.includes("youtu.be/")) {
      const videoId = url.split("youtu.be/")[1];
      return `https://www.youtube.com/embed/${videoId}?controls=0&showinfo=0&rel=0&modestbranding=1&disablekb=1&fs=0&iv_load_policy=3&cc_load_policy=0`;
    }
    return url;
  };

  const embedUrl = getEmbedUrl(video.url);

  return (
    <div
      onClick={onClick}
      className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800/60 to-slate-900/60 border border-slate-700/50 hover:border-[#beff48]/50 transition-all duration-300 cursor-pointer hover:scale-105 hover:shadow-2xl hover:shadow-[#beff48]/10"
    >
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#beff48]/20 via-transparent to-transparent"></div>
        <div className="absolute top-4 right-4 w-16 h-16 border border-[#beff48]/30 rounded-full animate-pulse"></div>
        <div className="absolute bottom-8 left-6 w-8 h-8 border border-[#beff48]/20 rounded-full animate-pulse delay-1000"></div>
      </div>

      {/* Embedded Video Preview */}
      <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
        <iframe
          src={embedUrl}
          title={video.title}
          className="absolute top-0 left-0 w-full h-full rounded-t-2xl pointer-events-none"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>

      {/* Content Container */}
      <div className="relative p-8">
        {/* Video Type Badge */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-[#beff48] rounded-full animate-pulse"></div>
            <span className="text-[#beff48] text-sm font-medium">
              {video.isShorts ? "SOCIAL" : "VIDEO"}
            </span>
          </div>
          {video.isShorts && (
            <div className="px-3 py-1 bg-[#beff48]/20 text-[#beff48] text-xs rounded-full border border-[#beff48]/30">
              SOCIAL
            </div>
          )}
        </div>

        {/* Title */}
        <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#beff48] transition-colors duration-300">
          {video.title}
        </h3>

        {/* Play Button */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-[#beff48] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <svg
                className="w-6 h-6 text-black ml-0.5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
            <span className="text-white font-medium">Watch Video</span>
          </div>

          {/* Arrow Icon */}
          <div className="w-8 h-8 bg-slate-700/50 rounded-full flex items-center justify-center group-hover:bg-[#beff48] group-hover:text-black transition-all duration-300">
            <svg
              className="w-4 h-4"
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
          </div>
        </div>

        {/* Hover Effect Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#beff48]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
    </div>
  );
}
