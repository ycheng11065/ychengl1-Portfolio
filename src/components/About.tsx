import {
  Flex,
  Text,
  BackgroundImage,
  Box,
  Anchor,
} from '@mantine/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import { isMobile } from 'react-device-detect';
import { useStyles } from '../style/AboutStyles';

const About = () => {
  const { classes } = useStyles();

  return (
    <>
      {isMobile ? (
        <Flex mt="50px" direction="column" h="100%" w="full">
          <Box className={classes.aboutImage} h="300px" mx="auto">
            <BackgroundImage
              radius="md"
              src={'/image/profile/me.jpg'}
              style={{
                width: '100%',
                height: '100%',
              }}
            />
          </Box>
          <Flex
            mx="auto"
            mt="10px"
            gap="20px"
            align="left"
            direction="column"
            className={classes.aboutText}
          >
            <Text ta="left" pt="0" className={classes.titleDescription}>
              Hello, I'm Bruce
            </Text>
            <Text className={classes.textDescription}>
              I am a Vancouver based software engineer. Having grown up between
              the vibrant cities of Montreal and Calgary, I am now a senior
              computer science student at the University of British Columbia.
            </Text>
            <Text className={classes.textDescription}>
              When I'm not buried in assignments, you'll find me exploring the
              realm of software and languages. There's nothing more fulfilling
              to me than translating newfound skills into innovative and
              practical projects.
            </Text>
            <Text className={classes.textDescription}>
              Off-screen, you'll find me enjoying a game of badminton, delving
              into the intricacies of the Japanese language, or humbling myself
              in the world of Summoner's Rift.
            </Text>
            <Text className={classes.textDescription}>
              Anyways, I hope you enjoy my corner of the web.
            </Text>
            <Flex
              direction="column"
              gap="2rem"
              justify="center"
              className={classes.contactIconContainer1}
            >
              <Anchor
                href="https://www.linkedin.com/in/ychengl1/"
                target="_blank"
              >
                <FontAwesomeIcon
                  icon={faLinkedinIn}
                  className={classes.contactIcon}
                />
              </Anchor>

              <Anchor href="https://github.com/ycheng11065" target="_blank">
                <FontAwesomeIcon
                  icon={faGithub}
                  className={classes.contactIcon}
                />
              </Anchor>

              <Anchor href="mailto:ychengli11065@gmail.com" target="_blank">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className={classes.contactIcon}
                />
              </Anchor>
            </Flex>
          </Flex>
          <Flex
            mt="30px"
            gap="2rem"
            justify="center"
            className={classes.contactIconContainer2}
          >
            <Anchor
              href="https://www.linkedin.com/in/ychengl1/"
              target="_blank"
            >
              <FontAwesomeIcon
                icon={faLinkedinIn}
                className={classes.contactIcon}
              />
            </Anchor>

            <Anchor href="https://github.com/ycheng11065" target="_blank">
              <FontAwesomeIcon
                icon={faGithub}
                className={classes.contactIcon}
              />
            </Anchor>

            <Anchor href="mailto:ychengli11065@gmail.com" target="_blank">
              <FontAwesomeIcon
                icon={faEnvelope}
                className={classes.contactIcon}
              />
            </Anchor>
          </Flex>
        </Flex>
      ) : (
        <Flex
          mt="50px"
          pt={{ lg: '30px', xl: '40px' }}
          direction="column"
          align="center"
          w="1200px"
          mx="auto"
          gap="40px"
        >
          <Flex
            w="100%"
            mx={{ md: '20px' }}
            justify={{ xl: 'space-between', lg: 'space-between', md: 'center' }}
            gap={{ xl: '80px', lg: '60px', md: '20px' }}
            className={classes.aboutPage}
          >
            <Flex gap="20px" align="left" direction="column">
              <Flex direction="column">
                <Text ta="left" pt="0" className={classes.titleDescription}>
                  Hi there!
                </Text>
                <Text ta="left" className={classes.titleDescription}>
                  I'm Bruce
                </Text>
              </Flex>
              <Text className={classes.textDescription}>
                I'm a Vancouver based software engineer. Having grown up
                between the vibrant cities of Montreal and Calgary, I am now a
                senior computer science student at the University of British
                Columbia.
              </Text>
              <Text className={classes.textDescription}>
                When I'm not buried in assignments, you'll find me exploring the
                realm of software and languages. There's nothing more fulfilling
                to me than translating newfound skills into innovative and
                practical projects.
              </Text>
              <Text className={classes.textDescription}>
                Off-screen, you'll find me enjoying a game of badminton, delving
                into the intricacies of the Japanese language, or humbling
                myself in the world of Summoner's Rift.
              </Text>
              <Text className={classes.textDescription}>
                Anyways, I hope you enjoy my corner of the web.
              </Text>
              <Flex w="100%" gap="2rem">
                <Flex gap="2rem">
                  <Anchor
                    href="https://www.linkedin.com/in/ychengl1/"
                    target="_blank"
                  >
                    <FontAwesomeIcon
                      icon={faLinkedinIn}
                      className={classes.contactIcon}
                    />
                  </Anchor>

                  <Anchor href="https://github.com/ycheng11065" target="_blank">
                    <FontAwesomeIcon
                      icon={faGithub}
                      className={classes.contactIcon}
                    />
                  </Anchor>

                  <Anchor href="mailto:ychengli11065@gmail.com" target="_blank">
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      className={classes.contactIcon}
                    />
                  </Anchor>
                </Flex>
              </Flex>
            </Flex>
            <Box w="620px" h="full">
              <BackgroundImage
                radius="md"
                src={'/image/profile/sakurajima.jpg'}
                style={{
                  width: '100%',
                  height: '100%',
                }}
              />
            </Box>
          </Flex>
        </Flex>
      )}
    </>
  );
};

export default About;
