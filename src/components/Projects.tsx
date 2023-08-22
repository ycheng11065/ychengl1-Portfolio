import text_img from '../images/Orchard-Commons.jpg';
import tower_img from '../images/tower.jpg';
import desert_img from '../images/desert.jpg';
import tictactoe_img from '../images/tictactoe.png';
import snake_img from '../images/snake.png';
import resumeBuilder_img from '../images/resume_builder.png';
import naviBot_img from '../images/naviBot.png';
import subletter_img from '../images/subletter.png';
import spotify_img from '../images/spotify.png';

import {
  Text,
  Flex,
  Card,
  Box,
  BackgroundImage,
  Group,
  Badge,
  useMantineColorScheme
} from '@mantine/core';
import { useId } from '@mantine/hooks';

interface tool {
  name: string;
  color: string;
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
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';

  const projectArray: project[] = [
    {
      name: 'Subletter',
      category: 'Virtual Marketplace',
      description: `Amidst the ever-changing landscape of technology, my
                  fascination for innovation continues to thrive. From crafting
                  elegant lines of code to diving deep into complex algorithms,
                  I find solace in the art of problem-solving. Each challenge
                  presents an opportunity to create, learn, and grow. With an
                  unwavering curiosity, I embrace the digital realm, driven to
                  shape the future one algorithm at a time.`,
      year: 2023,
      image: subletter_img,
      tech: [
        { name: 'JavaScript', color: 'teal', id: useId() },
        { name: 'NodeJS', color: 'teal', id: useId() },
        { name: 'Express', color: 'teal', id: useId() },
        { name: 'ReactJS', color: 'teal', id: useId() },
        { name: 'ChakraUI', color: 'teal', id: useId() },
        { name: 'MySQL', color: 'violet', id: useId() }
      ],
      id: useId(),
    },
    {
      name: 'Resume Builder',
      category: 'Web Tool',
      description: `Amidst the ever-changing landscape of technology, my
      fascination for innovation continues to thrive. From crafting
      elegant lines of code to diving deep into complex algorithms,
      I find solace in the art of problem-solving. Each challenge
      presents an opportunity to create, learn, and grow. With an
      unwavering curiosity, I embrace the digital realm, driven to
      shape the future one algorithm at a time.`,
      year: 2023,
      image: resumeBuilder_img,
      tech: [
        { name: 'JavaScript', color: 'teal', id: useId() },
        { name: 'ReactJS', color: 'teal', id: useId() },
        { name: 'HTML5', color: 'teal', id: useId() },
        { name: 'CSS3', color: 'teal', id: useId() },
      ],
      id: useId(),
    },
    {
      name: 'BattleSnake',
      category: 'AI',
      description: `Amidst the ever-changing landscape of technology, my
                  fascination for innovation continues to thrive. From crafting
                  elegant lines of code to diving deep into complex algorithms,
                  I find solace in the art of problem-solving. Each challenge
                  presents an opportunity to create, learn, and grow. With an
                  unwavering curiosity, I embrace the digital realm, driven to
                  shape the future one algorithm at a time.`,
      year: 2023,
      image: snake_img,
      tech: [
        { name: 'Python', color: 'orange', id: useId() },
        { name: 'DigitalOcean', color: 'pink', id: useId() }
      ],
      id: useId(),
    },
    {
      name: 'Tic-Tac-Toe',
      category: 'Web Application',
      description: `Amidst the ever-changing landscape of technology, my
                  fascination for innovation continues to thrive. From crafting
                  elegant lines of code to diving deep into complex algorithms,
                  I find solace in the art of problem-solving. Each challenge
                  presents an opportunity to create, learn, and grow. With an
                  unwavering curiosity, I embrace the digital realm, driven to
                  shape the future one algorithm at a time.`,
      year: 2023,
      image: tictactoe_img,
      tech: [
        { name: 'JavaScript', color: 'teal', id: useId() },
        { name: 'HTML5', color: 'teal', id: useId() },
        { name: 'CSS3', color: 'teal', id: useId() }
      ],
      id: useId(),
    },
    {
      name: 'Navi-Bot',
      category: 'ChatBot',
      description: `Amidst the ever-changing landscape of technology, my
                  fascination for innovation continues to thrive. From crafting
                  elegant lines of code to diving deep into complex algorithms,
                  I find solace in the art of problem-solving. Each challenge
                  presents an opportunity to create, learn, and grow. With an
                  unwavering curiosity, I embrace the digital realm, driven to
                  shape the future one algorithm at a time.`,
      year: 2023,
      image: naviBot_img,
      tech: [
        { name: 'Python', color: 'orange', id: useId() },
        { name: 'JSON', color: 'pink', id: useId() },
      ],
      id: useId(),
    },
    {
      name: 'Spotify Collage',
      category: 'Web Application',
      description: `Amidst the ever-changing landscape of technology, my
                  fascination for innovation continues to thrive. From crafting
                  elegant lines of code to diving deep into complex algorithms,
                  I find solace in the art of problem-solving. Each challenge
                  presents an opportunity to create, learn, and grow. With an
                  unwavering curiosity, I embrace the digital realm, driven to
                  shape the future one algorithm at a time.`,
      year: 2023,
      image: spotify_img,
      tech: [
        { name: 'Python', color: 'orange', id: useId() },
        { name: 'HTML5', color: 'teal', id: useId() },
        { name: 'CSS3', color: 'teal', id: useId() },
        { name: 'Flask', color: 'teal', id: useId() },
        { name: 'Bootstrap', color: 'teal', id: useId() }
      ],
      id: useId(),
    },
  ];

