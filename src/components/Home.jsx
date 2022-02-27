import React from 'react'
import Cards from "./Cards";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import buss from "../data.json";



const Home = () => {
  return (
    
    <Container sx={{ marginY: 5 }}>
        <Grid container spacing={5} >
          { buss.map((bus,index) => (
            <Cards bus={bus}  key={index} /> 
            ))}
        </Grid>  
      </Container>
  )
}

export default Home