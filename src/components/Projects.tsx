import { isMobile } from "react-device-detect";
import {
  Text,
  Flex,
  Card,
  Box,
  BackgroundImage,
  Group,
  Badge,
  useMantineColorScheme,
} from "@mantine/core";
import { useId } from "@mantine/hooks";
import { useStyles } from "../style/ProjectStyles";

interface tool {
  name: string;
  color: string;
  id: string;
}

interface project {
  name: string;
  category: string;
  description: string;
  date: string;
  image: string;
  tech: tool[];
  url: string;
  id: string;
}

const Projects = () => {
  const { classes } = useStyles();
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";


  // Technology color scheme:
  //  Web dev (JS, Node, etc): Teal
  //  Python: orange
  //  Database: purple
  //  Java: red
  //  C++/C: yellow
  //  Misc: pink
  const projectArray: project[] = [
    {
      name: "Boid Simulation",
      category: "Interactive Simulation",
      description: `I have always been fascinated by the idea of simulating real-world behavior within a digital space. The thought of mimicking real life entities using
      complex algorithms has always been an endless inspiration of mine. When I first learned about the concept of boids, I immediately knew that it was something 
      that I wanted to turn into a project. So, here it is, my attempt at simulating swarm intelligence. 
      `,
      date: "December 2024",
      image: "/image/project/boidSimulation.png",
      tech: [
        { name: "C++", color: "yellow", id: useId(),},
        { name: "CMake", color: "pink", id: useId(),}
      ],
      url: "https://github.com/thomasspina/Boid-Simulation",
      id: useId(),
    },
    {
      name: "Subletter",
      category: "Virtual Marketplace",
      description: `Born from the frustrations of dorm rentals, Subletter, inspired by Airbnb, offers a student-only alternative to 
      Facebook Marketplace. It features detailed information about dorms across different universities, allows students to share insights 
      and reviews about available dorms, provides reliable user profiles with sublet histories, and offers a secure platform for buying and 
      selling items.
      `,
      date: "August 2023",
      image: "/image/project/subletter.png",
      tech: [
        { name: "JavaScript", color: "teal", id: useId() },
        { name: "NodeJS", color: "teal", id: useId() },
        { name: "Express", color: "teal", id: useId() },
        { name: "ReactJS", color: "teal", id: useId() },
        { name: "ChakraUI", color: "teal", id: useId() },
        { name: "MySQL", color: "violet", id: useId() },
      ],
      url: "https://github.com/imaadj10/subletter",
      id: useId(),
    },
    {
      name: "Resume Builder",
      category: "Web Tool",
      description: `An automated resume templator that makes formatting simple and stress-free. Built mainly for basic software engineering CVs, 
      it also lets you create a polished PDF with one click. The resume I created with this app actually helped me land my first internship.
      `,
      date: "May 2023",
      image: "/image/project/resume_builder.png",
      tech: [
        { name: "JavaScript", color: "teal", id: useId() },
        { name: "ReactJS", color: "teal", id: useId() },
        { name: "HTML5", color: "teal", id: useId() },
        { name: "CSS3", color: "teal", id: useId() },
      ],
      url: "https://github.com/ycheng11065/Resume-Builder",
      id: useId(),
    },
    {
      name: "BattleSnake",
      category: "AI",
      description: `An AI coding competition at RBC where I participated twice during my internship. The challenge features four AI snakes 
      battling to be the longest survivor. My team created and showcased two snakes: SSSShark (blue), which secured 1st place out of 17 in 
      winter 2022, and Orion's Fang (purple), an advanced design that earned 2nd place out of 15 in spring 2023.`,
      date: "April 2023",
      image: "/image/project/snake.png",
      tech: [
        { name: "Python", color: "orange", id: useId() },
        { name: "DigitalOcean", color: "pink", id: useId() },
      ],
      url: "https://github.com/ycheng11065/2023-python-snake",
      id: useId(),
    },
    {
      name: "Navi-Bot",
      category: "ChatBot",
      description: `Developed collaboratively by my team and I during the 2022 NwHacks, our Discord bot brings 
      innovation to UBC degree planning. It offers a user-friendly interface, simplifying access to essential 
      degree-related information and enhancing the planning experience for all UBC students.`,
      date: "January 2023",
      image: "/image/project/naviBot.png",
      tech: [
        { name: "Python", color: "orange", id: useId() },
        { name: "JSON", color: "pink", id: useId() },
      ],
      url: "https://github.com/ycheng11065/UBC-stack-BOT",
      id: useId(),
    },
    {
      name: "Spotify Collage",
      category: "Web Application",
      description: `A creation built by my team and I during our first hackathon at the 2021 NwHacks.  
      This application enabled users to craft captivating collages using album covers accessed through Spotify's API. 
      The collages can be tailored to different categories, including options like a compilation of the user's favorite songs, 
      trending tracks, and an artist's top 10.`,
      date: "January 2022",
      image: "/image/project/spotify.png",
      tech: [
        { name: "Python", color: "orange", id: useId() },
        { name: "HTML5", color: "teal", id: useId() },
        { name: "CSS3", color: "teal", id: useId() },
        { name: "Flask", color: "teal", id: useId() },
        { name: "Bootstrap", color: "teal", id: useId() },
      ],
      url: "https://github.com/imaadj10/spotify-collage",
      id: useId(),
    },
    {
      name: "Fortune Chaser",
      category: "Video Game",
      description: `My first coding project and the spark that led me to pursue computer science. This 2D game, 
      originally a class project, has grown to include custom music, maps, and pixel art. Players collect fortune cookies 
      to uncover hidden fortunes, with features like smooth player movement, basic friendly AI, and a scoring system to enhance gameplay.
      `,
      date: "January 2022",
      image: "/image/project/javaGame.png",
      tech: [
        { name: "Java", color: "red", id: useId() },
        { name: "Swing", color: "pink", id: useId() },
      ],
      url: "https://github.com/ycheng11065/Fortune-Chaser",
      id: useId(),
    },
  ];

  const redirect = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <>
      {isMobile ? (
        <Flex mt="50px" h="100%" direction="column" gap="20px">
          {projectArray &&
            projectArray.map((p, index) => (
              <Card
                radius="md"
                key={p.id}
                className={classes.projectCard}
                onClick={(event) => redirect(p.url)}
              >
                <Flex direction="column" h="100%">
                  <Box className={classes.projectImage}>
                    <BackgroundImage
                      style={{
                        width: "100%",
                        height: "100%",
                        border: "1px solid grey",
                      }}
                      radius="md"
                      src={p.image}
                    />
                  </Box>
                  <Flex direction="column" w="100%" h="70%" mr={{ md: "10px" }}>
                    <Flex justify="space-between">
                      <Text className={classes.projectTitle}>{p.name}</Text>
                      <Group mt="md" mb="xs" mr="0">
                        <Badge color="blue" variant="outline">
                          {p.category}
                        </Badge>
                      </Group>
                    </Flex>
                    <Flex
                      h="100%"
                      pr="10px"
                      direction="column"
                      className={classes.projectTextBox}
                    >
                      <Text>{p.date}</Text>
                      <Text mt="15px">{p.description}</Text>
                      <Flex
                        w="100%"
                        mt="55px"
                        gap="sm"
                        style={{
                          position: "absolute",
                          bottom: "0",
                          flexWrap: "wrap",
                        }}
                      >
                        {p.tech &&
                          p.tech.map((t) =>
                            dark ? (
                              <Badge key={t.id} color={t.color} variant="light">
                                {t.name}
                              </Badge>
                            ) : (
                              <Badge key={t.id} color={t.color} variant="light">
                                {t.name}
                              </Badge>
                            )
                          )}
                      </Flex>
                    </Flex>
                  </Flex>
                </Flex>
              </Card>
            ))}
        </Flex>
      ) : (
        <Flex py="40px" gap="lg" direction="column" align="center" mt="60px">
          {projectArray &&
            projectArray.map((p, index) => (
              <Card
                radius="md"
                key={p.id}
                w={{ xl: "1300px", lg: "1000px", md: "900px" }}
                h={{ xl: "300px", lg: "285px", md: "310px" }}
                className={classes.projectCard}
                onClick={(event) => redirect(p.url)}
              >
                <Flex
                  h="100%"
                  gap={{ xl: "20px", lg: "10px" }}
                  justify="space-between"
                >
                  <Flex direction="column" w="70%" h="100%" mr={{ md: "10px" }}>
                    <Flex justify="space-between" pr="20px">
                      <Text className={classes.projectTitle}>{p.name}</Text>
                      <Group mt="md" mb="xs">
                        <Badge color="blue" variant="outline">
                          {p.category}
                        </Badge>
                      </Group>
                    </Flex>
                    <Flex
                      h="100%"
                      pr="10px"
                      direction="column"
                      className={classes.projectTextBox}
                    >
                      <Text fz={{ xl: "lg", lg: "md" }}>{p.date}</Text>
                      <Text mt="15px" fz={{ xl: "lg", lg: "md" }}>
                        {p.description}
                      </Text>
                      <Flex
                        mt="55px"
                        gap="sm"
                        style={{ position: "absolute", bottom: "0" }}
                      >
                        {p.tech &&
                          p.tech.map((t) =>
                            dark ? (
                              <Badge key={t.id} color={t.color} variant="light">
                                {t.name}
                              </Badge>
                            ) : (
                              <Badge key={t.id} color={t.color} variant="light">
                                {t.name}
                              </Badge>
                            )
                          )}
                      </Flex>
                    </Flex>
                  </Flex>
                  <Box
                    my="auto"
                    w={{ lx: "550px", lg: "500px", md: "400px" }}
                    h={{ xl: "270px", lg: "255px", md: "280px" }}
                    style={{
                      borderRadius: "10px",
                    }}
                  >
                    <BackgroundImage
                      style={{
                        width: "100%",
                        height: "100%",
                        border: "1px solid grey",
                      }}
                      radius="md"
                      src={p.image}
                    />
                  </Box>
                </Flex>
              </Card>
            ))}
        </Flex>
      )}
    </>
  );
};

export default Projects;
