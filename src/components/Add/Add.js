import React, { useState } from "react";
import {
  Tooltip,
  Fab,
  Modal,
  Container,
  TextField,
  MenuItem,
  Radio,
  FormControlLabel,
  RadioGroup,
  FormLabel,
  Button,
  Snackbar,
  Alert,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Add as AddIcon } from "@mui/icons-material";
import { Form, FormItem } from "./Add.styled";
import data from "../Feed/Data";

const Add = () => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenAlert(false);
  };

  const handleCreate = () => {
    setOpenAlert(true);
    setOpen(false);
    console.log();
  };

  return (
    <>
      <Tooltip title="Add" aria-label="add" onClick={() => setOpen(true)}>
        <Fab color="primary" sx={{ position: "fixed", bottom: 20, right: 20 }}>
          <AddIcon />
        </Fab>
      </Tooltip>
      <Modal open={open} onClose={() => setOpen(false)}>
        <Container
          sx={{
            width: 500,
            height: 550,
            backgroundColor: "white",
            position: "absolute",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            margin: "auto",
            [theme.breakpoints.down("sm")]: {
              width: "100vw",
              height: "100vh",
            },
          }}
        >
          <Form autoComplete="off">
            <FormItem>
              <TextField
                id="standard-basic"
                label="Title"
                size="small"
                variant="standard"
                sx={{ width: "100%" }}
              />
            </FormItem>
            <FormItem>
              <TextField
                label="Description"
                size="small"
                variant="outlined"
                multiline
                rows={4}
                sx={{ width: "100%" }}
              />
            </FormItem>
            <FormItem>
              <TextField
                select
                label="Visibility"
                variant="standard"
                value="Public"
              >
                <MenuItem value="Public">Public</MenuItem>
                <MenuItem value="Private">Private</MenuItem>
                <MenuItem value="Unlisted">Unlisted</MenuItem>
              </TextField>
            </FormItem>
            <FormItem>
              <FormLabel component="legend">Who can comment?</FormLabel>
              <RadioGroup>
                <FormControlLabel
                  value="Everybody"
                  control={<Radio size="small" />}
                  label="Everybody"
                />
                <FormControlLabel
                  value="My Friends"
                  control={<Radio size="small" />}
                  label="My Friends"
                />
                <FormControlLabel
                  value="Nobody"
                  control={<Radio size="small" />}
                  label="Nobody"
                />
                <FormControlLabel
                  disabled
                  value="Custom"
                  control={<Radio size="small" />}
                  label="Custom (Premium only)"
                />
              </RadioGroup>
            </FormItem>
            <FormItem>
              <Button
                variant="outlined"
                color="secondary"
                onClick={() => setOpen(false)}
                sx={{ marginRight: theme.spacing(2) }}
              >
                Cancel
              </Button>
              <Button variant="outlined" color="primary" onClick={handleCreate}>
                Create
              </Button>
            </FormItem>
          </Form>
        </Container>
      </Modal>
      <Snackbar
        open={openAlert}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        sx={{ width: "50%" }}
      >
        <Alert
          onClose={handleClose}
          severity="success"
          variant="filled"
          sx={{ width: "100%" }}
        >
          This is a success message
        </Alert>
      </Snackbar>
    </>
  );
};

export default Add;
