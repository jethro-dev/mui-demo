import React, { useState, useEffect } from "react";
import { AppBar, Typography, Badge, Avatar } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Search, Mail, Notifications, Cancel } from "@mui/icons-material";
import {
  SearchBar,
  StyledToolbar as Toolbar,
  StyledInputBase as InputBase,
  Icons,
  SearchDiv,
} from "./Navbar.styled";

const Navbar = () => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleResize = () => {
    if (window.innerWidth >= 600) {
      setOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography
          variant="h6"
          sx={{
            display: "none",
            [theme.breakpoints.up("sm")]: {
              display: "block",
            },
          }}
        >
          MUI
        </Typography>
        <Typography
          variant="h6"
          sx={{
            display: "none",
            [theme.breakpoints.down("sm")]: {
              display: "block",
            },
          }}
        >
          GL
        </Typography>
        <SearchBar
          open={open}
          sx={{
            marginRight: theme.spacing(2),
            [theme.breakpoints.up("sm")]: {
              display: "flex",
            },
          }}
        >
          <SearchDiv>
            <Search />
            <InputBase placeholder="search..." />
          </SearchDiv>
          <Cancel
            onClick={() => setOpen(false)}
            sx={{
              display: "block",
              [theme.breakpoints.up("sm")]: {
                display: "none",
              },
            }}
          />
        </SearchBar>
        <Icons open={open}>
          <Search
            sx={{
              display: "block",
              marginRight: theme.spacing(2),
              [theme.breakpoints.up("sm")]: {
                display: "none",
              },
            }}
            onClick={() => setOpen(true)}
          />
          <Badge
            badgeContent={4}
            color="secondary"
            sx={{ marginRight: theme.spacing(2) }}
          >
            <Mail />
          </Badge>
          <Badge
            badgeContent={4}
            color="secondary"
            sx={{ marginRight: theme.spacing(2) }}
          >
            <Notifications />
          </Badge>
          <Avatar alt="avatar" src="/static/images/avatar/1.jpg" />
        </Icons>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
