import { Link, useLocation } from 'react-router-dom';
import { Text, Box, Flex, createStyles, Anchor, Group } from '@mantine/core';
import { IconBrandLinkedin } from '@tabler/icons-react';
import { inherits } from 'util';

const useStyles = createStyles((theme) => ({
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
    borderTopColor: theme.colorScheme === 'dark' ? theme.colors.gray[7] : theme.colors.gray[3],
  }
}));

const Footer = () => {
  const { classes } = useStyles();
  const location = useLocation();
  const isMainPage = location.pathname !== '/';

  return (
    <>
      <Flex align="center" direction="column" >
        <Box w="80%" h="80px" className={classes.footerBorder}>
          <Flex mt="10px" justify="space-between" gap="25px" px="30px">
            <Text mt="4px" fz="xl">
              Get in touch with me.
            </Text>
            <Group>
              <Anchor href="https://www.linkedin.com/in/ychengl1/" color="inherit" target="_blank" className={classes.linkButton}>
                <Text fz="xl">LinkedIn</Text>
              </Anchor>
              <Anchor href="mailto:ychengli11065@gmail.com" color="inherit" className={classes.linkButton}>
                <Text fz="xl">Email</Text>
              </Anchor>
              <Anchor href="https://github.com/ycheng11065" color="inherit" target="_blank" className={classes.linkButton}>
                <Text fz="xl">Github</Text>
              </Anchor>
            </Group>
          </Flex>
        </Box>
        <Text mb="15px">Developed by ©2023 YChengLi</Text>
      </Flex>
    </>
  );
};

export default Footer;
