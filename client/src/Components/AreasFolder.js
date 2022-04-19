import React from "react";
import {
  Container,
  Card,
  CardMedia,
  CardActionArea,
  CardContent,
  Typography,
  Grid,
  ButtonGroup,
  Button,
} from "@mui/material";

import { areaFolder } from "../Theme/Home";

function AreasFolder({ programData, setSubShown }) {
  return (
    <Container>
      <Grid container spacing={2}>
        {programData.map((area, index) => {
          const areaNumber = Object.keys(area)[0];
          return (
            <Grid item md={4} xs={6} onClick={setSubShown} key={index}>
              <Card sx={areaFolder}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="120"
                    image="img/folder.jpg"
                    alt="folder"
                  />
                  <CardContent>
                    <Typography variant="h5" component="div">
                      {areaNumber}
                    </Typography>
                    {/* <ButtonGroup variant="outlined" size="small">
                      {area.map((param) => {
                        const parameter = Object.keys(param)[0];
                        return <Button>{parameter}</Button>;
                      })}
                    </ButtonGroup> */}
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}

export default AreasFolder;
