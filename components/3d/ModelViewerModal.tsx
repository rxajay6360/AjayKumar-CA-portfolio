"use client";

import { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Float } from "@react-three/drei";
import * as THREE from "three";
import { X, Box, Layers, Sun, RotateCcw, Eye } from "lucide-react";

interface ModelViewerModalProps {
  isOpen: boolean;
  onClose: () => void;
  projectTitle: string;
  category: string;
}

// Procedural 3D Asset Geometry for Real-Time Inspection
function AssetMesh({
  renderMode,
}: {
  renderMode: "pbr" | "wireframe" | "clay" | "normals";
}) {
  const meshRef = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.15;
    }
  });

  return (
    <group ref={meshRef}>
      {/* Hero 3D Prop Structure */}
      <mesh castShadow receiveShadow>
        <dodecahedronGeometry args={[1.5, 1]} />
        {renderMode === "pbr" && (
          <meshStandardMaterial
            color="#22252a"
            metalness={0.9}
            roughness={0.2}
            emissive="#ff2a3b"
            emissiveIntensity={0.2}
          />
        )}
        {renderMode === "wireframe" && (
          <meshBasicMaterial color="#00f3ff" wireframe />
        )}
        {renderMode === "clay" && (
          <meshStandardMaterial color="#888888" roughness={0.9} metalness={0.0} />
        )}
        {renderMode === "normals" && <meshNormalMaterial />}
      </mesh>

      {/* Support Mechanical Core Accent */}
      <mesh position={[0, -1.8, 0]}>
        <cylinderGeometry args={[0.3, 0.5, 1.2, 32]} />
        {renderMode === "wireframe" ? (
          <meshBasicMaterial color="#ff2a3b" wireframe />
        ) : (
          <meshStandardMaterial color="#d49755" metalness={0.95} roughness={0.15} />
        )}
      </mesh>
    </group>
  );
}

