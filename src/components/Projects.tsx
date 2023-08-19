import text_img from '../images/Orchard-Commons.jpg';
import tower_img from '../images/tower.jpg';
import desert_img from '../images/desert.jpg';

import {
  Text,
  Flex,
  Container,
  Button,
  useMantineColorScheme,
  ActionIcon,
  Paper,
  Image,
  Card,
  Box,
  BackgroundImage,
} from '@mantine/core';

const Projects = () => {
  return (
    <>
      <Flex gap="md" direction="column" align="center" my="40px">
        <Card maw="1000px" h="285px" style={{ border: '1px solid grey' }}>
          <Flex
            h="100%"
            justify="space-between"
            // style={{ border:"1px solid red"}}
          >
            {' '}
            <Box w="90%">
              <Text fw="bold" style={{ fontSize: '2rem' }}>
                Subletter
              </Text>
              <Text>
                "Amidst the ever-changing landscape of technology, my
                fascination for innovation continues to thrive. From crafting
                elegant lines of code to diving deep into complex algorithms, I
                find solace in the art of problem-solving. Each challenge
                presents an opportunity to create, learn, and grow. With an
                unwavering curiosity, I embrace the digital realm, driven to
                shape the future one algorithm at a time."
              </Text>
            </Box>
            <Box p="0" w="500px" h="250px">
              <BackgroundImage
                style={{
                  width: '100%',
                  height: '100%',
                }}
                radius="md"
                src={text_img}
              />
            </Box>
          </Flex>
        </Card>
        <Card maw="1000px" h="285px" style={{ border: '1px solid grey' }}>
          <Flex
            h="100%"
            justify="space-between"
            mr="0"
            // style={{ border:"1px solid red"}}
          >
            <Box p="0" w="500px" h="250px">
              <BackgroundImage
                style={{
                  width: '100%',
                  height: '100%',
                }}
                radius="md"
                src={tower_img}
              />
            </Box>
            <Box w="90%" pl="20px">
              <Text fw="bold" style={{ fontSize: '2rem' }}>
                Resume Builder
              </Text>
              <Text>
                "Amidst the ever-changing landscape of technology, my
                fascination for innovation continues to thrive. From crafting
                elegant lines of code to diving deep into complex algorithms, I
                find solace in the art of problem-solving. Each challenge
                presents an opportunity to create, learn, and grow. With an
                unwavering curiosity, I embrace the digital realm, driven to
                shape the future one algorithm at a time."
              </Text>
            </Box>
          </Flex>
        </Card>
      </Flex>
    </>
  );
};

export default Projects;
