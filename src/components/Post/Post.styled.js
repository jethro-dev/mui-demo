import { styled } from "@mui/material/styles";
import {
  Card,
  CardCardActionArea,
  CardActions,
  CardMedia,
  CardContent,
  Typography,
  Button,
} from "@mui/material";

export const StyledCard = styled(Card)(({ theme }) => ({
  marginBottom: theme.spacing(5),
}));
export const StyledCardMedia = styled(CardMedia)(({ theme }) => ({
  height: 250,
  [theme.breakpoints.down("sm")]: {
    height: 150,
  },
}));
