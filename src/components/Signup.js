import { Box, Button, Grid, Link, Paper, TextField } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signUp } from "../apiservices/signUp";
import logo from "../imgs/group.svg";

const Signup = () => {
  let navigate = useNavigate();
  const [error, setError] = useState("");
  const handleSignUp = (e) => {
    e.preventDefault();
    signUp({
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value,
    }).then((resp) => {
      if (resp.status === 200) {
        setError("");
        return navigate("/signin");
      } else {
        setError(resp.data.message);
      }
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
          <h3 style={{ marginBottom: "2%" }}>Welcome!</h3>
          <p style={{ margin: "0", color: "#a1a4ad" }}>
            Sign up to start using Simpledo today.
          </p>
          <form onSubmit={handleSignUp}>
            <TextField
              id="standard-basic"
              label="Full Name"
              variant="standard"
              name="name"
              fullWidth
              error={error ? true : false}
            />
            <TextField
              id="standard-basic"
              label="Email"
              type="email"
              name="email"
              variant="standard"
              fullWidth
              error={error ? true : false}
            />
            <TextField
              id="standard-basic"
              label="Password"
              variant="standard"
              type="password"
              name="password"
              fullWidth
              error={error ? true : false}
            />
            {error ? <h5 style={{ color: "red" }}>{error}</h5> : <></>}
            <Box mb={2} />
            <Link color="inherit" href="/signin">
              Do have an account? Sign in.
            </Link>
            <Box mb={5} />
            <Button variant="contained" fullWidth type="submit">
              Sign Up
            </Button>
          </form>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Signup;
