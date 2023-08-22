// @ts-nocheck
import * as THREE from 'three';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls} from '@react-three/drei';

const Model = () => {

  const gltf = useLoader(GLTFLoader, 'model/low_poly_praying_temple.glb');

  return (
    <Canvas style={{ height: "50px", width: "40px" }}>
      <ambientLight intensity={1} />
      {/* <pointLight intensity={10000} position={[0, 100, 0]}/> */}
      <OrbitControls />
      <mesh>
        <primitive scale={0.05} object={gltf.scene} children-0-castShadow />
        {/* <sphereGeometry>

        </sphereGeometry> */}
      </mesh>
    </Canvas>
  );
};

export default Model;
