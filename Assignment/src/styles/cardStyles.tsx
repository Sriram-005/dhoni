import { theme } from "../theme";

export const cardStyles = {
  card: {
    width: "260px",
    padding: "15px",
    borderRadius: theme.radius.lg,
    background: theme.colors.white,
    boxShadow: theme.shadow,
  },
  image: {
    width: "100%",
    borderRadius: theme.radius.md,
  },
  leftText: {
    textAlign: "left" as const,
    marginTop: "10px",
  },
  title: {
    margin: "0 0 5px",
    fontSize: "16px",
  },
  author: {
    fontSize: "14px",
    color: theme.colors.subText,
    margin: 0,
  },
  infoRow: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: theme.spacing.md,
    fontSize: "13px",
    color: theme.colors.lightText,
  },
  infoItem: {
    display: "flex",
    alignItems: "center",
    gap: theme.spacing.sm,
  },
  icon: {
    fontSize: "14px",
  },
  actionContainer: {
    display: "flex",
    justifyContent: "center",
    marginTop: theme.spacing.md,
  },
  actionText: {
    fontSize: "14px",
    color: theme.colors.primary,
    textDecoration: "underline",
    cursor: "pointer",
  },
};
