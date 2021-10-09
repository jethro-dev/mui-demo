import { createTheme } from "@mui/material/styles";
import { indigo } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: indigo,
    secondary: {
      main: "#e91e63",
    },
  },
});

export default theme;
