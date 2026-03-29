import { useRef, useMemo, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import * as THREE from "three";

function Particles({ count = 3000 }) {
  const mesh = useRef<THREE.Points>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [positions, colors, sizes] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const siz = new Float32Array(count);

    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 3 + Math.random() * 12;
      
      // Spiral galaxy shape
      const arm = Math.floor(Math.random() * 3);
      const armAngle = (arm / 3) * Math.PI * 2;
      const spiralAngle = theta + armAngle + r * 0.3;
      
      pos[i * 3] = r * Math.cos(spiralAngle) * Math.sin(phi) * 0.6;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 2 * Math.exp(-r * 0.1);
      pos[i * 3 + 2] = r * Math.sin(spiralAngle) * Math.sin(phi) * 0.6;

      // Dreamcore palette: lavender, cyan, pink, warm gold
      const colorChoice = Math.random();
      if (colorChoice < 0.3) {
        col[i * 3] = 0.7; col[i * 3 + 1] = 0.5; col[i * 3 + 2] = 1.0; // lavender
      } else if (colorChoice < 0.55) {
        col[i * 3] = 0.3; col[i * 3 + 1] = 0.8; col[i * 3 + 2] = 1.0; // cyan
      } else if (colorChoice < 0.75) {
        col[i * 3] = 1.0; col[i * 3 + 1] = 0.4; col[i * 3 + 2] = 0.7; // pink
      } else if (colorChoice < 0.9) {
        col[i * 3] = 1.0; col[i * 3 + 1] = 0.85; col[i * 3 + 2] = 0.4; // warm
      } else {
        col[i * 3] = 0.9; col[i * 3 + 1] = 0.9; col[i * 3 + 2] = 1.0; // white
      }

      siz[i] = Math.random() * 3 + 0.5;
    }

    return [pos, col, siz];
  }, [count]);

  useFrame((state) => {
    if (!mesh.current) return;
    const t = state.clock.elapsedTime;
    const scrollFactor = scrollY * 0.0003;

    mesh.current.rotation.y = t * 0.03 + scrollFactor;
    mesh.current.rotation.x = Math.sin(t * 0.01) * 0.1 + scrollFactor * 0.3;
    mesh.current.position.z = -scrollFactor * 2;
    
    // Pulse the scale based on scroll
    const pulse = 1 + Math.sin(scrollFactor * 3) * 0.05;
    mesh.current.scale.setScalar(pulse);
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={count}
          array={colors}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-size"
          count={count}
          array={sizes}
          itemSize={1}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.06}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

function NebulaCloud() {
  const mesh = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (!mesh.current) return;
    mesh.current.rotation.z = state.clock.elapsedTime * 0.01;
  });

  return (
    <mesh ref={mesh} position={[0, 0, -5]}>
      <planeGeometry args={[30, 30]} />
      <meshBasicMaterial
        color="#1a0a2e"
        transparent
        opacity={0.15}
        blending={THREE.AdditiveBlending}
      />
    </mesh>
  );
}

export default function GalaxyBackground() {
  return (
    <div className="fixed inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 1.5]}
      >
        <color attach="background" args={["#050510"]} />
        <ambientLight intensity={0.1} />
        <Particles count={4000} />
        <NebulaCloud />
        <EffectComposer>
          <Bloom
            intensity={1.5}
            luminanceThreshold={0.1}
            luminanceSmoothing={0.9}
            mipmapBlur
          />
        </EffectComposer>
      </Canvas>
    </div>
  );
}
