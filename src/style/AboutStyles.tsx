import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  aboutPage: {
    backgroundColor: theme.colorScheme === 'dark' ? 'black' : 'white',
  },
  introTitle: {
    fontSize: '2rem'
  },
  titleDescription: {
    fontSize: '3rem',

    [theme.fn.smallerThan('xl')]: {
      fontSize: '3rem',
    },

    [theme.fn.smallerThan('md')]: {
      fontSize: '2rem',
    },
    [theme.fn.smallerThan('sm')]: {
      fontSize: '1.3rem',
      margin: '0 10px',
    },
  },
  textDescription: {
    maxWidth: '450px',
    fontSize: '18px',

    [theme.fn.smallerThan('xl')]: {
      fontSize: '16px',
    },

    [theme.fn.smallerThan('md')]: {
      fontSize: '14px',
    },
    [theme.fn.smallerThan('sm')]: {
      fontSize: '13px',
      margin: '0 10px',
    },
  },
  contactIcon: {
    color: 'grey',
    width: '2rem',
    fontSize: '3rem',
    padding: '15px 25px',
    border: '0.5px solid grey',
    borderRadius: '10px',
    cursor: 'pointer',

    [theme.fn.smallerThan('md')]: {
      fontSize: '2rem',
      padding: '10px 20px',
    },
    [theme.fn.smallerThan('sm')]: {
      fontSize: '1rem',
      padding: '10px 20px',
    },
  },
  contactIconWrapper: {
    '&:hover svg': {
      color: theme.colorScheme === 'dark' ? 'white' : 'black',
      borderColor: theme.colorScheme === 'dark' ? 'white' : 'black',
      transition: 'color 0.4s ease, border-color 0.4s ease', 
    },
  },
  aboutText: {
    position: 'relative',
    width: '700px',

    [theme.fn.smallerThan('sm')]: {
      width: '100%',
    },
  },
  aboutImage: {
    width: '700px',

    [theme.fn.smallerThan('sm')]: {
      width: '100%',
    },
  },
  contactIconContainer1: {
    marginTop: '15px',
    position: 'absolute',
    right: '0',

    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },
  contactIconContainer2: {
    [theme.fn.smallerThan('md') && theme.fn.largerThan('xs')]: {
      display: 'none',
    },
  },
}));

export { useStyles };