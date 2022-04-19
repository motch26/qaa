import React from "react";
import { Container, Box, Grid, Paper, Typography } from "@mui/material";
function Start() {
  return (
    <Container>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Paper
            sx={{
              p: 2,
            }}
          >
            <Typography variant="h3" component="h3" mb={2}>
              Vision
            </Typography>
            <Typography variant="body1" component="p">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit nam
              esse architecto ullam repellendus ducimus ea ipsam, id quasi
              error! Cumque odio quam maiores, beatae porro quia ipsum
              voluptatibus adipisci?
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper
            sx={{
              p: 2,
            }}
          >
            <Typography variant="h3" component="h3" mb={2}>
              Mission
            </Typography>
            <Typography variant="body1" component="p">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit nam
              esse architecto ullam repellendus ducimus ea ipsam, id quasi
              error! Cumque odio quam maiores, beatae porro quia ipsum
              voluptatibus adipisci?
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper
            sx={{
              p: 2,
            }}
          >
            <Typography variant="h3" component="h3" mb={2}>
              Core Values
            </Typography>
            <Typography variant="body1" component="p">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit nam
              esse architecto ullam repellendus ducimus ea ipsam, id quasi
              error! Cumque odio quam maiores, beatae porro quia ipsum
              voluptatibus adipisci?
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper
            sx={{
              p: 2,
            }}
          >
            <Typography variant="h3" component="h3" mb={2}>
              Core Attributes
            </Typography>
            <Typography variant="body1" component="p">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit nam
              esse architecto ullam repellendus ducimus ea ipsam, id quasi
              error! Cumque odio quam maiores, beatae porro quia ipsum
              voluptatibus adipisci?
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h1" textAlign="center">
              Insert Video
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Start;
