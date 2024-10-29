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
  //  Misc: pink
  const projectArray: project[] = [
    {
      name: "Subletter",
      category: "Virtual Marketplace",
      description: `A fullstack app developed for UBC's CPSC 304 database class, 
      streamlines UBC dorm subletting. Addressing Facebook Marketplace's inefficiencies, 
      it offers UBC-exclusive sublet postings and detailed dormitory information,
      including Airbnb-like ratings for dorms and users.
      `,
      date: "Aug 2023",
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
      description: `An automated resume templator that seamlessly formats your resume, 
       primarily for software engineer CVs. Additionally, it offers the convenience of one-click PDF.
       I use it for all my resumes, saved me from a lot of headaches. 
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
      description: `An AI competition at RBC where I participated twice back when I was an intern.
      The challenge involves four snakes, whoever survives the longest wins. My team and I crafted both showcased 
      snakes: SSSShark (blue), clinching the 2022 1st prize, and the more advanced Orion's Fang (purple), securing 2nd 
      place in 2023`,
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
      description: `Developed collaboratively by my team and me during the 2022 NwHacks, our Discord bot brings 
      innovation to UBC degree planning. It offers a user-friendly interface, simplifying access to essential 
      degree-related information and enhancing the planning experience for all UBC students.`,
      date: "Jan 2023",
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
      description: `A creation built by me and my team during our first hackathon at the NwHacks 2021.  
      This application enabled users to craft captivating collages using album covers accessed through Spotify's API. 
      The collages could be tailored to different categories, encompassing options like a compilation of the user's favorite songs, 
      trending tracks, and an artist's top 10.`,
      date: "Jan 2022",
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
      description: `A 2D game originally developed as a class project, 
      now expanded with custom music, maps, and pixel art, where players collect fortune 
      cookies to reveal hidden fortunes. The game includes smooth player movement, basic friendly AI, 
      and a scoring system for an engaging experience.
      `,
      date: "Jan 2022",
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
