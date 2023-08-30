// @ts-nocheck
import { useState, useEffect } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame } from '@react-three/fiber';
import { useDisclosure } from '@mantine/hooks';
import { Text, Box, Flex, createStyles, em } from '@mantine/core';
import Blob from './Blob';
import Project from './Projects';
import About from './About';
import { IconChevronsDown } from '@tabler/icons-react';
import { Element } from 'react-scroll';
import { isMobile } from 'react-device-detect';

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
    [theme.fn.smallerThan('md')]: {
      fontSize: '2.5rem',
      top: '45%',
      transform: 'translate(-50%, -45%)',
    },
    [theme.fn.smallerThan('sm')]: {
      fontSize: '2.2rem',
      top: '45%',
      transform: 'translate(-50%, -45%)',
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
  const [opened, { open, close }] = useDisclosure(false);
  const [cameraPosition, setCameraPosition] = useState(8);
  const { classes } = useStyles();

  const checkScreenSize = () => {
    console.log(window.innerWidth);
    // Checking if xl 88em
    if (window.innerWidth >= 1408) {
      console.log('xl');
      setCameraPosition(9);
      // Checking if lg 75em
    } else if (window.innerWidth >= 1200) {
      console.log('lg');
      setCameraPosition(8);
      // Checking if md 62em
    } else if (window.innerWidth >= 922) {
      console.log('md');
      setCameraPosition(9);
      // Checking if sm 48em
    } else if (window.innerWidth >= 768) {
      console.log('sm');
      setCameraPosition(10);
      // Then has to be xs 36em
    } else {
      console.log('xs');
      setCameraPosition(11);
    }
  };

  useEffect(() => {
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  return (
    <Box
      mx="0"
      style={{
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
          <Text
            fw="300"
            w="100%"
            align="center"
            className={classes.welcomeText}
          >
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
      </Element>

      {!isMobile ? (
        <Element name="about">
          <Flex
            w={{ xl: '1700px', lg: '1100px', md: '970px' }}
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
      ) : (
        <Element name="about">
          <Flex
            w="100%"
            mx="auto"
            mt="200px"
            justify="center"
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
      )}

      <About />

      {!isMobile ? (
        <Element name="project">
          <Flex
            w={{ xl: '1700px', lg: '1100px', md: '970px', sm: '500px' }}
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
              Project
            </Text>
          </Flex>
        </Element>
      ) : (
        <Element name="project">
          <Flex
            w="100%"
            mx="auto"
            mt="100px"
            justify="center"
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
              Project
            </Text>
          </Flex>
        </Element>
      )}
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
