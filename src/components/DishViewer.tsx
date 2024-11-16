import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage } from '@react-three/drei';
import { Dish } from '../types';
import { Suspense } from 'react';
import { Box, Sphere } from '@react-three/drei';

interface DishViewerProps {
  dish: Dish;
  zoom?: number;
}

export function DishViewer({ dish, zoom = 1 }: DishViewerProps) {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
      <Suspense fallback={null}>
        <Stage environment="city" intensity={0.6}>
          {/* Temporary placeholder 3D object until we have actual models */}
          <Box args={[1, 1, 1]} scale={zoom}>
            <meshStandardMaterial color="#666" />
          </Box>
          <Sphere args={[0.5]} position={[1.5, 0, 0]} scale={zoom}>
            <meshStandardMaterial color="#999" />
          </Sphere>
        </Stage>
      </Suspense>
      <OrbitControls 
        enablePan={false}
        minPolarAngle={Math.PI/4}
        maxPolarAngle={Math.PI/2}
      />
    </Canvas>
  );
}