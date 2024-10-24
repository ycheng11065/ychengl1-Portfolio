import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  navBar: {
    fontColor: 'white',
    backgroundColor: theme.colorScheme === 'dark' ? 'black' : 'white',
    // backgroundColor: 'red',
  },
  linkButton: {
    cursor: 'pointer',
    textTransform: 'uppercase',
    fontSize: '15px',
    color:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[1]
        : theme.colors.gray[6],
    padding: '5px',
    borderBottom: `2px solid transparent`,
    transition: 'border-color 100ms ease, color 100ms ease',
    textDecoration: 'none',

    '&:hover': {
      color: theme.colorScheme === 'dark' ? theme.white : theme.black,
      textDecoration: 'none',
    },
  },
  linkButtonMobile: {
    fontSize: '2rem',
    cursor: 'pointer',
    textTransform: 'uppercase',
    color:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[1]
        : theme.colors.gray[6],
    padding: '5px',
    borderBottom: `2px solid transparent`,
    transition: 'border-color 100ms ease, color 100ms ease',
    textDecoration: 'none',

    '&:hover': {
      color: theme.colorScheme === 'dark' ? theme.white : theme.black,
      textDecoration: 'none',
    },
  },
  linkActive: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    borderBottomColor:
      theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 5 : 6],
  },
  colorModeButton: {
    color:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[1]
        : theme.colors.gray[6],
  },
  logoButton: {
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? 'white' : 'black',
    fontSize: '2rem',
  },
  optionIcon: {
    fontSize: '2rem',
    margin: 'auto 0',
    color: 'white',
  },
}));

export { useStyles };
