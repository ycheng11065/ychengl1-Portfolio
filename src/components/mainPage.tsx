// @ts-nocheck
import { useRef, useMemo, Suspense, useContext } from 'react';
import * as THREE from 'three';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Text, Box } from '@mantine/core';
import Blob from './Blob';
import { ModeContext } from '../App';

const MainPage = () => {
  const gltf = useLoader(GLTFLoader, 'model/low_poly_praying_temple.glb');

  return (
    <Box style={{ height: '100%', width: '100%' }}>
      <Text
        fz="xl"
        fw="300"
        style={{
          fontSize: '2.7rem',
          position: 'absolute',
          zIndex: '1',
          left: '50%',
          top: '55%',
          transform: 'translate(-50%, -55%)',
        }}
      >
        Welcome, I'm YuCheng 
      </Text>
      <Canvas
        style={{ height: '100%', width: '100%' }}
        camera={{ position: [0.0, 0.0, 8.0] }}
      >
        <Blob />
      </Canvas>
    </Box>
  );

  // <Canvas style={{ height: "100%", width: "100%" }}>
  //   <ambientLight intensity={1} />
  //   {/* <pointLight intensity={10000} position={[0, 100, 0]}/> */}
  //   <OrbitControls />
  //   <mesh>
  //     <primitive scale={0.05} object={gltf.scene} children-0-castShadow />
  //     {/* <sphereGeometry>

  //     </sphereGeometry> */}
  //   </mesh>
  // </Canvas>
};

export default MainPage;
