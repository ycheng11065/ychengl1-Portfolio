// @ts-nocheck
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { useDisclosure } from '@mantine/hooks';
import {
  Flex,
  Container,
  useMantineColorScheme,
  ActionIcon,
  Box,
  Modal,
} from '@mantine/core';
import {
  IconSun,
  IconMoon,
  IconBaselineDensityMedium,
  IconX
} from '@tabler/icons-react';
import { isMobile } from 'react-device-detect';
import { useStyles } from '../style/NavBarStyles';

const NavBar = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const { classes } = useStyles();
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';

  const openPDF = () => {
    const pdfPath = '/image/resume/yuchengli_resume_spring2024.pdf';
    fetch(pdfPath)
      .then((response) => response.blob())
      .then((blob) => {
        const pdfUrl = URL.createObjectURL(blob);
        window.open(pdfUrl, '_blank');
      });
  };

  return (
    <>
      <Modal
        fullScreen="True"
        opened={opened}
        onClose={close}
        withCloseButton={false}
      >
        <Flex mt="40px" direction="column" gap="xl">
          <IconX
            size="2.5rem"
            onClick={close}
            style={{
              position: 'absolute',
              top: '10px',
              right: '15px',
            }}
          />
          <ScrollLink
            to="main"
            smooth={true}
            duration={500}
            className={classes.linkButtonMobile}
            onClick={close}
          >
            Home
          </ScrollLink>
          <ScrollLink
            to="about"
            smooth={true}
            duration={500}
            className={classes.linkButtonMobile}
            onClick={close}
          >
            About
          </ScrollLink>
          <ScrollLink
            to="project"
            smooth={true}
            duration={500}
            className={classes.linkButtonMobile}
            onClick={close}
          >
            Project
          </ScrollLink>
          <Link
            className={classes.linkButtonMobile}
            onClick={() => {
              openPDF();
              close();
            }}
            style={{ outline: 'none' }}
          >
            Resume
          </Link>
          <Link
            smooth={true}
            duration={500}
            className={classes.linkButtonMobile}
            onClick={() => {
              toggleColorScheme();
              close();
            }}
            style={{ outline: 'none' }}
          >
            {dark ? 'Light' : 'Dark'}
          </Link>
        </Flex>
      </Modal>
      {isMobile ? (
        <Flex
          pt="10px"
          px="20px"
          h="60px"
          w="100%"
          direction="row"
          justify="space-between"
          className={classes.navBar}
          style={{
            opacity: '0.95',
            zIndex: '2',
            position: 'sticky',
            top: '0',
            margin: '0 auto',
          }}
        >
          <Box h="100%">
            <Link
              to="./"
              onClick={(event) => {
                setActiveLink(0);
              }}
              className={classes.logoButton}
            >
              YCL
            </Link>
          </Box>
          <IconBaselineDensityMedium
            size="2rem"
            onClick={open}
            className={classes.optionIcon}
            color={dark ? 'white' : 'black'}
          />
        </Flex>
      ) : (
        <Flex
          px="10px"
          pt="10px"
          h="70px"
          w="100%"
          direction="row"
          justify="space-between"
          className={classes.navBar}
          style={{
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
                }}
                title="Toggle color scheme"
              >
                {dark ? <IconSun size="2rem" /> : <IconMoon size="2rem" />}
              </ActionIcon>
            </Flex>
          </Container>
        </Flex>
      )}
    </>
  );
};

export default NavBar;
