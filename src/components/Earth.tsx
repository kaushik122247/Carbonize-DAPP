"use client";
import * as THREE from "three";
import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import EarthMaterial from "./EarthMaterial";

const sunDirection = new THREE.Vector3(-2, 0.5, 1.5);

function EarthMesh() {
  const ref = useRef<THREE.Mesh>(null);
  
  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.001;
    }
  });
  
  const axialTilt = 23.4 * Math.PI / 180;
  
  return (
    <group rotation-z={axialTilt}>
      <mesh ref={ref}>
        <icosahedronGeometry args={[2.8, 64]} />
        <EarthMaterial sunDirection={sunDirection} />
      </mesh>
    </group>
  );
}

interface EarthProps {
  className?: string;
}

function Earth({ className }: EarthProps) {
  const { x, y, z } = sunDirection;
  
  return (
    <div className={className}>
      <Canvas 
        camera={{ position: [0, 0.1, 5] }}
        gl={{ 
          toneMapping: THREE.NoToneMapping,
          alpha: true,
          antialias: true 
        }}
        style={{ filter: 'blur(0px) brightness(0.95)' }}
      >
        <EarthMesh />
        <hemisphereLight args={[0xffffff, 0x000000, 3.0]} />
        <directionalLight position={[x, y, z]} />
        <OrbitControls 
          enableZoom={true}
          enablePan={false}
          enableRotate={false}
          autoRotate={true}
          maxDistance={10}
          minDistance={3}
        />
      </Canvas>
    </div>
  );
}

export default Earth;