export default function ModelViewerModal({
  isOpen,
  onClose,
  projectTitle,
  category,
}: ModelViewerModalProps) {
  const [renderMode, setRenderMode] = useState<"pbr" | "wireframe" | "clay" | "normals">("pbr");
  const [lightingPreset, setLightingPreset] = useState<"cinematic" | "studio" | "neutral">("cinematic");

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10 bg-black/90 backdrop-blur-xl animate-in fade-in duration-300">
      {/* Outer Viewport Container */}
      <div className="relative w-full max-w-5xl h-[85vh] bg-[#08080a] border border-white/15 rounded-lg overflow-hidden flex flex-col shadow-[0_25px_70px_rgba(0,0,0,0.95),0_0_40px_rgba(255,42,59,0.2)]">
        {/* Header Toolbar */}
        <div className="px-6 py-4 bg-[#0d0d10] border-b border-white/10 flex items-center justify-between z-10">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-[#ff2a3b] animate-beacon" />
            <div>
              <span className="text-[10px] font-mono tracking-widest text-[#888888] uppercase block">
                3D REALTIME VIEWPORT // {category}
              </span>
              <h3 className="font-cinzel text-lg text-white font-bold tracking-wide">
                {projectTitle}
              </h3>
            </div>
          </div>

          {/* Close Action */}
          <button
            onClick={onClose}
            className="p-2 rounded bg-white/[0.04] border border-white/10 text-white/80 hover:text-[#ff2a3b] hover:border-[#ff2a3b] transition-all"
            aria-label="Close 3D Viewport"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* 3D Canvas Body */}
        <div className="flex-1 relative bg-gradient-to-b from-[#0a0a0d] via-[#050507] to-[#020203] overflow-hidden">
          {/* Interactive Navigation Hint */}
          <div className="absolute top-4 left-6 z-10 pointer-events-none text-[11px] font-mono text-[#777777] bg-black/60 px-3 py-1.5 rounded border border-white/10 backdrop-blur-sm">
            <span>DRAG TO ROTATE &bull; SCROLL TO ZOOM</span>
          </div>

          {/* Canvas */}
          <Suspense
            fallback={
              <div className="w-full h-full flex items-center justify-center text-xs font-mono text-[#888888]">
                INITIALIZING THREE.JS VIEWPORT...
              </div>
            }
          >
            <Canvas
              camera={{ position: [0, 0, 5], fov: 45 }}
              dpr={[1, 1.5]}
              gl={{ antialias: true, alpha: true }}
            >
              <OrbitControls
                enablePan={true}
                enableZoom={true}
                enableRotate={true}
                maxDistance={9}
                minDistance={2.5}
              />

              <ambientLight intensity={lightingPreset === "studio" ? 0.8 : 0.35} />

              {lightingPreset === "cinematic" && (
                <>
                  <directionalLight position={[4, 5, 4]} intensity={3} color="#ffffff" />
                  <directionalLight position={[-4, -3, -4]} intensity={5} color="#ff2a3b" />
                  <pointLight position={[0, -2, -2]} intensity={3} color="#ff2a3b" />
                </>
              )}

              {lightingPreset === "studio" && (
                <>
                  <directionalLight position={[5, 6, 5]} intensity={3.5} color="#ffffff" />
                  <directionalLight position={[-5, 4, 3]} intensity={2} color="#ffe8cc" />
                  <directionalLight position={[0, -4, -3]} intensity={1.5} color="#d49755" />
                </>
              )}

              {lightingPreset === "neutral" && (
                <>
                  <directionalLight position={[0, 8, 4]} intensity={2.5} color="#ffffff" />
                  <directionalLight position={[0, -8, -4]} intensity={1.5} color="#cccccc" />
                </>
              )}

              <Float speed={1.2} rotationIntensity={0.2} floatIntensity={0.3}>
                <AssetMesh renderMode={renderMode} />
              </Float>
            </Canvas>
          </Suspense>

          {/* Viewport Floating Mode Controls */}
          <div className="absolute bottom-6 left-6 right-6 z-10 flex flex-wrap items-center justify-between gap-4 pointer-events-none">
            {/* Shading Mode Tabs */}
            <div className="flex items-center gap-1.5 bg-black/80 backdrop-blur-md p-1 rounded-lg border border-white/10 pointer-events-auto">
              {(
                [
                  { id: "pbr", label: "PBR Material", icon: Layers },
                  { id: "wireframe", label: "Wireframe", icon: Box },
                  { id: "clay", label: "Clay MatCap", icon: Eye },
                  { id: "normals", label: "Normal Map", icon: RotateCcw },
                ] as const
              ).map((m) => {
                const Icon = m.icon;
                const isActive = renderMode === m.id;
                return (
                  <button
                    key={m.id}
                    onClick={() => setRenderMode(m.id)}
                    className={`px-3 py-1.5 rounded text-[10px] font-mono tracking-wider flex items-center gap-1.5 transition-all ${
                      isActive
                        ? "bg-[#ff2a3b] text-white font-bold shadow-[0_0_12px_#ff2a3b]"
                        : "text-[#888888] hover:text-white"
                    }`}
                  >
                    <Icon className="w-3 h-3" />
                    <span>{m.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Lighting Rig Selector */}
            <div className="flex items-center gap-1.5 bg-black/80 backdrop-blur-md p-1 rounded-lg border border-white/10 pointer-events-auto">
              <span className="text-[10px] font-mono text-[#666666] px-2 flex items-center gap-1">
                <Sun className="w-3 h-3" />
                LIGHTING:
              </span>
              {(
                [
                  { id: "cinematic", label: "Red Rim" },
                  { id: "studio", label: "Studio" },
                  { id: "neutral", label: "Neutral" },
                ] as const
              ).map((l) => (
                <button
                  key={l.id}
                  onClick={() => setLightingPreset(l.id)}
                  className={`px-2.5 py-1 rounded text-[10px] font-mono uppercase tracking-wider transition-colors ${
                    lightingPreset === l.id
                      ? "bg-white/20 text-white font-bold"
                      : "text-[#888888] hover:text-white"
                  }`}
                >
                  {l.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Viewport Status Footer */}
        <div className="bg-[#0b0b0e] px-6 py-2.5 border-t border-white/[0.08] flex items-center justify-between text-[10px] font-mono text-[#777777]">
          <span>RENDER ENGINE: WEBGL / THREE.JS 0.186</span>
          <span className="text-[#ff2a3b]">SUBD QUAD GEOMETRY &bull; 60 FPS ACCELERATED</span>
        </div>
      </div>
    </div>
  );
}
