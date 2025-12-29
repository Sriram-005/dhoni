import { theme } from "../theme";

export const appStyles = {
  wrapper: {
    paddingLeft: "30px",
    paddingTop: "20px",
  },
  heading: {
    marginBottom: theme.spacing.md,
  },
  container: {
    display: "flex",
    gap: theme.spacing.lg,
    paddingTop: theme.spacing.lg,
  },
  tabs: {
    display: "flex",
    gap: "30px",
    marginBottom: theme.spacing.lg,
    cursor: "pointer",
  },
  tab: {
    fontSize: "20px",
    paddingBottom: theme.spacing.sm,
    cursor: "pointer",
  },
};
