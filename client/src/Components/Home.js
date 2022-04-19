import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import MyAppBar from "./MyAppBar";
import { Context } from "./../Context";
import Start from "./Start";
import AreasFolder from "./AreasFolder";
import SideList from "./SideList";
import SideRatings from "./SideRatings";
import { Container, Box, Grid, Paper, Typography } from "@mui/material";

function Home() {
  const { program, programData } = useContext(Context);
  const { userID } = useParams();
  const [isSubShown, setSubShown] = useState(false);
  const [isRatingShown, setRatingShown] = useState(false);

  const folders = [
    {
      area: "Area 1",
      description: "Vision, Mission, Goals and Objectives",
    },
    {
      area: "Area 2",
      description: "Faculty",
    },
    {
      area: "Area 3",
      description: "Curriculum and Instruction",
    },
    {
      area: "Area 4",
      description: "Support to Students",
    },
    {
      area: "Area 5",
      description: "Research",
    },
    {
      area: "Area 6",
      description: "Extension and Community Involvement",
    },
    {
      area: "Area 7",
      description: "Library",
    },
    {
      area: "Area 8",
      description: "Physical Plant and Facilities",
    },
    {
      area: "Area 9",
      description: "Laboratories",
    },
    {
      area: "Area 10",
      description: "Administration",
    },
  ];

  const openList = () => setSubShown(true);
  const closeList = () => {
    setSubShown(false);
    setRatingShown(false);
  };
  const openRating = () => setRatingShown(true);
  const closeRating = () => {
    setSubShown(false);
    setRatingShown(false);
  };

  return (
    <Box>
      <MyAppBar openList={openList} openRating={openRating} />
      {program ? <AreasFolder programData={programData} /> : <Start />}
      {/* <Grid container columnSpacing={0}>
        <Grid item xs={isSubShown || isRatingShown ? 8 : 12}>
          <Container>
            <Grid
              container
              rowSpacing={4}
              columnSpacing={4}
              sx={{ padding: 3 }}
            >
              {folders.map((folder, index) => (
                <AreasFolder
                  folder={folder}
                  key={index}
                  setSubShown={setSubShown}
                />
              ))}
            </Grid>
          </Container>
        </Grid>
        {isSubShown ? <SideList closeList={closeList} /> : null}
        {isRatingShown ? <SideRatings closeRating={closeRating} /> : null}
      </Grid> */}
    </Box>
  );
}

export default Home;
