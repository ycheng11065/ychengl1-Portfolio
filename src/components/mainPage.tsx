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
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, Box, Flex, createStyles } from '@mantine/core';
import Blob from './Blob';
import { ModeContext } from '../App';
import Project from './Projects';
import About from './About';
import { IconChevronsDown, IconChevronDown } from '@tabler/icons-react';
import { Element } from 'react-scroll';


const useStyles = createStyles((theme) => ({
  mainPageBox: {
    color: theme.colorScheme === 'dark' ? 'white' : 'black',
    backgroundColor: theme.colorScheme === 'dark' ? 'black' : 'white',
  },
  mainPageCanvas: {
    height: '800px',
    width: '100%',

    [theme.fn.smallerThan('xl')]: {
      height: '500px',
    },

    [theme.fn.smallerThan('lg')]: {
      height: '600px',
    },
  },
  welcomeText: {
    fontSize: '3.9rem',
    position: 'absolute',
    zIndex: '1',
    left: '50%',
    top: '42%',
    transform: 'translate(-50%, -42%)',

    [theme.fn.smallerThan('xl')]: {
      fontSize: '2.7rem',
    },

    [theme.fn.smallerThan('lg')]: {
      fontSize: '2.8rem',
    },
  },
  scrollDownIcon: {
    zIndex: '1',
    position: 'absolute',
    left: '50%',
    top: '90%',
    transform: 'translate(-50%, -90%)',
    animation: 'bounce 1s infinite',
  }
}));

const MainPage = () => {
  const [cameraPosition, setCameraPosition] = useState(8);
  const { classes } = useStyles();
  const resizeTimeoutRef = useRef(null);
  // const gltf = useLoader(GLTFLoader, 'model/low_poly_praying_temple.glb');

  const checkScreenSize = () => {
    console.log('resizing');
    // Checking if xl 88em
    if (window.innerWidth >= 1408) {
      setCameraPosition(9);
      // Checking if lg 75em
    } else if (window.innerwidth >= 1200) {
      setCameraPosition(8);
      // Checking if md 62em
    } else if (window.innerwidth >= 922) {
      setCameraPosition(12);
      // Checking if sm 48em
    } else if (window.innerwidth >= 768) {
      setCameraPosition(8);
      // Then has to be xs 36em
    } else {
      setCameraPosition(9);
      console.log(window.innerWidth);
    }
  };

  useEffect(() => {
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize); // Listen for resize events

    return () => {
      window.removeEventListener('resize', checkScreenSize); // Cleanup on component unmount
    };
  }, []);

  return (
    <Box
      mx="0"
      style={{
        // height: '100%',
        width: '100%',
        // border:"1px solid red"
      }}
      className={classes.mainPageBox}
    >
      <Element name="main">
        <Box
          w="100%"
          height="600px"
          style={{
            position: 'relative',
          }}
        >
          <IconChevronsDown size="2rem" className={classes.scrollDownIcon} />
          <Text fw="300" w="100%" align='center' className={classes.welcomeText}>
            Welcome, I'm Yu Cheng Li
          </Text>
          <Box className={classes.mainPageCanvas}>
            <Canvas
              style={{
                height: '100%',
                width: '100%',
              }}
            >
              {cameraPosition && <CameraPos cameraPosition={cameraPosition} />}
              <Blob />
            </Canvas>
          </Box>
        </Box>
      </ Element>

      <Element name="about">
        <Flex
          w={{ xl: "1700px", lg:"1100px", md: "970px" }}
          mx="auto"
          mt="200px"
          justify="left"
          align="center"
          style={{ borderTop: '1px solid grey' }}
        >
          <Text
            fz="xl"
            fw="300"
            style={{
              fontColor: 'white',
              fontSize: '3rem',
              zIndex: 1, 
            }}
          >
            About
          </Text>
        </Flex>
      </Element>

      <About />

      <Element name="project">
        <Flex
          w={{ xl: "1700px", lg:"1100px", md: "970px" }}
          mx="auto"
          mt="200px"
          justify="left"
          align="center"
          style={{ borderTop: '1px solid grey' }}
        >
          <Text
            fz="xl"
            fw="300"
            style={{
              fontColor: 'white',
              fontSize: '3rem',
              zIndex: 1, // Ensure the text is on top of the lines
            }}
          >
            Project
          </Text>
        </Flex>
      </Element>

      <Project />
    </Box>
  );
};

function CameraPos(cameraPosition) {
  useFrame((state, delta) => {
    const dummy = new THREE.Vector3();
    const step = 0.01;
    state.camera.position.lerp(
      dummy.set(0, 0, cameraPosition['cameraPosition']),
      step
    );
    state.camera.lookAt(0, 0, 0);
    state.camera.updateProjectionMatrix();
  });
}

export default MainPage;