  return (
    <>
      <Flex gap="md" direction="column" align="center" my="40px">
        {projectArray &&
          projectArray.map((p, index) => (
            <Card
              radius="md"
              key={p.id}
              maw="1000px"
              h="285px"
              // style={{ backgroundColor: "grey" }}
            >
              {index % 2 === 0 ? (
                <Flex h="100%" gap="10px" justify="space-between">
                  <Box 
                    w="70%"
                    // mx="15px"
                  >
                    <Flex justify="space-between" pr="20px">
                      <Text
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
                    <Flex
                      h="200px"
                      direction="column"
                      style={{ position: 'relative' }}
                    >
                      <Text 
                        mt="5px"
                      >
                        {p.description}
                      </Text>
                      <Flex
                        mt="55px"
                        gap="sm"
                        style={{ position: 'absolute', bottom: '0' }}
                      >
                        {p.tech &&
                          p.tech.map((t) => (
                            <Badge key={t.id} color={t.color} variant="light">
                              {t.name}
                            </Badge>
                          ))}
                      </Flex>
                    </Flex>
                  </Box>
                  <Box 
                    p="0" 
                    // mx="15px" 
                    w="500px" 
                    h="255px"  
                    style={{ borderRadius: "10px" }}
                  >
                    <BackgroundImage
                      style={{
                        width: '100%',
                        height: '100%',
                        border: "1px solid grey"
                      }}
                      radius="md"
                      src={p.image}
                    />
                  </Box>
                </Flex>
              ) : (
                <Flex h="100%" justify="space-between" mr="0">
                  <Box p="0" w="500px" h="250px" style={{ borderRadius: "10px" }}>
                    <BackgroundImage
                      style={{
                        width: '100%',
                        height: '100%',
                        border: "1px solid grey"
                      }}
                      radius="md"
                      src={p.image}
                    />
                  </Box>
                  <Box w="90%" pl="20px">
                    <Flex justify="space-between" pr="20px">
                      <Text style={{ fontSize: '2rem' }}>
                        {p.name}
                      </Text>
                      <Group mt="md" mb="xs">
                        <Badge color="blue" variant="outline">
                          {p.category}
                        </Badge>
                      </Group>
                    </Flex>
                    <Flex
                      h="200px"
                      direction="column"
                      style={{ position: 'relative' }}
                    >
                      <Text mt="5px">{p.description}</Text>
                      <Flex
                        mt="55px"
                        gap="sm"
                        style={{ position: 'absolute', bottom: '0' }}
                      >
                        {p.tech &&
                          p.tech.map((t) => (
                            <Badge key={t.id} color={t.color} variant="light">
                              {t.name}
                            </Badge>
                          ))}
                      </Flex>
                    </Flex>
                  </Box>
                </Flex>
              )}
            </Card>
          ))}
      </Flex>
    </>
  );
};

export default Projects;
