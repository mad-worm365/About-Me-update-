'use client';

import React, { Suspense, useEffect, useMemo, useRef, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

const FRAME_COUNT = 300;
const FRAME_STEP = 4; // load every 4th frame for hero performance

function useFlowerFrames() {
  const [textures, setTextures] = useState([]);

  useEffect(() => {
    let cancelled = false;
    const loader = new THREE.TextureLoader();
    const indices = [];
    for (let i = 1; i <= FRAME_COUNT; i += FRAME_STEP) indices.push(i);

    Promise.all(
      indices.map(
        (i) =>
          new Promise((resolve) => {
            loader.load(
              `/imageSequence/image${i}.webp`,
              (tex) => {
                tex.colorSpace = THREE.SRGBColorSpace;
                tex.minFilter = THREE.LinearFilter;
                tex.magFilter = THREE.LinearFilter;
                resolve(tex);
              },
              undefined,
              () => resolve(null)
            );
          })
      )
    ).then((loaded) => {
      if (!cancelled) setTextures(loaded.filter(Boolean));
    });

    return () => {
      cancelled = true;
    };
  }, []);

  return textures;
}

function FlowerPlane({ textures }) {
  const mesh = useRef(null);
  const material = useRef(null);
  const { viewport } = useThree();
  const frame = useRef(0);
  const target = useRef(0);

  const aspect = 1920 / 1080;
  const width = Math.max(viewport.width * 0.95, 4.5);
  const height = width / aspect;

  useFrame(({ clock, pointer }) => {
    if (!textures.length || !material.current || !mesh.current) return;

    // Mouse X scrubs the flower bloom sequence; idle gently autoplays
    const mouseFrame = ((pointer.x + 1) / 2) * (textures.length - 1);
    const autoFrame =
      (Math.sin(clock.getElapsedTime() * 0.35) * 0.5 + 0.5) *
      (textures.length - 1);
    target.current = THREE.MathUtils.lerp(mouseFrame, autoFrame, 0.35);
    frame.current = THREE.MathUtils.lerp(frame.current, target.current, 0.08);

    const index = Math.max(
      0,
      Math.min(textures.length - 1, Math.round(frame.current))
    );
    if (material.current.map !== textures[index]) {
      material.current.map = textures[index];
      material.current.needsUpdate = true;
    }

    mesh.current.rotation.y = THREE.MathUtils.lerp(
      mesh.current.rotation.y,
      pointer.x * 0.22,
      0.06
    );
    mesh.current.rotation.x = THREE.MathUtils.lerp(
      mesh.current.rotation.x,
      -pointer.y * 0.12,
      0.06
    );
    mesh.current.position.x = THREE.MathUtils.lerp(
      mesh.current.position.x,
      pointer.x * 0.15,
      0.05
    );
    mesh.current.position.y = THREE.MathUtils.lerp(
      mesh.current.position.y,
      pointer.y * 0.1,
      0.05
    );
  });

  if (!textures.length) return null;

  return (
    <mesh ref={mesh} scale={[1.05, 1.05, 1]}>
      <planeGeometry args={[width, height]} />
      <meshBasicMaterial
        ref={material}
        map={textures[0]}
        toneMapped={false}
        transparent
      />
    </mesh>
  );
}

function Dust() {
  const points = useRef(null);
  const positions = useMemo(() => {
    const arr = new Float32Array(80 * 3);
    for (let i = 0; i < 80; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 6;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 4;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 2;
    }
    return arr;
  }, []);

  useFrame(({ clock }) => {
    if (!points.current) return;
    points.current.rotation.y = clock.getElapsedTime() * 0.03;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.025}
        color="#c9a8ff"
        transparent
        opacity={0.45}
        depthWrite={false}
      />
    </points>
  );
}

function FlowerScene() {
  const textures = useFlowerFrames();

  return (
    <>
      <color attach="background" args={['#000000']} />
      <Suspense fallback={null}>
        <FlowerPlane textures={textures} />
        <Dust />
      </Suspense>
    </>
  );
}

export default function HeroFlowerCanvas() {
  return (
    <div className="hero-flower-canvas" aria-hidden="true">
      <Canvas
        dpr={[1, 1.75]}
        camera={{ position: [0, 0, 5], fov: 40 }}
        gl={{
          antialias: true,
          alpha: false,
          powerPreference: 'high-performance',
          preserveDrawingBuffer: true,
        }}
        style={{ width: '100%', height: '100%' }}
        onCreated={({ gl }) => {
          gl.setClearColor('#000000', 1);
        }}
      >
        <FlowerScene />
      </Canvas>
      <div className="hero-flower-canvas__vignette" />
    </div>
  );
}
