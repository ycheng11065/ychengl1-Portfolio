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


interface ToolColor {
  [key: string]: string;
}

interface Tool {
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
  tech: Tool[];
  url: string;
  id: string;
}

const toolColorScheme: ToolColor = {
  python: "orange.6",      
  java: "red",        
  csharp: "blue",      
  cppnc: "yellow",    
  js: "teal.5",        
  ts: "cyan.6",          
  webDev: "indigo",   
  ml: "grape",       
  dataScience: "lime.6",  
  gameDev: "violet", 
  devOps: "green",    
  databases: "blue.5",   
  mobile: "pink.6",       
  systems: "yellow.7",    
  emergingTech: "pink",
};

const Projects = () => {
  const { classes } = useStyles();
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";

  const projectArray: project[] = [
    {
      name: "Heimdall",
      category: "Geospatial Visualization Tool",
        description: `Heimdall is a web-based geospatial visualization tool—imagine Google Earth 
        enhanced with real-time data overlays. It brings satellites, earthquakes, ship movements, 
        and other global phenomena to life, offering a unified and engaging way to explore Earth’s dynamic systems. 
        The project is currently in development, with satellite visualization expected to be completed by the end of 
        June and many more features planned.
      `,
      date: "In Progress",
      image: "/image/project/heimdall.png",
      tech: [
        { name: "Java", color: toolColorScheme["java"], id: useId()},
        { name: "SpringBoot", color: toolColorScheme["java"], id: useId()},
        { name: "JAVASCRIPT", color: toolColorScheme["js"], id: useId()},
        { name: "REACTJS", color: toolColorScheme["webDev"], id: useId()},
        { name: "RUST", color: toolColorScheme["systems"], id: useId()},
        { name: "POSTGRESQL", color: toolColorScheme["databases"], id: useId()},
        { name: "DOCKER", color: toolColorScheme["devOps"], id: useId()},
      ],
      url: "https://github.com/ycheng11065/Heimdall",
      id: useId(),
    },
    {
      name: "Axis Render",
      category: "3D Render Engine",
      description: `Axis Render is a rasterization-based 3D model rendering engine designed to visualize OBJ models. 
      This project serves as an initial step in developing a game engine, providing the foundational tools for rendering and 
      interacting with 3D models. As a standalone application, Axis Render offers a straightforward UI that allows users to manipulate 
      and explore 3D models and shaders in real-time.
      `,
      date: "March 2025",
      image: "/image/project/axis.png",
      tech: [
        { name: "C++", color: toolColorScheme["cppnc"], id: useId()},
        { name: "CMAKE", color: toolColorScheme["cppnc"], id: useId()},
        { name: "OpenGL", color: toolColorScheme["gameDev"], id: useId()},
        { name: "GLSL", color: toolColorScheme["gameDev"], id: useId()},
      ],
      url: "https://github.com/thomasspina/Axis-Render?tab=readme-ov-file",
      id: useId(),
    },
    {
      name: "Chip-8 Emulator",
      category: "Emulator",
      description: `This is an emulator for CHIP-8, a simple virtual machine developed in the 1970s to enable game development 
      on early computers. In other words, a software made for those that want to relive the nostalgic feeling of playing 
      retro games on a highly constrained machine. I suppose this is the modern-day solution to a gamer's time machine. Best of all,
      It's fully functional on web—give it a try!
      `,
      date: "January 2025",
      image: "/image/project/chip8.png",
      tech: [
        { name: "C++", color: toolColorScheme["cppnc"], id: useId(),},
        { name: "CMake", color: toolColorScheme["systems"], id: useId(),},
        { name: "JavaScript", color: toolColorScheme["js"], id: useId() },
        { name: "HTML5", color: toolColorScheme["webDev"], id: useId() },
        { name: "CSS3", color: toolColorScheme["webDev"], id: useId() },
        { name: "WASM", color: toolColorScheme["webDev"], id: useId() },

      ],
      url: "https://github.com/thomasspina/Chip-8_emulator",
      id: useId(),
    },
    {
      name: "A Big Hole",
      category: "Video Game",
      description: `Have you ever dreamed of falling to your death while dodging hundreds of miscellaneous objects 3000ft up in the air? 
      Yeah!? Well, this game will ensure that your days of upright walking will finally come to an end. Goal of the game is simple: Reach the end of the hole or 
      break your legs trying.
      `,
      date: "January 2025",
      image: "/image/project/aBigHole.png",
      tech: [
        { name: "C#", color: toolColorScheme["csharp"], id: useId(),},
        { name: "Unity", color: toolColorScheme["gameDev"], id: useId(),}
      ],
      url: "https://github.com/KeveenWong/mini-jam-gravity",
      id: useId(),
    },
    {
      name: "Boid Simulation",
      category: "Simulation",
      description: `I have always been fascinated by the idea of simulating real-world behavior within a digital environment. The thought of mimicking real life entities using
      complex algorithms has always given me cool ideas. When I first learned about the concept of boids, I knew that it was the perfect inspiration for a new project. 
      So, here it is, my attempt at simulating swarm intelligence. 
      `,
      date: "December 2024",
      image: "/image/project/boidSimulation.png",
      tech: [
        { name: "C++", color: toolColorScheme["cppnc"], id: useId(),},
        { name: "CMake", color: toolColorScheme["systems"], id: useId(),}
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
        { name: "JavaScript", color: toolColorScheme["js"], id: useId() },
        { name: "NodeJS", color: toolColorScheme["webDev"], id: useId() },
        { name: "Express", color: toolColorScheme["webDev"], id: useId() },
        { name: "ReactJS", color: toolColorScheme["webDev"], id: useId() },
        { name: "ChakraUI", color: toolColorScheme["webDev"], id: useId() },
        { name: "MySQL", color: toolColorScheme["databases"], id: useId() },
      ],
      url: "https://github.com/imaadj10/subletter",
      id: useId(),
    },
    {
      name: "Resume Builder",
      category: "Web Tool",
      description: `An automated resume templator designed to make formatting software engineer CVs effortless and stress-free. 
      While this may never replace LaTeX, it offers a no-brainer solution for those who just want to fill out simple forms. 
      Plus, it lets you generate a polished PDF with a single click.
      `,
      date: "May 2023",
      image: "/image/project/resume_builder.png",
      tech: [
        { name: "JavaScript", color: toolColorScheme["js"], id: useId() },
        { name: "ReactJS", color: toolColorScheme["webDev"], id: useId() },
        { name: "HTML5", color: toolColorScheme["webDev"], id: useId() },
        { name: "CSS3", color: toolColorScheme["webDev"], id: useId() },
      ],
      url: "https://github.com/ycheng11065/Resume-Builder",
      id: useId(),
    },
    {
      name: "BattleSnake",
      category: "AI",
      description: `An AI coding competition hosted at RBC where I participated twice during my first internship. The challenge involves four AI snakes 
      battling to be the longest survivor. My team created two snakes: SSSShark (blue), which secured 1st place out of 17 during the
      winter 2022 event, and Orion's Fang (purple), a more advanced design that earned 2nd place out of 15 during the spring 2023 event.`,
      date: "April 2023",
      image: "/image/project/snake.png",
      tech: [
        { name: "Python", color: toolColorScheme["python"], id: useId() },
        { name: "DigitalOcean", color: toolColorScheme["devOps"], id: useId() },
      ],
      url: "https://github.com/ycheng11065/2023-python-snake",
      id: useId(),
    },
    {
      name: "Navi-Bot",
      category: "ChatBot",
      description: `Developed collaboratively by my team and I during the 2022 NwHacks, our Discord bot brings 
      simplicity to UBC degree planning. Offering a user-friendly interface, facilitating access to essential 
      degree-related information and guiding the planning experience for all UBC students. So, if you ever find yourself 
      stuck in the wrong class, it’s probably because you didn’t use Navi-Bot :/ .
      `,
      date: "January 2023",
      image: "/image/project/naviBot.png",
      tech: [
        { name: "Python", color: toolColorScheme["python"], id: useId() },
        { name: "JSON", color: toolColorScheme["devOps"], id: useId() },
      ],
      url: "https://github.com/ycheng11065/UBC-stack-BOT",
      id: useId(),
    },
    {
      name: "Spotify Collage",
      category: "Web Application",
      description: `A creation built by my team and I during our first hackathon at the 2021 NwHacks.  
      This application enabled users to craft captivating collages using album covers accessed through Spotify's API. 
      The collages can be tailored to different categories, including options like trending tracks, artist's top 10 or the
      user's most-listened songs. Now you can show your superior music taste visually.`,
      date: "January 2022",
      image: "/image/project/spotify.png",
      tech: [
        { name: "Python", color: toolColorScheme["python"], id: useId() },
        { name: "HTML5", color: toolColorScheme["webDev"], id: useId() },
        { name: "CSS3", color: toolColorScheme["webDev"], id: useId() },
        { name: "Flask", color: toolColorScheme["webDev"], id: useId() },
        { name: "Bootstrap", color: toolColorScheme["webDev"], id: useId() },
      ],
      url: "https://github.com/imaadj10/spotify-collage",
      id: useId(),
    },
    {
      name: "Fortune Chaser",
      category: "Video Game",
      description: `My first coding project and the spark that led me to pursue computer science. This 2D game, 
      originally a class project, has grown to include custom music, maps, and pixel art. Players collect fortune cookies 
      to uncover hidden messages, with features like smooth player movement, basic friendly AI, and a scoring system to enhance gameplay.
      `,
      date: "January 2022",
      image: "/image/project/javaGame.png",
      tech: [
        { name: "Java", color: toolColorScheme["java"], id: useId() }
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
                      <Text 
                        className={classes.projectTitle}
                      >  
                          {p.name}
                      </Text>
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
                              <Badge key={t.id} color={t.color} variant="outline">
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
                              <Badge key={t.id} color={t.color} variant="outline">
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
