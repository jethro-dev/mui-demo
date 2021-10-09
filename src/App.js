import React from "react";
import { Grid } from "@mui/material";
import { Navbar, Leftbar, Feed, Rightbar, Add } from "./components";
import { useTheme } from "@mui/material/styles";

function App() {
  const theme = useTheme();
  return (
    <>
      <Navbar />
      <Grid container>
        <Grid item xs={2} sm={2}>
          <Leftbar />
        </Grid>
        <Grid item xs={10} sm={7}>
          <Feed />
        </Grid>
        <Grid
          item
          sm={3}
          sx={{ [theme.breakpoints.down("sm")]: { display: "none" } }}
        >
          <Rightbar />
        </Grid>
      </Grid>
      <Add />
    </>
  );
}

export default App;
