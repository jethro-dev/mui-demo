import React from "react";
import {} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import {
  Home,
  Person,
  FormatListBulleted,
  CameraAlt,
  Videocam,
  Apps,
  Bookmark,
  Storefront,
  Settings,
  Logout,
  Book,
} from "@mui/icons-material";
import {
  StyledContainer as Container,
  Item,
  ItemIcon,
  ItemText,
} from "./Leftbar.styled";

const Leftbar = () => {
  const theme = useTheme();
  return (
    <Container>
      <Item>
        <ItemIcon>
          <Home />
        </ItemIcon>
        <ItemText>Home</ItemText>
      </Item>
      <Item>
        <ItemIcon>
          <Person />
        </ItemIcon>
        <ItemText>Friends</ItemText>
      </Item>
      <Item>
        <ItemIcon>
          <FormatListBulleted />
        </ItemIcon>
        <ItemText>Lists</ItemText>
      </Item>
      <Item>
        <ItemIcon>
          <CameraAlt />
        </ItemIcon>
        <ItemText>Camera</ItemText>
      </Item>
      <Item>
        <ItemIcon>
          <Videocam />
        </ItemIcon>
        <ItemText>Videos</ItemText>
      </Item>
      <Item>
        <ItemIcon>
          <Apps />
        </ItemIcon>
        <ItemText>Apps</ItemText>
      </Item>
      <Item>
        <ItemIcon>
          <Bookmark />
        </ItemIcon>
        <ItemText>Collections</ItemText>
      </Item>
      <Item>
        <ItemIcon>
          <Storefront />
        </ItemIcon>
        <ItemText>Market Place</ItemText>
      </Item>
      <Item>
        <ItemIcon>
          <Settings />
        </ItemIcon>
        <ItemText>Settings</ItemText>
      </Item>
      <Item>
        <ItemIcon>
          <Logout />
        </ItemIcon>
        <ItemText>Logout</ItemText>
      </Item>
    </Container>
  );
};

export default Leftbar;
