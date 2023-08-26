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
// import { OrbitControls } from '@react-three/drei';

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
    fontSize: '3.9rem',
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
  sectionLineRight: {
    borderTop: '1px solid grey',
    position: 'absolute',
    right: '-700px',
    top: '50%',
    height: '1px',
    width: '700px',
    backgroundColor: 'grey',

    [theme.fn.smallerThan('xl')]: {
      right: '-400px',
      width: '400px',
    },
  },
  seciontLineLeft: {},
}));

const MainPage = () => {
  const [cameraPosition, setCameraPosition] = useState(8);
  const { classes } = useStyles();
  const resizeTimeoutRef = useRef(null);
  // const gltf = useLoader(GLTFLoader, 'model/low_poly_praying_temple.glb');

  const checkScreenSize = () => {
    console.log("resizing");
    // Checking if xl 88em
    if (window.innerWidth >= 1408) {
      setCameraPosition(9);
      // Checking if lg 75em
    } else if (window.innerwidth >= 1200) {
      setCameraPosition(8);
      // Checking if md 62em
    } else if (window.innerwidth >= 922) {
      setCameraPosition(8);
      // Checking if sm 48em
    } else if (window.innerwidth >= 768) {
      setCameraPosition(8);
      // Then has to be xs 36em
    } else {
      setCameraPosition(8);
    }
  };

  const handleResize = () => {
    checkScreenSize();
    // window.location.reload();
  };

  useEffect(() => {
    // const handleResizeWithDelay = () => {
    //   if (resizeTimeoutRef.current) {
    //     clearTimeout(resizeTimeoutRef.current);
    //   }

    //   resizeTimeoutRef.current = setTimeout(() => {
    //     handleResize();
    //   }, 200); // Adjust the delay as needed
    // };

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
          fw="300"
          className={classes.welcomeText}
        >
          Welcome, I'm Yu Cheng Li
        </Text>
        <Box className={classes.mainPageCanvas}>
          <Canvas
            style={{
              height: '500px',
              width: '100%',
              // border: "1px solid yellow"
            }}
            className="canvas"
            // camera={{ position: [0.0, 0.0, 8.0] }}
          >
            {cameraPosition && <CameraPos cameraPosition={cameraPosition} />}
            <Blob />
          </Canvas>
        </Box>
      </Box>

      <Element name="about">
        <Flex
          mx="120px"
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
            About
          </Text>
        </Flex>
      </Element>

      <About />

      <Element name="project">
        <Flex
          mx="120px"
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
            Projects
          </Text>
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

function CameraPos(cameraPosition) {
  useFrame((state, delta) => {
    const dummy = new THREE.Vector3();
    const step = 0.01;
    // state.camera.fov = THREE.MathUtils.lerp(state.camera.fov, 50, step);
    state.camera.position.lerp(
      dummy.set(0, 0, cameraPosition['cameraPosition']),
      step
    );
    state.camera.lookAt(0, 0, 0);
    state.camera.updateProjectionMatrix();
  });
}

export default MainPage;
