import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen bg-[#050505] text-[#eee]">
      <Navbar />

      <main className="flex-1 flex flex-col items-center justify-center text-center px-6 py-32 hero-radial-bg relative">
        <div
          className="absolute text-[180px] sm:text-[260px] font-cinzel font-bold text-[#ff2a3b]/[0.05] select-none pointer-events-none"
          aria-hidden="true"
        >
          404
        </div>

        <div className="relative z-10 max-w-md">
          <span className="text-[11px] font-mono tracking-[0.3em] uppercase text-[#ff2a3b] block mb-3">
            VIEWPORT ERROR // ASSET NOT FOUND
          </span>
          <h1 className="font-cinzel text-4xl sm:text-5xl text-white font-bold mb-4">
            RENDER LOST IN SPACE
          </h1>
          <p className="text-sm text-[#888888] leading-relaxed mb-8">
            The project or geometry coordinates you requested do not exist in the active 3D scene.
          </p>

          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#ff2a3b] text-white font-cinzel text-xs font-semibold tracking-[0.2em] uppercase hover:bg-[#e50914] hover:shadow-[0_0_25px_rgba(255,42,59,0.5)] transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>RETURN TO PORTFOLIO</span>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
