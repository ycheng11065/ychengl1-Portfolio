import {
  Text,
  Flex,
  Container,
  Button,
  useMantineColorScheme,
  ActionIcon
} from '@mantine/core';
import { IconSun, IconMoon } from '@tabler/icons-react';

const NavBar = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';

  return (
    <>
      <Flex mt="10px" direction="row" justify="space-between">
        <Container ml="10px" mr="0">
          <Text style={{ fontSize: '2rem' }}>YCL</Text>
        </Container>
        <Container mx="0" mt="15px">
          <Flex gap="md">
            <Button>Projects</Button>
            <Button>Contacts</Button>
            <Button>About</Button>
            <ActionIcon
              variant="outline"
              color={dark ? 'yellow' : 'blue'}
              onClick={() => toggleColorScheme()}
              title="Toggle color scheme"
            >
              {dark ? (
                <IconSun size="1.1rem" />
              ) : (
                <IconMoon size="1.1rem" />
              )}
            </ActionIcon>
          </Flex>
        </Container>
      </Flex>
    </>
  );
};

export default NavBar;
