"use client";
import { Canvas, useFrame } from '@react-three/fiber'; 
import { useGLTF } from '@react-three/drei';
import { Object3D, PCFSoftShadowMap } from 'three';
import { useRef } from 'react';
import { useMediaQuery } from 'react-responsive';

// Custom component to load and animate the GLB model
function Model() {
  const { scene } = useGLTF('/shoes.glb');
  const modelRef = useRef<Object3D>(null); 
  const isDesktop = useMediaQuery({ query: '(min-width: 1024px)' });

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.01;
    }
  });

  return (
    <primitive
      ref={modelRef}
      object={scene}
      position={isDesktop ? [0, -0.5, -1] : [0, -0.5, 0]}
      scale={isDesktop ? [1.2, 1.2, 1.2] : [1, 1, 1]}
      castShadow
      receiveShadow
    />
  );
}

// Main Scene component
const Scene = () => {
  return (
      <Canvas
        shadows={{ type: PCFSoftShadowMap }}
        style={{ width: '100%', height: '500px'}}
        camera={{ position: [3, 2, 5], fov: 30 }}
        gl={{
          physicallyCorrectLights: true,
          antialias: true,
          toneMappingExposure: 2.2,
          preserveDrawingBuffer: true // Prevents automatic resizing
        }}
      >
        {/* Ambient Light for soft global illumination */}
        <ambientLight intensity={0.6} />

        {/* Directional Light for strong highlights */}
        <directionalLight 
          position={[5, 5, 5]} 
          intensity={2} 
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
        />

        {/* Spotlight for dramatic effect */}
        <spotLight 
          position={[-5, 8, 5]} 
          angle={0.3} 
          intensity={2} 
          penumbra={0.5} 
          castShadow
        />

        {/* Point Light for extra depth */}
        <pointLight position={[2, 2, -2]} intensity={1.5} />

        {/* Render the 3D Model */}
        <Model />
      </Canvas>
  );
};

export default Scene;
