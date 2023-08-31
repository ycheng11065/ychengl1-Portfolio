import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  mainPageBox: {
    color: theme.colorScheme === 'dark' ? 'white' : 'black',
    backgroundColor: theme.colorScheme === 'dark' ? 'black' : 'white',
  },
  mainPageCanvas: {
    height: '800px',
    width: '100%',

    [theme.fn.smallerThan('xl')]: {
      height: '500px',
    },

    [theme.fn.smallerThan('lg')]: {
      height: '600px',
    },
  },
  welcomeText: {
    fontSize: '3.9rem',
    position: 'absolute',
    zIndex: 1,
    left: '50%',
    top: '42%',
    transform: 'translate(-50%, -42%)',

    [theme.fn.smallerThan('xl')]: {
      fontSize: '2.7rem',
    },

    [theme.fn.smallerThan('lg')]: {
      fontSize: '2.8rem',
    },
    [theme.fn.smallerThan('md')]: {
      fontSize: '2.5rem',
      top: '45%',
      transform: 'translate(-50%, -45%)',
    },
    [theme.fn.smallerThan('sm')]: {
      fontSize: '2rem',
      top: '45%',
      transform: 'translate(-50%, -45%)',
    },
  },
  scrollDownIcon: {
    zIndex: 1,
    position: 'absolute',
    left: '50%',
    top: '90%',
    transform: 'translate(-50%, -90%)',
    animation: 'bounce 1s infinite',
  },
}));

export { useStyles };
