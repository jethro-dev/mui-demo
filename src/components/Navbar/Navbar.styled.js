import { styled, alpha } from "@mui/material/styles";
import { Toolbar, InputBase } from "@mui/material";

export const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

export const SearchBar = styled("div")(({ theme, open }) => ({
  display: open ? "flex" : "none",
  justifyContent: "space-between",
  alignItems: "center",
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  borderRadius: theme.shape.borderRadius,
  width: "50%",
  [theme.breakpoints.down("sm")]: {
    width: "70%",
  },
  padding: `0 ${theme.spacing(1)}`,
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "white",
  marginLeft: theme.spacing(1),
}));

export const Icons = styled("div")(({ open }) => ({
  display: !open ? "flex" : "none",
  alignItems: "center",
}));

export const SearchDiv = styled("div")(({}) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));
