/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css"; // Optional: for interactive features like links
import resume from "../assets/Muhammad Hammad Aslam.pdf"; // Import your PDF file here
import { Button, Typography } from "@mui/material";

pdfjs.GlobalWorkerOptions.workerSrc = `/pdf.worker.mjs`;

const Resume = () => {
  const [numPages, setNumPages] = useState(null);
  const [error, setError] = useState(null); // For handling load errors

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const onLoadError = (error) => {
    console.error("Error while loading document:", error);
    setError(error); // Set error state
  };
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = resume;
    link.download = "Muhammad Hammad Aslam.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div
      style={{
        padding: "20px",
        overflow: "hidden",
        backgroundColor: '#121212'
      }}
    >
      <Typography sx={{ fontSize: "40pt" }}>My Resume</Typography>
      {error && <div>Error loading PDF: {error.message}</div>}{" "}
      {/* Display error if any */}
      <Button
        variant="contained"
        onClick={handleDownload}
        sx={{
          color: "#121212",
          textTransform: "capitalize",
          backgroundColor: "#e6e6e6",
          "&:hover": {
            backgroundColor: "#232323",
            color: "#e6e6e6",
          },
        }}
      >
        Download Resume
      </Button>
      {/* PDF Pages are rendered as individual "web-like" pages */}
      <Document
        file={resume}
        onLoadSuccess={onDocumentLoadSuccess}
        onLoadError={onLoadError}
      >
        {Array.from(new Array(numPages), (el, index) => (
          <div
            key={`page_${index + 1}`}
            style={{
              marginTop: "20px",
              padding: 'none',
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Page scale={1.5} pageNumber={index + 1} className={"page"} />
          </div>
        ))}
      </Document>
    </div>
  );
};

export default Resume;
