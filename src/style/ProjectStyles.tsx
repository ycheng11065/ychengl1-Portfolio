import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  projectCard: {
    cursor: "pointer",
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[9]
        : theme.colors.gray[1],
    backgroundImage:
      theme.colorScheme === "dark"
        ? "linear-gradient(to bottom right, #6782FF, #141a25, #141a25, #141a25, #23A3FF)"
        : "linear-gradient(to bottom right, #23A3FF, #F1F3F5, #F1F3F5, #F1F3F5, #6782FF)",

    // Alternative gradient
    // : 'linear-gradient(to bottom right, #B12BFF, #E9ECEF, #E9ECEF,  #E9ECEF, #7C44FF)',
    [theme.fn.smallerThan("md") && theme.fn.largerThan("xs")]: {
      margin: "0 auto",
      width: "700px",
      height: "680px",
    },
    [theme.fn.smallerThan("sm")]: {
      height: "680px",
    },
    "&:hover": {
      backgroundImage:
        theme.colorScheme === "dark"
          ? "linear-gradient(to bottom right, #23A3FF, #141a25, #141a25, #141a25, #6782FF)"
          : "linear-gradient(to bottom right, #6782FF, #F1F3F5, #F1F3F5, #F1F3F5, #23A3FF)",
    },
  },
  projectTitle: {
    color: theme.colorScheme === "dark" ? "white" : "black",
    fontSize: "2rem",
  },
  projectTextBox: {
    position: "relative",
    border: "1px solid transparent",
  },
  projectImage: {
    borderRadius: "10px",

    [theme.fn.smallerThan("md") && theme.fn.largerThan("xs")]: {
      height: "70%",
    },
    [theme.fn.smallerThan("sm")]: {
      height: "280px",
    },
  },
}));

export { useStyles };
