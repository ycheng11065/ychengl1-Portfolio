import { Link, useLocation } from 'react-router-dom';
import { Text, Box, Flex, createStyles, Anchor, Group } from '@mantine/core';
import { IconBrandLinkedin } from '@tabler/icons-react';
import { inherits } from 'util';
import { isMobile } from 'react-device-detect';

const useStyles = createStyles((theme) => ({
  footer: {
    color: theme.colorScheme === 'dark' ? 'white' : 'black',
    backgroundColor: theme.colorScheme === 'dark' ? 'black' : 'white',
    // backgroundImage:
    // theme.colorScheme === 'dark'
    //   ? 'linear-gradient(to bottom, #000000, #000000, #000000, #000000, #000000, #000000, #000000, #7C44FF)'
    //   : 'linear-gradient(to bottom right, #F1F3F5, #F1F3F5, #F1F3F5, #F1F3F5, #7C44FF)',
  },
  linkButton: {
    fontSize: 'xl',
    marginTop: '4px',
    transition: 'border-color 100ms ease, color 100ms ease',
    textDecoration: 'none',

    '&:hover': {
      color: theme.colorScheme === 'dark' ? theme.white : theme.colors.gray[6],
      textDecoration: 'none',
    },
  },
  linkActive: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    borderBottomColor:
      theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 5 : 6],
  },
  footerBorder: {
    borderTop: '2px solid grey',
    borderTopColor:
      theme.colorScheme === 'dark'
        ? theme.colors.gray[7]
        : theme.colors.gray[3],
  },
}));

const Footer = () => {
  const { classes } = useStyles();

  return (
    <>
      {isMobile ? (
        <Flex mt="50px">
          <Box w="100%" h="50px" className={classes.footerBorder}>
            <Flex direction="column" mt="10px" align="center">
              <Text mt="5px" fz="xl">
                Get in touch with me.
              </Text>
              <Group mt="10px" spacing="80px">
                <Anchor
                  href="https://www.linkedin.com/in/ychengl1/"
                  color="inherit"
                  target="_blank"
                  className={classes.linkButton}
                >
                  <Text fz="xl">LinkedIn</Text>
                </Anchor>

                <Anchor
                  href="https://github.com/ycheng11065"
                  color="inherit"
                  target="_blank"
                  className={classes.linkButton}
                >
                  <Text fz="xl">Github</Text>
                </Anchor>

                <Anchor
                  href="mailto:ychengli11065@gmail.com"
                  color="inherit"
                  className={classes.linkButton}
                >
                  <Text fz="xl">Email</Text>
                </Anchor>
              </Group>
              <Text mt="20px" mb="15px">Developed by ©YuChengLi 2023</Text>
            </Flex>
          </Box>
        </Flex>
      ) : (
        <Flex align="center" direction="column" className={classes.footer}>
          <Box
            w="90%"
            h="50px"
            className={classes.footerBorder}
          >
            <Flex mt="10px" justify="space-between" px="30px">
              <Text mt="4px" fz="xl">
                Get in touch with me.
              </Text>
              <Group>
                <Anchor
                  href="https://www.linkedin.com/in/ychengl1/"
                  color="inherit"
                  target="_blank"
                  className={classes.linkButton}
                >
                  <Text fz="xl">LinkedIn</Text>
                </Anchor>

                <Anchor
                  href="https://github.com/ycheng11065"
                  color="inherit"
                  target="_blank"
                  className={classes.linkButton}
                >
                  <Text fz="xl">Github</Text>
                </Anchor>

                <Anchor
                  href="mailto:ychengli11065@gmail.com"
                  color="inherit"
                  className={classes.linkButton}
                >
                  <Text fz="xl">Email</Text>
                </Anchor>
              </Group>
            </Flex>
          </Box>
          <Text mb="15px">Developed by ©YuChengLi 2023</Text>
        </Flex>
      )}
    </>
  );
};

export default Footer;
