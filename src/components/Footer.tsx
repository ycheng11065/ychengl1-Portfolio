import { Text, Box, Flex, Anchor, Group } from '@mantine/core';
import { isMobile } from 'react-device-detect';
import { useStyles } from '../style/FooterStyles';

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
              <Text mt="20px" mb="15px">
                Developed by ©YuChengLi 2023
              </Text>
            </Flex>
          </Box>
        </Flex>
      ) : (
        <Flex align="center" direction="column" className={classes.footer}>
          <Box w="90%" h="50px" className={classes.footerBorder}>
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
