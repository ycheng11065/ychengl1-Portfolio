import {
  Flex,
  Text,
  Grid,
  BackgroundImage,
  Box,
  createStyles,
} from '@mantine/core';
import profile from '../images/me.jpg';

const useStyles = createStyles((theme) => ({
  titleDescription: {
    fontSize: '3rem',

    [theme.fn.smallerThan('xl')]: {
      fontSize: '2.5rem',
    },
  },
  textDescription: {
    maxWidth: '450px',
    fontSize: '18px',

    [theme.fn.smallerThan('xl')]: {
      fontSize: '16px',
    },
  },
}));

const MainPage = () => {
  const { classes } = useStyles();

  return (
    <>
      <Grid
        h={{ lg: '600px', xl: '650px' }}
        mt={{ lg: '20px', xl: '40px' }}
        mb="0"
        p="0"
        justify="center"
        // style={{ border:"2px solid red" }}
      >
        <Grid.Col
          p="0"
          lg={5}
          xl={3.5}
          // style={{ border:"2px solid red" }}
        >
          <Flex gap="20px" align="left" direction="column">
            <Flex direction="column">
              <Text ta="left" className={classes.titleDescription}>
                Hi there,
              </Text>
              <Text ta="left" className={classes.titleDescription}>
                I'm YuCheng
              </Text>
            </Flex>
            <Text className={classes.textDescription}>
              I am a Vancouver based software engineer. Having grown up between
              the vibrant cities of Montreal and Calgary, I am now a senior
              computer science student at the University of British Columbia.
            </Text>
            <Text className={classes.textDescription}>
              When I'm not buried in assignments, you'll find me exploring the
              realm of software and languages. There's nothing more furfilling
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
        </Grid.Col>
        <Grid.Col lg={4} xl={3}>
          <Box h={{ lg: '500px', xl: '590px' }}>
            <BackgroundImage
              radius="md"
              src={profile}
              style={{
                width: '100%',
                height: '100%',
              }}
            />
          </Box>
        </Grid.Col>
      </Grid>
    </>
  );
};

export default MainPage;
