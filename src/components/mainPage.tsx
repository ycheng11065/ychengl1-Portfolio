import { Flex, Text } from '@mantine/core';

const MainPage = () => {
  return (
    <>
      <Flex mt="20px" align="center" direction="column">
        <Text ta="center" style={{ fontSize: "5rem" }}> Hi There... I'm YuCheng Li</Text>
        <Text ta="center" style={{ maxWidth: "600px"}}>
          I am a vancouver based software engineer. Having grown up between the vibrant cities of Montreal and Calgary, 
          I am now a senior computer science student at the University of British Columbia.
          
          When I'm not buried in assignments, you'll find me exploring the realm of software and languages. There's nothing more furfilling
          to me than translating newfound skills into innovative and practical projects.

          Off-screen, you'll find me enjoying a game of badminton, delving into the intricacies of the Japanese language, or humbling myself
          in the world of Summoner's rift.

          Anyways, I hope you enjoy my corner of the web
        </Text>
      </Flex>
    </>
  );
};

export default MainPage;
