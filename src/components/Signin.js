import { Box, Button, Grid, Link, Paper, TextField } from "@mui/material";
import React from "react";
import logo from "../imgs/group.svg";

const Signin = () => {
  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      style={{ height: "100vh" }}
    >
      <Grid
        item
        style={{
          width: "30%",
          height: "50%",
          maxWidth: "100%",
          maxHeight: "100%",
        }}
      >
        <Paper elevation={3} style={{ padding: "10%" }}>
          <img src={logo} alt="todoIcon" />
          <h3>Welcome back!</h3>
          <p>Log in to continue.</p>
          <TextField
            id="standard-basic"
            label="Email"
            type="email"
            variant="standard"
            fullWidth
          />
          <TextField
            id="standard-basic"
            label="Password"
            variant="standard"
            type="password"
            fullWidth
          />
          <Link>Don’t have an account? Sign up.</Link>
          <Box mb={3} />
          <Button variant="contained">Log In</Button>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Signin;
