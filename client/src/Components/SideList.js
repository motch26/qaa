import React, { useState } from "react";
import PDFModal from "./PDFModal";
import {
  Grid,
  Box,
  Typography,
  IconButton,
  List,
  ListItem,
  Button,
  Divider,
  Container,
  Rating,
} from "@mui/material";
import { orange } from "@mui/material/colors";
import { Close as CloseIcon } from "@mui/icons-material";

function SideList({ closeList }) {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleModalOpen = () => setModalOpen(true);
  const handleModalClose = () => setModalOpen(false);

  return (
    <Grid item xs={4}>
      <Container>
        <Box>
          <Box
            bgcolor={orange[500]}
            sx={{
              width: 1,
              p: 2,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography variant="h6">Area 1</Typography>
            <IconButton onClick={closeList}>
              <CloseIcon />
            </IconButton>
          </Box>
          <Box boxShadow={2}>
            <List>
              <ListItem
                sx={{
                  bgcolor: "#fff",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Typography variant="body1" component="h6" mr={1}>
                    1.1
                  </Typography>
                  <Rating precision={0.5} value={4.5} readOnly />
                </Box>
                <Button
                  variant="outlined"
                  color="warning"
                  onClick={handleModalOpen}
                >
                  View
                </Button>
              </ListItem>
              <Divider />
              <ListItem
                sx={{
                  bgcolor: "#fff",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Typography variant="body1" component="h6">
                  1.2
                </Typography>
                <Button variant="outlined" color="warning">
                  View
                </Button>
              </ListItem>
            </List>
          </Box>
          <PDFModal
            isModalOpen={isModalOpen}
            handleModalClose={handleModalClose}
          />
        </Box>
      </Container>
    </Grid>
  );
}

export default SideList;
