import { useState } from 'react';
import { Link } from 'react-router-dom';
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
  linkButton: {
    textTransform: 'uppercase',
    fontSize: '15px',
    color:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[1]
        : theme.colors.gray[6],
    padding: '5px',
    borderBottom: `4px solid transparent`,
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
}));

const NavBar = () => {
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
  return (
    <>
      <Flex mt="10px" direction="row" justify="space-between">
        <Container ml="10px" mr="0">
          <Link
            to="./"
            style={{
              textDecoration: 'none',
              color: 'inherit',
              fontSize: '2rem',
            }}
            onClick={(event) => {
              setActiveLink(1);
            }}
          >
            YCL
          </Link>
        </Container>
        <Container mx="0" mt="15px">
          <Flex gap="xl">
            <Link
              to="/projects"
              className={`${classes.linkButton} ${
                activeLinkIndex === 0 ? classes.linkActive : ''
              }`}
              onClick={(event) => {
                setActiveLink(0);
              }}
            >
              Project
            </Link>
            <Link
              to="/"
              className={`${classes.linkButton} ${
                activeLinkIndex === 1 ? classes.linkActive : ''
              }`}
              onClick={(event) => {
                setActiveLink(1);
              }}
            >
              About
            </Link>
            <Button onClick={openPDF}>Resume</Button>
            <ActionIcon
              size="2.2rem"
              variant="outline"
              color={dark ? 'yellow' : 'blue'}
              onClick={() => toggleColorScheme()}
              title="Toggle color scheme"
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
