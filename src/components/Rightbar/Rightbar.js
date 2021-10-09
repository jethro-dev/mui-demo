import {
  Avatar,
  AvatarGroup,
  Typography,
  ImageList,
  ImageListItem,
  Divider,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import {} from "@mui/icons-material";
import {
  StyledContainer as Container,
  StyledLink as Link,
} from "./Rightbar.styled";
import { itemData } from "./Data";
const Rightbar = () => {
  const theme = useTheme();
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
      }}
    >
      <Typography
        gutterBottom
        sx={{
          textAlign: "right",
          fontSize: 16,
          fontWeight: 500,
          color: "#555",
        }}
      >
        Online Friends
      </Typography>
      <AvatarGroup max={4} sx={{ marginBottom: theme.spacing(4) }}>
        <Avatar
          alt="Remy Sharp"
          src="https://mui.com/static/images/avatar/1.jpg"
        />
        <Avatar
          alt="Travis Howard"
          src="https://mui.com/static/images/avatar/2.jpg"
        />
        <Avatar
          alt="Cindy Baker"
          src="https://mui.com/static/images/avatar/3.jpg"
        />
        <Avatar
          alt="Agnes Walker"
          src="https://mui.com/static/images/avatar/4.jpg"
        />
        <Avatar
          alt="Trevor Henderson"
          src="https://mui.com/static/images/avatar/5.jpg"
        />
      </AvatarGroup>

      <Typography
        gutterBottom
        sx={{
          textAlign: "right",
          fontSize: 16,
          fontWeight: 500,
          color: "#555",
        }}
      >
        Gallery
      </Typography>
      <ImageList
        cols={2}
        rowHeight={164}
        sx={{ marginBottom: theme.spacing(4) }}
      >
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
              srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
      <Typography
        gutterBottom
        sx={{
          textAlign: "right",
          fontSize: 16,
          fontWeight: 500,
          color: "#555",
        }}
      >
        Categories
      </Typography>
      <div>
        <Link href="#" variant="body2" sx={{ marginRight: theme.spacing(1) }}>
          Sports
        </Link>
        <Link
          href="#"
          variant="body2"
          sx={{
            marginRight: theme.spacing(1),
          }}
        >
          Food
        </Link>
      </div>
      <div>
        <Link href="#" variant="body2" sx={{ marginRight: theme.spacing(1) }}>
          Movies
        </Link>
        <Link href="#" variant="body2" sx={{ marginRight: theme.spacing(1) }}>
          Science
        </Link>
      </div>
    </Container>
  );
};

export default Rightbar;
