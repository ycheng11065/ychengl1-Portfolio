// @ts-nocheck
import { useState, useContext } from 'react';
import { ModeContext } from '../App';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import {
  Flex,
  Container,
  Button,
  useMantineColorScheme,
  ActionIcon,
  createStyles,
} from '@mantine/core';
import { IconSun, IconMoon } from '@tabler/icons-react';
import { Document, Page } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
// import resume from '../resume/ychengli_2023winter_resume.pdf';

const useStyles = createStyles((theme) => ({
  navBar: {
    fontColor: 'white',
    backgroundColor: theme.colorScheme === 'dark' ? 'black' : 'white',
  },
  linkButton: {
    cursor: 'pointer',
    textTransform: 'uppercase',
    fontSize: '15px',
    color:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[1]
        : theme.colors.gray[6],
    padding: '5px',
    borderBottom: `2px solid transparent`,
    transition: 'border-color 100ms ease, color 100ms ease',
    textDecoration: 'none',

    '&:hover': {
      color: theme.colorScheme === 'dark' ? theme.white : theme.black,
      textDecoration: 'none',
    },
  },
  linkActive: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    borderBottomColor:
      theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 5 : 6],
  },
  colorModeButton: {
    color:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[1]
        : theme.colors.gray[6],
  },
  logoButton: {
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? 'white' : 'black',
    fontSize: '2rem',
  },
}));

const NavBar = () => {
  const { changed, setChanged } = useContext(ModeContext);
  const { classes } = useStyles();
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const [activeLinkIndex, setActiveLink] = useState<number>(0);
  const dark = colorScheme === 'dark';

  const openPDF = () => {
    const pdfPath = require('../resume/ychengli_2023winter_resume.pdf');
    fetch(pdfPath)
      .then((response) => response.blob())
      .then((blob) => {
        const pdfUrl = URL.createObjectURL(blob);
        window.open(pdfUrl, '_blank');
      });
  };

  const handleScroll = (ref) => {
    window.scrollToTop({
      top: ref.current.offsetTop,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <Flex
        pt="10px"
        h="70px"
        w={{ xl: '1800px', lg: '1200px' }}
        // mt="10px"
        direction="row"
        justify="space-between"
        className={classes.navBar}
        style={{
          borderRadius: '15px',
          opacity: '0.95',
          zIndex: '2',
          position: 'sticky',
          top: '0',
          margin: '0 auto',
        }}
      >
        <Container ml="10px" mr="0">
          <Link
            to="./"
            onClick={(event) => {
              setActiveLink(0);
            }}
            className={classes.logoButton}
          >
            YCL
          </Link>
        </Container>
        <Container mx="0" mt="15px">
          <Flex gap="xl">
            <ScrollLink
              to="main"
              smooth={true}
              duration={500}
              className={classes.linkButton}
            >
              Home
            </ScrollLink>
            <ScrollLink
              to="about"
              smooth={true}
              duration={500}
              className={classes.linkButton}
            >
              About
            </ScrollLink>
            <ScrollLink
              to="project"
              smooth={true}
              duration={500}
              className={classes.linkButton}
            >
              Project
            </ScrollLink>
            <Link className={classes.linkButton} onClick={openPDF}>
              Resume
            </Link>
            <ActionIcon
              size="2.2rem"
              variant="outline"
              color={dark ? 'yellow' : 'blue'}
              onClick={() => {
                toggleColorScheme();
                setChanged(true);
              }}
              title="Toggle color scheme"
              // className={classes.colorModeButton}
            >
              {dark ? <IconSun size="2rem" /> : <IconMoon size="2rem" />}
            </ActionIcon>
          </Flex>
        </Container>
      </Flex>
    </>
  );
};

export default NavBar;
