import React from "react";
import LockIcon from "@mui/icons-material/Lock";
import { pink } from "@mui/material/colors";
import {
  Grid,
  Container,
  Paper,
  Typography,
  TextField,
  FormControl,
  Avatar,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Button
} from "@mui/material";



const Login = () => {
  const loginPaper = {
    margin: "0 auto",
    padding: 20,
    width: 500,

    textAlign: "center",
  };

  return (
    <Container sx={{ marginY: 5 }}>
      <Paper elevation={6} style={loginPaper}>
        <Grid align="center">
          <Avatar sx={{ bgcolor: pink[500] }}>
            <LockIcon fontSize="small" />
          </Avatar>
          <Typography variant="h6">Login</Typography>
        </Grid>
        <Grid>
          <TextField label="Username" variant="standard" fullWidth required />
          <TextField
            type="password"
            label="Password"
            variant="standard"
            fullWidth
            required
          />
          <FormGroup>
      <FormControlLabel 
        control={<Checkbox  
          sx={{
          color: pink[800],
          '&.Mui-checked': {
            color: pink[600],
          },
        }}
        />} label="Remember Me" />
      
    </FormGroup>
    <Button variant="contained" fullWidth > Sign In </Button>

        </Grid>
        

      </Paper>
    </Container>
  );
};

export default Login;
