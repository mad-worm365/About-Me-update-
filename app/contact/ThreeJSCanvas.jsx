'use client';

import React, { Suspense } from 'react';
import { Canvas } from "@react-three/fiber";
import { Environment, Float, OrbitControls } from "@react-three/drei";
import { Item3 } from "../Main/HeroModel/Coins";

const ThreeJSCanvas = () => {
  return (
    <Canvas 
      style={{ 
        pointerEvents: 'auto', 
        width: "100%", 
        height: "100%", 
        position: "absolute", 
        top: 0, 
        left: 0, 
        zIndex: 1 
      }} 
      camera={{ position: [2, 0, 10], fov: 35 }}
    >
      <Suspense fallback={null}>
        <Float rotationIntensity={0.5} floatIntensity={2} speed={2}>
          <Item3 />
        </Float>
        <Environment preset="sunset" />
        <OrbitControls 
          maxPolarAngle={Math.PI / 2} 
          enableZoom={false} 
          enableRotate={true} 
          enablePan={false} 
        />
      </Suspense>
    </Canvas>
  );
};

export default ThreeJSCanvas; 