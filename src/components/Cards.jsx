import React from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Rating from "@mui/material/Rating";

import fall from "../media/fall.jpg";


const Cards = ({ bus }) => {

  return (
    <Grid item xs={4}>
      <Paper elevation={4}>
        <img src={fall} alt="fall" className="img" />
        <Box paddingX={1} >
          <Typography variant="h6" component="h2">
            {bus.name}
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <AccountCircleIcon fontSize="small" />
            <Typography variant="body2" component="p" marginLeft={0.5}>
            {bus.author}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", marginTop:"1rem"}}>
            <Rating name="read-only" value={4} readOnly size="small" />
            <Typography variant="caption"  marginLeft={0.5}>
            {bus.rating}
            </Typography>
          </Box>
          <Typography variant="h6" component="h3" >
          {bus.footer}
          </Typography>
        </Box>
      </Paper>
    </Grid>
  );
};

export default Cards;
