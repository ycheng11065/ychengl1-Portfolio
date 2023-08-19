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
import { useId } from '@mantine/hooks';

interface tool {
  name: string;
  id: string;
}

interface project {
  name: string;
  category: string;
  description: string;
  year: number;
  image: string;
  tech: tool[];
  id: string;
}

const Projects = () => {
  const projectArray: project[] = [
    {
      name: 'Subletter',
      category: 'Virtual Marketplace',
      description:
        'An easy to use marketplace for university students to find sublets',
      year: 2023,
      image: tower_img,
      tech: [
        { name: 'JavaScript', id: useId() },
        { name: 'MySQL', id: useId() },
        { name: 'NodeJS', id: useId() },
        { name: 'Express', id: useId() },
        { name: 'ReactJS', id: useId() },
        { name: 'ChakraUI', id: useId() },
      ],
      id: useId(),
    },
    {
      name: 'Resume Builder',
      category: 'Web Tool',
      description:
        'An intuitive web tool that allows users to easily create a beautiful resume',
      year: 2023,
      image: desert_img,
      tech: [
        { name: 'JavaScript', id: useId() },
        { name: 'MySQL', id: useId() },
        { name: 'NodeJS', id: useId() },
        { name: 'Express', id: useId() },
        { name: 'ReactJS', id: useId() },
        { name: 'ChakraUI', id: useId() },
      ],
      id: useId(),
    },
  ];

  return (
    <>
      {projectArray &&
        projectArray.map((p) => (
          <Card
            key={p.id}
            maw="1000px"
            h="285px"
            style={{ border: '1px solid grey' }}
          >
            <Flex h="100%" justify="space-between">
              <Box w="90%">
                <Flex justify="space-between" pr="20px">
                  <Text
                    fw="bold"
                    style={{ paddingBottom: '0', fontSize: '2rem' }}
                  >
                    {p.name}
                  </Text>
                  <Group mt="md" mb="xs">
                    <Badge color="blue" variant="outline">
                      {p.category}
                    </Badge>
                  </Group>
                </Flex>
                <Flex direction="column">
                  <Text mt="5px">{p.description}</Text>
                  <Flex mt="55px" gap="sm">
                    {p.tech &&
                      p.tech.map((t, index) => (
                        <Badge key={index} color="pink" variant="light">
                          {t}
                        </Badge>
                      ))}
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
        ))}

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
