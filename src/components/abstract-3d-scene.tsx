"use client";

import React, { useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";

export function Abstract3DScene() {
  const { theme } = useTheme();
  const starColor = theme === "light" ? "#1678fb" : "#ffffff";

  return (
    <div className="absolute inset-0 z-0 h-full w-full pointer-events-none transition-opacity duration-1000 bg-white dark:bg-slate-950 overflow-hidden">
      {/* Space Background / Nebula Effect */}
      <div className="absolute inset-0 opacity-20 dark:opacity-60">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-[radial-gradient(circle_at_30%_50%,rgba(13,148,136,0.1)_0%,transparent_50%),radial-gradient(circle_at_70%_20%,rgba(59,130,246,0.15)_0%,transparent_50%),radial-gradient(circle_at_50%_80%,rgba(139,92,246,0.1)_0%,transparent_50%)] animate-pulse" style={{ animationDuration: '8s' }} />
      </div>

      <Canvas camera={{ position: [0, 0, 6], fov: 75 }} dpr={[1, 2]}>
        <Stars count={3000} color={starColor} />
        <Stars count={1000} size={0.025} color={starColor} />
        <Rig />
      </Canvas>

      {/* Shooting Stars Overlay */}
      <div className="absolute inset-0">
        {[...Array(5)].map((_, i) => (
          <ShootingStar key={i} delay={i * 3} />
        ))}
      </div>
    </div>
  );
}

function ShootingStar({ delay }: { delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: "100%", y: "0%" }}
      animate={{
        opacity: [0, 1, 1, 0],
        x: ["110%", "-50%"],
        y: ["-10%", "100%"],
      }}
      transition={{
        duration: 1.5,
        delay,
        repeat: Infinity,
        repeatDelay: 8 + Math.random() * 10,
        ease: "linear"
      }}
      className="absolute w-32 h-px bg-gradient-to-l from-primary/80 to-transparent rotate-[30deg] z-0"
    />
  );
}

function Stars({ count = 2000, size = 0.012, color = "#ffffff" }) {
  const { theme } = useTheme();
  const points = useMemo(() => {
    const p = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
        p[i * 3] = (Math.random() - 0.5) * 20;
        p[i * 3 + 1] = (Math.random() - 0.5) * 20;
        p[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return p;
  }, [count]);

  const ref = useRef<THREE.Points>(null);
  const matRef = useRef<any>(null);
  const scrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      scrollY.current = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useFrame((state) => {
    if (!ref.current || !matRef.current) return;
    const t = state.clock.getElapsedTime();
    
    ref.current.rotation.y = t * 0.01 + scrollY.current * 0.0002;
    ref.current.rotation.x = t * 0.005;
    
    matRef.current.size = size + Math.sin(t * 1.5) * (size * 0.3);
    matRef.current.opacity = 0.6 + Math.sin(t * 1.2) * 0.3;
  });

  return (
    <Points ref={ref} positions={points} stride={3} frustumCulled={false}>
      <PointMaterial
        ref={matRef}
        transparent
        color={color}
        size={size}
        sizeAttenuation={true}
        depthWrite={false}
        blending={theme === "light" ? THREE.NormalBlending : THREE.AdditiveBlending}
      />
    </Points>
  );
}

function Rig() {
  const { camera, mouse } = useThree();
  const vec = new THREE.Vector3();

  useFrame(() => {
    camera.position.lerp(vec.set(mouse.x * 1.2, mouse.y * 1.2, 6), 0.05);
    camera.lookAt(0, 0, 0);
  });

  return null;
}
