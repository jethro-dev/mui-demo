import {} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import {} from "@mui/icons-material";
import { StyledContainer as Container } from "./Feed.styled";
import Post from "../Post/Post";
import data from "./Data";

const Feed = () => {
  const theme = useTheme();

  return (
    <Container>
      {data.map((item, index) => {
        return (
          <Post
            key={index}
            img={item.img}
            title={item.title}
            description={item.description}
          ></Post>
        );
      })}
    </Container>
  );
};

export default Feed;
