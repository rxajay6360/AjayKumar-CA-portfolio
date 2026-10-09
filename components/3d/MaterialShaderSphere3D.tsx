"use client";

import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function PBRSphere({
  materialType,
}: {
  materialType: "steel" | "copper" | "teak" | "stone";
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.25;
      meshRef.current.rotation.x = Math.sin(delta) * 0.1;
    }
  });

  const materialConfig = {
    steel: {
      color: "#9da3ad",
      metalness: 0.98,
      roughness: 0.15,
      clearcoat: 0.3,
    },
    copper: {
      color: "#bf5700",
      metalness: 0.85,
      roughness: 0.45,
      clearcoat: 0.1,
    },
    teak: {
      color: "#5c341b",
      metalness: 0.05,
      roughness: 0.3,
      clearcoat: 0.8,
    },
    stone: {
      color: "#4a4c52",
      metalness: 0.1,
      roughness: 0.85,
      clearcoat: 0.0,
    },
  }[materialType];

  return (
    <mesh ref={meshRef} castShadow>
      <sphereGeometry args={[1.35, 64, 64]} />
      <meshPhysicalMaterial
        color={materialConfig.color}
        metalness={materialConfig.metalness}
        roughness={materialConfig.roughness}
        clearcoat={materialConfig.clearcoat}
      />
    </mesh>
  );
}

export default function MaterialShaderSphere3D() {
  const [activeMaterial, setActiveMaterial] = useState<
    "steel" | "copper" | "teak" | "stone"
  >("copper");

  return (
    <div className="w-full relative bg-[#060608] rounded border border-white/10 overflow-hidden flex flex-col">
      <div className="p-2.5 bg-[#09090c] border-b border-white/10 flex items-center justify-between z-10">
        <span className="text-[9px] font-mono text-[#d49755] uppercase tracking-wider">
          SUBSTANCE PBR SHADER PREVIEW
        </span>
        <div className="flex items-center gap-1">
          {(
            [
              { id: "copper", label: "Copper" },
              { id: "steel", label: "Steel" },
              { id: "teak", label: "Teak" },
              { id: "stone", label: "Stone" },
            ] as const
          ).map((mat) => (
            <button
              key={mat.id}
              onClick={() => setActiveMaterial(mat.id)}
              className={`px-2 py-0.5 rounded text-[8px] font-mono uppercase tracking-wider transition-colors ${
                activeMaterial === mat.id
                  ? "bg-[#d49755] text-black font-bold"
                  : "text-[#777] hover:text-white"
              }`}
            >
              {mat.label}
            </button>
          ))}
        </div>
      </div>

      <div className="h-40 w-full relative">
        <Canvas
          camera={{ position: [0, 0, 3.6], fov: 45 }}
          dpr={[1, 1.5]}
          gl={{ antialias: true, alpha: true }}
        >
          <ambientLight intensity={0.4} />
          <directionalLight position={[4, 5, 4]} intensity={3} color="#ffffff" />
          <directionalLight position={[-4, -3, -4]} intensity={2.5} color="#ff2a3b" />
          <pointLight position={[2, -2, 2]} intensity={1.5} color="#d49755" />
          <PBRSphere materialType={activeMaterial} />
        </Canvas>
      </div>
    </div>
  );
}
