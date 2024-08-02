// ModelViewer.tsx
import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

const Model = () => {
  const { scene } = useGLTF("/public/model/stylized_tavern.glb");
  scene.scale.set(2.5, 2.5, 2.5);
  return <primitive object={scene} />;
};

const ModelViewer: React.FC = () => {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[0, 0, 0]} />
      <Model />
      <OrbitControls />
    </Canvas>
  );
};

export default ModelViewer;
