import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  footer: {
    color: theme.colorScheme === 'dark' ? 'light grey' : 'black',
    backgroundColor: theme.colorScheme === 'dark' ? 'black' : 'white',
  },
  linkButton: {
    fontSize: 'xl',
    marginTop: '4px',
    transition: 'border-color 100ms ease, color 100ms ease',
    textDecoration: 'none',

    '&:hover': {
      color: theme.colorScheme === 'dark' ? theme.white : theme.colors.gray[6],
      textDecoration: 'none',
      transition: 'color 1s ease, border-color 1s ease', 
    },
  },
  linkActive: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    borderBottomColor:
      theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 5 : 6],
  },
  footerBorder: {
    borderTop: '2px solid grey',
    borderTopColor:
      theme.colorScheme === 'dark'
        ? theme.colors.gray[7]
        : theme.colors.gray[3],
  },
}));

export {useStyles};