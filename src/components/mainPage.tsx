// @ts-nocheck
import {
  useState,
  useRef,
  useMemo,
  Suspense,
  useContext,
  useEffect,
  forwardRef,
} from 'react';
import * as THREE from 'three';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Text, Box, Flex, createStyles } from '@mantine/core';
import Blob from './Blob';
import { ModeContext } from '../App';
import Project from './Projects';
import About from './About';
import { IconChevronsDown, IconChevronDown } from '@tabler/icons-react';
import { Element } from 'react-scroll';

// type MainPageProps = {
//   mainRef: React.MutableRefObject<null>;
//   aboutRef: React.MutableRefObject<null>;
//   projectRef: React.MutableRefObject<null>;
// };

const useStyles = createStyles((theme) => ({
  mainPageBox: {
    color: theme.colorScheme === 'dark' ? 'white' : 'black',
    backgroundColor: theme.colorScheme === 'dark' ? 'black' : 'white',
  },
  mainPageCanvas: {
    height: '90vh',
    width: '100%',
    // border: "2px solid yellow",

    [theme.fn.smallerThan('xl')]: {
      height: '500px',
    },
  },
  welcomeText: {
    fontSize: '3.7rem',
    position: 'absolute',
    zIndex: '1',
    left: '50%',
    top: '42%',
    transform: 'translate(-50%, -42%)',

    [theme.fn.smallerThan('xl')]: {
      fontSize: '2.7rem',
    },
  },
  scrollDownIcon: {
    zIndex: '1',
    position: 'absolute',
    left: '50%',
    top: '90%',
    transform: 'translate(-50%, -90%)',
    animation: 'bounce 1s infinite',
  },
}));

const MainPage = () => {
  const [cameraPosition, setCameraPosition] = useState([0, 0, 0]);
  const { classes } = useStyles();
  // const gltf = useLoader(GLTFLoader, 'model/low_poly_praying_temple.glb');

  const checkScreenSize = () => {
    // Checking if xl 88em
    if (window.innerWidth >= 1408) {
      setCameraPosition([0, 0, 14]);
      // Checking if lg 75em
    } else if (window.innerwidth >= 1200) {
      setCameraPosition([0, 0, 8]);
      // Checking if md 62em
    } else if (window.innerwidth >= 922) {
      setCameraPosition([0, 0, 8]);
      // Checking if sm 48em
    } else if (window.innerwidth >= 768) {
      setCameraPosition([0, 0, 8]);
      // Then has to be xs 36em
    } else {
      setCameraPosition([0, 0, 8]);
    }
  };

  const handleResize = () => {
    checkScreenSize();
    window.location.reload();
  };

  useEffect(() => {
    checkScreenSize();
    window.addEventListener('resize', handleResize); // Listen for resize events

    return () => {
      window.removeEventListener('resize', handleResize); // Cleanup on component unmount
    };
  }, []);

  return (
    <Box
      mx="0"
      style={{
        height: '100%',
        width: '100%',
        // border:"1px solid red"
      }}
      className={classes.mainPageBox}
    >
      <Box w="100%" height="100%" style={{ position: 'relative' }}>
        <IconChevronsDown size="2rem" className={classes.scrollDownIcon} />
        <Text
          // fz="xl"
          fw="300"
          // style={{
          //   fontSize: '2.7rem',
          //   position: 'absolute',
          //   zIndex: '1',
          //   left: '50%',
          //   top: '42%',
          //   transform: 'translate(-50%, -42%)',
          // }}
          className={classes.welcomeText}
        >
          Welcome, I'm Yu Cheng Li
        </Text>
        <Box className={classes.mainPageCanvas}>
          <Canvas
            style={{
              height: '100%',
              width: '100%',
              // border: "1px solid yellow"
            }}
            className="canvas"
            // className={classes.mainPageCanvas}
            camera={{ position: cameraPosition }}
          >
            <Blob cameraPosition={cameraPosition} />
          </Canvas>
        </Box>
      </Box>

      <Element name="about">
        <Flex mt="200px" justify="center" align="center">
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
              fontColor: 'white',
              fontSize: '2.7rem',
              zIndex: 1, // Ensure the text is on top of the lines
            }}
          >
            About
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
      </Element>

      <About />

      <Element name="project">
        <Flex mt="50px" justify="center" align="center">
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
              fontColor: 'white',
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
      </Element>

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
