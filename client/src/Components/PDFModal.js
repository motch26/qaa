import React, { useState } from "react";
import { Document, Page } from "react-pdf";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import {
  Modal,
  ButtonGroup,
  Box,
  Typography,
  Button,
  Rating,
} from "@mui/material";
import { blue } from "@mui/material/colors";

function PDFModal({ isModalOpen, handleModalClose }) {
  const [numPages, setNumPages] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);
  const [rating, setRating] = useState(0);
  const pageNavigate = (offset) => setPageNumber((prev) => (prev += offset));
  const pdfLoaded = ({ numPages }) => setNumPages(numPages);

  const handleRating = (e, value) => setRating(value);
  return (
    <Modal open={isModalOpen} onClose={handleModalClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "auto",
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 1,
        }}
      >
        <Box
          sx={{
            p: 2,
            bgcolor: blue[300],
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="h6">Area 1.1</Typography>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography variant="body2" pr={1}>
              Rate this document:
            </Typography>
            <Rating
              name="simple-controlled"
              value={rating}
              onChange={handleRating}
              precision={0.5}
            />
            <Typography variant="h6" pl={1}>
              ({rating})
            </Typography>
          </Box>
        </Box>
        <Document file="pdf/sample.pdf" onLoadSuccess={pdfLoaded}>
          <Page pageNumber={pageNumber} />
        </Document>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="body1">
            Page {pageNumber} of {numPages}
          </Typography>
          <ButtonGroup variant="contained">
            {pageNumber > 1 ? (
              <Button
                startIcon={<ArrowLeftIcon />}
                onClick={() => pageNavigate(-1)}
              >
                Prev
              </Button>
            ) : null}
            {pageNumber < numPages ? (
              <Button
                endIcon={<ArrowRightIcon />}
                onClick={() => pageNavigate(1)}
              >
                Next
              </Button>
            ) : null}
          </ButtonGroup>
        </Box>
      </Box>
    </Modal>
  );
}

export default PDFModal;
