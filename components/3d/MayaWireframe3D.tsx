"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function MayaMesh() {
  const meshRef = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.2;
      meshRef.current.rotation.y += delta * 0.35;
    }
  });

  return (
    <group ref={meshRef}>
      {/* Outer Subdivision Wireframe */}
      <mesh>
        <icosahedronGeometry args={[1.5, 2]} />
        <meshBasicMaterial color="#00f3ff" wireframe={true} />
      </mesh>

      {/* Internal Core Accent */}
      <mesh>
        <octahedronGeometry args={[0.9, 0]} />
        <meshBasicMaterial color="#ff2a3b" wireframe={true} />
      </mesh>

      {/* Inner Glowing Center */}
      <mesh>
        <sphereGeometry args={[0.3, 16, 16]} />
        <meshBasicMaterial color="#ffffff" />
      </mesh>
    </group>
  );
}

export default function MayaWireframe3D() {
  return (
    <div className="w-full h-44 relative bg-[#060608] rounded border border-white/10 overflow-hidden">
      <div className="absolute top-2.5 left-3 z-10 text-[9px] font-mono text-[#00f3ff] bg-black/70 px-2 py-0.5 rounded border border-[#00f3ff]/20">
        MAYA 3D WIREFRAME MESH
      </div>
      <Canvas
        camera={{ position: [0, 0, 3.8], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
      >
        <MayaMesh />
      </Canvas>
    </div>
  );
}
