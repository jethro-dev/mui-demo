import {
  CardActionArea,
  CardActions,
  CardContent,
  Typography,
  Button,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { ThumbUp, ModeComment, Share } from "@mui/icons-material";
import {
  StyledCard as Card,
  StyledCardMedia as CardMedia,
} from "./Post.styled";

const Post = ({ img, title, description }) => {
  const theme = useTheme();
  return (
    <Card>
      <CardActionArea>
        <CardMedia component="img" height="140" image={img} title="My Post" />
        <CardContent>
          <Typography gutterBottom variant="h5">
            {title}
          </Typography>
          <Typography variant="body2">{description}</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          size="small"
          color="primary"
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <ThumbUp
            sx={{ marginRight: theme.spacing(0.5), fontSize: "medium" }}
          />
          Like
        </Button>
        <Button
          size="small"
          color="primary"
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <ModeComment
            sx={{ marginRight: theme.spacing(0.5), fontSize: "medium" }}
          />
          Comment
        </Button>
        <Button
          size="small"
          color="primary"
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Share sx={{ marginRight: theme.spacing(0.5), fontSize: "medium" }} />
          Share
        </Button>
      </CardActions>
    </Card>
  );
};

export default Post;
