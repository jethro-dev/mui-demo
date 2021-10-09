import { styled } from "@mui/material/styles";
import { Container, Typography } from "@mui/material";

export const StyledContainer = styled(Container)(({ theme }) => ({
  paddingTop: theme.spacing(10),
  backgroundColor: theme.palette.primary.main,
  height: "100vh",
  color: "white",
  position: "sticky",
  top: 0,
  [theme.breakpoints.up("sm")]: {
    backgroundColor: "white",
    color: "#555",
    border: "1px solid #ece7e7",
  },
}));

export const Item = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  marginBottom: theme.spacing(4),
  [theme.breakpoints.up("sm")]: {
    marginBottom: theme.spacing(3),
  },
  cursor: "pointer",
}));

export const ItemIcon = styled("div")(({ theme }) => ({
  marginRight: theme.spacing(1),
  [theme.breakpoints.up("sm")]: {
    fontSize: "18px",
  },
}));

export const ItemText = styled(Typography)(({ theme }) => ({
  fontWeight: 500,
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));
