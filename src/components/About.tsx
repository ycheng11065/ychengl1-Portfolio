import {
  Flex,
  Text,
  Grid,
  BackgroundImage,
  Box,
  createStyles,
  Anchor,
} from '@mantine/core';
import profile from '../images/me.jpg';
import { IconBrandLinkedin } from '@tabler/icons-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import { isMobile } from 'react-device-detect';

const useStyles = createStyles((theme) => ({
  aboutPage: {
    backgroundColor: theme.colorScheme === 'dark' ? 'black' : 'white',
    // border: "1px solid yellow"
  },
  titleDescription: {
    // fontFamily: "BlinkMacSystemFont",
    fontSize: '3rem',

    [theme.fn.smallerThan('xl')]: {
      fontSize: '3rem',
    },

    [theme.fn.smallerThan('md')]: {
      fontSize: '1rem',
      margin: '0 10px',
    },
  },
  textDescription: {
    maxWidth: '450px',
    fontSize: '18px',

    [theme.fn.smallerThan('xl')]: {
      fontSize: '16px',
    },

    [theme.fn.smallerThan('md')]: {
      fontSize: '12px',
      margin: '0 10px',
    },
  },
  contactIcon: {
    color: 'grey',
    width: '2rem',
    fontSize: '3rem',
    padding: '15px 25px',
    border: '0.5px solid grey',
    borderRadius: '10px',
    cursor: 'pointer',

    [theme.fn.smallerThan('md')]: {
      fontSize: '12px',
      padding: '5px 15px',
    },
  },
}));

const About = () => {
  const { classes } = useStyles();

  return (
    <>
      {!isMobile ? (
        <Flex
          mt="50px"
          pt={{ lg: '30px', xl: '40px' }}
          direction="column"
          align="center"
          // style={{ border: '2px solid red' }}
          w="1000px"
          mx="auto"
          gap="40px"
        >
          <Flex
            w="100%"
            mx={{ md: '20px' }}
            justify={{ xl: 'space-between', lg: 'space-between', md: 'center' }}
            gap={{ xl: '80px', lg: '60px', md: '20px' }}
            className={classes.aboutPage}
            // style={{ border: '2px solid red' }}
          >
            <Flex gap="20px" align="left" direction="column">
              <Flex direction="column">
                <Text ta="left" pt="0" className={classes.titleDescription}>
                  Hi there
                </Text>
                <Text ta="left" className={classes.titleDescription}>
                  I'm YuCheng
                </Text>
              </Flex>
              <Text className={classes.textDescription}>
                I am a Vancouver based software engineer. Having grown up
                between the vibrant cities of Montreal and Calgary, I am now a
                senior computer science student at the University of British
                Columbia.
              </Text>
              <Text className={classes.textDescription}>
                When I'm not buried in assignments, you'll find me exploring the
                realm of software and languages. There's nothing more furfilling
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
              <Flex
                w="100%"
                gap="2rem"
                // style={{ border: "1px solid yellow" }}
              >
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
            <Box w="420px" h="full">
              <BackgroundImage
                radius="md"
                src={profile}
                style={{
                  width: '100%',
                  height: '100%',
                }}
              />
            </Box>
          </Flex>
        </Flex>
      ) : (
        <Flex 
          mt="50px" 
          direction="column" 
          h="600px" 
          w="full"
          // style={{ border: "2px solid red" }}
        >
          <Box w="full" h="300px">
            <BackgroundImage
              radius="md"
              src={profile}
              style={{
                width: '100%',
                height: '100%',
              }}
            />
          </Box>
          <Flex mt="10px" gap="20px" align="left" direction="column">
            <Text ta="left" pt="0" className={classes.titleDescription}>
              Hi there, I'm YuCheng
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
          </Flex>
          <Flex mt="30px" gap="2rem" justify="center">
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
      )}
    </>
  );
};

export default About;
