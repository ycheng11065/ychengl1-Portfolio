import text_img from '../images/Orchard-Commons.jpg';
import tower_img from '../images/tower.jpg';
import desert_img from '../images/desert.jpg';

import {
  Text,
  Flex,
  Card,
  Box,
  BackgroundImage,
  Group,
  Badge,
} from '@mantine/core';

interface project {
  name: string;
  category: string;
  description: string;
  year: number;
  image: string;
  tech: string[];
}

const Projects = () => {
  const projectArray = []
  return (
    <>
      <Flex gap="md" direction="column" align="center" my="40px">
        <Card maw="1000px" h="285px" style={{ border: '1px solid grey' }}>
          <Flex h="100%" justify="space-between">
            <Box w="90%">
              <Flex justify="space-between" pr="20px">
                <Text
                  fw="bold"
                  style={{ paddingBottom: '0', fontSize: '2rem' }}
                >
                  NaviBot
                </Text>
                <Group mt="md" mb="xs">
                  <Badge color="blue" variant="outline">
                    Chatbot
                  </Badge>
                </Group>
              </Flex>
              <Flex direction="column">
                <Text mt="5px">
                  "Amidst the ever-changing landscape of technology, my
                  fascination for innovation continues to thrive. From crafting
                  elegant lines of code to diving deep into complex algorithms,
                  I find solace in the art of problem-solving. Each challenge
                  presents an opportunity to create, learn, and grow. With an
                  unwavering curiosity, I embrace the digital realm, driven to
                  shape the future one algorithm at a time."
                </Text>
                <Flex mt="55px" gap="sm">
                  <Badge color="pink" variant="light">
                    JavaScript
                  </Badge>
                  <Badge color="orange" variant="light">
                    MySQL
                  </Badge>
                  <Badge color="green" variant="light">
                    NodeJS
                  </Badge>
                  <Badge color="green" variant="light">
                    Express
                  </Badge>
                  <Badge color="green" variant="light">
                    ReactJS
                  </Badge>
                  <Badge color="green" variant="light">
                    CharkraUI
                  </Badge>
                </Flex>
              </Flex>
            </Box>
            <Box p="0" w="500px" h="250px">
              <BackgroundImage
                style={{
                  width: '100%',
                  height: '100%',
                }}
                radius="md"
                src={desert_img}
              />
            </Box>
          </Flex>
        </Card>

        <Card maw="1000px" h="285px" style={{ border: '1px solid grey' }}>
          <Flex h="100%" justify="space-between" mr="0">
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
              <Flex justify="space-between" pr="20px">
                <Text fw="bold" style={{ fontSize: '2rem' }}>
                  Resume Builder
                </Text>
                <Group mt="md" mb="xs">
                  <Badge color="blue" variant="outline">
                    Chatbot
                  </Badge>
                </Group>
              </Flex>
              <Flex direction="column">
                <Text mt="5px">
                  "Amidst the ever-changing landscape of technology, my
                  fascination for innovation continues to thrive. From crafting
                  elegant lines of code to diving deep into complex algorithms,
                  I find solace in the art of problem-solving. Each challenge
                  presents an opportunity to create, learn, and grow. With an
                  unwavering curiosity, I embrace the digital realm, driven to
                  shape the future one algorithm at a time."
                </Text>
                <Flex mt="55px" gap="sm">
                  <Badge color="pink" variant="light">
                    JavaScript
                  </Badge>
                  <Badge color="orange" variant="light">
                    MySQL
                  </Badge>
                  <Badge color="green" variant="light">
                    NodeJS
                  </Badge>
                  <Badge color="green" variant="light">
                    Express
                  </Badge>
                  <Badge color="green" variant="light">
                    ReactJS
                  </Badge>
                  <Badge color="green" variant="light">
                    CharkraUI
                  </Badge>
                </Flex>
              </Flex>
            </Box>
          </Flex>
        </Card>
      </Flex>
    </>
  );
};

export default Projects;
