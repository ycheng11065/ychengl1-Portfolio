// @ts-nocheck
import { useRef, useMemo, Suspense, useContext } from 'react';
import * as THREE from 'three';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Text, Box, Flex } from '@mantine/core';
import Blob from './Blob';
import { ModeContext } from '../App';
import Project from './Projects';
import About from './About';

const MainPage = () => {
  // const gltf = useLoader(GLTFLoader, 'model/low_poly_praying_temple.glb');

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
        Welcome, I'm Yu Cheng Li
      </Text>
      <Canvas
        style={{ height: '500px', width: '100%' }}
        camera={{ position: [0.0, 0.0, 8.0] }}
      >
        <Blob />
      </Canvas>
      <Flex mt="200px" justify="center" alignItems="center">
        <Box
          style={{
            position: 'relative', // Set the position to relative
            paddingLeft: '10px', // Add some padding to the left
            paddingRight: '10px', // Add some padding to the right
          }}
        >
          <Box
            style={{
              borderTop: '1px solid grey',
              content: '', // Required for pseudo-elements
              position: 'absolute', // Set the position to absolute
              left: '-400px', // Position it to the left of the text
              top: '50%', // Center it vertically
              height: '1px', // Set the height of the line
              width: '400px', // Set the width of the line
              backgroundColor: 'grey', // Set the line color
            }}
          />
        </Box>
        <Text
          fz="xl"
          fw="300"
          style={{
            fontSize: '2.7rem',
            zIndex: 1, // Ensure the text is on top of the lines
          }}
        >
          Projects
        </Text>
        <Box
          style={{
            position: 'relative', // Set the position to relative
            paddingLeft: '10px', // Add some padding to the left
            paddingRight: '10px', // Add some padding to the right
          }}
        >
          <Box
            style={{
              borderTop: '1px solid grey',
              content: '', // Required for pseudo-elements
              position: 'absolute', // Set the position to absolute
              right: '-400px', // Position it to the right of the text
              top: '50%', // Center it vertically
              height: '1px', // Set the height of the line
              width: '400px', // Set the width of the line
              backgroundColor: 'grey', // Set the line color
            }}
          />
        </Box>
      </Flex>

      {/* <Flex mt="200px" justify="center">
        <Box style={{ backgroundColor:"grey"}}>

        </Box>
        <Text
          fz="xl"
          fw="300"
          style={{
            fontSize: '2.7rem',
          }}
        >
          Projects
        </Text>
      </Flex> */}
      <Project />
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
