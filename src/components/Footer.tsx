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
          <Box 
            // w="1400px" 
            h="50px" 
            className={classes.footerBorder}
            sx={{
              [`@media (min-width: 1024px)`]: {
                width: '700px', // Small laptops (1024px and above)
              },
              [`@media (min-width: 1280px)`]: {
                width: '900px', // Laptops (1280px and above)
              },
              [`@media (min-width: 1440px)`]: {
                width: '1300px', // Desktops (1440px and above)
              },
              [`@media (min-width: 1600px)`]: {
                width: '1700px', // Larger desktops (1600px and above)
              },
            }}
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
          <Text mb="15px">Developed by ©BruceLi 2023</Text>
        </Flex>
      )}
    </>
  );
};

export default Footer;
