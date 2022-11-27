import { Box, Button, Grid, Link, Paper, TextField } from "@mui/material"
import logo from "../imgs/group.svg";

const Signup = () => {
    
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
            <h3>Welcome!</h3>
            <p >Sign up to start using Simpledo today.</p>
            <TextField
              id="standard-basic"
              label="Full Name"
              variant="standard"
              fullWidth
            />
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
            <Link>
            Do have an account? Sign in.
            </Link>
            <Box mb={3} />
          <Button variant="contained" >Sign Up</Button>
          </Paper>
        </Grid>
      </Grid>
  )
}

export default Signup