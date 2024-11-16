import { useGLTF } from '@react-three/drei';

interface ModelProps {
  modelPath: string;
  scale?: number;
}

export function Model({ modelPath, scale = 1 }: ModelProps) {
  const { scene } = useGLTF(modelPath);
  return <primitive object={scene} scale={scale} />;
}