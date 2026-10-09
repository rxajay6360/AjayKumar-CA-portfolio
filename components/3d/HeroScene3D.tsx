"use client";

import { useRef, useMemo, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

// Floating Metallic Sculptural Core Mesh
function SculpturalCore({
  wireframe,
  mouse,
}: {
  wireframe: boolean;
  mouse: React.MutableRefObject<{ x: number; y: number }>;
}) {
  const meshRef = useRef<THREE.Group>(null);
  const innerRingRef = useRef<THREE.Mesh>(null);
  const outerRingRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (!meshRef.current) return;

    // Smooth lerp rotation toward mouse coordinates
    const targetRotX = mouse.current.y * 0.45;
    const targetRotY = mouse.current.x * 0.65;

    meshRef.current.rotation.x = THREE.MathUtils.lerp(
      meshRef.current.rotation.x,
      targetRotX,
      0.05
    );
    meshRef.current.rotation.y = THREE.MathUtils.lerp(
      meshRef.current.rotation.y,
      targetRotY + state.clock.elapsedTime * 0.2,
      0.05
    );

    // Subtle counter-rotation for nested orbital rings
    if (innerRingRef.current) {
      innerRingRef.current.rotation.z += delta * 0.35;
      innerRingRef.current.rotation.x -= delta * 0.2;
    }
    if (outerRingRef.current) {
      outerRingRef.current.rotation.y -= delta * 0.25;
      outerRingRef.current.rotation.z += delta * 0.15;
    }
  });

  return (
    <group ref={meshRef}>
      {/* Central Faceted Artifact: Torus Knot / Diamond Core */}
      <mesh castShadow receiveShadow>
        <torusKnotGeometry args={[1.2, 0.36, 128, 32, 2, 3]} />
        <meshStandardMaterial
          color="#15171b"
          roughness={0.2}
          metalness={0.92}
          wireframe={wireframe}
          emissive="#ff2a3b"
          emissiveIntensity={wireframe ? 0.8 : 0.15}
        />
      </mesh>

      {/* Inner Mythic Bronze Orbital Ring */}
      <mesh ref={innerRingRef}>
        <torusGeometry args={[2.0, 0.03, 16, 100]} />
        <meshStandardMaterial
          color="#d49755"
          metalness={0.95}
          roughness={0.15}
          wireframe={wireframe}
          emissive="#d49755"
          emissiveIntensity={0.2}
        />
      </mesh>

      {/* Outer Crimson Horizon Ring */}
      <mesh ref={outerRingRef}>
        <torusGeometry args={[2.5, 0.02, 16, 100]} />
        <meshStandardMaterial
          color="#ff2a3b"
          metalness={0.8}
          roughness={0.2}
          wireframe={wireframe}
          emissive="#ff2a3b"
          emissiveIntensity={0.6}
        />
      </mesh>

      {/* Inner Glowing Crystal Energy Node */}
      <mesh>
        <octahedronGeometry args={[0.55, 0]} />
        <meshStandardMaterial
          color="#ff2a3b"
          roughness={0.1}
          metalness={0.1}
          emissive="#ff2a3b"
          emissiveIntensity={1.5}
        />
      </mesh>
    </group>
  );
}

// 3D Floating Ember Particles in Space
function ParticleField({ count = 120 }: { count?: number }) {
  const points = useMemo(() => {
    const coords = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      coords[i * 3] = (Math.random() - 0.5) * 12;
      coords[i * 3 + 1] = (Math.random() - 0.5) * 10;
      coords[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return coords;
  }, [count]);

  const pointsRef = useRef<THREE.Points>(null);

  useFrame((_, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.03;
      pointsRef.current.rotation.x += delta * 0.015;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[points, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.045}
        color="#ff5355"
        transparent
        opacity={0.7}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

export default function HeroScene3D({
  wireframe = false,
  className = "",
}: {
  wireframe?: boolean;
  className?: string;
}) {
  const mouse = useRef({ x: 0, y: 0 });

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
    mouse.current = { x, y };
  };

  return (
    <div
      onPointerMove={handlePointerMove}
      className={`w-full h-full relative cursor-grab active:cursor-grabbing ${className}`}
      data-cursor="DRAG 3D"
    >
      <Canvas
        camera={{ position: [0, 0, 5.5], fov: 48 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
      >
        {/* Cinematic Three-Point + Rim Lighting */}
        <ambientLight intensity={0.4} />

        {/* Strong Key Light (Artisanal Bronze) */}
        <directionalLight position={[4, 5, 4]} intensity={2.8} color="#ffffff" />

        {/* Intense Crimson Rim Light from behind */}
        <directionalLight position={[-4, -3, -4]} intensity={4.5} color="#ff2a3b" />
        <pointLight position={[0, -2, -2]} intensity={3.0} color="#ff2a3b" />

        {/* Gentle fill light */}
        <pointLight position={[3, -2, 2]} intensity={1.2} color="#d49755" />

        <Float speed={2.0} rotationIntensity={0.4} floatIntensity={0.6}>
          <SculpturalCore wireframe={wireframe} mouse={mouse} />
        </Float>

        <ParticleField count={130} />
      </Canvas>
    </div>
  );
}
