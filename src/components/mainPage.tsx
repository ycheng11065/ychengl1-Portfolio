import { Flex, Text, Grid, BackgroundImage, Box } from '@mantine/core';
import profile from '../images/me.jpg';

const MainPage = () => {
  return (
    <>
      <Grid
        h="600px"
        mt="30px"
        p="0"
        justify="center"
        gutter="xl"
      >
        <Grid.Col p="0" span={5}>
          <Flex
            gap="20px"
            align="left"
            direction="column"
          >
            <Flex direction="column">
              <Text
                ta="left"
                style={{ fontSize: '3rem'}}
              >
                Hi there,
              </Text>
              <Text
                ta="left"
                style={{ fontSize: '3rem'}}
              >
                I'm YuCheng
              </Text>
            </Flex>
            <Text style={{ maxWidth: '500px' }}>
              I am a Vancouver based software engineer. Having grown up between
              the vibrant cities of Montreal and Calgary, I am now a senior
              computer science student at the University of British Columbia.
            </Text>
            <Text style={{ maxWidth: '500px' }}>
              When I'm not buried in assignments, you'll find me exploring the
              realm of software and languages. There's nothing more furfilling
              to me than translating newfound skills into innovative and
              practical projects.
            </Text>
            <Text style={{ maxWidth: '500px' }}>
              Off-screen, you'll find me enjoying a game of badminton, delving
              into the intricacies of the Japanese language, or humbling myself
              in the world of Summoner's Rift.
            </Text>
            <Text ta="left" style={{ maxWidth: '500px' }}>
              Anyways, I hope you enjoy my corner of the web
            </Text>
          </Flex>
        </Grid.Col>
        <Grid.Col span={4}>
          <Box h="400px">
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
