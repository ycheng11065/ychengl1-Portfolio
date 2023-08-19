import { Link } from 'react-router-dom';
import {
  Text,
  Flex,
  Container,
  Button,
  useMantineColorScheme,
  ActionIcon,
} from '@mantine/core';
import { IconSun, IconMoon } from '@tabler/icons-react';

const NavBar = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';

  return (
    <>
      <Flex mt="10px" direction="row" justify="space-between">
        <Container ml="10px" mr="0">
          <Link to="./" style={{ textDecoration: 'none', color: 'inherit' }}>
            <Text style={{ fontSize: '2rem' }}>YCL</Text>
          </Link>
        </Container>
        <Container mx="0" mt="15px">
          <Flex gap="md">
            <Link to="/projects">
              <Button>Projects</Button>
            </Link>
            <Link to="/">
              <Button>About</Button>
            </Link>
            <Button>Resume</Button>
            <ActionIcon
              size="2.2rem"
              variant="outline"
              color={dark ? 'yellow' : 'blue'}
              onClick={() => toggleColorScheme()}
              title="Toggle color scheme"
            >
              {dark ? <IconSun size="2rem" /> : <IconMoon size="2rem" />}
            </ActionIcon>
          </Flex>
        </Container>
      </Flex>
    </>
  );
};

export default NavBar;
