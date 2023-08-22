// @ts-nocheck
import { useRef, useMemo, Suspense, useContext } from 'react';
import * as THREE from 'three';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Text } from '@mantine/core';
import Blob from './Blob';
import { ModeContext } from '../App';

const MainPage = () => {
  const gltf = useLoader(GLTFLoader, 'model/low_poly_praying_temple.glb');
  const { changed } = useContext(ModeContext);


  return (
    <>
      {/* <Text>Hi I'm Yucheng</Text>
      <Text>
        I'm a software engineer with a passion for turning newfound skills into
        projects
      </Text> */}
      <Suspense>
        <Canvas
          // style={{ height: '100%', width: '100%' }}
          camera={{ position: [0.0, 0.0, 8.0] }}
        >
          <Blob />
        </Canvas>
      </Suspense>
    </>
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
