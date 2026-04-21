import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import { motion } from 'framer-motion';
import * as THREE from 'three';

const Stars = ({ currentView }) => {
  const ref = useRef();
  const count = 25000;
  const isBlog = currentView === 'blog';

  const [positions, blastTargets] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const targets = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      pos[i3] = 0;
      pos[i3 + 1] = 0;
      pos[i3 + 2] = 0;

      const r = 2.5 * Math.pow(Math.random(), 1 / 3);
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.acos(2 * Math.random() - 1);
      
      targets[i3] = r * Math.sin(phi) * Math.cos(theta);
      targets[i3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      targets[i3 + 2] = r * Math.cos(phi);
    }
    return [pos, targets];
  }, []);

  const startTime = useRef(Date.now());

  useFrame((state, delta) => {
    const elapsed = (Date.now() - startTime.current) / 1000;
    const progress = Math.min(elapsed / 2.5, 1);
    
    const posAttr = ref.current.geometry.attributes.position;
    
    if (progress < 1) {
      for (let i = 0; i < count; i++) {
        const i3 = i * 3;
        const ease = 1 - Math.pow(1 - progress, 5);
        posAttr.array[i3] = blastTargets[i3] * ease;
        posAttr.array[i3 + 1] = blastTargets[i3 + 1] * ease;
        posAttr.array[i3 + 2] = blastTargets[i3 + 2] * ease;
      }
      posAttr.needsUpdate = true;
    }

    // STARS MOVE ON THEIR OWN (Independent of scroll)
    ref.current.rotation.y -= delta / 30;
    ref.current.rotation.x -= delta / 50;

    // Subtle breathing effect
    ref.current.position.z = Math.sin(state.clock.elapsedTime * 0.5) * 0.05;
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#ffffff"
        size={0.003}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
};

const SpaceBackground = ({ currentView }) => {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none bg-[#020204]">
      <Canvas camera={{ position: [0, 0, 1.2], fov: 75 }}>
        <color attach="background" args={['#020204']} />
        <Stars currentView={currentView} />
        <ambientLight intensity={0.5} />
      </Canvas>
      
      <motion.div 
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-0 bg-white z-50 pointer-events-none"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#020204] opacity-80" />
    </div>
  );
};

export default SpaceBackground;
