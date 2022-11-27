import { Box, Button, Grid, Link, Paper, TextField } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signIn } from "../apiservices/signIn";
import logo from "../imgs/group.svg";
import { setToken } from "../utils";

const Signin = () => {
  let navigate = useNavigate();
  const [error, setError] = useState("");

  const handleSignIn = (e) => {
    e.preventDefault();
    setError("");
    signIn(e.target.email.value, e.target.password.value).then((resp) => {
      if (resp.status === 200) {
        setError("");
        setToken(resp.data.token);
        return navigate("/");
      } else setError(resp.data.message);
    });
  };
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
          width: "25%",
          height: "55%",
          maxWidth: "100%",
          maxHeight: "100%",
        }}
      >
        <Paper elevation={3} style={{ padding: "10%" }}>
          <img src={logo} alt="todoIcon" />
          <h3 style={{ marginBottom: "2%" }}>Welcome back!</h3>
          <p style={{ margin: "0", color: "#a1a4ad" }}>Log in to continue.</p>
          <form onSubmit={handleSignIn}>
            <TextField
              id="standard-basic"
              name="email"
              label="Email"
              type="email"
              variant="standard"
              fullWidth
              error={error ? true : false}
            />
            <TextField
              id="standard-basic"
              name="password"
              label="Password"
              variant="standard"
              type="password"
              fullWidth
              error={error ? true : false}
            />
            {error ? <h5 style={{ color: "red" }}>{error}</h5> : <></>}
            <Box mb={3} />
            <Link color="inherit" href="/signup">
              Don’t have an account? Sign up.
            </Link>
            <Box mb={5} />
            <Button variant="contained" type="submit" fullWidth>
              Log In
            </Button>
          </form>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Signin;
